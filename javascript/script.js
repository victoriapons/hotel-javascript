//variable array donde se van a guardar todas las reservas
let arreglo_reservas = new Array ();

//variable generadora de ids
let gen_id = 1;

//inica simulador de reserva
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

function crear_reserva (){
    let check = true;
    
    while (check){
       let mensaje = "";

       let nombre = prompt ("Ingrese su Nombre").trim();
       let apellido = prompt ("Ingrese su Apellido").trim();
       let adultos = parseInt (prompt("¿Cuántos adultos son?"));
       let ninios = parseInt (prompt("¿Cuántos niños son?"));
       let noches = parseInt (prompt("¿Cuántos noches desean hospedarse?"));
       let entrada = prompt("Fecha de ingreso (dd/mm/aaaa)");
       let salida = prompt("Fecha de ingreso (dd/mm/aaaa)");

    if (!nombre){
        mensaje += "\nDebe ingresar su nombre."
    }

    if (!apellido){
        mensaje += "\nDebe ingresar su apellido."
    }

    if (!adultos){
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
        return new Reserva_hotel (nombre, apellido, adultos, ninios, noches, entrada, salida);
    }

    }
    return false;
}

function iniciar_reserva (){
    let reserva_hotel = crear_reserva();
    if (reserva_hotel) {
        reserva_hotel.set_id (gen_id);
        gen_id ++;
        arreglo_reservas.push(reserva_hotel);
    }

    console.log (reserva_hotel);
    let validacion = confirm ("¿Confirma su reserva?");
    
    if (validacion){
        alert("Reserva confirmada con éxito. ¡Muchas Gracias!");
    }else {
        elimino_reserva ();//pendiente a hacer
    }
}