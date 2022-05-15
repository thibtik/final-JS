
// function to delete class card
function deleteElement(event) {
    //TODO
    let item=event.target;
    if (item.tagName=='BUTTON'){
        if (confirm('Are you sure?')){
            item.parentNode.remove()
        }
    }
}
let container = document.querySelector(".container");
container.addEventListener("click", deleteElement);