const gridContainer = document.querySelector('#grid-container');
const buttonClear = document.querySelector('#clear')
buttonClear.addEventListener('click', clearColor)
for (let i = 0; i < 256; i++){
   const div = document.createElement('div');
   div.classList.add('div_grid');
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