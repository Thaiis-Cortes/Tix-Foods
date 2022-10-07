const menu = document.querySelector ('.menu');
const navMenu = document.querySelector ('.nav-menu');



const actvMenu = () => {
    menu.classList.toggle ('ativo');
    navMenu.classList.toggle('ativo')
}


menu.addEventListener('click', actvMenu )