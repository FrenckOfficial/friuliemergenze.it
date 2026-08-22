import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';
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
};

const page = window.location.pathname;
const ipAddress = await getIpAddress();

async function createDoc() {
  if (page === "/pagine-visitate" || page === "/pagine-visitate/") {
    return;
  };

  try {
    const docRef = await addDoc(collection(db, "pageVisits"), {
      page,
      ipAddress
    });

    console.log("Documento pagina ", page, " visitata creato con ID:", docRef.id);
  } catch (error) {
    console.log ("Errore nella creazione del documento:", error);
  };
};

createDoc();