# Friuli Emergenze

> Sito ufficiale della community di Friuli Emergenze.

FriuliEmergenze.it è il sito web ufficiale del progetto Instagram di Friuli Emergenze. Qui potrai vedere tutti i mezzi pubblicati, tutti i photobook di vari enti in regione e potrai anche iscriverti alla nostra newsletter, per ricevere delle notifiche email ogni qualvolta c'è un aggiornamento nei siti oppure quando si aggiunge una nuova foto o un nuovo photobook.


## 🏗️ Architettura

Friuli Emergenze è progettato per essere modulare, scalabile e facilmente estendibile.

### Moduli principali

* **Galleria** → visione di tutte le foto pubblicate nel sito
* **Newsletter** → iscrizione alle notifiche via email
* **Gruppo WhatsApp** → visione del regolamento del gruppo
* **Aggiornamenti** → link per gli aggiornamenti al sito web!

## ⚙️ Installazione

Clonare il repository:

```bash
git clone https://github.com/FrenckOfficial/friuliemergenze.it.git
```

Entrare nella cartella del progetto:

```bash
cd myfrem
```

Installare le dipendenze:

```bash
npm install
```

Avviare il server di sviluppo (è obbligatoria l'installazione di NGINX):

```bash
nginx http 3000
```

## 📂 Struttura del progetto

```text
friuliemergenze.it/
├── 112-cur-italia/
├── aggiornamenti/
├── api/
├── bando-staff/
├── chi-sono/
├── contact-us/
├── gallery/
├── locandina-gruppo/
├── manutenzione/
├── newsletter/
├── node_modules/
├── photobook/
├── policies/
├── regolamento-gruppo/
├── rivista-annuale-vigilidelfuoco-2025/
├── social/
├── sondaggi/
├── unsubscribe/
├── 403.html
├── 404.html
├── gallery.json
├── heading.js
├── humans.txt
├── index.html
├── manifest.json
├── package-lock.json
├── package.json
├── README.md
├── robots.txt
├── shinystat_script.js
├── sitemap.xml
├── style.css
└── vercel.json
```

## 🔒 Sicurezza

MyFrEM adotta diverse misure di sicurezza:

* Protezione delle sessioni utente
* Controllo dei permessi
* Validazione degli input
* Protezione contro richieste malevole
* Moderazione dei contenuti caricati

## 🗺️ Roadmap

* [ ] Sistema di messaggistica interna
* [ ] Badge per gli utenti
* [ ] Sistema di segnalazioni
* [ ] Dashboard statistiche
* [ ] Applicazione mobile
* [ ] API pubblica

## 👨‍💻 Team

**Friuli Emergenze**

* Francesco Vio — Fondatore e amministratore (dal 2025)

## 🔗 Link

* 🌐 https://www.friuliemergenze.it
* 🖥️ https://myfrem.friuliemergenze.it
* 📸 Instagram: @friuliemergenze
* 🎵 TikTok: @friuliemergenze

## 📄 Licenza

Copyright © 2025-2026 Friuli Emergenze.

Tutti i diritti riservati.