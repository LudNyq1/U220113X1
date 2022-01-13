'use strict';

import {btnCalculate} from './Calculate.js';

// const numbers = [];
let numbersSorted = [];
// const carsMakeUniqueAmmount = [];

window.onload = () => {
    const h2 = document.createElement('h2');
    h2.innerHTML = 'One';
    h2.id = 'h2One';
    document.getElementById('content').appendChild(h2);

    const input = document.createElement('input');
    input.id = 'inputValue';
    document.getElementById('content').appendChild(input);

    const btn = document.createElement('button');
    btn.innerHTML = 'Add data';
    btn.addEventListener('click', btnClick);
    document.getElementById('content').appendChild(btn);

    const btnCal = document.getElementById('btnCalc');
    btnCal.addEventListener('click', calcFunc);
    
}

const btnClick = () => {
    const currentValue = document.getElementById('inputValue').value;

    numbersSorted = currentValue.split(' ').sort((a, b) => a - b); //Sorts the array with the numbers in size order
}

const calcFunc = () => {
    btnCalculate(numbersSorted);
}

// const btnCalculate = () => {
//     console.log(numbersSorted);

//     numbersSorted.forEach((num, counter) => {
//         numbersSorted[counter] = `${num}(${num*num})`;
//     });

//     console.log(numbersSorted);

//     numbersSorted.forEach(num => {
//         let listItem = document.createElement('li');
//         listItem.innerHTML = num;
//         document.getElementById('content').appendChild(listItem);
//     }); 
// }