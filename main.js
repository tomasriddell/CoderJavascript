
//Objetos de distintos bancos sin tasa y sin años de plazo
const banco1 = new banco("KRI",null,0.1,null);
const banco2 = new banco("Java",null,0.15,null);
const banco3 = new banco("STG",null,0.1,null);
const banco4 = new banco("React",null,0.2,null);
const banco5 = new banco("LuBank",null,0.15,null);


//Array de bancos
let bancos = [banco1, banco2, banco3, banco4, banco5];

//Ir a buscar tasa y años a un json con fetch
fetch("tasas-anos.json")
    .then(resp =>resp.json())
    .then(data=>{
        let i=0;
        data.forEach(element => {
            bancos[i].tasa = element.tasa;
            bancos[i].anos = element.anos;
            i++
        })
    });


//Función flecha que calcula la mensualidad
let mensualidad = (a,b,c,d) => ((a-b) * (1+c)^(d)) / (d*12);


// Funcion que crea una funcionalidad dentro de la segunda sección
function funcionalidad (tit, parr, bot, ident, cont){
    let d = document.createElement("div");
    d.className = "opciones";
    d.innerHTML =   `<h2 class="titulos">${tit}</h2>
                    <p id=parrafo_sim>${parr}</p>
                    <button id="${ident}" class="btn btn-primary botones">${bot}</button>`
    cont.appendChild(d);
    return d;
}


// Funcion que crea nueva sección pasando como parámetro la dirección flex y el contenedor padre
function nuevaSec (f, cont){
    let nuevaSeccion = document.createElement("section");
    nuevaSeccion.className =`d-flex flex-${f} justify-content-around secs`;
    cont.appendChild(nuevaSeccion);

    return nuevaSeccion;
}






//borrar formulario inicial y crear nueva sección
function Secc2(){
    form1.remove(); 
    let seccion2 = nuevaSec("row", contenedor);

    //crear funcionaildad simular
    let sim = funcionalidad("Simular", "Ingresa el valor de la propiedad que quieres comprar junto con otros datos y te diremos el valor de la mensualidad que deberás pagar con cada banco", "Simular", "simular", seccion2);
    let input_simular = document.createElement("div");
    input_simular.innerHTML = `
    <input type="number" name="" id="valor" placeholder="Valor de la propiedad">
    <input type="number" name="" id="pie" placeholder="Aporte inicial"></input>`;
    let parrafo_simular = document.querySelector("#parrafo_sim")
    parrafo_simular.appendChild(input_simular);                    
    
    //crear funcionalidad comparar
    let comp = funcionalidad("Comparar", "Compara los datos de distintos bancos según su tasa, plazo y condiciones", "Comparar", "comparar", seccion2);
    
}


//promesa que valida que el correo y mail ingresados por el usuario son correctos
const nombre_mail = function(nom, eml){
    return new Promise((resolve,reject)=>{
    if (isNaN(nom.value) && isNaN(eml.value)){
        sessionStorage.setItem("nombre", nom.value);
        sessionStorage.setItem("mail", eml.value);
        resolve();
    } else reject();
    }
    )
};


//Ir a buscar elementos del DOM
// Contenedor de todo
let contenedor = document.querySelector("#front");


// inputs de formulario 1
let nombre = document.querySelector("#nombre");
let mail = document.querySelector("#email");
// nombre.onchange = () => sessionStorage.setItem("nombre", nombre.value);
// mail.onchange = () => sessionStorage.setItem("mail", mail.value);


// formulario inicial
let form1 = document.querySelector("#formInicial");

// botón submit del formulario
let sub1 = document.querySelector("#enviarF1");








// función de evento que crea la segunda pantalla
let seccionDos = function (e){
    e.preventDefault();
    return new Promise((resolve, reject)=>{

        nombre_mail(nombre,mail)
        .then((res=>{
            Swal.fire('Datos ingresados correctamente')
            Secc2();
            resolve();
        }))

        .catch((rej)=>{
            Swal.fire('Los datos ingresados no son válidos, intenta nuevamente')    
        })

})
    
}


seccionDos()
    .then(()=>{
        let val = document.querySelector("#valor");
        let pi = document.querySelector("#pie");
        val.onchange = () => sessionStorage.setItem("valor", val.value);
        pi.onchange = () => sessionStorage.setItem("pie", pi.value);
    
    
        let botonSimular = document.getElementById("simular");
        let botonComparar = document.getElementById("comparar");
    
    })

/*
    let seccionTres = function(e){
        e.preventDefault();
        seccion2.remove();

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

    let seccionCuatro = function(e){
        e.preventDefault();
        seccion2.remove();
    }

    botonSimular.addEventListener("click", seccionTres);
    botonComparar.addEventListener("click", seccionCuatro);
    


*/


// SIMULADOR
sub1.addEventListener("click", seccionDos());




