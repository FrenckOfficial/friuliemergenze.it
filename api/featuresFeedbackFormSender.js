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
    const { name, email, platform, features, priority, comment, timestamp } = req.body;

    if (!name || !email || !platform || !features || !priority) {
      return res.status(400).json({ 
        error: "Missing required fields" 
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const validPlatforms = ["friuliemergenze", "myfrem", "entrambi"];
    if (!validPlatforms.includes(platform)) {
      return res.status(400).json({ error: "Invalid platform selected" });
    }

    const validPriorities = ["molto_alta", "alta", "media", "bassa"];
    if (!validPriorities.includes(priority)) {
      return res.status(400).json({ error: "Invalid priority level" });
    }

    if (features.trim().length < 10) {
      return res.status(400).json({ error: "Features description too short" });
    }

    if (!process.env.BREVO_API_KEY) {
      console.error("❌ BREVO_API_KEY not configured");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedFeatures = sanitizeHtml(features);
    const sanitizedComment = sanitizeHtml(comment);
    const sanitizedPlatform = sanitizeHtml(platform);

    const htmlContent = generateFeedbackHtml({
      name: sanitizedName,
      email: sanitizedEmail,
      platform: sanitizedPlatform,
      features: sanitizedFeatures,
      priority,
      comment: sanitizedComment,
      timestamp
    });

    const platformDisplay = getPlatformDisplay(sanitizedPlatform);

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
        subject: `[FEEDBACK FUNZIONALITÀ] Nuovo suggerimento da ${sanitizedName} - ${platformDisplay}`,
        htmlContent,
        replyTo: { email: sanitizedEmail, name: sanitizedName }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Brevo API error:", errorData);
      return res.status(response.status).json({ 
        error: "Failed to send feedback" 
      });
    }

    const data = await response.json();
    console.log("✅ Feedback ricevuto da:", sanitizedEmail, "- Piattaforma:", sanitizedPlatform);

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

function getPlatformDisplay(platform) {
  const platformMap = {
    'friuliemergenze': 'FriuliEmergenze.it',
    'myfrem': 'Piattaforma MyFrEM',
    'entrambi': 'Entrambe le piattaforme'
  };
  return platformMap[platform] || platform;
}

function getPriorityDisplay(priority) {
  const priorityMap = {
    'molto_alta': '🔴 Molto alta - Essenziale',
    'alta': '🟠 Alta - Importante',
    'media': '🟡 Media - Sarebbe utile',
    'bassa': '🟢 Bassa - Nice to have'
  };
  return priorityMap[priority] || priority;
}

function generateFeedbackHtml({ name, email, platform, features, priority, comment, timestamp }) {
  const platformDisplay = getPlatformDisplay(platform);
  const priorityDisplay = getPriorityDisplay(priority);
  const formattedDate = timestamp ? new Date(timestamp).toLocaleString('it-IT') : new Date().toLocaleString('it-IT');

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
  background: linear-gradient(135deg, #d90429 0%, #a10320 100%);
  color: white;
  text-align: center;
  padding: 25px;
}

.header h1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
}

.header p {
  font-size: 14px;
  opacity: 0.95;
}

.content {
  padding: 25px;
}

.section {
  margin-bottom: 25px;
}

.section-title {
  font-size: 13px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
}

.field {
  margin-bottom: 15px;
}

.label {
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
  font-size: 14px;
}

.value {
  background: #f7f7f7;
  padding: 12px 15px;
  border-radius: 8px;
  color: #555;
  word-break: break-word;
  line-height: 1.6;
  border-left: 4px solid #d90429;
}

.features-box {
  background: #fef5f5;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #d90429;
  margin-top: 8px;
}

.priority-badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 13px;
  background: #fff3e0;
  color: #e65100;
  margin-top: 8px;
}

.comment-section {
  background: #f0f0f0;
  padding: 12px 15px;
  border-radius: 8px;
  margin-top: 8px;
  font-style: italic;
  color: #666;
  border-left: 4px solid #999;
}

.meta-info {
  background: #f5f5f5;
  padding: 12px 15px;
  border-radius: 8px;
  font-size: 13px;
  color: #999;
}

.footer {
  text-align: center;
  color: #999;
  padding: 20px;
  border-top: 1px solid #eee;
  font-size: 12px;
}

.cta-note {
  background: #e8f5e9;
  border-left: 4px solid #4caf50;
  padding: 12px 15px;
  border-radius: 4px;
  margin-top: 15px;
  font-size: 13px;
  color: #2e7d32;
}
</style>
</head>

<body>
<div class="container">
  <div class="header">
    <h1>🚀 Nuovo Feedback Funzionalità</h1>
    <p>Suggerimento ricevuto dal nostro team di feedback</p>
  </div>

  <div class="content">
    <div class="section">
      <div class="section-title">Informazioni Utente</div>
      
      <div class="field">
        <div class="label">Nome</div>
        <div class="value">${name}</div>
      </div>

      <div class="field">
        <div class="label">Email</div>
        <div class="value">${email}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Dettagli Feedback</div>
      
      <div class="field">
        <div class="label">Piattaforma</div>
        <div class="value">${platformDisplay}</div>
      </div>

      <div class="field">
        <div class="label">Livello Priorità</div>
        <div>
          <div class="priority-badge">${priorityDisplay}</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Funzionalità / Servizi Richiesti</div>
      
      <div class="features-box">
        ${features.replace(/\n/g, "<br>")}
      </div>
    </div>

    ${comment ? `
    <div class="section">
      <div class="section-title">Note Aggiuntive</div>
      <div class="comment-section">
        ${comment.replace(/\n/g, "<br>")}
      </div>
    </div>
    ` : ''}

    <div class="section">
      <div class="meta-info">
        <strong>Data e Ora:</strong> ${formattedDate}
      </div>
    </div>

    <div class="cta-note">
      ℹ️ Questo feedback è importante per il nostro sviluppo. Grazie per aver condiviso le tue idee!
    </div>
  </div>

  <div class="footer">
    Feedback inviato dal sito Friuli Emergenze - Sistema automatico
  </div>
</div>
</body>
</html>
`;
}