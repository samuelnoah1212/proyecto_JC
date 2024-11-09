let email;
let password;
let formularioLogin = document.getElementById("formulario");

function leerDatos(params) {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
  }
  
  function Login() {
    leerDatos();
    const usuarioGuardado = localStorage.getItem("Correo");
    const contraseñaGuardada = localStorage.getItem("Contraseña");
  

  //Verificar si las credenciales coinciden
  if (email === usuarioGuardado && password === contraseñaGuardada) {
    alert( "Inicio de sesión exitoso. ¡Bienvenido!" )
    window.location.href = "index.html"
  } else {
    alert("Correo o contraseña incorrectos.")
  }
  
}

formularioLogin.addEventListener('submit',(e)=>{
    e.preventDefault();
    Login()

})
  