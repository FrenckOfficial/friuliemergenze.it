document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.querySelector('button[type="submit"]');

    submitBtn.disabled = true;
    submitBtn.textContent = "Invio...";

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        grade: document.getElementById("grade").value,
        miglioramenti: document.getElementById("miglioramenti").value
    };

    try {
        const response = await fetch("/api/surveyMailFormSender", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert("Sondaggio inviato correttamente!");
            document.querySelector("form").reset();
        } else {
            alert("Errore durante l'invio: " + result.message);
        }

    } catch (error) {
        console.error(error);
        alert("Errore di connessione al server.");
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Invia";
    }
});