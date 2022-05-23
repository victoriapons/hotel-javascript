//algoritmo con ciclo

for (let i=3; i>0; i--) {
    alert (i);
    
}alert ("¡Bienvenido/a a nuestra web!");

//algoritmo condicional

let news = confirm ("¿Te gustaría suscribirte a nuestro nesletter?");
    if (news==true){
        let email = prompt ("Ingrese su correo");
        alert ("Su correo "+ email + " ¡ha sido registrado!")
    }else {
        console.log ("El usuario no se ha registrado.")
    }

//funciones
const iva = 0.21
let precio = 3000

function precioPorNoche (cant_noches, px) {
    return resultado = cant_noches * precio + ((cant_noches * precio)*iva)
}
let precio_por_noche = precioPorNoche (parseFloat(prompt("¿Cuántas noches desea alojarse?")));

alert (precio_por_noche)

//objeto 
const reserva = {
    nombre: "Victoria",
    apellido: "Pons",
    adultos: "2",
    ninios: "1",
    noches: "3",
    entrada: "22/05/2022",
    salida: "25/05/20220",
}

const reserva1 = {
    nombre: "Lourdes",
    apellido: "Pons",
    adultos: "3",
    ninios: "0",
    noches: "3",
    entrada: "22/05/2022",
    salida: "25/05/20220",
}

console.log("Reservas actuales " + reserva + "\n" +reserva1);

//array 

let arreglo_res = new Array_desafio ();

reserva.push (Array_desafio)