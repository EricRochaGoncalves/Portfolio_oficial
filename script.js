const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");

btnMobile.addEventListener('click', () => {
    const isActive = nav.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
});

document.addEventListener('click', (event) => {
    if (!btnMobile.contains(event.target) && !nav.contains(event.target)) {
        nav.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Exibir o card ao carregar a página
window.onload = function() {
    const cardOverlay = document.getElementById("cardOverlay");
    cardOverlay.style.display = "flex";
};

// Detecção de clique fora do card
document.getElementById('cardOverlay').addEventListener('click', function(event) {
    const card = document.querySelector('.card');

    // Verifica se o clique foi fora do card
    if (!card.contains(event.target)) {
        card.classList.add('fade-out'); // Adiciona a animação de fade-out

        // Espera a animação acabar antes de ocultar o card
        setTimeout(() => {
            this.style.display = 'none'; // Oculta o card-overlay
        }, 500); // Tempo igual ao da animação
    }
});
