import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

import { firebaseConfig } from "https://myfrem.friuliemergenze.it/configFirebase.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const statusBox = document.getElementById("statusBox");
const actions = document.getElementById("actions");
const unsubscribeBtn = document.getElementById("unsubscribeBtn");
const keepBtn = document.getElementById("keepBtn");

const email = new URLSearchParams(window.location.search).get("email");

let userDocRef = null;

console.log("Email ricevuta:", email);

if (!email) {
  statusBox.textContent = "Nessuna email trovata nel link.";
  throw new Error("No email provided");
}

async function checkSubscription() {
  try {
    console.log("Controllo iscrizione...");

    const q = query(
      collection(db, "newsletterSubs"),
      where("email", "==", email)
    );

    const snap = await getDocs(q);

    console.log("Documenti trovati:", snap.size);

    if (snap.empty) {
      statusBox.innerHTML = `Email non trovata nei nostri iscritti. Probabilmente sei iscritto a MyFrEM e la mail che ti è arrivata è una semplice notifica MyFrEM. In questo caso non è possibile disiscriversi da qui, ma puoi farlo direttamente da MyFrEM. Oppure sei un destinatario personalizzato inserito manualmente dallo staff. Per problematiche scrivi a: <a href="mailto:techical@friuliemergenze.it">techical@friuliemergenze.it</a>.`;
      return;
    }

    const docSnap = snap.docs[0];
    userDocRef = doc(db, "newsletterSubs", docSnap.id);

    const data = docSnap.data();

    console.log("Utente:", data);

    if (data.verified === false) {
      statusBox.textContent = "Prima di disiscriverti devi verificare il tuo indirizzo email.";
      return;
    }

    statusBox.textContent = "Email trovata. Puoi gestire la tua iscrizione.";
    actions.style.display = "block";

  } catch (err) {
    console.error(err);
    statusBox.textContent = "Errore durante la verifica.";
  }
}

unsubscribeBtn.addEventListener("click", async () => {
  try {
    console.log("Disiscrizione in corso...");

    await updateDoc(userDocRef, {
      subscribed: false,
      unsubscribedAt: new Date()
    });

    statusBox.textContent = "Ti sei disiscritto con successo.";
    actions.style.display = "none";

    console.log("Disiscrizione completata");

  } catch (err) {
    console.error(err);
    statusBox.textContent = "Errore durante la disiscrizione.";
  }
});

keepBtn.addEventListener("click", () => {
  statusBox.textContent = "Perfetto, rimani iscritto alla newsletter.";
  actions.style.display = "none";
});

checkSubscription();