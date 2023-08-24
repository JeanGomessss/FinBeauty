document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loadingScreen");
    const content = document.getElementById("content");

    // Simula o tempo de carregamento
    setTimeout(function() {
        loadingScreen.style.display = "none"; // Esconde a tela de carregamento
        content.style.display = "block"; // Mostra o conteúdo
    }, 2000); // Tempo simulado de carregamento em milissegundos
});
