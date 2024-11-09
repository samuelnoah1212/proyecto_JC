
const cerrar = document.getElementById('Cerrar');

document.addEventListener("DOMContentLoaded", function() {
    const usuarioGuardado = localStorage.getItem("Usuario"); 
    Nombre (usuarioGuardado); 
});

cerrar.addEventListener("click", function(e){
    e.preventDefault();
    CerrarSe();
});

function Nombre(usuario) {
    
    const nuevoElemento = document.createElement('li');
    const nuevoEnlace = document.createElement('a');
    nuevoEnlace.textContent = usuario;
    
    nuevoElemento.appendChild(nuevoEnlace);
    const navBar = document.getElementById('navBar');
    navBar.appendChild(nuevoElemento);
}

function CerrarSe() {
    alert('Cerrar Sesión')
    localStorage.removeItem("Usuario");
    window.location.href = "login.html";
}