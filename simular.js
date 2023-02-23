//Función que corre el simulador de crédito
function simulador(){
    let valor = prompt("Ingresa el valor de la propiedad que quieres comprar");
    while (valor<=0 || isNaN(valor) == true){
        valor = prompt("Debe ser un número mayor a cero, ingresa el valor de la propiedad que quieres comprar")
    }
    
    let pie = prompt("Ingresa el aporte inicial para comprar tu propiedad");
    while (pie<=0 || isNaN(pie) == true){
        pie = prompt("Debe ser un número mayor a cero, ingresa el aporte inicial para comprar tu propiedad")
    }

    for(const obj of bancos){
        alert("El costo mensual de tu crédito hipotecario será de: \n"
        +"$" + Math.round(mensualidad(valor, pie, obj.tasa, obj.anos) *100)/100  + " durante " + obj.anos + " años en el banco " + obj.nombre);
    }
    
}
