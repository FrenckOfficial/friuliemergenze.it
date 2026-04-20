import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { firebaseConfig } from "https://myfrem.friuliemergenze.it/firebaseConfig.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const staffForm = document.getElementById("staffForm");
  const formMessage = document.getElementById("formMessage");

  if (!staffForm) return;

  staffForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const eta = document.getElementById("eta").value.trim();
    const email = document.getElementById("email").value.trim();
    const motivazione = document.getElementById("motivazione").value.trim();

    try {
      const candidatureRef = collection(db, "candidatureStaff");
      await addDoc(candidatureRef, {
        nome,
        eta,
        email,
        motivazione,
        timestamp: new Date()
      });

      staffForm.reset();

      formMessage.style.color = "green";
      formMessage.textContent = "✅ Candidatura inviata con successo. Attendi il responso via mail.";
    } catch (error) {
      console.error("Errore durante l'invio:", error);
      formMessage.style.color = "red";
      formMessage.textContent = "❌ Si è verificato un errore. Riprova più tardi.";
    }
  });
});