//variable array donde se van a guardar todas las reservas
let arreglo_reservas = new Array ();

const local_storage = reservas_guardadas;

let reservas_guardadas = cargar_reservas();

//variable generadora de ids
let gen_id = 1;

//Btn reserva (1er form)
const buton_form = document.getElementById("reserva");

buton_form.addEventListener("click", () => btn_reserva());

let btn_reserva = function (){
    let check_in = document.getElementById("check_in").value;
    let check_out = document.getElementById("check_out").value;
    let adultos = document.getElementById("adultos").value;
    let ninios = document.getElementById("ninios").value;
    let reserva_confirmada = document.getElementById("reserva-confirmada");

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
                document.getElementById("reserva-confirmada").style.display = "flex";
               
                let reserva = new Reserva (id,nombre,correo, check_in,check_out,adultos,ninios);
                
                id++;

                //guardo reserva en local storage
                reservas_guardadas.push(reserva);
                localStorage.setItem(local_storage,JSON.stringify(reservas_guardadas));
            }
        }
    }
}


//confirmación de reserva (2do form)
const buton_confirm = document.getElementById("confirmacion");

buton_confirm.addEventListener("click", () => confirmacion_reserva());


let confirmacion_reserva = function (){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    if (nombre == ""){
        let nombre = document.getElementById("nombre").focus();
    }else {
        if (correo== "") {
            let correo = document.getElementById("correo").focus();
        } else {
                console.log("Nombre: " + nombre + "\nCorreo: " + correo );
                document.getElementById("nombre").value = "";
                document.getElementById("correo").value = "";
                let buton_confirm = document.getElementById("confirmacion").innerHTML = 'Enviado';
                buton_confirm = document.getElementById("confirmacion").style.backgroundColor = 'rgb(175, 193, 199)';
            }
    }
}


//funcion para guardar datos 

function cargar_reservas (){
    let arreglo = localStorage.getItem(reservas_guardadas);
    if (arreglo){
        arreglo= JSON.parse(arreglo);
        for (let i = 0 ; i < arreglo.length ; i++){
            let resev = arreglo[i];
        }
        return arreglo;
    }
}
