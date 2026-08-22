export default async function handler(req, res) {
  try {
    // Estrai IP
    const ip = 
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.headers['cf-connecting-ip'] ||
      req.headers['x-real-ip'] ||
      req.socket.remoteAddress ||
      'unknown';

    console.log("🔍 IP rilevato:", ip);

    // Se non abbiamo IP valido
    if (!ip || ip === 'unknown' || ip === '127.0.0.1') {
      return res.json({ 
        ip: "Non disponibile", 
        country: null 
      });
    }

    // Prova ipapi.co
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    
    if (!response.ok) {
      console.log("❌ ipapi.co status:", response.status);
      return res.json({ 
        ip: "Non disponibile", 
        country: null 
      });
    }

    const data = await response.json();
    console.log("✅ Dati ricevuti:", data);

    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('Access-Control-Allow-Origin', 'https://www.friuliemergenze.it');

    return res.json({
      ip: data.ip || "Non disponibile",
      country: data.country_code || null
    });

  } catch (error) {
    console.error("❌ Errore:", error.message);
    res.status(500).json({ 
      ip: "Non disponibile", 
      country: null 
    });
  }
}