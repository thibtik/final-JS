
// function use to sum
function sum() {
    // TODO
    let sumNumber=parseInt(firstNum.value)+parseInt(secondNum.value);
    h1.textContent=sumNumber
}
// function use to multiply
function multiply() {
    // TODO
    let multi=parseInt(firstNum.value)*parseInt(secondNum.value);
    h1.textContent=multi
}
// MAIN CODE-----------------------------------------------------------

let firstNum = document.querySelector("#first-num");
let secondNum = document.querySelector("#second-num");
let h1 = document.querySelector("h1");
let btnSum = document.querySelector("#sum");
let btnMultiply = document.querySelector("#multiply");
btnSum.addEventListener("click", sum);
btnMultiply.addEventListener("click", multiply);





// // function use to sum
// function sum() {
//     // TODO
//     let firstNum = document.querySelector("#first-num").value;
//     let secondNum = document.querySelector("#second-num").value;
//     let sumNumber=parseInt(firstNum+secondNum)
//     h1.textContent=sumNumber
// }
// // function use to multiply
// function multiply() {
//     // TODO
//     let first=document.getElementById('first-num').value;
//     let seconde=document.getElementById('second-num').value;
//     h1.textContent=(parseInt(seconde*first))
// }
// // MAIN CODE-----------------------------------------------------------


// let h1 = document.querySelector("h1");
// let btnSum = document.querySelector("#sum");
// let btnMultiply = document.querySelector("#multiply");
// btnSum.addEventListener("click", sum);
// btnMultiply.addEventListener("click", multiply);