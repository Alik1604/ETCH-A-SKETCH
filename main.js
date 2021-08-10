const gridContainer = document.querySelector('#grid-container');
const buttonClear = document.querySelector('#clear')
const squerOfContainer = 256*256;
let lengthOfdiv = prompt();
let squerOfdiv = lengthOfdiv * lengthOfdiv;
let numberOfDivs = squerOfContainer/squerOfdiv;

buttonClear.addEventListener('click', clearColor)
for (let i = 0; i < numberOfDivs; i++){
   const div = document.createElement('div');
   div.classList.add('div_grid');
   div.style.width = lengthOfdiv+'px';
   div.style.height =  lengthOfdiv+'px';
   div.addEventListener('mouseover', setColor)
   gridContainer.appendChild(div)
}

function setColor (element){
   element.currentTarget.style.backgroundColor = 'red';
}

function clearColor (){
   const amountDivs = Array.from (gridContainer.childNodes);
   amountDivs.shift()
   amountDivs.forEach( e => e.style.backgroundColor = 'aqua')
}