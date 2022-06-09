//Creo objeto: Reservas

class Reserva_hotel {

    constructor (nombre, adultos, ninios, check_in, check_out){
        this.nombre = nombre;
        this.adultos = adultos;
        this.ninios = ninios;
        this.check_in = check_in;
        this.check_out = check_out;
        this.id = -1;
    }

    //metodo para mostrar descripcion: detalle de reserva 

    detalle_reserva () {
        return ("Tu reserva es: #" + this.id + "\n" + this.nombre + " " + "\nAdultos: " + this.adultos + "\nNiños: " 
        + this.ninios + "\nFecha de entrada: " + this.check_in + "\nFecha de salida: " + this.check_out);
    }

    //seteo id

    set_id (nuevo_id){
        this.id = nuevo_id;
    }
}

/*precio
function precioPorNoche (noches) {
    const iva = 0.21;
    let precio = 3000;
    return resultado = noches * precio + ((noches * precio)*iva)
}
*/