// /api/getLocation.js
export default async function handler(req, res) {
  try {
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
               req.headers['cf-connecting-ip'] ||
               req.connection.remoteAddress;

    console.log("IP:", ip);

    // ✅ Lista servizi con fallback
    const services = [
      // Service 1: ip-api.com (NO CORS, ma funziona da backend)
      async () => {
        const r = await fetch(`https://ip-api.com/json/${ip}?fields=country`);
        const d = await r.json();
        return d.status === 'success' ? { ip, country: d.countryCode } : null;
      },
      // Service 2: ipwhois.io
      async () => {
        const r = await fetch(`https://ipwhois.io/api/json/ip?ipAddress=${ip}`);
        const d = await r.json();
        return d.is_vpn !== undefined ? { ip, country: d.country_code } : null;
      },
      // Service 3: ipdata.co (gratuito, 1500/giorno)
      async () => {
        const r = await fetch(`https://api.ipdata.co/${ip}`);
        const d = await r.json();
        return d.country_code ? { ip, country: d.country_code } : null;
      }
    ];

    // Prova i servizi in ordine
    for (const service of services) {
      try {
        const result = await Promise.race([
          service(),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), 3000)
          )
        ]);
        
        if (result) {
          console.log("✅ Servizio funzionato:", result);
          res.setHeader('Cache-Control', 'public, max-age=86400');
          return res.json(result);
        }
      } catch (e) {
        console.warn("⚠️ Servizio fallito:", e.message);
      }
    }

    res.json({ ip, country });

  } catch (error) {
    console.error("Errore critico:", error);
    res.json({ ip: "Non disponibile", country: null });
  }
}