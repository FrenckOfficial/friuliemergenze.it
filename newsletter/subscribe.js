import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { firebaseConfig } from "https://myfrem.friuliemergenze.it/configFirebase.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const email = document.getElementById("email");
const name = document.getElementById("name");
const subscribeBtn = document.getElementById("subscribeBtn");
const messageDiv = document.getElementById("message");

subscribeBtn.addEventListener("click", async () => {

  const emailValue = email.value.trim();
  const nameValue = name.value.trim();

  if (!emailValue) {
    messageDiv.textContent = "Per favore, inserisci un indirizzo email.";
    messageDiv.style.color = "#ff3b3b";
    return;
  }

  try {
    const q = query(collection(db, "newsletterSubs"), where("email", "==", emailValue));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      messageDiv.textContent = "Questo indirizzo email è già iscritto.";
      messageDiv.style.color = "#ff3b3b";
    } else {
      await addDoc(collection(db, "newsletterSubs"), {
        email: emailValue,
        name: nameValue
      });

      messageDiv.textContent = "Iscrizione completata!";
      messageDiv.style.color = "#4CAF50";

      setTimeout(() => {
        window.location.href = "/";
      }, 5000);
    }

  } catch (error) {
    console.error(error);
    messageDiv.innerHTML = `Errore. Contattaci via <a href="mailto:soem@friuliemergenze.it">email</a>.`;
    messageDiv.style.color = "#ff3b3b";
  }
});