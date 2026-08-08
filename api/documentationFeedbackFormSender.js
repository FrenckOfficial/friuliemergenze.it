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
    const { name, email, userRole, format, topics, priority, suggestions, timestamp } = req.body;

    if (!name || !email || !userRole || !priority) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const validRoles = ["community", "institutional", "staff", "developer", "curious"];
    if (!validRoles.includes(userRole)) {
      return res.status(400).json({ error: "Invalid user role value" });
    }

    const validPriority = ["ease", "complete", "visual", "practice"];
    if (!validPriority.includes(priority)) {
      return res.status(400).json({ error: "Invalid priority value" });
    }

    if (!process.env.BREVO_API_KEY) {
      console.error("❌ BREVO_API_KEY not configured");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedUserRole = sanitizeHtml(userRole);
    const sanitizedPriority = sanitizeHtml(priority);
    const sanitizedSuggestions = sanitizeHtml(suggestions);
    
    const sanitizedFormat = Array.isArray(format) ? format.map(f => sanitizeHtml(f)) : [];
    const sanitizedTopics = Array.isArray(topics) ? topics.map(t => sanitizeHtml(t)) : [];

    const htmlContent = generateSurveyHtml({
      name: sanitizedName,
      email: sanitizedEmail,
      userRole: sanitizedUserRole,
      format: sanitizedFormat,
      topics: sanitizedTopics,
      priority: sanitizedPriority,
      suggestions: sanitizedSuggestions,
      timestamp,
    });

    const emailPayload = {
        sender: {
            name: "Sistemi Friuli Emergenze",
            email: "autosystem@friuliemergenze.it",
        },
        to: [
            {
            name: "GruppoMembriStaff@gruppi.friuliemergenze.it",
            email: "GruppoMembriStaff@gruppi.friuliemergenze.it",
            },
        ],
        subject: `[SONDAGGIO DOCUMENTAZIONE] Risposta ricevuta da ${sanitizedName}`,
        htmlContent,
        replyTo: { email: sanitizedEmail, name: sanitizedName },
    };

    console.log("📧 PAYLOAD COMPLETO:", JSON.stringify(emailPayload, null, 2));

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "api-key": process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
            sender: {
            name: "Sistemi Friuli Emergenze",
            email: "autosystem@friuliemergenze.it",
            },
            to: [
            {
                name: "GruppoMembriStaff@gruppi.friuliemergenze.it",
                email: "GruppoMembriStaff@gruppi.friuliemergenze.it",
            },
            ],
            subject: `[SONDAGGIO DOCUMENTAZIONE] Risposta ricevuta da ${sanitizedName}`,
            htmlContent,
            replyTo: { email: sanitizedEmail, name: sanitizedName },
        }),
    });

    console.log("📧 Brevo Response Status:", response.status);
    console.log("📧 Brevo Response OK:", response.ok);

    const data = await response.json();
    console.log("📧 Brevo Response Body:", JSON.stringify(data, null, 2));

    if (!response.ok) {
    console.error("❌ Brevo API error:", data);
    return res.status(response.status).json({ error: "Failed to send survey response" });
    }

    console.log("✅ Email sent successfully, messageId:", data.messageId);
    return res.status(200).json({ success: true, messageId: data.messageId });
  } catch (error) {
    console.error("❌ Server error:", error.message);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

function sanitizeHtml(str) {
  if (typeof str !== "string") return "";

  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .substring(0, 5000);
}

const userRoleLabels = {
  community: "Utente community (condivido foto/video)",
  institutional: "Collaboratore istituzionale (ente/VV.F./Carabinieri)",
  staff: "Staff / moderatore",
  developer: "Sviluppatore / tecnico",
  curious: "Curiosando / interessato al progetto"
};

const formatLabels = {
  guides: "Guide scritte dettagliate",
  faq: "FAQ (Domande Frequenti)",
  video: "Video tutorial",
  interactive: "Tutorial interattivi / step-by-step",
  cheatsheet: "Cheat sheet / quick reference",
  examples: "Esempi pratici / case studies"
};

const topicLabels = {
  signup: "Come registrarsi e creare un profilo",
  photo: "Caricamento e gestione foto",
  vehicles: "Catalogo veicoli e ricerca",
  collaboration: "Collaborazione con istituzioni",
  moderation: "Revisione e moderazione contenuti",
  api: "API e integrazione tecnica",
  privacy: "Privacy e GDPR",
  troubleshooting: "Troubleshooting / Problemi comuni"
};

const priorityLabels = {
  ease: "Facilità d'uso (guide semplici e veloci)",
  complete: "Completezza (coprire ogni aspetto in dettaglio)",
  visual: "Contenuti visivi (immagini, video, diagrammi)",
  practice: "Pratica (esempi reali e esercizi)"
};

function generateSurveyHtml({
  name,
  email,
  userRole,
  format,
  topics,
  priority,
  suggestions,
  timestamp,
}) {
  const formattedDate = timestamp
    ? new Date(timestamp).toLocaleString("it-IT")
    : new Date().toLocaleString("it-IT");

  return `
<!DOCTYPE html>
<html lang="it">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KTJBJDMJ');</script>
  <!-- End Google Tag Manager -->
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
  background: linear-gradient(135deg, #1e90ff 0%, #1873cc 100%);
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
  border-left: 4px solid #1e90ff;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.tag {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 13px;
  background: #e3f2fd;
  color: #1e90ff;
  border: 1px solid #1e90ff;
}

.priority-badge {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  background: #fff3e0;
  color: #e65100;
  margin-top: 8px;
}

.comment-section {
  background: #f0f0f0;
  padding: 12px 15px;
  border-radius: 8px;
  margin-top: 8px;
  color: #666;
  border-left: 4px solid #999;
  line-height: 1.6;
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
  background: #e3f2fd;
  border-left: 4px solid #1e90ff;
  padding: 12px 15px;
  border-radius: 4px;
  margin-top: 15px;
  font-size: 13px;
  color: #1565c0;
}

.empty-state {
  font-style: italic;
  color: #999;
  padding: 12px 15px;
  background: #f9f9f9;
  border-radius: 6px;
}
</style>
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTJBJDMJ"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
<div class="container">
  <div class="header">
    <h1>📚 Nuovo Sondaggio sulla Documentazione</h1>
    <p>Risposta ricevuta dal nostro team di ricerca</p>
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
      <div class="section-title">Profilo Utente</div>

      <div class="field">
        <div class="label">Ruolo / Utilizzo principale</div>
        <div class="value">${userRoleLabels[userRole] || userRole}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Preferenze formato</div>

      <div class="field">
        <div class="label">Formati preferiti</div>
        ${format && format.length > 0 
          ? `<div class="tags">${format.map(f => `<span class="tag">${formatLabels[f] || f}</span>`).join('')}</div>`
          : `<div class="empty-state">Nessun formato selezionato</div>`
        }
      </div>
    </div>

    <div class="section">
      <div class="section-title">Argomenti di interesse</div>

      <div class="field">
        <div class="label">Argomenti da approfondire</div>
        ${topics && topics.length > 0 
          ? `<div class="tags">${topics.map(t => `<span class="tag">${topicLabels[t] || t}</span>`).join('')}</div>`
          : `<div class="empty-state">Nessun argomento selezionato</div>`
        }
      </div>
    </div>

    <div class="section">
      <div class="section-title">Priorità</div>

      <div class="field">
        <div class="label">Aspetto più importante</div>
        <div class="priority-badge">${priorityLabels[priority] || priority}</div>
      </div>
    </div>

    ${
      suggestions
        ? `
    <div class="section">
      <div class="section-title">Suggerimenti specifici</div>
      
      <div class="comment-section">
        ${suggestions.replace(/\n/g, "<br>")}
      </div>
    </div>
    `
        : ""
    }

    <div class="section">
      <div class="meta-info">
        <strong>Data e Ora:</strong> ${formattedDate}
      </div>
    </div>

    <div class="cta-note">
      ℹ️ Questo sondaggio è prezioso per sviluppare una documentazione di qualità. Grazie per il tuo contributo!
    </div>
  </div>

  <div class="footer">
    Sondaggio inviato dal sito Friuli Emergenze - Sistema automatico
  </div>
</div>
</body>
</html>
`;
}