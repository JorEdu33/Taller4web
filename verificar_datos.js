function verificarNombre() {
    var nombre = document.getElementById("nombre").value;
    var mensajeError = document.getElementById("mensaje-error_nom");
    if (nombre == "" || nombre.length > 25) {
        mensajeError.innerHTML = "El nombre no puede estar vacío ni exceder los 25 caracteres.";
    } else {
        mensajeError.innerHTML = "";
    }
}


function verificarApellido() {
    var apellido = document.getElementById("apellido").value;
    var mensajeError = document.getElementById("mensaje-error_ape");
    if (apellido == "" || apellido.length > 25) {
        mensajeError.innerHTML = "El Apellido no puede estar vacío ni exceder los 25 caracteres.";
    } else {
        mensajeError.innerHTML = "";
    }
}

function verificarDireccion(){
    var direccion = document.getElementById("direccion").value;
    var mensajeError = document.getElementById("mensaje-error_di");
    if (!direccion.startsWith("cll") && !direccion.startsWith("cra") && !direccion.startsWith("av") && !direccion.startsWith("anv") && !direccion.startsWith("trans")) {
        mensajeError.innerHTML ="Por favor ingrese una dirección válida que comience con cll, cra, av, anv o trans.";
    }else {
        mensajeError.innerHTML = "";
    }
}


function verificarUsuario() {
    var ccusuario = document.getElementById("CC_Usuario").value;
    var mensajeError = document.getElementById("mensaje-error_ccuser");
    var patron = /^[a-zA-Z0-9]+$/;

    if (ccusuario === "" || ccusuario.length > 20 || ccusuario.length < 10 || !patron.test(ccusuario)) {
        mensajeError.innerHTML = "El usuario debe tener una longitud entre 10 y 20 caracteres y no debe contener caracteres extraños.";
    } else {
        mensajeError.innerHTML = "";
    }
}

function verificarContrasena() {
    var ccpaswd = document.getElementById("ccpaswd").value;
    var confpaswd = document.getElementById("confpaswd").value;
    var mensajeError = document.getElementById("mensaje-error_cont");
    var mayuscula = /[A-Z]/;
    var numero = /[0-9]/;
    var caracterEspecial = /[#%/&]/;
    var longitud = ccpaswd.length;

    if (ccpaswd == "" || confpaswd == "") {
        mensajeError.innerHTML = "El campo ccpaswd y el campo confirmar contraseña son obligatorios.";
    } else if (longitud < 15 || longitud > 20) {
        mensajeError.innerHTML = "La contraseña debe tener una longitud de entre 15 y 20 caracteres.";
    } else if (!mayuscula.test(ccpaswd)) {
        mensajeError.innerHTML = "La contraseña debe contener al menos una letra mayúscula.";
    } else if (!numero.test(ccpaswd)) {
        mensajeError.innerHTML = "La contraseña debe contener al menos un número.";
    } else if (!caracterEspecial.test(ccpaswd)) {
        mensajeError.innerHTML = "La contraseña debe contener al menos uno de los siguientes caracteres especiales: #, %, /, &.";
    } else if (ccpaswd != confpaswd) {
        mensajeError.innerHTML = "Las contraseñas no coinciden.";
    } else {
        mensajeError.innerHTML = "";
    }
}

function verificarEmail() {
    var nombre = document.getElementById("correo").value;
    var mensajeError = document.getElementById("mensaje-error_email");
    if (nombre == "" || nombre.length > 120) {
        mensajeError.innerHTML = "Por favor ingrese un correo electrónico con una longitud máxima de 120 caracteres.";
    } else {
        mensajeError.innerHTML = "";
    }
}

function habilitarGustos() {
    // Mostrar la sección de gustos
    document.getElementById("gustos").style.display = "block";
  }
  
  function deshabilitarGustos() {
    // Ocultar la sección de gustos
    document.getElementById("gustos").style.display = "none";
  }

  function mostrarValor() {
    var valor = document.getElementById("rango").value;
    document.getElementById("valor").innerHTML = valor;
  }
  