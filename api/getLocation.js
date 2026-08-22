export default async function handler(req, res) {
  try {
    const ip = 
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.headers['cf-connecting-ip'] ||
      req.headers['x-real-ip'] ||
      req.ip ||
      'unknown';

    console.log("📍 IP estratto:", ip);

    if (!ip || ip === 'unknown') {
      return res.json({ ip: "Non disponibile", country: null });
    }

    // ✅ Chiama ip-api.com con error handling
    let country = null;
    
    try {
      const countryFetch = await fetch(`https://ip-api.com/json/${ip}?fields=country,countryCode,status`);
      
      if (!countryFetch.ok) {
        console.warn("⚠️ ip-api.com status:", countryFetch.status);
        // Fallback: continua senza country
      } else {
        const countryResponse = await countryFetch.json();
        
        // ✅ Usa countryCode (es. "IT", "US", "FR")
        if (countryResponse.status === 'success') {
          country = countryResponse.countryCode;
          console.log("✅ Country code:", country);
        }
      }
    } catch (fetchError) {
      console.warn("⚠️ Errore fetch country:", fetchError.message);
      // Continua senza country
    }

    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('Access-Control-Allow-Origin', 'https://www.friuliemergenze.it');

    return res.json({
      ip: ip !== 'unknown' ? ip : "Non disponibile",
      country: country || null
    });

  } catch (error) {
    console.error("❌ Errore critico:", error.message);
    res.json({ ip: "Non disponibile", country: null });
  }
}