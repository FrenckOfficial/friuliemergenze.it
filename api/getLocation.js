export default async function handler(req, res) {
  try {
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.headers['cf-connecting-ip'] || req.socket.remoteAddress;

    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    
    if (!response.ok) {
      return res.json({ ip: "Non disponibile", country: null });
    }

    const data = await response.json();

    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('Access-Control-Allow-Origin', 'https://www.friuliemergenze.it');

    return res.json({
      ip: data.ip || "Non disponibile",
      country: data.country_code || null
    });
  } catch (error) {
    console.error("Errore backend:", error);
    res.status(500).json({ ip: "Non disponibile", country: null });
  }
}