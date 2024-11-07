let email;
let password;
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

  
  