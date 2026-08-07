export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, grade, miglioramenti } = req.body;

    if (!name || !email || grade === undefined || !miglioramenti) {
      return res.status(400).json({ 
        error: "Missing required fields" 
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const gradeNum = parseInt(grade);
    if (isNaN(gradeNum) || gradeNum < 1 || gradeNum > 10) {
      return res.status(400).json({ error: "Grade must be between 1 and 10" });
    }

    if (!process.env.BREVO_API_KEY) {
      console.error("❌ BREVO_API_KEY not configured");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedMiglioramenti = sanitizeHtml(miglioramenti);

    const htmlContent = generateSurveyHtml({
      name: sanitizedName,
      email: sanitizedEmail,
      grade: gradeNum,
      miglioramenti: sanitizedMiglioramenti
    });

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: "Sistemi Friuli Emergenze",
          email: "autosystem@friuliemergenze.it"
        },
        to: [{ email: "GruppoMembriStaff@gruppi.friuliemergenze.it" }],
        subject: `Nuovo sondaggio compilato da ${sanitizedName}`,
        htmlContent,
        replyTo: { email: sanitizedEmail, name: sanitizedName }
      })
    });

    // ✅ Gestione errori API
    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Brevo API error:", errorData);
      return res.status(response.status).json({ 
        error: "Failed to send survey" 
      });
    }

    const data = await response.json();
    console.log("✅ Sondaggio ricevuto da:", sanitizedEmail);

    return res.status(200).json({ success: true, messageId: data.messageId });

  } catch (error) {
    console.error("❌ Server error:", error.message);
    return res.status(500).json({ 
      success: false,
      error: "Internal server error"
    });
  }
}

function sanitizeHtml(str) {
  if (typeof str !== 'string') return '';
  
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .substring(0, 5000);
}

function generateSurveyHtml({ name, email, grade, miglioramenti }) {
  return `
<!DOCTYPE html>
<html lang="it">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-2LRKW2EXEL"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-2LRKW2EXEL');
  </script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600&display=swap" rel="stylesheet">

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Lexend', Arial, sans-serif;
  background: #f5f5f5;
  padding: 20px;
}

.container {
  max-width: 700px;
  margin: auto;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.header {
  background: #d90429;
  color: white;
  text-align: center;
  padding: 25px;
}

.header h1 {
  font-size: 24px;
  font-weight: 600;
}

.content {
  padding: 25px;
}

.field {
  margin-bottom: 20px;
}

.label {
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 14px;
}

.value {
  background: #f7f7f7;
  padding: 12px 15px;
  border-radius: 8px;
  color: #555;
  word-break: break-word;
  line-height: 1.5;
}

.footer {
  text-align: center;
  color: #999;
  padding: 20px;
  border-top: 1px solid #eee;
  font-size: 13px;
}
</style>
</head>

<body>
<div class="container">
  <div class="header">
    <h1>🚨 Nuovo sondaggio</h1>
  </div>

  <div class="content">
    <div class="field">
      <div class="label">Nome</div>
      <div class="value">${name}</div>
    </div>

    <div class="field">
      <div class="label">Email</div>
      <div class="value">${email}</div>
    </div>

    <div class="field">
      <div class="label">Valutazione del sito</div>
      <div class="value">${grade}/10</div>
    </div>

    <div class="field">
      <div class="label">Suggerimenti</div>
      <div class="value">${miglioramenti.replace(/\n/g, "<br>")}</div>
    </div>
  </div>

  <div class="footer">
    Sondaggio inviato dal sito Friuli Emergenze
  </div>
</div>
</body>
</html>
`;
}