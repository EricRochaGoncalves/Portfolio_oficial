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

document.getElementById("hideCardCheckbox").addEventListener("change", function () {
    const cardOverlay = document.getElementById("cardOverlay");

    // Fecha o modal se o checkbox for marcado
    if (this.checked) {
        cardOverlay.style.display = "none";
        localStorage.setItem("hideCard", "true"); // Salva a preferência do usuário
    } else {
        localStorage.setItem("hideCard", "false"); // Atualiza a preferência quando desmarcado
    }
});

// Verifica a preferência ao carregar a página e oculta o card se a preferência for salva
window.onload = function() {
    const cardOverlay = document.getElementById("cardOverlay");
    const hideCard = localStorage.getItem("hideCard");

    // Se a preferência for salva como "true", oculta o card
    if (hideCard === "true") {
        cardOverlay.style.display = "none";
    } else {
        cardOverlay.style.display = "flex"; // Exibe o card se a preferência for "false" ou não estiver salva
    }
};

// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('nav a');

// Função de rolagem suave
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        // Obtém o ID do link (exemplo: "#home")
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Verifica se a seção alvo existe antes de rolar
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
