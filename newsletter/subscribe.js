import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, collection, getDocs, query, where, addDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { firebaseConfig } from "https://myfrem.friuliemergenze.it/configFirebase.js"

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const email = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribeBtn");
const messageDiv = document.getElementById("message");

subscribeBtn.addEventListener("click", async () => {
  const emailValue = email.value.trim();
  const nameValue = name.value;

  if (!emailValue) {
    messageDiv.textContent = "Per favore, inserisci un indirizzo email.";
    messageDiv.style.color = "#ff3b3b";
    return;
  }
  try {
    const q = query(collection(db, "newsletter"), where("email", "==", emailValue));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      messageDiv.textContent = "Questo indirizzo email è già iscritto alla newsletter.";
      messageDiv.style.color = "#ff3b3b";
    } else {
        await addDoc(collection(db, "newsletterSubs"), { email: emailValue, name: nameValue });
        messageDiv.textContent = "Grazie per esserti iscritto alla nostra newsletter!";
        messageDiv.style.color = "#4CAF50";
        setTimeout(() => (
            window.location.href = "/"
        ), 5000)
    }
  } catch (error) {
    console.error("Errore durante l'iscrizione alla newsletter: ", error);
    messageDiv.innerHTML = `Si è verificato un errore. Per favore, segnalacelo alla mail <a href="mailto:soem@friuliemergenze.it">soem@friuliemergenze.it</a>.`;
    messageDiv.style.color = "#ff3b3b";
  }
});