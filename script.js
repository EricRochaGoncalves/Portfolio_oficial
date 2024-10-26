const btnMobile = document.getElementById("btn-mobile");
btnMobile.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenuOutside);

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    toggleBodyOverflow(nav.classList.contains('active'));
}

function closeMenuOutside(event) {
    const nav = document.getElementById('nav');
    if (!btnMobile.contains(event.target) && !nav.contains(event.target)) {
        nav.classList.remove('active');
        toggleBodyOverflow(false);
    }
}

function toggleBodyOverflow(isActive) {
    document.body.style.overflow = isActive ? 'hidden' : '';
}
function showDevelopmentMessage() {
    alert("O portfólio ainda está em desenvolvimento, caso tenha alguma dúvida, favor acessar meu contato através do Git Hub https://github.com/EricRochaGoncalves.");

    // Solicita o nome do usuário
    const userName = prompt("Por favor, digite seu nome:");

    // Verifica se o usuário digitou um nome
    if (userName) {
        alert(`Bem vindo, ${userName}!`);
    } else {
        alert("Bem vindo!");
    }
}