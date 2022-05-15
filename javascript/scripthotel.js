for (let i=3; i>0; i--) {
    alert (i);
    
}alert ("¡Bienvenido/a a nuestra web!");

let news = confirm ("¿Te gustaría suscribirte a nuestro nesletter? Ingrese si o no");
    if (news==true){
        let email = prompt ("Ingrese su correo");
        alert ("Su correo "+ email + " ¡ha sido registrado!")
    }else {
        console.log ("El usuario no se ha registrado.")
    }
