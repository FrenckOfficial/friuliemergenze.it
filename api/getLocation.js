// /api/getLocation.js
export default async function handler(req, res) {
  // 🔍 DEBUG: Mostra TUTTI gli header
  console.log("🔍 Headers ricevuti:", {
    'x-forwarded-for': req.headers['x-forwarded-for'],
    'cf-connecting-ip': req.headers['cf-connecting-ip'],
    'x-real-ip': req.headers['x-real-ip'],
    'x-vercel-ip-timezone': req.headers['x-vercel-ip-timezone'],
    'cf-ipcountry': req.headers['cf-ipcountry'],
  });

  console.log("🔍 req.ip:", req.ip);
  console.log("🔍 req.connection.remoteAddress:", req.connection?.remoteAddress);
  console.log("🔍 req.socket.remoteAddress:", req.socket?.remoteAddress);
  console.log("🔍 req.geo:", req.geo);

  try {
    // ✅ Prova TUTTI i possibili header
    const ip = 
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.headers['cf-connecting-ip'] ||
      req.headers['x-real-ip'] ||
      req.ip ||
      req.connection?.remoteAddress ||
      req.socket?.remoteAddress ||
      'unknown';

    const country = await fetch(`https://ip-api.com/json/${ip}`).then(response => response.json()).then(data => data.countryCode);

    console.log("✅ Risultato finale:", { ip, country });

    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('Access-Control-Allow-Origin', 'https://www.friuliemergenze.it');

    return res.json({
      ip: ip !== 'unknown' ? ip : "Non disponibile",
      country: country || null
    });

  } catch (error) {
    console.error("❌ Errore:", error);
    res.json({ ip: "Non disponibile", country: null });
  }
}