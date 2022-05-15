/*
To format the string
*/
function doFormat() {
  //TODO----------------------------------

  // get value from input
  let textValue=text.value;

  //create a varailbe word
  let word='';
  // loop to get all the characters of p text
  for (let i=0;i<textValue.length;i++){
    if (textValue[i]!=' ' && i +1 <textValue.length){
      word+=textValue[i]
      // split word when meet space 
    }else{
      // check if the length of word smaller than or equal 6
      if (i +1 == textValue.length){
        word+=textValue[i]
      }
      if (word.length==1){
        let h1=document.createElement('h1');
        h1.textContent=word;
        container.appendChild(h1)
        word=""
      }else if(word.length==2){
        let h2=document.createElement('h2');
        h2.textContent=word;
        container.appendChild(h2)
        word= ''
      }else if(word.length==3){
        let h3=document.createElement('h3');
        h3.textContent=word;
        container.appendChild(h3)
        word= ''
      }else if(word.length==4){
        let h4=document.createElement('h4');
        h4.textContent=word;
        container.appendChild(h4)
        word= ''
      }else if(word.length==5){
        let h5=document.createElement('h5');
        h5.textContent=word;
        container.appendChild(h5)
        word= ''
      }else if(word.length==6){
        let h6=document.createElement('h6');
        h6.textContent=word;
        container.appendChild(h6)
        word= ''
      }else if(word.length>6){
        let p=document.createElement('p');
        p.textContent=word;
        container.appendChild(p)
        word= ''
      }
    }

  }

  // create type of h.. html element follow the length of word. Ex: AA => <h2>

  // set word as text content of h..

  //check if the length of word greater than 6 

  // create p element and set word as text content.

  // append p into container

}

//MAIN CODE------------------------------------------------------------
let text = document.querySelector("#text");
let container = document.querySelector(".container");
let format = document.getElementById("format");
format.addEventListener("click", doFormat);
