let email;
let password;
let formularioRegistro = document.getElementById("form-registro");
let formularioLogin = document.getElementById("formulario");

function leerDatos(params) {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
}

function Login() {
  leerDatos();
  const usuarioGuardado = localStorage.getItem("usuario");
  const contraseñaGuardada = localStorage.getItem("contraseña");
}

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
alert("holaaa")
    e.preventDefault();
    Registrar();
})
