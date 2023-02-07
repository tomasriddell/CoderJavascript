//Clase bancos
class banco{
    constructor(nombre, tasa, pie, anos){
        this.nombre = nombre;
        this.tasa = tasa;
        this.pie = pie;
        this.anos = anos;
    }

    cotizar(){
        prompt("Ingresa tu correo para ser contactado por un ejecutivo de banco " + this.nombre);
    }
}

//Objetos de distintos bancos
const banco1 = new banco("KRI",3.4,0.1,20);
const banco2 = new banco("Java",3.2,0.15,25);
const banco3 = new banco("STG",3.8,0.1,30);
const banco4 = new banco("React",3.0,0.2,20);
const banco5 = new banco("LuBank",3.6,0.15,30);


//Array de bancos
let bancos = [banco1, banco2, banco3, banco4, banco5];

//Función flecha que calcula la mensualidad
let mensualidad = (a,b,c,d) => ((a-b) * (1+c)^(d)) / (d*12);


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

// //Función que compara créditos
// function comparar(){
//     let opcion = prompt("Puedes comparar en base a la tasa, plazo o aporte inicial aceptado por estos bancos. Qué crierio de comparación deseas ocupar? \n"
//     +"1. Mejor tasa \n2. Mayor plazo \n3. Menor aporte inicial")

//     //Comparación por menor tasa
//     if (opcion == 1){
//         let tasaBancos = bancos.sort((a,b)=>{
//             if (a.tasa > b.tasa){
//                 return 1;
//             }
//             if (a.tasa < b.tasa){
//                 return -1;
//             }
//             else return 0;
//         })

//         let tasaArr = tasaBancos.map(obj => "Banco " + obj.nombre + ": " + obj.tasa + "%").join("\n")

//         alert(tasaArr);
//     }

//     //Comparación por mayor plazo
//     else if (opcion ==2){
//         let plazos = bancos.sort((a,b)=>{
//             if (a.anos > b.anos){
//                 return -1;
//             }
//             if (a.anos < b.anos){
//                 return 1;
//             }
//             else return 0;
//         })

//         let plazoArr = plazos.map(obj => "Banco " + obj.nombre + ": " + obj.anos + " años").join("\n")

//         alert(plazoArr);
//     }

//     //Comparación por menor aporte inicial
//     else if (opcion ==3){
//         let pie = bancos.sort((a,b)=>{
//             if (a.pie > b.pie){
//                 return 1;
//             }
//             if (a.pie < b.pie){
//                 return -1;
//             }
//             else return 0;
//         })

//         let pieOrden = pie.map(obj => "Banco " + obj.nombre + ": " + obj.pie*100 + "% del valor de la propiedad").join("\n")

//         alert(pieOrden);
//     }

//     else{
//         opcion = prompt("No ingresaste una opción válida, elige nuevamente el criterio de comparación")
//     }
// }


// Funcion que crea una funcionalidad dentro de la segunda sección
function funcionalidad (tit, parr, bot, ident, cont){
    let d = document.createElement("div");
    d.className = "opciones";
    d.innerHTML = `<h2 class="titulos">${tit}</h2>
    <p>${parr}</p>
    <input type="number" name="" id="valor" placeholder="Valor de la propiedad">
    <input type="number" name="" id="pie" placeholder="Aporte inicial">
    <button id="${ident}" class="btn btn-primary botones">${bot}</button>`
    cont.appendChild(d);
}


// Funcion que crea nueva sección pasando como parámetro la dirección flex y el contenedor padre
function nuevaSec (f, cont){
    let nuevaSeccion = document.createElement("section");
    nuevaSeccion.className =`d-flex flex-${f} justify-content-around secs`;
    cont.appendChild(nuevaSeccion);

    // funcionalidad ("Comparar bancos", "Conoce las tasas y condiciones de cada uno de los bancos por separado", "Comparar", "comparar", nuevaSeccion);

    return nuevaSeccion;
}



//Ir a buscar elementos del DOM

// Contenedor de todo
let contenedor = document.querySelector("#front");

// inputs de formulario 1
let nombre = document.querySelector("#nombre");
let mail = document.querySelector("#email");
nombre.onchange = () => sessionStorage.setItem("nombre", nombre.value);
mail.onchange = () => sessionStorage.setItem("mail", mail.value);

// formulario inicial
let form1 = document.querySelector("#formInicial");

// botón submit del formulario
let sub1 = document.querySelector("#enviarF1");

// función de evento que crea la segunda pantalla
let seccionDos = function (e){
    e.preventDefault();
    form1.remove();
    let seccion = nuevaSec("row", contenedor);
    funcionalidad ("Simular", "Ingresa el valor de la propiedad que quieres comprar junto con otros datos y te diremos el valor de la mensualidad que deberás pagar con cada banco", "Simular", "simular", seccion);

    let val = document.querySelector("#valor");
    let pi = document.querySelector("#pie");
    val.onchange = () => sessionStorage.setItem("valor", val.value);
    pi.onchange = () => sessionStorage.setItem("pie", pi.value);

    let botonSimular = document.getElementById("simular");
    // let botonComparar = document.getElementById("comparar");

    let seccionTres = function(e){
        e.preventDefault();
        seccion.remove();

        let seccion3 = nuevaSec("row", contenedor);
        
        let valSim = sessionStorage.getItem("valor");
        let pieSim = sessionStorage.getItem("pie");
        let nombre = sessionStorage.getItem("nombre");

        let simulacion = document.createElement("div");
        simulacion.innerText = nombre + ", el costo mensual de tu crédito hipotecario será de: \n"
        seccion3.appendChild(simulacion);

        for(const obj of bancos){
            let simuBanco = document.createElement("p");
            simuBanco.innerText = `$ ${Math.round(mensualidad(valSim, pieSim, obj.tasa, obj.anos) *100)/100} durante ${obj.anos} años en el banco ${obj.nombre}`;
            simulacion.appendChild(simuBanco);
        }
    }

    botonSimular.addEventListener("click", seccionTres);
    

    
    // let seccionCuatro = function(e){
    //     e.preventDefault();
    //     seccion.remove();
    // }
    
    
    // botonComparar.addEventListener("click", seccionCuatro);

}


// SIMULADOR
sub1.addEventListener("click", seccionDos);




