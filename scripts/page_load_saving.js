import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';
import { firebaseConfig } from '/scripts/firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getIpInfo() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    if (!response.ok) {
      console.error(`Errore ${response.status} da ipapi.co`);
      return { ip: "Non disponibile", country: null };
    }
    const data = await response.json();
    return {
      ip: data.ip || "Non disponibile",
      country: data.country_code || null
    };
  } catch (error) {
    console.error("Errore nel recupero IP/paese:", error);
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