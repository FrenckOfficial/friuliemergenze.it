import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, addDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { firebaseConfig } from "https://myfrem.friuliemergenze.it/configFirebase.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("🚀 Firebase inizializzato");

emailjs.init("49-8564mCPRVWNmBW");
console.log("📧 EmailJS inizializzato");

const form = document.getElementById("newsletterForm");
const email = document.getElementById("email");
const name = document.getElementById("name");
const messageDiv = document.getElementById("message");

const urlParams = new URLSearchParams(window.location.search);
const nameParam = urlParams.get("name");
const emailParam = urlParams.get("email");
const privacyParam = urlParams.get("privacyChecked");

if (nameParam) {
  name.value = decodeURIComponent(nameParam);
  console.log("👤 Nome precompilato:", name.value);
}
if (emailParam) {
  email.value = decodeURIComponent(emailParam);
  console.log("✉️ Email precompilata:", email.value);
}
if (privacyParam === "true") {
  const privacyCheckbox = document.getElementById("privacy");
  if (privacyCheckbox) {
    privacyCheckbox.checked = true;
    console.log("✅ Privacy pre-selezionata");
  }
}

console.log("🧩 DOM caricato:", { form, email, name, messageDiv });

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("📨 Submit avviato");

  const emailValue = email.value.trim();
  const nameValue = name.value.trim();

  if (nameParam && emailParam) {
    console.log("🔍 Verifica parametri URL...")
    if (emailValue !== decodeURIComponent(emailParam) || nameValue !== decodeURIComponent(nameParam)) {
      console.warn("⚠️ Parametri URL non corrispondono ai valori del form");
      messageDiv.textContent = "I dati inseriti non corrispondono ai parametri URL. Per favore, correggili.";
      messageDiv.style.color = "#ff3b3b";
      return;
    }
  }

  console.log("✉️ Dati input:", { emailValue, nameValue });

  if (!emailValue) {
    console.warn("⚠️ Email vuota");
    messageDiv.textContent = "Per favore, inserisci un indirizzo email.";
    messageDiv.style.color = "#ff3b3b";
    return;
  }

  try {
    console.log("🔍 Controllo email su Firestore...");

    const q = query(
      collection(db, "newsletterSubs"),
      where("email", "==", emailValue)
    );

    const querySnapshot = await getDocs(q);

    console.log("📦 Query Firestore completata:", querySnapshot.size);

    if (!querySnapshot.empty) {
      console.warn("⚠️ Email già iscritta");
      messageDiv.textContent = "Questo indirizzo email è già iscritto.";
      messageDiv.style.color = "#ff3b3b";
      return;
    }

    const token = crypto.randomUUID();
    console.log("🔑 Token generato:", token);

    console.log("💾 Salvataggio su Firestore...");

    await addDoc(collection(db, "newsletterSubs"), {
      email: emailValue,
      name: nameValue,
      verified: false,
      subscribed: false,
      verifiedAt: null,
      token: token,
      createdAt: new Date()
    });

    const userQuery = query(
      collection(db, "users"),
      where("email", "==", emailValue)
    );

    const userSnapshot = await getDocs(userQuery);

    if (!userSnapshot.empty) {
      const userDoc = userSnapshot.docs[0];

      await updateDoc(userDoc.ref, {
        newsSubbed: true
      });

      console.log("✅ Utente aggiornato");
    } else {
      console.warn("⚠️ Nessun utente trovato con questa email");
    }

    console.log("✅ Salvataggio completato");

    console.log("📧 Invio email EmailJS...");

    const emailResult = await emailjs.send("service_ngxrsq8", "template_32nd0dv", {
      email: emailValue,
      name: nameValue,
      link: `https://www.friuliemergenze.it/newsletter/confirm/?token=${token}`
    });

    console.log("📬 Email inviata:", emailResult);

    messageDiv.textContent = "Controlla la tua email per confermare l’iscrizione!";
    messageDiv.style.color = "#4CAF50";

    setTimeout(() => {
      console.log("🏠 Tornando indietro di una pagina in reloading");
      window.history.back();
    }, 4000);

  } catch (error) {
    console.error("❌ ERRORE COMPLETO:", error);

    messageDiv.innerHTML =
      `Errore durante l'iscrizione. Contattaci via <a href="mailto:soem@friuliemergenze.it">email</a> per notificarcelo.`;

    messageDiv.style.color = "#ff3b3b";
  }
});