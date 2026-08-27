(function () {
  const head = document.head;
  const titleText = document.title;
  const currentUrl = window.location.href;

  const nodes = [
    { type: 'meta', attrs: { charset: 'UTF-8' } },
    { type: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } },
    { type: 'meta', attrs: { name: 'description', content: 'Pagina di condivisione foto e video di mezzi di soccorso. Ti diamo il benvenuto nel sito ufficiale di Friuli Emergenze!' } },
    { type: 'meta', attrs: { name: 'robots', content: 'all' } },
    { type: 'meta', attrs: { name: 'author', content: 'Friuli Emergenze' } },
    { type: 'meta', attrs: { name: 'google-adsense-account', content: 'ca-pub-4233309350636231' } },
    { type: 'meta', attrs: { name: 'copyright', content: '© 2025-2026 Friuli Emergenze' }},
    { type: 'meta', attrs: { property: 'og:title', content: titleText } },
    { type: 'meta', attrs: { property: 'og:description', content: 'Pagina di condivisione foto e video di mezzi di soccorso. Ti diamo il benvenuto nel sito ufficiale di Friuli Emergenze!' } },
    { type: 'meta', attrs: { property: 'og:image', content: 'https://www.friuliemergenze.it/assets/logo.png' } },
    { type: 'meta', attrs: { property: 'og:url', content: currentUrl } },
    { type: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { type: 'meta', attrs: { property: 'og:locale', content: 'it_IT' } },
    { type: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { type: 'meta', attrs: { name: 'theme-color', content: 'black' } },
    { type: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
    { type: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: titleText } },
    { type: 'script', attrs: { src: 'https://www.paypal.com/sdk/js?client-id=BAADLRkARb_vp7BpzVb3jmj3oHXkBH4Obg55ERSSLQNcjqm9HnbU7Imvpgng1QentxmHTGunfTA4Sd7Vr0&components=hosted-buttons&disable-funding=venmo&currency=EUR' } },
    { type: 'link', attrs: { rel: 'apple-touch-icon', href: '/assets/icons/icon-192x192.png' } },
    { type: 'link', attrs: { rel: 'icon', href: '/assets/logo.png', type: 'image/png' } },
    { type: 'link', attrs: { rel: 'canonical', href: currentUrl } },
    { type: 'link', attrs: { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' } },
    { type: 'link', attrs: { rel: 'preconnect', href: 'https://cdn.friuliemergenze.it' } },
    { type: 'link', attrs: { href: 'https://fonts.googleapis.com/css2?family=Lexend&display=swap', rel: 'stylesheet' } },
    { type: 'link', attrs: { rel: 'stylesheet', href: '/style.css' } },
    { type: 'link', attrs: { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css' } },
    { type: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
    { type: 'link', attrs: { rel: 'sitemap', type: 'application/xml', title: 'Sitemap', href: '/sitemap.xml' } }
  ];

  function exists(el) {
    return [...head.children].some(e =>
      e.tagName.toLowerCase() === el.type &&
      Object.entries(el.attrs).every(([k, v]) => e.getAttribute(k) === v)
    );
  }

  nodes.forEach(n => {
    if (exists(n)) return;

    const el = document.createElement(n.type);
    Object.entries(n.attrs).forEach(([k, v]) => el.setAttribute(k, v));
    head.appendChild(el);
  });

  const iubendaScript = document.createElement('script');
  iubendaScript.src = 'https://embeds.iubenda.com/widgets/46908651-d6da-462f-b037-e6ef97c84795.js';
  head.appendChild(iubendaScript);

  const clarityScript = document.createElement('script');
  clarityScript.textContent = `
    (function(c, l, a, r, i, t, y) {
      c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments);
      };

      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;

      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "y7xnqslzlm");
  `;

  head.appendChild(clarityScript);

  const googleScript = document.createElement('script');
  googleScript.async = true;
  googleScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-2LRKW2EXEL';
  head.appendChild(googleScript);

  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Friuli Emergenze",
    "url": "https://www.friuliemergenze.it",
    "logo": "https://www.friuliemergenze.it/assets/logo.png"
  });

  head.appendChild(ld);

})();