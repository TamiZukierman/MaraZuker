//BIENVENIDO A ESTUDIO BALCON
function solicitarNombre(){
let nombreIngresado = prompt("Ingresa tu nombre")
alert("Buenvenido/a " + nombreIngresado + " a Estudio Balcón, llevar a cabo tus ideas es nuestra pasión!");
}

solicitarNombre()

//INGRESO DE ELECCION DE ESTUDIO
let ingresarSala = prompt("Ingresa A, B o C según el la medida del estudio que te necesitas!: A) 3.5m x 4.5m / B) 5m x 5m / C) 8m x 10m)");

if (ingresarSala === "A" || ingresarSala === "a") {
    alert ("Elegiste el estudio A ;)"); 
}
else if (ingresarSala === "B" || ingresarSala === "b") {
    alert ("Elegiste el estudio B ;)"); 
}
else if (ingresarSala === "C" || ingresarSala === "c") {
    alert ("Elegiste el estudio C ;)"); 
}
else {
    alert("No has ingresado ninguna opción :(")
}

//INGRESO DE ELECCION DE CANTIDAD DE HORAS
let ingresarHoras = parseInt(prompt("Ingresa la cantidad que horas que necesitaras en nuestro estudio: 2, 3, 4, 5, 6, 7, 8"));

switch(ingresarHoras){
    case 2:
        alert ("Seleccionaste 2 horas!");
        break;
    case 3:
        alert ("Seleccionaste 3 horas!");
        break;
    case 4:
        alert ("Seleccionaste 4 horas!");
        break;
    case 5:
        alert ("Seleccionaste 5 horas!");
        break;
    case 6:
        alert ("Seleccionaste 6 horas!");
        break;
    case 7:
        alert ("Seleccionaste 7 horas!");
        break;
    case 8:
        alert ("Seleccionaste 8 horas!");
        break;
    default:
        alert ("No ingresaste ninguna opción :(");
        break;
}

//PRECIOS POR HORA 



