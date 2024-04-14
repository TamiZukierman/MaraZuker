//BIENVENIDO A ESTUDIO BALCON
function solicitarNombre(){
let nombreIngresado = prompt("Ingresa tu nombre:")
alert("Buenvenido/a " + nombreIngresado + " a Estudio Balcón, llevar a cabo tus ideas es nuestra pasión!");
console.log("la persona que ingreso es " + nombreIngresado);
}

solicitarNombre()

//INGRESO DE ELECCION DE ESTUDIO/SALA 

let ingresarSala;
do {
    ingresarSala = prompt("Ingresa A, B o C según la medida del estudio que necesitas: A) 3.5m x 4.5m, B) 5m x 5m, C) 8m x 10m");
    if (ingresarSala != null) {
        ingresarSala = ingresarSala.toUpperCase();
    }

    if (ingresarSala !== "A" && ingresarSala !== "B" && ingresarSala !== "C") {
        alert("No has ingresado ninguna opción válida :(");
    } else {
        alert(`Elegiste el estudio ${ingresarSala}!`); 
        console.log(`El estudio elegido es ${ingresarSala}`);
    }
} while (ingresarSala !== "A" && ingresarSala !== "B" && ingresarSala !== "C"); 


//INGRESO DE ELECCION DE CANTIDAD DE HORAS

let ingresarHoras

do {
    ingresarHoras = parseInt(prompt("Ingresa la cantidad de horas que necesitas (2-8):"));
    if (ingresarHoras < 2 || ingresarHoras > 8) {
        alert("No ingresaste ninguna opción válida :(");
    } else {
        alert(`Seleccionaste ${ingresarHoras} horas!`);
        console.log(`La cantidad de horas ingresadas es ${ingresarHoras} horas!`);
    }
} while (ingresarHoras < 2 || ingresarHoras > 8);


//CALCULAR PRECIO 

function calcularPrecioEstudio(medida, horas) {
        let precioBase = 0;
        switch(medida) {
            case "A":
                precioBase = 20000;
                break;
            case "B":
                precioBase = 25000;
                break;
            case "C":
                precioBase = 30000;
                break;
            default: 
                return "Elección inválida";
        }
        let descuento = 1
        if (horas>2) {
            descuento = calcularDescuento (horas)
        }
        let precioTotal = precioBase * descuento * horas;
        return `El precio total por ${horas} horas en el estudio ${medida} es: $${precioTotal}`;
    }
    
    let medidaSeleccionada = ingresarSala;
    let horasSeleccionadas = ingresarHoras;
    
    let precioFinal = calcularPrecioEstudio(medidaSeleccionada, horasSeleccionadas);
    alert(precioFinal)
    console.log("El precio final es: " + precioFinal)
    ;

function calcularDescuento (horas) {
    let porcentaje = 5;
    return 1 - ((horas - 2)*porcentaje)/100;

}

