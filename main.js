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




const buttonGray = document.querySelector('#gray-mod');

const topButtons = document.querySelectorAll('.top-button');
let switcher = '';
let color = '';
topButtons.forEach(button => button.addEventListener('click', () => switcher = button.id))
topButtons.forEach(button => button.addEventListener('click', changeColor))
function changeColor(){
   switch (switcher){
      case "clear":
         const buttonClear = document.querySelector('#clear');
         buttonClear.addEventListener('click', clearColor)
         console.log(switcher)
      break;
      case "random-color":
         const buttonRandom = document.querySelector('#random-color');
         color = 'red';
         console.log(switcher)
      break;
      case "#gray-mod":
         color = 'gray';
         console.log(switcher)
      break;
      case "black-mod":
         const buttonBlack = document.querySelector('#black-mod');
         color = 'black';
         console.log(switcher)
      break;
   }
}

function setColor (element){
   element.currentTarget.style.backgroundColor = color;
}

function clearColor (){
   const amountDivs = Array.from (gridContainer.childNodes);
   amountDivs.shift()
   amountDivs.forEach( e => e.style.backgroundColor = 'white')
}