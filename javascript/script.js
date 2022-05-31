//variable array donde se van a guardar todas las reservas
let arreglo_reservas = new Array ();

//variable generadora de ids
let gen_id = 1;

/*inica simulador de reserva
alert ("¡Bienvenidos al Hotel Pons!");
let flag = true;


while (flag) {
    let inicio = confirm ("¿Desea inciar una reserva?");
    if (inicio == true) {
        
        //funcion para hacer reserva
        iniciar_reserva ();
    
    }else {
        //indicando flag=false termino el ciclo
        flag = false;
    }
}
*/

/*function crear_reserva (){
    let check = true;
    
    while (check){
       let mensaje = "";
     let nombre = document.getElementById("nombre");
       let adultos = document.getElementById("adultos");
       let ninios = document.getElementById("ninios");
       let entrada = document.getElementById("check_in");
       let salida = document.getElementById("check_out");

/*   if (!adultos){
       mensaje += "\nDebe ingresar la cantidad de adultos."
    }

    if (!noches){
        mensaje += "\nDebe ingresar la cantidad de noches."
    }

    if (!entrada){
        mensaje += "\nDebe ingresar la fecha de ingreso."
    }
    
    if (!salida){
        mensaje += "\nDebe ingresar la fecha de salida."
    }

    if(mensaje != "") {
        alert (mensaje);
        check = confirm ("Complete todos los datos.") //este check me va a cortar la función reserva
    }else{
        return new Reserva_hotel (nombre, adultos, ninios, entrada, salida);
}

function iniciar_reserva (){
    let reserva_hotel = crear_reserva();
    if (reserva_hotel) {
        reserva_hotel.set_id (gen_id);
        gen_id ++;
        arreglo_reservas.push(reserva_hotel);
    }
}
*/

//Btn reserva

let btn_reserva = function (){
    let check_in = document.getElementById("check_in").value;
    let check_out = document.getElementById("check_out").value;
    let adultos = document.getElementById("adultos").value;
    let ninios = document.getElementById("ninios").value;

    if (check_in == ""){
        let check_in = document.getElementById("check_in").focus();
    }else {
        if (check_out== "") {
            let check_out = document.getElementById("check_out").focus();
        } else {
            if (adultos == "") {
                let adultos = document.getElementById("adultos").focus();
            }else {
                console.log("Check In: " + check_in + "\nChek Out: " + check_out + "\nCantidad de adultos: " + adultos + "\nCantidad de niños: " + ninios);
                document.getElementById("check_in").value = "";
                document.getElementById("check_out").value = "";
                document.getElementById("adultos").value = "";
                document.getElementById("ninios").value = "";
                document.getElementById("check_in").focus();
            }
        }
    }
}

let boton = document.getElementById("reserva");
boton.onclick = btn_reserva();

   
