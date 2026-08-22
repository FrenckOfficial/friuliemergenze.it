export default async function handler(req, res) {
  try {
    // 🔍 Estrai IP da tutti i possibili header
    const ip = 
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.headers['cf-connecting-ip'] ||
      req.headers['x-real-ip'] ||
      req.connection.remoteAddress ||
      'unknown';

    console.log("IP rilevato:", ip); // 🔍 DEBUG

    // Se non abbiamo un IP valido, ritorna subito
    if (!ip || ip === 'unknown' || ip === '127.0.0.1') {
      return res.json({ 
        ip: "Non disponibile (invalid)", 
        country: null,
        debug: { headers: req.headers }
      });
    }

    // ✅ Chiama ipapi.co dal backend
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    
    console.log("ipapi.co status:", response.status); // 🔍 DEBUG
    
    if (!response.ok) {
      console.error("ipapi.co error:", response.status);
      return res.json({ 
        ip: "Non disponibile (ipapi error)", 
        country: null,
        ipApiStatus: response.status
      });
    }

    const data = await response.json();
    console.log("ipapi.co data:", data); // 🔍 DEBUG

    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('Access-Control-Allow-Origin', 'https://www.friuliemergenze.it');

    return res.json({
      ip: data.ip || "Non disponibile (no ip field)",
      country: data.country_code || null
    });

  } catch (error) {
    console.error("Errore backend:", error.message); // 🔍 DEBUG
    res.status(500).json({ 
      ip: "Non disponibile (catch error)", 
      country: null,
      error: error.message
    });
  }
}