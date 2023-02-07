/*
let banco1 = document.getElementById("bt");
// console.log(banco1.innerHTML);

let bancos = document.getElementsByClassName("banco");
// console.log(bancos[1].innerHTML);

let bancos2 = document.getElementsByTagName("section");
// console.log(bancos2.length);
// console.log(bancos2[1].innerHTML);

// for (const ban of bancos){
//     console.log(ban.innerHTML);
// }

banco1.innerText = "Banco Javascript";
console.log(banco1.innerText);

//agregando una clase
banco1.className = "testClass";
/*

// Creando un nodo. Después de crearlo debe ser agregao a alguna parte
let nodo = document.createElement("div");
nodo.innerHTML = "<h3>Este bando tiene la tasa <strong>más baja</strong> del mercado </h2>";
document.body.append(nodo);


// Borrando un nodo
bancos[2].remove();

let padre = document.getElementById("b1");
let agregado = ["tasa 1", "tasa 2", "tasa 3"];

for(const tasa of agregado){
    let li = document.createElement("li");
    li.innerHTML = tasa;
    padre.appendChild(li);
}

let obj = {id: 3, nombre: "Lolo", peso: 40};

// Plantillas literales, este formato nos sirve para los inner
let plant = `Su nombre es ${obj.nombre}, mientras que su peso es ${obj.peso}.`;
console.log(plant);

//seleccionando con entradas CSS
let que = document.querySelector("#b1 p");
que.innerHTML = "Esto es una prueba de un query selector";

// con query selectro all los agarro todos, no solo el primero y me deja un array
let queall = document.querySelectorAll("#b1 p");
for (const p of queall){
    p.innerHTML = "Dejando la caga con los ashetemele";
}

let botones = document.getElementsByClassName("btn");
let boton = document.getElementById("btn1");

boton.onclick = () => {console.log("Click")};
boton.onmousemove = () => {console.log("Move")};
boton.onmouseup = () => {console.log("Mouseup")};


let input1 = document.getElementById("i1");
let input2 = document.getElementById("i2");

input1.onkeyup = () => {console.log("keyup")};
input2.onkeydown = () => {console.log("down")};

//change cuando me salgo del campo, arroja el valor que quedó
input1.onchange = () => {console.log("valor1")};
input2.onchange = () => {console.log("valor2")};

input1.addEventListener("input", ()=>{
    console.log(input1.value);
})

//Crear storage, siempre el valor se guarda en string
sessionStorage.setItem("S1", "test de storage");
localStorage.setItem("S2", 213);

//Asignar storage a una variable
let sts = sessionStorage.getItem("S1");
let stl = localStorage.getItem("S2");

//Borrar storage
localStorage.removeItem("S2");

console.log(stl);
console.log(sts);
console.log(localStorage.getItem("S2"));

//convierte un objeto a texto de JSON con stringify
//esto se usa porque el storage guarda solo string, convierte todo a string. Entonces para no perder los objetos se pasan a Json y dp se recuperan
let enJson = JSON.stringify(obj);
console.log(enJson);

localStorage.setItem("objeto", enJson);

//Convierte string de JSON y lo devuelve a objeto JS con parse
let obj2 = JSON.parse(enJson);
console.log(obj2);
console.log(typeof(obj2));
console.log(typeof(enJson));

*/


// let i1 = document.querySelector("#i1");
// let i2 = document.querySelector("#i2");









