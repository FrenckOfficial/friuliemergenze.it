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
    const { name, email, department, subject, message } = req.body;

    // Validazione base
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedDepartment = sanitizeHtml(department || "general");
    const sanitizedSubject = sanitizeHtml(subject);
    const sanitizedMessage = sanitizeHtml(message);

    // Mapping dipartimenti -> indirizzi email
    const departmentMapping = {
      technical: {
        email: "technical@friuliemergenze.it",
        name: "Supporto Tecnico",
        groupEmail: "technical@friuliemergenze.it"
      },
      myfrem: {
        email: "support.myfrem@friuliemergenze.it",
        name: "Piattaforma MyFrEM",
        groupEmail: "support.myfrem@friuliemergenze.it"
      },
      content: {
        email: "redazione@friuliemergenze.it",
        name: "Redazione Foto",
        groupEmail: "redazione@friuliemergenze.it"
      },
      partnership: {
        email: "info@friuliemergenze.it",
        name: "Collaborazioni",
        groupEmail: "info@friuliemergenze.it"
      },
      media: {
        email: "comunicazione@friuliemergenze.it",
        name: "Media e Stampa",
        groupEmail: "comunicazione@friuliemergenze.it"
      },
      institutional: {
        email: "francesco@friuliemergenze.it",
        name: "Enti e Istituzioni",
        groupEmail: "francesco@friuliemergenze.it"
      },
      general: {
        email: "info@friuliemergenze.it",
        name: "Contatto Generale",
        groupEmail: "info@friuliemergenze.it"
      }
    };

    // Seleziona il dipartimento (con fallback a "general")
    const selectedDept = departmentMapping[sanitizedDepartment] || departmentMapping.general;

    // Genera l'HTML del messaggio
    const htmlContent = generateSurveyHtml({
      name: sanitizedName,
      email: sanitizedEmail,
      department: selectedDept.name,
      subject: sanitizedSubject,
      message: sanitizedMessage
    });

    // Invia il messaggio al dipartimento corretto
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
        to: [{ 
          name: selectedDept.name,
          email: selectedDept.groupEmail
         }],
        subject: `[${selectedDept.name}] ${subject}`,
        htmlContent,
        replyTo: {
          email: email,
          name: name
        }
      })
    });

    const data = await response.json();

    console.log(`📨 Messaggio inviato a ${selectedDept.name} (${selectedDept.groupEmail})`);
    console.log(`   Da: ${email}`);
    console.log(`   Subject: ${subject}`);

    return res.status(200).json({ 
      success: true, 
      data,
      routed_to: selectedDept.name,
      routed_email: selectedDept.groupEmail
    });

  } catch (err) {
    console.error("❌ Errore invio email:", err);
    return res.status(500).json({ success: false, error: err.message });
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

function generateSurveyHtml({ name, email, department, subject, message }) {
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
  background: linear-gradient(135deg, #00d4e8 0%, #0099b8 100%);
  color: white;
  text-align: center;
  padding: 25px;
}

.header h1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.department-badge {
  display: inline-block;
  background: rgba(255,255,255,0.25);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.4);
}

.content {
  padding: 25px;
}

.field {
  margin-bottom: 20px;
}

.label {
  font-weight: 600;
  color: #00d4e8;
  margin-bottom: 8px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.value {
  background: #f7f7f7;
  padding: 12px 15px;
  border-radius: 8px;
  color: #555;
  word-break: break-word;
  line-height: 1.5;
  border-left: 3px solid #00d4e8;
}

.value a {
  color: #00d4e8;
  text-decoration: none;
}

.value a:hover {
  text-decoration: underline;
}

.footer {
  text-align: center;
  color: #999;
  padding: 20px;
  border-top: 1px solid #eee;
  font-size: 13px;
}

.footer-link {
  color: #00d4e8;
  text-decoration: none;
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
    <h1>Nuovo messaggio dal sito</h1>
    <div class="department-badge">${department}</div>
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
      <div class="label">Dipartimento</div>
      <div class="value">${department}</div>
    </div>

    <div class="field">
      <div class="label">Oggetto</div>
      <div class="value">${subject}</div>
    </div>

    <div class="field">
      <div class="label">Messaggio</div>
      <div class="value">${message.replace(/\n/g, "<br>")}</div>
    </div>
  </div>

  <div class="footer">
    Messaggio ricevuto via form di contatto su <a href="https://www.friuliemergenze.it/contact-us" class="footer-link">friuliemergenze.it</a>
  </div>
</div>
</body>
</html>
`;
}