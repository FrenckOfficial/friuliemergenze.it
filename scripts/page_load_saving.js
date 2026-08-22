import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';
import { firebaseConfig } from '/scripts/firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getIpInfo() {
  const cached = sessionStorage.getItem('userGeoData');
  if (cached) return JSON.parse(cached);

  try {
    const response = await fetch("/api/getLocation");
    const data = await response.json();
    
    // 🔍 DEBUG: Vedi cosa ritorna
    console.log("Risposta /api/getLocation:", data);
    console.log("Response status:", response.status);
    
    sessionStorage.setItem('userGeoData', JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Errore geolocation:", error);
    return { ip: "Non disponibile", country: null };
  }
}

const page = window.location.pathname;
const { ip: ipAddress, country } = await getIpInfo();

async function createDoc() {
  if (page === "/pagine-visitate" || page === "/pagine-visitate/") {
    return;
  }

  console.log(country)

  if (ipAddress === "93.41.1.144") {
    console.log("Visita da IP Friuli Emergenze, non tracciata.");
    return;
  }

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