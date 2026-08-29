import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, query, where, orderBy, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { firebaseConfig } from "/scripts/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const grid = document.getElementById("revGrid");
const status = document.getElementById("revStatus");
 
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
 
  const categoria = escapeHtml(entry.categoria || "Senza categoria");
  const nome = escapeHtml(entry.nome || "Senza nome");
  const descrizione = entry.descrizione ? escapeHtml(entry.descrizione) : "";
  const telefono = entry.telefono ? escapeHtml(entry.telefono) : "";
  const email = entry.email ? escapeHtml(entry.email) : "";
 
  card.innerHTML = `
    <span class="ivr-number">${categoria}</span>
    <h3 class="ivr-name">${nome}</h3>
    ${descrizione ? `<p class="ivr-desc">${descrizione}</p>` : ""}
    ${telefono ? `<p class="ivr-email">📞 <a href="tel:${telefono.replace(/\s+/g, "")}">${telefono}</a></p>` : ""}
    ${email ? `<p class="ivr-email">✉️ <a href="mailto:${email}">${email}</a></p>` : ""}
    <div style="display:flex; gap:0.75rem; margin-top:1.25rem;">
      <button class="btn-primary approve-btn" style="flex:1; justify-content:center;">✓ Approva</button>
      <button class="btn-primary btn-solid reject-btn" style="flex:1; justify-content:center;">✕ Rifiuta</button>
    </div>
  `;
 
  card.querySelector(".approve-btn").addEventListener("click", () => handleApprove(id, card));
  card.querySelector(".reject-btn").addEventListener("click", () => handleReject(id, card));
 
  return card;
}
 
async function handleApprove(id, card) {
  setButtonsDisabled(card, true);
  try {
    await updateDoc(doc(db, "numeriUtili", id), { approvato: true });
    card.remove();
    checkEmpty();
  } catch (err) {
    console.error("Errore nell'approvazione:", err);
    setButtonsDisabled(card, false);
    status.textContent = "Errore durante l'approvazione. Riprova.";
    status.classList.add("error");
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
    setButtonsDisabled(card, false);
    status.textContent = "Errore durante il rifiuto. Riprova.";
    status.classList.add("error");
  }
}
 
function setButtonsDisabled(card, disabled) {
  card.querySelectorAll("button").forEach((b) => (b.disabled = disabled));
}
 
function checkEmpty() {
  if (!grid.querySelector(".ivr-card")) {
    status.textContent = "Nessuna segnalazione in attesa. Tutto revisionato! ✅";
    status.classList.remove("error");
  }
}
 
async function loadPending() {
  try {
    const q = query(collection(db, "numeriUtili"), where("approvato", "==", false));
    const snapshot = await getDocs(q);
 
    if (snapshot.empty) {
      status.textContent = "Nessuna segnalazione in attesa. Tutto revisionato! ✅";
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