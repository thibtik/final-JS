/*
To change style follow the data from input
*/
function changeStyle() {
    //TODO
    color.value;
    


    

}
//MIAN CODE--------------------------------------------
let isDartMode = document.querySelector("#mode");
console.log(isDartMode)
let p = document.querySelector("p");
let color = document.querySelector("#color");
let range = document.querySelector("#range");
let header = document.querySelector("header");
header.addEventListener("change", changeStyle);


// /*
// To change style follow the data from input
// */
// function changeStyle() {
//     //TODO


//     p.style.color=color.value;


//     p.style.fontSize=range.value+'px';

//     document.body.style.backgroundColor='white';
//     if (isDartMode.checked){
//         document.body.style.backgroundColor='black';
//     }

// }
// //MIAN CODE--------------------------------------------
// let isDartMode = document.querySelector("#mode");
// console.log(isDartMode)
// let p = document.querySelector("p");
// let color = document.querySelector("#color");
// let range = document.querySelector("#range");
// let header = document.querySelector("header");
// header.addEventListener("change", changeStyle);