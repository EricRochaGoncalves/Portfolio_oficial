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
window.onload = function() {
    alert("Bem-vindo ao meu portifólio! ( Este site ainda está em desenvolvimento, caso tenha dúvidas, entre em contato através do meu Git Hub! https://github.com/EricRochaGoncalves ");
};
<script>
    window.onload = function() {
        alert("Este portfólio ainda está em desenvolvimento. Agradecemos a sua compreensão!");
    };
</script>