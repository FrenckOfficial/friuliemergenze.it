document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.querySelector('button[type="submit"]');

    if (!document.getElementById("interest").value) {
        alert("Per favore, indica se ti interesserebbe una sezione notizie.");
        return;
    }

    const contentCheckboxes = document.querySelectorAll('input[name="content"]:checked');
    if (contentCheckboxes.length === 0) {
        alert("Per favore, seleziona almeno un tipo di contenuto che ti interesserebbe.");
        return;
    }

    if (!document.getElementById("frequency").value) {
        alert("Per favore, indica la frequenza di aggiornamenti preferita.");
        return;
    }

    if (!document.getElementById("comparison").value) {
        alert("Per favore, indica la priorità di una sezione notizie.");
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Invio in corso...";

    const selectedContent = Array.from(contentCheckboxes).map(cb => cb.value);

    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        interest: document.getElementById("interest").value,
        contentInterest: selectedContent,
        frequency: document.getElementById("frequency").value,
        comparison: document.getElementById("comparison").value,
        suggestions: document.getElementById("suggestions").value.trim(),
        comment: document.getElementById("comment").value.trim(),
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch("/api/sendNewsSectionFeedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert("Grazie! Le tue risposte sono state registrate con successo. Il tuo feedback ci aiuta molto!");
            document.querySelector("form").reset();
        } else {
            alert("Errore durante l'invio: " + (result.message || "Errore sconosciuto"));
        }

    } catch (error) {
        console.error("Errore durante l'invio del form:", error);
        alert("Errore di connessione al server. Riprova più tardi.");
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Invia Risposte";
    }
});