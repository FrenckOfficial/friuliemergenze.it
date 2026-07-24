document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.querySelector('button[type="submit"]');

    if (!document.getElementById("userRole").value) {
        alert("Per favore, seleziona il tuo ruolo.");
        return;
    }

    if (!document.getElementById("priority").value) {
        alert("Per favore, seleziona quale aspetto ritieni più importante.");
        return;
    }

    const formatCheckboxes = document.querySelectorAll('input[name="format"]:checked');
    if (formatCheckboxes.length === 0) {
        alert("Per favore, seleziona almeno un formato di documentazione.");
        return;
    }

    const topicCheckboxes = document.querySelectorAll('input[name="topics"]:checked');
    if (topicCheckboxes.length === 0) {
        alert("Per favore, seleziona almeno un argomento di interesse.");
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Invio in corso...";

    const format = Array.from(formatCheckboxes).map(cb => cb.value);
    const topics = Array.from(topicCheckboxes).map(cb => cb.value);

    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        userRole: document.getElementById("userRole").value,
        format: format,
        topics: topics,
        priority: document.getElementById("priority").value,
        suggestions: document.getElementById("suggestions").value.trim(),
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch("/api/documentationFeedbackFormSender", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert("Grazie! Il tuo sondaggio è stato inviato con successo. Le tue risposte aiuteranno a migliorare la documentazione!");
            document.querySelector("form").reset();
        } else {
            alert("Errore durante l'invio: " + (result.message || "Errore sconosciuto"));
        }

    } catch (error) {
        console.error("Errore durante l'invio del form:", error);
        alert("Errore di connessione al server. Riprova più tardi.");
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Invia Sondaggio";
    }
});