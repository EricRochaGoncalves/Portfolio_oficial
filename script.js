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