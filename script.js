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
function showWelcomeMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = "Bem-vindo! O portfólio ainda está em desenvolvimento.";
    messageDiv.style.textAlign = "center";
    messageDiv.style.marginTop = "20px";
    document.body.appendChild(messageDiv);
}

window.onload = showWelcomeMessage;