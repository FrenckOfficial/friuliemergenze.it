document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.querySelector('button[type="submit"]');

    if (!document.getElementById("platform").value) {
        alert("Per favore, seleziona una piattaforma.");
        return;
    }

    if (!document.getElementById("features").value.trim()) {
        alert("Per favore, descrivi le funzionalità che desideri.");
        return;
    }

    if (!document.getElementById("priority").value) {
        alert("Per favore, indica il livello di priorità.");
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Invio in corso...";

    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        platform: document.getElementById("platform").value,
        features: document.getElementById("features").value.trim(),
        priority: document.getElementById("priority").value,
        comment: document.getElementById("comment").value.trim(),
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch("/api/featuresFeedbackFormSender", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert("Grazie! Il tuo feedback è stato inviato con successo. Apprezziamo le tue idee!");
            document.querySelector("form").reset();
        } else {
            alert("Errore durante l'invio: " + (result.message || "Errore sconosciuto"));
        }

    } catch (error) {
        console.error("Errore durante l'invio del form:", error);
        alert("Errore di connessione al server. Riprova più tardi.");
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Invia Feedback";
    }
});