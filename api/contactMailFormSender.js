export default async function handler(req, res) {
  console.log(req.method);
  console.log(req.body);
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
    const { name, email, subject, message } = req.body;

    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedSubject = sanitizeHtml(subject);
    const sanitizedMessage = sanitizeHtml(message);

    const htmlContent = generateSurveyHtml({
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage
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
        to: [{ email: email }],
        subject: '[FORM DI CONTATTO FRIULIEMERGENZE.IT]:' + '' + subject,
        htmlContent,
        replyTo: {
          email: email,
          name: name
        }
      })
    });

    const data = await response.json();

    console.log("📨 Inviata:", email);

    return res.status(200).json({ success: true, data });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false });
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

function generateSurveyHtml({ name, email, subject, message }) {
  return `
<!DOCTYPE html>
<html lang="it">
<head>
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
    <h1>Messaggio dal sito</h1>
  </div>

  <div class="content">
    <div class="field">
      <div class="label">Nome</div>
      <div class="value">${name}</div>
    </div>

    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${email}">${email}</a></div>
    </div>

    <div class="field">
      <div class="label">Oggetto</div>
      <div class="value">${subject}</div>
    </div>

    <div class="field">
      <div class="label">Suggerimenti</div>
      <div class="value">${message.replace(/\n/g, "<br>")}</div>
    </div>
  </div>

  <div class="footer">
    Form di contatto di Friuli Emergenze
  </div>
</div>
</body>
</html>
`;
}