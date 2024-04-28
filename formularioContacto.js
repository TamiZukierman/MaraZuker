function enviarFormulario() {
//obtener los valores de entrada
let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let mensaje = document.getElementById("mensaje").value;

//simulacion del envio de datos al servidor
console.log(`Enviando datos al servidor \n${nombre}\n${email}\n${mensaje}`);

//mostrar una respuesta al usuario 
document.getElementById("respuesta-envio").innerHTML = 
`<strong>Gracias por contactarnos, ${nombre}!</strong><br>
Hemos recibido tu mensaje y te responderemos a <em>${email}</em> pronto.`;

}