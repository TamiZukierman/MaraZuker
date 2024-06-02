///////////FUNCION MOSTRAR NOMBRE DE LA PERSONA AL REFRESCAR LA PAGINA O BIEN UN SALUDO SI NO ESTA GUARDADO//////////
function mostrarNombre() {
    //obtenemos el elemento 'nombre-usuario' del DOM 
    let elementoNombre = document.getElementById("nombre-usuario");
    //utilizar getitem para obtener el nombre desde el localStorage
    let formularioGuardado = localStorage.getItem("contactoForm");


    //CONDICIONAL QUE pregunte si existe un nombre guardado
    if (formularioGuardado) {
        const form = JSON.parse(formularioGuardado);
        elementoNombre.textContent = "Hola " + form.nombre + "!";
        elementoNombre.style.color = "#ff1280"; 

    }
    else {
      //Si no hay un nombre guardado, mostrar un mensaje predeterminado
        elementoNombre.textContent = 'Hola visitante!';
    }

}

/////////////////////////////////FUNCION ENVIAR FORMULARIO//////////////////////////////////////////////////////////
function enviarFormulario(e) {
e.preventDefault();
//obtener los valores de entrada
let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let mensaje = document.getElementById("mensaje").value;

//simulacion del envio de datos al servidor
console.log(`Enviando datos al servidor \n${nombre}\n${email}\n${mensaje}`);

//DECLARAMOS OBJETO FORM
const objForm = {"nombre": nombre, "email": email, "mensaje": mensaje};

//SETEAMOS FORM Y ENVIAMOS A STORAGE
const enJason = JSON.stringify (objForm);
localStorage.setItem("contactoForm", enJason);

Swal.fire({
    html: `Gracias por contactarnos, <strong>${nombre}</strong>!<br>Hemos recibido tu mensaje y te responderemos a <strong>${email}</strong> pronto!`,
    icon: "info",
    iconColor: "#ff1280",
    confirmButtonColor: "#0000EE",
});

}

//EVENTO AL FORMULARIO PARA DETECTAR EL ENVIO
document.getElementById('submit').addEventListener('click', enviarFormulario);
document.addEventListener('DOMContentLoaded', mostrarNombre);




