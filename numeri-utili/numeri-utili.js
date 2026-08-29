import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, query, where, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { firebaseConfig } from "/scripts/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const grid = document.getElementById("ivrGrid");
const status = document.getElementById("ivrStatus");
 
function buildTelHref(telefono = "") {
  const beforeNote = telefono.split("(")[0].trim();
  return beforeNote.replace(/[^\d+]/g, "");
}
 
function escapeHtml(str = "") {
  return str.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}
 
function renderCard(entry) {
  const card = document.createElement("div");
  card.className = "ivr-card";
 
  const categoria = escapeHtml(entry.categoria || "Realtà FVG");
  const nome = escapeHtml(entry.nome || "Senza nome");
  const descrizione = entry.descrizione ? escapeHtml(entry.descrizione) : "";
  const telefono = entry.telefono ? escapeHtml(entry.telefono) : "";
  const email = entry.email ? escapeHtml(entry.email) : "";
 
  card.innerHTML = `
    <span class="ivr-number">${categoria}</span>
    <h3 class="ivr-name">${nome}</h3>
    ${descrizione ? `<p class="ivr-desc">${descrizione}</p>` : ""}
    ${telefono ? `<p class="ivr-email">📞 <a href="tel:${buildTelHref(entry.telefono || "")}">${telefono}</a></p>` : ""}
    ${email ? `<p class="ivr-email">✉️ <a href="mailto:${email}">${email}</a></p>` : ""}
  `;
 
  return card;
}
 
async function loadNumeri() {
  try {
    const q = query(collection(db, "numeriUtili"), where("approvato", "==", true));
    const snapshot = await getDocs(q);
 
    if (snapshot.empty) {
      status.textContent = "Nessuna realtà pubblicata al momento. Sii il primo a segnalarne una!";
      status.classList.remove("error");
      return;
    }
 
    const entries = snapshot.docs
      .map((doc) => doc.data())
      .sort((a, b) => (a.nome || "").localeCompare(b.nome || "", "it"));
 
    grid.innerHTML = "";
    entries.forEach((entry) => {
      grid.appendChild(renderCard(entry));
    });
    status.textContent = "";
  } catch (err) {
    console.error("Errore nel caricamento dei numeri utili:", err);
    status.textContent = "Non è stato possibile caricare l'elenco. Riprova più tardi.";
    status.classList.add("error");
  }
}
 
loadNumeri();