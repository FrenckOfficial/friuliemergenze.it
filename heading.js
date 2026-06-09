(function () {
  const head = document.head;
  const titleText = document.title;

  const nodes = [
    { type: 'meta', attrs: { charset: 'UTF-8' } },
    { type: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } },
    { type: 'meta', attrs: { name: 'description', content: 'Pagina di condivisione foto e video di mezzi di soccorso. Ti diamo il benvenuto nel sito ufficiale di Friuli Emergenze!' } },
    { type: 'meta', attrs: { name: 'robots', content: 'index, follow' } },
    { type: 'meta', attrs: { name: 'author', content: 'Friuli Emergenze' } },
    { type: 'meta', attrs: { name: 'google-adsense-account', content: 'ca-pub-4233309350636231' } },
    { type: 'meta', attrs: { property: 'og:title', content: titleText } },
    { type: 'meta', attrs: { property: 'og:description', content: 'Pagina di condivisione foto e video di mezzi di soccorso. Ti diamo il benvenuto nel sito ufficiale di Friuli Emergenze!' } },
    { type: 'meta', attrs: { property: 'og:image', content: 'https://friuliemergenze.it/assets/logo.png' } },
    { type: 'meta', attrs: { property: 'og:url', content: 'https://friuliemergenze.it' } },
    { type: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { type: 'meta', attrs: { property: 'og:locale', content: 'it_IT' } },
    { type: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { type: 'meta', attrs: { name: 'theme-color', content: 'black' } },
    { type: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
    { type: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: titleText } },
    { type: 'link', attrs: { rel: 'apple-touch-icon', href: '/assets/icons/icon-192x192.png' } },
    { type: 'link', attrs: { rel: 'icon', href: '/assets/logo.png', type: 'image/png' } },
    { type: 'link', attrs: { rel: 'canonical', href: 'https://friuliemergenze.it' } },
    { type: 'link', attrs: { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' } },
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

  const script = document.createElement('script');
  script.src = 'https://embeds.iubenda.com/widgets/46908651-d6da-462f-b037-e6ef97c84795.js';
  head.appendChild(script);

  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Friuli Emergenze",
    "url": "https://friuliemergenze.it",
    "logo": "https://friuliemergenze.it/assets/logo.png"
  });
  head.appendChild(ld);

})();