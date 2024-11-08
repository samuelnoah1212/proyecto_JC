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
  

  //Verificar si las credenciales coinciden
  if (email === usuarioGuardado && password === contraseñaGuardada) {
    alert( "Inicio de sesión exitoso. ¡Bienvenido!" )
  } else {
    alert("Correo o contraseña incorrectos.")
  }
  
}

formularioLogin.addEventListener('submit',(e)=>{
    e.preventDefault();
    Login()
    window.location.href = "index.html"
})
  