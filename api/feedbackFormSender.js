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
    const { rating, category, message, timestamp, userAgent, referrer } = req.body;

    // Validazione base
    if (!rating || !category || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Sanitizzazione
    const sanitizedRating = parseInt(rating);
    const sanitizedCategory = sanitizeHtml(category);
    const sanitizedMessage = sanitizeHtml(message);
    const sanitizedReferrer = sanitizeHtml(referrer || "diretto");

    // Validazione rating
    if (sanitizedRating < 1 || sanitizedRating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    // Mapping categorie
    const categoryLabels = {
      contenuti: "Contenuti e Documentazione",
      sito: "Funzionalità del Sito",
      piattaforma: "MyFrEM - Piattaforma",
      social: "Social Media",
      bug: "Segnalazione Bug",
      suggerimento: "Suggerimento",
      altro: "Altro"
    };

    const ratingLabels = {
      1: "★ Scarso",
      2: "★★ Mediocre",
      3: "★★★ Buono",
      4: "★★★★ Molto buono",
      5: "★★★★★ Eccellente"
    };

    const categoryLabel = categoryLabels[sanitizedCategory] || sanitizedCategory;
    const ratingLabel = ratingLabels[sanitizedRating] || `${sanitizedRating}/5`;

    // Genera HTML email
    const htmlContent = generateFeedbackHtml({
      rating: ratingLabel,
      category: categoryLabel,
      message: sanitizedMessage,
      timestamp,
      referrer: sanitizedReferrer
    });

    // Invia email via Brevo
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: "Friuli Emergenze — Feedback",
          email: "noreply@friuliemergenze.it"
        },
        to: [{
          name: "Friuli Emergenze",
          email: "ricezione.feedback@friuliemergenze.it"
        }],
        subject: `[Feedback] ${ratingLabel} • ${categoryLabel}`,
        htmlContent,
        replyTo: {
          name: "Feedback Anonimo",
          email: "noreply@friuliemergenze.it"
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Errore Brevo:", data);
      throw new Error(data.message || "Errore nell'invio email");
    }

    console.log(`📨 Email feedback inviata`);
    console.log(`   Valutazione: ${ratingLabel}`);
    console.log(`   Categoria: ${categoryLabel}`);
    console.log(`   Brevo ID: ${data.messageId}`);

    return res.status(200).json({
      success: true,
      messageId: data.messageId,
      rating: ratingLabel,
      category: categoryLabel
    });

  } catch (err) {
    console.error("❌ Errore handler feedback:", err);
    return res.status(500).json({ 
      success: false, 
      error: err.message 
    });
  }
}

/**
 * Sanitizza HTML per evitare XSS
 */
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

/**
 * Genera HTML email feedback
 */
function generateFeedbackHtml({ rating, category, message, timestamp, referrer }) {
  return `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif;
      line-height: 1.6;
      color: #2c3e50;
      background: #f5f7fa;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 2rem auto;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #090c0f 0%, #161d25 100%);
      padding: 2rem;
      color: #e8edf2;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 1.8rem;
      color: #00d4e8;
    }
    .content {
      padding: 2rem;
    }
    .field {
      margin-bottom: 1.5rem;
    }
    .field-label {
      font-weight: 600;
      color: #00d4e8;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.5rem;
      display: block;
    }
    .field-value {
      background: #f5f7fa;
      padding: 1rem;
      border-left: 3px solid #00d4e8;
      border-radius: 4px;
      color: #2c3e50;
      word-wrap: break-word;
    }
    .rating {
      font-size: 1.2rem;
      color: #00d4e8;
      font-weight: 600;
    }
    .message-box {
      background: #f9f9f9;
      padding: 1.25rem;
      border: 1px solid #e8edf2;
      border-radius: 6px;
      white-space: pre-wrap;
      word-wrap: break-word;
      font-size: 0.95rem;
    }
    .meta {
      background: #f5f7fa;
      padding: 1rem;
      border-radius: 4px;
      font-size: 0.85rem;
      color: #666;
      margin-top: 2rem;
      border-top: 1px solid #e8edf2;
    }
    .footer {
      background: #f5f7fa;
      padding: 1.5rem;
      text-align: center;
      font-size: 0.85rem;
      color: #666;
      border-top: 1px solid #e8edf2;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nuovo Feedback Ricevuto</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="field-label">📊 Valutazione</span>
        <div class="field-value rating">${rating}</div>
      </div>

      <div class="field">
        <span class="field-label">🏷️ Categoria</span>
        <div class="field-value">${category}</div>
      </div>

      <div class="field">
        <span class="field-label">💬 Messaggio</span>
        <div class="message-box">${message}</div>
      </div>

      <div class="meta">
        <strong>Data e ora:</strong> ${new Date(timestamp).toLocaleString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })} CET
        <br>
        <strong>Referrer:</strong> ${referrer}
      </div>
    </div>
    <div class="footer">
      <p>Feedback anonimo ricevuto dal modulo su friuliemergenze.it/feedback</p>
    </div>
  </div>
</body>
</html>
  `;
}