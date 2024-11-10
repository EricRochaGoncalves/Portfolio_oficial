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
    document.getElementById("cardOverlay").style.display = "flex";
};

document.getElementById('cardOverlay').addEventListener('click', function(event) {
    const card = document.querySelector('.card');

    // Verifica se o clique foi fora do card
    if (!card.contains(event.target)) {
        this.style.display = 'none'; // Oculta o card-overlay
    }
});
window.onload = function() {
  sessionStorage.setItem('veioDaPrincipal', 'true');
};