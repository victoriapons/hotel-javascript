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
let adultos = prompt ("¿Cuántos adultos son?")
let niños = prompt ("¿Cuántos niños son?")
let precio_por_noche = precioPorNoche (parseFloat(prompt("¿Cuántas noches desea alojarse?")));

alert (precio_por_noche)