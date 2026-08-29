import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, query, where, orderBy, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { firebaseConfig } from "/scripts/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const grid = document.getElementById("revGrid");
const status = document.getElementById("revStatus");
 
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
 
function escapeHtml(str = "") {
  return str.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}
 
function renderCard(id, entry) {
  const card = document.createElement("div");
  card.className = "ivr-card";
  card.dataset.id = id;
 
  const nome = escapeHtml(entry.nome || "");
  const categoriaAttuale = entry.categoria || "";
  const telefono = escapeHtml(entry.telefono || "");
  const email = escapeHtml(entry.email || "");
  const descrizione = escapeHtml(entry.descrizione || "");
 
  const optionsHtml = CATEGORIE.map(
    (cat) => `<option value="${cat}" ${cat === categoriaAttuale ? "selected" : ""}>${cat}</option>`
  ).join("");
 
  card.innerHTML = `
    <div class="form-group">
      <label>Nome della realtà</label>
      <input type="text" class="f-nome" value="${nome}" maxlength="120" />
    </div>
 
    <div class="form-group select-wrapper">
      <label>Categoria</label>
      <select class="f-categoria">
        <option value="" ${categoriaAttuale ? "" : "selected"} disabled>Seleziona una categoria</option>
        ${optionsHtml}
      </select>
    </div>
 
    <div class="form-group">
      <label>Telefono</label>
      <input type="text" class="f-telefono" value="${telefono}" />
    </div>
 
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="f-email" value="${email}" />
    </div>
 
    <div class="form-group">
      <label>Descrizione</label>
      <textarea class="f-descrizione" maxlength="300">${descrizione}</textarea>
    </div>
 
    <div class="form-status f-status"></div>
 
    <div style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-top:0.5rem;">
      <button class="btn-primary save-btn" style="flex:1; min-width:140px; justify-content:center;">💾 Salva modifiche</button>
      <button class="btn-primary approve-btn" style="flex:1; min-width:140px; justify-content:center;">✓ Approva</button>
      <button class="btn-primary btn-solid reject-btn" style="flex:1; min-width:140px; justify-content:center;">✕ Rifiuta</button>
    </div>
  `;
 
  card.querySelector(".save-btn").addEventListener("click", () => handleSave(id, card));
  card.querySelector(".approve-btn").addEventListener("click", () => handleApprove(id, card));
  card.querySelector(".reject-btn").addEventListener("click", () => handleReject(id, card));
 
  return card;
}
 
function readFields(card) {
  const nome = card.querySelector(".f-nome").value.trim();
  const categoria = card.querySelector(".f-categoria").value;
  const telefono = card.querySelector(".f-telefono").value.trim();
  const email = card.querySelector(".f-email").value.trim();
  const descrizione = card.querySelector(".f-descrizione").value.trim();
  return { nome, categoria, telefono, email, descrizione };
}
 
function validateFields({ nome, categoria, telefono, email }) {
  if (!nome || !categoria || !telefono) {
    return "Nome, categoria e telefono sono obbligatori.";
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Email non valida.";
  }
  return null;
}
 
function setCardStatus(card, message, type) {
  const el = card.querySelector(".f-status");
  el.textContent = message;
  el.classList.remove("success", "error");
  if (type) el.classList.add(type);
}
 
async function handleSave(id, card) {
  const fields = readFields(card);
  const error = validateFields(fields);
  if (error) {
    setCardStatus(card, error, "error");
    return;
  }
 
  setButtonsDisabled(card, true);
  try {
    await updateDoc(doc(db, "numeriUtili", id), {
      nome: fields.nome,
      categoria: fields.categoria,
      telefono: fields.telefono,
      email: fields.email || null,
      descrizione: fields.descrizione || null,
    });
    setCardStatus(card, "Modifiche salvate.", "success");
  } catch (err) {
    console.error("Errore nel salvataggio delle modifiche:", err);
    setCardStatus(card, "Errore durante il salvataggio. Riprova.", "error");
  } finally {
    setButtonsDisabled(card, false);
  }
}
 
async function handleApprove(id, card) {
  const fields = readFields(card);
  const error = validateFields(fields);
  if (error) {
    setCardStatus(card, error, "error");
    return;
  }
 
  setButtonsDisabled(card, true);
  try {
    await updateDoc(doc(db, "numeriUtili", id), {
      nome: fields.nome,
      categoria: fields.categoria,
      telefono: fields.telefono,
      email: fields.email || null,
      descrizione: fields.descrizione || null,
      approvato: true,
    });
    card.remove();
    checkEmpty();
  } catch (err) {
    console.error("Errore nell'approvazione:", err);
    setCardStatus(card, "Errore durante l'approvazione. Riprova.", "error");
    setButtonsDisabled(card, false);
  }
}
 
async function handleReject(id, card) {
  if (!confirm("Rifiutare ed eliminare definitivamente questa segnalazione?")) return;
  setButtonsDisabled(card, true);
  try {
    await deleteDoc(doc(db, "numeriUtili", id));
    card.remove();
    checkEmpty();
  } catch (err) {
    console.error("Errore nel rifiuto:", err);
    setCardStatus(card, "Errore durante il rifiuto. Riprova.", "error");
    setButtonsDisabled(card, false);
  }
}
 
function setButtonsDisabled(card, disabled) {
  card.querySelectorAll("button").forEach((b) => (b.disabled = disabled));
}
 
