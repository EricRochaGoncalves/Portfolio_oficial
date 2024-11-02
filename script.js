const btnMobile = document.getElementById("btn-mobile");
btnMobile.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenuOutside);

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    animateMenu(nav.classList.contains('active'));
    toggleBodyOverflow(nav.classList.contains('active'));
}

function closeMenuOutside(event) {
    const nav = document.getElementById('nav');
    if (!btnMobile.contains(event.target) && !nav.contains(event.target)) {
        nav.classList.remove('active');
        animateMenu(false);
        toggleBodyOverflow(false);
    }
}

function toggleBodyOverflow(isActive) {
    document.body.style.overflow = isActive ? 'hidden' : '';
}

// Pra que tantos códigos, sendo que a vida não é programada, e as melhores coisas não têm lógica?
