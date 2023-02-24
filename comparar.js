
//Funcione que compara créditos


//Comparación por menor tasa
async function compararTasa(borrar, cont){
    
    let tasaBancos = bancos.sort((a,b)=>{
        if (a.tasa > b.tasa){
            return 1;
        }
        if (a.tasa < b.tasa){
            return -1;
        }
        else return 0;
    })

    let tasaArr = tasaBancos.map(obj => "Banco " + obj.nombre + ": " + obj.tasa + "%").join("\n")

    borrar.remove();

    let titulo = document.createElement("div");
    titulo.innerHTML = `<h2>La lista de bancos ordenados por la mejor tasa de interés es:</h2>`;
    titulo.className = "tituloComparar";
    
    let comparado = document.createElement("p");
    comparado.innerText = tasaArr;
    
    cont.className = "d-flex flex-column justify-content-around secs";
    
    cont.append(titulo, comparado);

}


//Comparación por mayor plazo
async function compararPlazo(borrar, cont){
    let plazos = bancos.sort((a,b)=>{
        if (a.anos > b.anos){
            return -1;
        }
        if (a.anos < b.anos){
            return 1;
        }
        else return 0;
    })
    
    let plazoArr = plazos.map(obj => "Banco " + obj.nombre + ": " + obj.anos + " años").join("\n")
    
    borrar.remove();

    let titulo = document.createElement("div");
    titulo.innerHTML = `<h2>La lista de bancos ordenados por el mayor plazo de pago es:</h2>`;
    titulo.className = "tituloComparar";

    let comparado = document.createElement("p");
    comparado.innerText = plazoArr;
    
    cont.className = "d-flex flex-column justify-content-around secs";
    
    cont.append(titulo, comparado);

}


//Comparación por menor aporte inicial
async function compararPie(borrar, cont){
    let pie = bancos.sort((a,b)=>{
        if (a.pie > b.pie){
            return 1;
        }
        if (a.pie < b.pie){
            return -1;
        }
        else return 0;
    })

    let pieArr = pie.map(obj => "Banco " + obj.nombre + ": " + obj.pie*100 + "% del valor de la propiedad").join("\n");

    borrar.remove();

    let titulo = document.createElement("div");
    titulo.innerHTML = `<h2>La lista de bancos ordenados por el menor aporte inicial es:</h2>`;
    titulo.className = "tituloComparar";

    let comparado = document.createElement("p");
    comparado.innerText = pieArr;
    
    cont.className = "d-flex flex-column justify-content-around secs";
    
    cont.append(titulo, comparado);

    }

  