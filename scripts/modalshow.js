(function() {
  'use strict';

  const MODAL_CONFIG = {
    key: 'friuliemergenze_welcome_seen',
    expiryDays: 30,
    delay: 15000,
    icon: '👋',
    subtitle: 'Benvenuto',
    title: 'Scopri Friuli Emergenze',
    message: 'Friuli Emergenze è una realtà online riguardante la documentazione e il "censimento" dei mezzi di emergenza sul territorio. Ci occupiamo di fotografare (con l\'aiuto della community) e censire tutti i mezzi di emergenza nel territorio del Friuli-Venezia Giulia con lo scopo di mostrare le risorse attive e disponibili nel sistema del soccorso regionale,',
    primaryText: 'Dai un Feedback',
    primaryUrl: '/feedback',
    secondaryText: 'Chiudi'
  };

  function injectStyles() {
    const styleId = 'friuliemergenze-modal-styles';
    if (document.getElementById(styleId)) return;

    const css = `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(9, 12, 15, 0.8);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: friuli-fadeIn 0.3s ease;
      }

      .modal-overlay.show {
        display: flex;
      }

      .modal-content {
        background: var(--bg-panel);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        max-width: 600px;
        width: 90%;
        padding: 2.5rem;
        position: relative;
        animation: friuli-slideUp 0.4s ease;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      }

      .modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-sm);
        transition: all 0.2s;
      }

      .modal-close:hover {
        background: var(--accent-dim);
        color: var(--accent);
      }

      .modal-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        display: block;
      }

      .modal-title {
        font-size: 1.6rem;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 0.75rem;
        letter-spacing: -0.01em;
      }

      .modal-subtitle {
        font-size: 0.85rem;
        color: var(--accent);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 1.5rem;
        font-weight: 600;
      }

      .modal-text {
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.7;
        margin-bottom: 2rem;
      }

      .modal-actions {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .modal-btn {
        padding: 0.7rem 1.8rem;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        border: none;
        border-radius: var(--radius-sm);
        cursor: pointer;
        font-family: inherit;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-block;
      }

      .modal-btn-primary {
        background: var(--accent);
        color: var(--bg-deep);
        flex: 1;
        text-align: center;
      }

      .modal-btn-primary:hover {
        background: #00b8cc;
        transform: translateY(-2px);
      }

      .modal-btn-secondary {
        background: transparent;
        color: var(--text-secondary);
        border: 1px solid var(--border);
      }

      .modal-btn-secondary:hover {
        border-color: var(--accent);
        color: var(--accent);
        background: var(--accent-dim);
      }

      @keyframes friuli-fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes friuli-slideUp {
        from {
          transform: translateY(30px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @media (max-width: 768px) {
        .modal-content {
          padding: 2rem;
          max-width: 95%;
        }

        .modal-actions {
          flex-direction: column;
        }

        .modal-btn {
          width: 100%;
          flex: none;
        }
      }
    `;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);

    console.log('[FrEM Modal] Stili iniettati');
  }

  function createModal() {
    const modalId = 'welcomeModal';
    if (document.getElementById(modalId)) return;

    const html = `
      <div id="${modalId}" class="modal-overlay">
        <div class="modal-content">
          <button class="modal-close" title="Chiudi">✕</button>
          
          <span class="modal-icon">${MODAL_CONFIG.icon}</span>
          
          <div class="modal-subtitle">${MODAL_CONFIG.subtitle}</div>
          <h2 class="modal-title">${MODAL_CONFIG.title}</h2>
          
          <p class="modal-text">${MODAL_CONFIG.message}</p>
          
          <div class="modal-actions">
            <a href="${MODAL_CONFIG.primaryUrl}" class="modal-btn modal-btn-primary">
              ${MODAL_CONFIG.primaryText}
            </a>
            <button class="modal-btn modal-btn-secondary" onclick="friuliCloseModal()">
              ${MODAL_CONFIG.secondaryText}
            </button>
          </div>
        </div>
      </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div.firstElementChild);

    console.log('[FrEM Modal] HTML creato');
  }

  function shouldShowModal() {
    const lastSeen = localStorage.getItem(MODAL_CONFIG.key);
    
    if (!lastSeen) {
      return true;
    }

    const lastSeenDate = new Date(lastSeen);
    const now = new Date();
    const daysPassed = (now - lastSeenDate) / (1000 * 60 * 60 * 24);

    return daysPassed >= MODAL_CONFIG.expiryDays;
  }

  function showModal() {
    const modal = document.getElementById('welcomeModal');
    if (!modal) return;

    setTimeout(() => {
      modal.classList.add('show');
      console.log('[FrEM Modal] Mostrato');
    }, MODAL_CONFIG.delay);
  }

  window.friuliCloseModal = function() {
    const modal = document.getElementById('welcomeModal');
    if (modal) {
      modal.classList.remove('show');
      localStorage.setItem(MODAL_CONFIG.key, new Date().toISOString());
      console.log('[FrEM Modal] Chiuso');
    }
  };

  function init() {
    injectStyles();

    createModal();

    if (shouldShowModal()) {
      showModal();
    }

    attachEventListeners();
  }

  function attachEventListeners() {
    const modal = document.getElementById('welcomeModal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', window.friuliCloseModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.friuliCloseModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        window.friuliCloseModal();
      }
    });

    console.log('[FrEM Modal] Event listeners aggiunti');
  }

  window.friuliResetModal = function() {
    localStorage.removeItem(MODAL_CONFIG.key);
    console.log('[FrEM Modal] Reset! Ricarica la pagina per vederlo di nuovo.');
  };

  window.friuliShowModal = function() {
    localStorage.removeItem(MODAL_CONFIG.key);
    window.location.reload();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('[FrEM Modal] heading.js caricato');
})();