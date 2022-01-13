'use strict';

const carsMake = [];
let carsMakeUnique = [];
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
    btnCal.addEventListener('click', btnCalcCars);
    
}

const btnClick = () => {
    const currentValue = document.getElementById('inputValue').value;

    carsMake.push(currentValue);

    carsMakeUnique = [];

    let temp = [...new Set(carsMake.map(cars => cars))]; //Map function to get the unique cars from the list

    temp.forEach(car => { //Gets the ammount of times the unique car occurs in the array and pushes the result to carsMakeUnique
        let ammount = carsMake.filter((v) => (v == car)).length;
        carsMakeUnique.push(car + ', ' + ammount);
    });

    console.log(carsMakeUnique);
}

const btnCalcCars = () => {
    // for (let i = 0; i < carsMakeUnique.length; i++) {
    //     let listItem = document.createElement('li');
    //     listItem.innerHTML = carsMakeUnique;
    //     document.getElementById('content').appendChild(listItem);
    // }
    carsMakeUnique.forEach(car => {
        let listItem = document.createElement('li');
        listItem.innerHTML = car;
        document.getElementById('content').appendChild(listItem);
    }); 
}