function checkEmpty() {
  if (!grid.querySelector(".ivr-card")) {
    status.textContent = "Nessuna segnalazione in attesa. Tutto revisionato!";
    status.classList.remove("error");
  }
}
 
async function loadPending() {
  try {
    const q = query(collection(db, "numeriUtili"), where("approvato", "==", false));
    const snapshot = await getDocs(q);
 
    if (snapshot.empty) {
      status.textContent = "Nessuna segnalazione in attesa. Tutto revisionato!";
      return;
    }
 
    const docsData = snapshot.docs
      .map((docSnap) => ({ id: docSnap.id, data: docSnap.data() }))
      .sort((a, b) => {
        const ta = a.data.createdAt?.toMillis?.() ?? 0;
        const tb = b.data.createdAt?.toMillis?.() ?? 0;
        return ta - tb;
      });
 
    grid.innerHTML = "";
    docsData.forEach(({ id, data }) => {
      grid.appendChild(renderCard(id, data));
    });
  } catch (err) {
    console.error("Errore nel caricamento delle segnalazioni:", err);
    status.textContent = "Non è stato possibile caricare le segnalazioni.";
    status.classList.add("error");
  }
}
 
loadPending();
 
const editGrid = document.getElementById("editGrid");
const editStatus = document.getElementById("editStatus");
 
const CAMPI_LABEL = {
  nome: "Nome",
  categoria: "Categoria",
  telefono: "Telefono",
  email: "Email",
};
 
function renderEditCard(proposalId, proposal) {
  const card = document.createElement("div");
  card.className = "ivr-card";
 
  const nomeRealta = escapeHtml(proposal.nomeRealta || "Realtà sconosciuta");
  const campoLabel = CAMPI_LABEL[proposal.campo] || proposal.campo;
  const valoreAttuale = escapeHtml(proposal.valoreAttuale || "—");
  const valoreProposto = escapeHtml(proposal.valoreProposto || "—");
 
  card.innerHTML = `
    <span class="ivr-number">${campoLabel}</span>
    <h3 class="ivr-name">${nomeRealta}</h3>
    <p class="ivr-desc">
      <strong>Attuale:</strong> ${valoreAttuale}<br />
      <strong>Proposto:</strong> ${valoreProposto}
    </p>
    <div class="form-status ec-status"></div>
    <div style="display:flex; gap:0.75rem; margin-top:1rem;">
      <button class="btn-primary approve-edit-btn" style="flex:1; justify-content:center;">✓ Applica</button>
      <button class="btn-primary btn-solid reject-edit-btn" style="flex:1; justify-content:center;">✕ Rifiuta</button>
    </div>
  `;
 
  card.querySelector(".approve-edit-btn").addEventListener("click", () =>
    handleApproveEdit(proposalId, proposal, card)
  );
  card.querySelector(".reject-edit-btn").addEventListener("click", () =>
    handleRejectEdit(proposalId, card)
  );
 
  return card;
}
 
async function handleApproveEdit(proposalId, proposal, card) {
  setButtonsDisabled(card, true);
  try {
    await updateDoc(doc(db, "numeriUtili", proposal.numeroId), {
      [proposal.campo]: proposal.valoreProposto,
    });
    await deleteDoc(doc(db, "modificheProposte", proposalId));
    card.remove();
    checkEditEmpty();
  } catch (err) {
    console.error("Errore nell'applicare la modifica:", err);
    card.querySelector(".ec-status").textContent =
      "Errore: la realtà originale potrebbe essere stata rimossa.";
    card.querySelector(".ec-status").classList.add("error");
    setButtonsDisabled(card, false);
  }
}
 
async function handleRejectEdit(proposalId, card) {
  if (!confirm("Rifiutare questa proposta di modifica?")) return;
  setButtonsDisabled(card, true);
  try {
    await deleteDoc(doc(db, "modificheProposte", proposalId));
    card.remove();
    checkEditEmpty();
  } catch (err) {
    console.error("Errore nel rifiuto della modifica:", err);
    card.querySelector(".ec-status").textContent = "Errore durante il rifiuto. Riprova.";
    card.querySelector(".ec-status").classList.add("error");
    setButtonsDisabled(card, false);
  }
}
 
function checkEditEmpty() {
  if (!editGrid.querySelector(".ivr-card")) {
    editStatus.textContent = "Nessuna modifica proposta in attesa.";
    editStatus.classList.remove("error");
  }
}
 
async function loadEditProposals() {
  try {
    const snapshot = await getDocs(collection(db, "modificheProposte"));
 
    if (snapshot.empty) {
      editStatus.textContent = "Nessuna modifica proposta in attesa.";
      return;
    }
 
    const proposals = snapshot.docs
      .map((docSnap) => ({ id: docSnap.id, data: docSnap.data() }))
      .sort((a, b) => {
        const ta = a.data.createdAt?.toMillis?.() ?? 0;
        const tb = b.data.createdAt?.toMillis?.() ?? 0;
        return ta - tb;
      });
 
    editGrid.innerHTML = "";
    proposals.forEach(({ id, data }) => {
      editGrid.appendChild(renderEditCard(id, data));
    });
  } catch (err) {
    console.error("Errore nel caricamento delle modifiche proposte:", err);
    editStatus.textContent = "Non è stato possibile caricare le modifiche proposte.";
    editStatus.classList.add("error");
  }
}
 
loadEditProposals();