//Creo objeto: Reservas

class Reserva_hotel {

    constructor (nombre, apellido, adultos, ninios, noches, entrada, salida){
        this.nombre = nombre;
        this.apellido = apellido;
        this.adultos = adultos;
        this.ninios = ninios;
        this.noches = noches;
        this.entrada = entrada;
        this.salida = salida;
        this.id = -1;
    }

    //metodo para mostrar descripcion: detalle de reserva 

    detalle_reserva () {
        return ("Tu reserva es: #" + this.id + "\n" + this.nombre + " " + this.apellido + "\nAdultos: " + this.adultos + "\nNiños: " 
        + this.ninios + "\nCantidad de noches: " + this.noches + "\nFecha de entrada: " + this.entrada 
        + "\nFecha de salida: " + this.salida + "\nPrecio total: " + precioPorNoche (this.noches));
    }

    //seteo id

    set_id (nuevo_id){
        this.id = nuevo_id;
    }
}

//precio
function precioPorNoche (noches) {
    const iva = 0.21;
    let precio = 3000;9
    return resultado = noches * precio + ((noches * precio)*iva)
}