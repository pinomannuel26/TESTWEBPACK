import './style.css'
const btnHome = document.getElementById('nav_home');
const btnContact = document.getElementById('nav_contact');
const btnOurs = document.getElementById('nav_aboutUs');

const containerMain = document.getElementById('contaier_main');

btnHome.addEventListener('click',()=>{
    containerMain.innerHTML=
    `
        <h2>Inicio</h2>
        <p>Hola soy inicio</p>
    `
});
btnContact.addEventListener('click',()=>{
    containerMain.innerHTML=
    `
        <h2>Contactos</h2>
        <p>Hola soy Contactos</p>
    `
});
btnOurs.addEventListener('click',()=>{
    containerMain.innerHTML=
    `
        <h2>About Us</h2>
        <p>Hola soy Abaout Us</p>
    `
});