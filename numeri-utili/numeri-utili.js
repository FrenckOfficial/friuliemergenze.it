import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, query, where, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { firebaseConfig } from "/scripts/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const tableBody = document.getElementById("numeriTableBody");
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
 
function renderRow(entry) {
  const row = document.createElement("tr");
 
  const categoria = escapeHtml(entry.categoria || "—");
  const nome = escapeHtml(entry.nome || "Senza nome");
  const telefono = entry.telefono ? escapeHtml(entry.telefono) : "";
  const email = entry.email ? escapeHtml(entry.email) : "";
 
  row.innerHTML = `
    <td class="col-nome">${nome}</td>
    <td class="col-categoria">${categoria}</td>
    <td class="col-telefono">${telefono ? `<a href="tel:${buildTelHref(entry.telefono || "")}">${telefono}</a>` : "—"}</td>
    <td class="col-email">${email ? `<a href="mailto:${email}">${email}</a>` : "—"}</td>
  `;
 
  return row;
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
 
    tableBody.innerHTML = "";
    entries.forEach((entry) => {
      tableBody.appendChild(renderRow(entry));
    });
    status.textContent = "";
  } catch (err) {
    console.error("Errore nel caricamento dei numeri utili:", err);
    status.textContent = "Non è stato possibile caricare l'elenco. Riprova più tardi.";
    status.classList.add("error");
  }
}
 
loadNumeri();