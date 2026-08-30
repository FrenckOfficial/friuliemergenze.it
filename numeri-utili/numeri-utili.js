import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, query, where, orderBy, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { firebaseConfig } from "/scripts/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const tableBody = document.getElementById("numeriTableBody");
const status = document.getElementById("ivrStatus");
 
const CATEGORIE = [
  "Protezione Civile",
  "Vigili del Fuoco",
  "Soccorso Sanitario",
  "Croce Rossa / Volontariato",
  "Soccorso Alpino",
  "Guardia Costiera",
  "Forze dell'Ordine",
  "Altro",
];
 
const CAMPI = [
  { key: "nome", label: "Nome" },
  { key: "categoria", label: "Categoria" },
  { key: "telefono", label: "Telefono" },
  { key: "email", label: "Email" },
];
 
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
 
function renderRow(id, entry) {
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
    <td class="col-modifica"><div class="edit-cell"></div></td>
  `;
 
  setupEditCell(row.querySelector(".edit-cell"), id, entry);
 
  return row;
}
 
function setupEditCell(cell, id, entry) {
  showModificaButton();
 
  function showModificaButton() {
    cell.innerHTML = `<button type="button" class="btn-primary btn-cell">Modifica</button>`;
    cell.querySelector("button").addEventListener("click", showFieldSelect);
  }
 
  function showFieldSelect() {
    const optionsHtml = CAMPI.map((c) => `<option value="${c.key}">${c.label}</option>`).join("");
    cell.innerHTML = `
      <select class="campo-select">
        <option value="" selected disabled>Cosa vuoi correggere?</option>
        ${optionsHtml}
      </select>
    `;
    cell.querySelector(".campo-select").addEventListener("change", (e) => {
      showFieldInput(e.target.value);
    });
  }
 
  function showFieldInput(campoKey) {
    const campo = CAMPI.find((c) => c.key === campoKey);
    const valoreAttuale = entry[campoKey] || "";
 
    let inputHtml;
    if (campoKey === "categoria") {
      const optionsHtml = CATEGORIE.map(
        (cat) => `<option value="${cat}" ${cat === valoreAttuale ? "selected" : ""}>${cat}</option>`
      ).join("");
      inputHtml = `<select class="valore-input">${optionsHtml}</select>`;
    } else if (campoKey === "email") {
      inputHtml = `<input type="email" class="valore-input" value="${escapeHtml(valoreAttuale)}" />`;
    } else {
      inputHtml = `<input type="text" class="valore-input" value="${escapeHtml(valoreAttuale)}" />`;
    }
 
    cell.innerHTML = `
      <span style="font-size:0.7rem; color:var(--text-muted); font-family:var(--font-mono); text-transform:uppercase;">${campo.label}</span>
      ${inputHtml}
      <button type="button" class="btn-primary btn-cell">Salva</button>
    `;
 
    cell.querySelector(".btn-cell").addEventListener("click", () =>
      handleSaveProposal(campoKey, valoreAttuale)
    );
  }
 
  async function handleSaveProposal(campoKey, valoreAttuale) {
    const inputEl = cell.querySelector(".valore-input");
    const nuovoValore = inputEl.value.trim();
 
    if (!nuovoValore) {
      alert("Inserisci un valore.");
      return;
    }
    if (campoKey === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nuovoValore)) {
      alert("Inserisci un'email valida.");
      return;
    }
    if (nuovoValore === valoreAttuale) {
      alert("Il valore inserito è identico a quello attuale.");
      return;
    }
 
    const btn = cell.querySelector(".btn-cell");
    btn.disabled = true;
    btn.textContent = "Invio...";
 
    try {
      await addDoc(collection(db, "modificheProposte"), {
        numeroId: id,
        nomeRealta: entry.nome || "",
        campo: campoKey,
        valoreAttuale: valoreAttuale || null,
        valoreProposto: nuovoValore,
        createdAt: serverTimestamp(),
      });
 
      cell.innerHTML = `<span class="edit-confirm">✓ Modifica inviata per la revisione</span>`;
    } catch (err) {
      console.error("Errore nell'invio della modifica proposta:", err);
      alert("Si è verificato un errore nell'invio della modifica. Riprova.");
      showModificaButton();
    }
  }
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
      .map((docSnap) => ({ id: docSnap.id, data: docSnap.data() }))
      .sort((a, b) => (a.data.nome || "").localeCompare(b.data.nome || "", "it"));
 
    tableBody.innerHTML = "";
    entries.forEach(({ id, data }) => {
      tableBody.appendChild(renderRow(id, data));
    });
    status.textContent = "";
  } catch (err) {
    console.error("Errore nel caricamento dei numeri utili:", err);
    status.textContent = "Non è stato possibile caricare l'elenco. Riprova più tardi.";
    status.classList.add("error");
  }
}
 
loadNumeri();