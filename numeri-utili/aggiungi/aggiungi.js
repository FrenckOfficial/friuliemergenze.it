import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { firebaseConfig } from "/scripts/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const statusEl = document.getElementById("formStatus");

function setStatus(message, type) {
  statusEl.textContent = message;
  statusEl.classList.remove("success", "error");
  if (type) statusEl.classList.add(type);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  setStatus("", null);

  const nome = form.nome.value.trim();
  const categoria = form.categoria.value;
  const telefono = form.telefono.value.trim();
  const email = form.email.value.trim();
  const descrizione = form.descrizione.value.trim();

  // Validazione minima lato client
  if (!nome || !categoria || !telefono) {
    setStatus("Compila tutti i campi obbligatori (*).", "error");
    return;
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setStatus("Inserisci un indirizzo email valido.", "error");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.classList.add("loading");

  try {
    await addDoc(collection(db, "numeriUtili"), {
      nome,
      categoria,
      telefono,
      email: email || null,
      descrizione: descrizione || null,
      approvato: false,
      createdAt: serverTimestamp(),
    });

    form.reset();
    setStatus(
      "Grazie! La segnalazione è stata inviata ed è in attesa di revisione prima della pubblicazione.",
      "success"
    );
  } catch (err) {
    console.error("Errore nel salvataggio del numero utile:", err);
    setStatus("Si è verificato un errore nell'invio. Riprova più tardi.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");
  }
});