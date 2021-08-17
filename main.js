const gridContainer = document.querySelector('#grid-container');
let numberOfGrids = prompt();
let lengtOfGrid = 256/Number(numberOfGrids);
let numberOfDivs =  numberOfGrids*numberOfGrids;
for (let i = 0; i < numberOfDivs; i++){
   const div = document.createElement('div');
   div.classList.add('div_grid');
   div.style.width = lengtOfGrid+'px';
   div.style.height =  lengtOfGrid+'px';
   div.addEventListener('mouseover', setColor)
   gridContainer.appendChild(div)
}


const topButtons = document.querySelectorAll('.top-button');
let switcher = '';
let color = '';
topButtons.forEach(button => button.addEventListener('click', () => switcher = button.id))
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',clearColor)
function setColor (element){
   switch (switcher){
      case "random-color":
         element.currentTarget.style.filter = 'brightness(100%)';
         const max = 9;
         const min = 0;
         let colors =['pink','green','gray','yellow','red','blue','aqua','brown','blueviolet','khaki'];
         ComputerChoise = Math.floor(Math.random() * (max - min) ) + min;
         element.currentTarget.style.backgroundColor = colors[ComputerChoise];
      break;
      case "gray-mod":
         let light = element.currentTarget.style.filter

      break;
      case "black-mod":
         element.currentTarget.style.filter = 'brightness(100%)';
         element.currentTarget.style.backgroundColor = 'black'; 
         
      break;
   }
}

function clearColor (){
   const amountDivs = Array.from (gridContainer.childNodes);
   amountDivs.shift()
   amountDivs.forEach( e => e.style.backgroundColor = 'white')
}