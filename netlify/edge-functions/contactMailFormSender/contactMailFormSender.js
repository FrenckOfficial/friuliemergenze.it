export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({
        error: "Method not allowed"
      })
    };
  }

  try {
    const {
      userEmail,
      htmlContent,
      title
    } = JSON.parse(event.body);

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
              email: userEmail
            }
          ],
          subject: title,
          htmlContent,
          replyTo: {
            email: "banca.dati@friuliemergenze.it",
            name: "Banca Dati - Friuli Emergenze"
          }
        })
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        success: true,
        data
      })
    };

  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        success: false,
        error: err.message
      })
    };
  }
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};