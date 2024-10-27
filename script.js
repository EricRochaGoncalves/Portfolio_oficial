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
    alert("Bem-vindo ao meu portifólio!
este portfólio está incompleto e em desenvolvimento. Pode apresentar algumas inconsistências, bugs e erros de estrutura. Agradecemos pela sua compreensão enquanto trabalho para aprimorá-lo e garantir uma melhor experiência de navegação. Fique à vontade para explorar e retornar em breve para ver as atualizações!
caso tenha dúvidas, entre em contato através do meu Git Hub! https://github.com/EricRochaGoncalves ");
};
