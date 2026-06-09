export default async function handler(req, res) {
  console.log(req.method);
  console.log(req.body);

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const {
      name,
      email,
      grade,
      miglioramenti
    } = req.body;

    const htmlContent = generateSurveyHtml({
      name,
      email,
      grade,
      miglioramenti
    });

    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
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
          to: [
            {
              email: "support@friuliemergenze.it"
            }
          ],
          subject: `Nuovo sondaggio compilato da ${name}`,
          htmlContent,
          replyTo: {
            email,
            name
          }
        })
      }
    );

    const data = await response.json();

    console.log("📨 Sondaggio ricevuto:", email);

    return res.status(200).json({
      success: true,
      data
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false
    });
  }
}

function generateSurveyHtml({
  name,
  email,
  grade,
  miglioramenti
}) {
  return `
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">

<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600&display=swap" rel="stylesheet">

<style>
body{
  font-family:'Lexend',Arial,sans-serif;
  background:#f5f5f5;
  padding:20px;
}

.container{
  max-width:700px;
  margin:auto;
  background:white;
  border-radius:15px;
  overflow:hidden;
}

.header{
  background:#d90429;
  color:white;
  text-align:center;
  padding:25px;
}

.content{
  padding:25px;
}

.field{
  margin-bottom:20px;
}

.label{
  font-weight:600;
  margin-bottom:5px;
}

.value{
  background:#f7f7f7;
  padding:12px;
  border-radius:8px;
}

.footer{
  text-align:center;
  color:#777;
  padding:20px;
  border-top:1px solid #eee;
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
      <div class="value">
        ${miglioramenti.replace(/\n/g, "<br>")}
      </div>
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