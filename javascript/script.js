//variable array donde se van a guardar todas las reservas
let arreglo_reservas = new Array ();

const reservas_guardadas = [];

mostrar_local();

//variable generadora de ids
let gen_id = 1;

//Btn reserva (1er form)
const buton_form = document.getElementById("reserva");

buton_form.addEventListener("click", () => btn_reserva());

function btn_reserva(){
    let check_in = document.getElementById("check_in").value;
    let check_out = document.getElementById("check_out").value;
    let adultos = document.getElementById("adultos").value;
    let ninios = document.getElementById("ninios").value;
    let reserva_confirmada = document.getElementById("reserva-confirmada");

    if (check_in == ""){
        let check_in = document.getElementById("check_in").focus();
        swal("Ingrese día de llegada.");
    }else {
        if (check_out== "") {
            let check_out = document.getElementById("check_out").focus();
            swal("Ingrese día de salida.");
        } else {
            if (adultos == "") {
                let adultos = document.getElementById("adultos").focus();
                swal("Ingrese cantidad de personas.");
            }else {

                console.log("Check In: " + check_in + "\nChek Out: " + check_out + "\nCantidad de adultos: " + adultos + "\nCantidad de niños: " + ninios);
                document.getElementById("check_in").value = "";
                document.getElementById("check_out").value = "";
                document.getElementById("adultos").value = "";
                document.getElementById("ninios").value = "";
                document.getElementById("check_in").focus();
                document.getElementById("reserva-confirmada").style.display = "flex";

                //carga a array
                let reserva = new Reserva_hotel(nombre, ninios, adultos, check_in,check_out);

                //guardo reserva en local storage
                reservas_guardadas.push(reserva);
                cargar_reservas(reserva);
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
        swal("Ingrese su nombre.");
    }else {
        if (correo== "") {
            let correo = document.getElementById("correo").focus();
            swal("Ingrese un correo.");
        } else {
                console.log("Nombre: " + nombre + "\nCorreo: " + correo );
                document.getElementById("nombre").value = "";
                document.getElementById("correo").value = "";
                let buton_confirm = document.getElementById("confirmacion").innerHTML = 'Enviado';
                buton_confirm = document.getElementById("confirmacion").style.backgroundColor = 'rgb(175, 193, 199)';

                //sweetalert
                swal({
                    title: "¡Reserva confirmada!",
                    text: "Los datos serán enviados a tu correo.",
                    icon: "success",
                    button: "Aceptar",
                  });
            }
    }
}

//funcion para mostrar datos
function mostrar_local(){
    if (localStorage.getItem("reservas") !=null){
        data = JSON.parse(localStorage.getItem("reservas"));
        console.log(data);
    }
}

//funcion para guardar datos 

function cargar_reservas(reserva){
    let data_parsed = JSON.parse(localStorage.getItem("reservas"));
    if (data_parsed ==null){
        let array = [];
        array.push(reserva);
        localStorage.setItem("reservas", JSON.stringify(array));
    } else {
        data_parsed.push(reserva);
        localStorage.setItem("reservas", JSON.stringify(data_parsed));
    } 
}
