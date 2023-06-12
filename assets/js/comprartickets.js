


const Nombre = document.getElementById("nombre");
const Apellido = document.getElementById("apellido");
const btn_resumen = document.getElementById("btn-resumen");
const Correo = document.getElementById("correo");
const ExpresionRegularCorreo =  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();
})

function validate_name () {
     if (Nombre.value.length < 3 ) {
         document.getElementById("error_name").innerHTML = "El nombre ingresado es inválido"
         } else {
             document.getElementById("error_name").innerHTML = "El nombre ingresado es válido"
         }
}

 btn_resumen.addEventListener("click", validate_name);

 function validate_last_name () {
     if (Apellido.value.length < 2) {
         document.getElementById("error_last_name").innerHTML = "El apellido ingresado es inválido"
         } else {
             document.getElementById("error_last_name").innerHTML = "El apellido ingresado es válido"
         }
 }
 btn_resumen.addEventListener("click", validate_last_name);

 function validate_email () {
    if (!ExpresionRegularCorreo.test (Correo.value)) {
        document.getElementById("error_email").innerHTML = "El correo ingresado es inválido"
    } else {
        document.getElementById("error_email").innerHTML = "El correo ingresado es válido"
    }
 }

 btn_resumen.addEventListener("click", validate_email);

 let valorGeneral = 200;
 let cantidadEntradas = document.getElementById("cantidad_entradas");
 let selectDescuento = document.getElementById("select_descuento");  

 function calcular_total_a_pagar() { 
    switch (selectDescuento.value) {
      case "1":
        valorGeneral = valorGeneral * 0.2 * cantidadEntradas.value;
        document.getElementById('total_a_pagar').innerHTML= "Total a pagar: $" + valorGeneral;
        break;
      case "2":
        valorGeneral = 200 * 0.5 * cantidadEntradas.value;
        document.getElementById('total_a_pagar').innerHTML= "Total a pagar: $" + valorGeneral;
        break;
      case "3":
        valorGeneral = 200 * 0.85 * cantidadEntradas.value;
        document.getElementById('total_a_pagar').innerHTML= "Total a pagar: $" + valorGeneral;
        break;
        case "4":
            valorGeneral = 200 * cantidadEntradas.value;
            document.getElementById('total_a_pagar').innerHTML= "Total a pagar: $" + valorGeneral;    
            break;
      default:
        break;
    }
   
}  
  
btn_resumen.addEventListener("click", calcular_total_a_pagar);

function borrar_total(){
    document.getElementById('total_a_pagar').innerHTML= "Total a pagar: $" ;
    
}
 
bnt_borrar.addEventListener("click" , borrar_total)
