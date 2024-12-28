window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const finalContent = document.getElementById("final-content");
    const progressBar = document.querySelector(".progress");
    const message = document.getElementById("message");
    const audio = document.getElementById("background-music");
    const clickBanner = document.getElementById("click-banner");

    let progress = 0;

    // Simulazione della barra di caricamento
    const loadingInterval = setInterval(() => {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = progress + "%";
        } else {
            clearInterval(loadingInterval);
            loadingScreen.style.display = "none";  // Nasconde la schermata di caricamento
            finalContent.style.opacity = 1;  // Mostra il contenuto finale
        }
    }, 20); // Imposta la velocità della barra di caricamento

    // Al clic sul banner
    clickBanner.addEventListener("click", function() {
        // Nascondi il banner
        clickBanner.style.display = "none";

        // Avvia la musica
        audio.play();

        // Mostra il testo con un effetto di transizione
        message.style.opacity = 1;
    });
});
