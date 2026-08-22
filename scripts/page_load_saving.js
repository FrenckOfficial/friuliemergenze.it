import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';
import { firebaseConfig } from '/scripts/firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getIpInfo() {
  const cached = sessionStorage.getItem('userGeoData');
  if (cached) {
    console.log("📦 Usando geo data dalla cache");
    return JSON.parse(cached);
  }

  try {
    const response = await fetch("/api/getLocation");
    const data = await response.json();
    
    console.log("✅ Risposta /api/getLocation:", data);
    
    sessionStorage.setItem('userGeoData', JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("❌ Errore geolocation:", error);
    return { ip: "Non disponibile", country: null };
  }
}

const page = window.location.pathname;
const { ip: ipAddress, country } = await getIpInfo();

async function createDoc() {
  // Escludi pagina /pagine-visitate
  if (page === "/pagine-visitate" || page === "/pagine-visitate/") {
    console.log("ℹ️ Pagina /pagine-visitate esclusa dal tracking");
    return;
  }

  console.log("🌍 Country ricevuto:", country);

  // Escludi IP friuli-emergenze
  if (ipAddress === "93.41.1.144") {
    console.log("🏢 Visita da IP Friuli Emergenze, non tracciata");
    return;
  }

  // Escludi USA (solo il codice "US")
  if (country === "US") {
    console.log("🇺🇸 Visita da IP US, non tracciata");
    return;
  }

  // Salva la visita
  try {
    const docRef = await addDoc(collection(db, "pageVisits"), {
      page,
      ipAddress,
      country,
      timestamp: new Date()
    });

    console.log("✅ Visita tracciata:", page, "| ID:", docRef.id, "| Paese:", country);
  } catch (error) {
    console.error("❌ Errore nel salvare la visita:", error.message);
  }
}

createDoc();