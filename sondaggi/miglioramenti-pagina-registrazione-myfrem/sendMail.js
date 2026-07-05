document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.querySelector('button[type="submit"]');

    if (!document.getElementById("simplicity").value) {
        alert("Per favore, seleziona il grado di semplicità.");
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Invio in corso...";

    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        simplicity: document.getElementById("simplicity").value,
        things: document.getElementById("things").value.trim(),
        comment: document.getElementById("comment").value.trim(),
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch("/api/signUpFeedbackFormSender", {
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