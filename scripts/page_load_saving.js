import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';
import { firebaseConfig } from '/scripts/firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getIpAddress() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Errore nel recupero IP:", error);
    return "Non disponibile";
  }
}

async function getCountry(ip) {
  try {
    const response = await fetch(`https://ip-api.com/json/${ip}?fields=countryCode`);
    const data = await response.json();
    return data.countryCode || null; // es. "US", "IT"
  } catch (error) {
    console.error("Errore nel recupero paese:", error);
    return null;
  }
}

const page = window.location.pathname;
const ipAddress = await getIpAddress();
const country = await getCountry(ipAddress);

async function createDoc() {
  if (page === "/pagine-visitate" || page === "/pagine-visitate/") {
    return;
  }

  console.log(country)

  if (country === "US") {
    console.log("Visita da IP US, non tracciata.");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "pageVisits"), {
      page,
      ipAddress,
      country,
      timestamp: new Date()
    });

    console.log("Documento pagina ", page, " visitata creato con ID:", docRef.id);
  } catch (error) {
    console.log("Errore nella creazione del documento:", error);
  }
}

createDoc();