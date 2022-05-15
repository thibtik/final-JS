
/* 
TODO
*/

// create div html element and set class name = container.
let container=document.createElement('div');
container.className='container'

// create frist div element and set class name = "col" 
let col=document.createElement('div');
col.className='col'


// create image tag and set src = "images/img.jpg"
let image=document.createElement('img');
image.src="images/img.jpg"


//append image to div classname col
col.appendChild(image)

//create second div set class name = "col"
let second_div=document.createElement('div')
second_div.className='col'

// create h2 element and set text = "Hello !"
let h2=document.createElement('h2');
h2.textContent='Hello !'

// append h2 to second div
second_div.appendChild(h2)

// create h3 element and set text = "I am Susan ,"
let h3=document.createElement('h3');
h3.textContent='I am Susan'

// append h3 to second div
second_div.appendChild(h3)
// create p element and set text "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ea id. Nesciunt, quam optio? Sit repellat et quasi, reprehenderit, magni pariatur, eveniet expedita odio exercitationem quidem animi omnis fugit? Excepturi."
let p=document.createElement('p');
p.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ea id. Nesciunt, quam optio? Sit repellat et quasi, reprehenderit, magni pariatur, eveniet expedita odio exercitationem quidem animi omnis fugit? Excepturi.'
// append h3 to second div
second_div.appendChild(p)
// create button element and set text = "Read more"
let button=document.createElement('button')
button.textContent='Read more'

// append h3 to second div
second_div.appendChild(button)

//append frist col into container
container.appendChild(col)
//append second col into container
container.appendChild(second_div)
//append container into body
document.body.appendChild(container)
