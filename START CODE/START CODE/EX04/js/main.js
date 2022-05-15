/*
To get the all the number of radios
*/
function getNumRadio() {
    //TODO
    let allRadio=document.getElementsByTagName('input').length;
    window.confirm(allRadio)
}

/*
To get the number of radio that seleted
*/
function getNumRadioSeleted() {
    //TODO
    let allRadio=document.getElementsByTagName('input');
    let check=0;
    for (let v of allRadio){
        if (v.checked){
            check+=1
        }
    }
    window.confirm(check)
    
    
}
//MAIN CODE----------------------------------------------------------------
let btnGetNumRadio = document.querySelector("#get-nb-radio");
console.log(btnGetNumRadio);
let btnGetNumRadioSeleted = document.querySelector("#get-nb-radio-seleted");

btnGetNumRadio.addEventListener("click", getNumRadio);
btnGetNumRadioSeleted.addEventListener("click", getNumRadioSeleted);



// /*
// To get the all the number of radios
// */
// function getNumRadio() {
//     //TODOparseInt
    
//     let allRadio=document.getElementsByTagName('input').length;
//     alert('The number of radio are: ' +allRadio)

// }

// /*
// To get the number of radio that seleted
// */
// function getNumRadioSeleted() {
//     //TODO
//     let allRadio=document.getElementsByTagName('input');
//     let checkNumber=0;
//     for (let radio of allRadio){
//         if (radio.checked){
//             checkNumber+=1
//         }
//     }
//     alert(checkNumber)
// }
// //MAIN CODE----------------------------------------------------------------
// let btnGetNumRadio = document.querySelector("#get-nb-radio");
// console.log(btnGetNumRadio);
// let btnGetNumRadioSeleted = document.querySelector("#get-nb-radio-seleted");

// btnGetNumRadio.addEventListener("click", getNumRadio);
// btnGetNumRadioSeleted.addEventListener("click", getNumRadioSeleted);