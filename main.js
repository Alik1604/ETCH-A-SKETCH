
const gridContainer = document.querySelector('#grid-container');
for (let i = 0; i < 256; i++){
   const div = document.createElement('div');
   div.classList.add('div_grid');
   div.addEventListener('mouseover', setColor)
   div.addEventListener('click', setColor)
   gridContainer.appendChild(div)
}

function setColor (element){
   element.currentTarget.style.backgroundColor = 'red';
}