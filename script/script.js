let email;
let password;
let formularioRegistro = document.getElementById("form-registro");


function Registrar() {
  const nombres = document.getElementById("nombres").value;
  const emailRegistro = document.getElementById("email-registro").value;
  const passwordRegistro = document.getElementById("password-registro").value;
  const genero = document.getElementById("genero").value;

  localStorage.setItem("Usuario", nombres);
  localStorage.setItem("Correo", emailRegistro);
  localStorage.setItem("Contraseña", passwordRegistro);
  localStorage.setItem("Genero", genero);
}

formularioRegistro.addEventListener('submit',e=>{ 
    e.preventDefault();
    Registrar();
    window.location.href = "login.html";
})
