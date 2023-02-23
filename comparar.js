
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
