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
    const { name, email, interest, contentInterest, frequency, comparison, suggestions, comment, timestamp } = req.body;

    if (!name || !email || !interest || !frequency || !comparison) {
      return res.status(400).json({ 
        error: "Missing required fields" 
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const validInterests = ["molto_interessato", "interessato", "forse", "poco_interessato", "no"];
    if (!validInterests.includes(interest)) {
      return res.status(400).json({ error: "Invalid interest level" });
    }

    if (!Array.isArray(contentInterest) || contentInterest.length === 0) {
      return res.status(400).json({ error: "At least one content type must be selected" });
    }

    const validContents = ["emergenze", "avvisi", "eventi", "volontariato", "storie", "prevenzione"];
    if (!contentInterest.every(c => validContents.includes(c))) {
      return res.status(400).json({ error: "Invalid content type selected" });
    }

    const validFrequencies = ["giornaliero", "3-4_volte", "settimanale", "urgenti_solo", "non_ricevere"];
    if (!validFrequencies.includes(frequency)) {
      return res.status(400).json({ error: "Invalid frequency selected" });
    }

    const validComparisons = ["prioritaria", "importante", "carino", "non_prioritaria"];
    if (!validComparisons.includes(comparison)) {
      return res.status(400).json({ error: "Invalid comparison selected" });
    }

    if (!process.env.BREVO_API_KEY) {
      console.error("❌ BREVO_API_KEY not configured");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedSuggestions = sanitizeHtml(suggestions || "");
    const sanitizedComment = sanitizeHtml(comment || "");
    const sanitizedContentInterest = contentInterest.map(c => sanitizeHtml(c));

    const htmlContent = generateSurveyHtml({
      name: sanitizedName,
      email: sanitizedEmail,
      interest,
      contentInterest: sanitizedContentInterest,
      frequency,
      comparison,
      suggestions: sanitizedSuggestions,
      comment: sanitizedComment,
      timestamp
    });

    const interestDisplay = getInterestDisplay(interest);

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
            name: "GruppoMembriStaff@gruppi.friuliemergenze.it",
            email: "GruppoMembriStaff@gruppi.friuliemergenze.it" 
        }],
        subject: `[SONDAGGIO NOTIZIE] Nuovo feedback da ${sanitizedName} - ${interestDisplay}`,
        htmlContent,
        replyTo: { email: sanitizedEmail, name: sanitizedName }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Brevo API error:", errorData);
      return res.status(response.status).json({ 
        error: "Failed to send survey response" 
      });
    }

    const data = await response.json();
    console.log("✅ Risposta sondaggio ricevuta da:", sanitizedEmail, "- Interesse:", interest);

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

function getInterestDisplay(interest) {
  const interestMap = {
    'molto_interessato': 'Molto interessato ✅',
    'interessato': 'Interessato ✅',
    'forse': 'Forse 🤔',
    'poco_interessato': 'Poco interessato ❌',
    'no': 'No ❌'
  };
  return interestMap[interest] || interest;
}

function getFrequencyDisplay(frequency) {
  const frequencyMap = {
    'giornaliero': 'Ogni giorno',
    '3-4_volte': '3-4 volte a settimana',
    'settimanale': 'Una volta a settimana',
    'urgenti_solo': 'Solo notizie urgenti',
    'non_ricevere': 'Consultare solo dal sito'
  };
  return frequencyMap[frequency] || frequency;
}

function getComparisonDisplay(comparison) {
  const comparisonMap = {
    'prioritaria': '🔴 Molto prioritaria - la desidero subito',
    'importante': '🟠 Importante - grande valore aggiunto',
    'carino': '🟡 Carina da avere - ma non urgente',
    'non_prioritaria': '🟢 Poco prioritaria - altre cose più importanti'
  };
  return comparisonMap[comparison] || comparison;
}

function getContentDisplay(content) {
  const contentMap = {
    'emergenze': 'Segnalazioni emergenze e interventi',
    'avvisi': 'Avvisi e comunicazioni urgenti',
    'eventi': 'Eventi e attività dell\'organizzazione',
    'volontariato': 'Opportunità di volontariato',
    'storie': 'Storie e testimonianze',
    'prevenzione': 'Consigli di prevenzione e sicurezza'
  };
  return contentMap[content] || content;
}

function generateSurveyHtml({ name, email, interest, contentInterest, frequency, comparison, suggestions, comment, timestamp }) {
  const interestDisplay = getInterestDisplay(interest);
  const frequencyDisplay = getFrequencyDisplay(frequency);
  const comparisonDisplay = getComparisonDisplay(comparison);
  const contentList = contentInterest.map(c => `<li>${getContentDisplay(c)}</li>`).join('');
  const formattedDate = timestamp ? new Date(timestamp).toLocaleString('it-IT') : new Date().toLocaleString('it-IT');

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

.interest-badge {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  background: #fff3e0;
  color: #e65100;
  margin-top: 8px;
}

.content-list {
  background: #fef5f5;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #d90429;
  margin-top: 8px;
}

.content-list ul {
  margin-left: 20px;
  color: #555;
}

.content-list li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.frequency-box {
  background: #f0f7ff;
  padding: 12px 15px;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
  margin-top: 8px;
  color: #1565c0;
}

.comparison-badge {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  background: #fff3e0;
  color: #e65100;
  margin-top: 8px;
}

.suggestions-box {
  background: #e8f5e9;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #4caf50;
  margin-top: 8px;
  color: #2e7d32;
  line-height: 1.6;
}

.comment-section {
  background: #f0f0f0;
  padding: 12px 15px;
  border-radius: 8px;
  margin-top: 8px;
  font-style: italic;
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

.highlight-note {
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
    <h1>📰 Nuovo Feedback Sondaggio Notizie</h1>
    <p>Risposta ricevuta al nostro sondaggio sulla sezione notizie</p>
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
      <div class="section-title">Interesse nella Sezione Notizie</div>
      
      <div class="field">
        <div class="label">Utilizzerebbe una sezione notizie?</div>
        <div>
          <div class="interest-badge">${interestDisplay}</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Contenuti di Interesse</div>
      
      <div class="content-list">
        <ul>
          ${contentList}
        </ul>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Preferenze di Frequenza</div>
      
      <div class="frequency-box">
        <strong>Frequenza desiderata:</strong> ${frequencyDisplay}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Priorità Relativa</div>
      
      <div class="field">
        <div class="label">Priorità rispetto ad altre feature</div>
        <div>
          <div class="comparison-badge">${comparisonDisplay}</div>
        </div>
      </div>
    </div>

    ${suggestions ? `
    <div class="section">
      <div class="section-title">Suggerimenti Funzionalità</div>
      <div class="suggestions-box">
        ${suggestions.replace(/\n/g, "<br>")}
      </div>
    </div>
    ` : ''}

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

    <div class="highlight-note">
      ✅ Grazie per aver completato il sondaggio! Le tue risposte ci aiutano a capire se e come implementare la sezione notizie.
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