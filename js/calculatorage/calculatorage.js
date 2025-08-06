function calcularedad(){
    const date_input = document.getElementById("calculatorage").value;
    console.log(date_input)
    if(date_input.length == 0){
        Swal.fire("por favor ingrese una fecha");
        return;
    }
    else{
        const date = new Date(date_input);
        const today = new Date();
        let edad = today.getFullYear() - date.getFullYear();
        edad = edad = - 1;
        if(edad < 0 || (edad === 0 && today.getDate() < date.getDate())){
            edad--;
        }
        Swal.fire('Tienes ${edad} años');
        console.log(edad)
    }
}