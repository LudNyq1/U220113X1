'use strict';

export const btnCalculate = (numbersSorted) => {
    console.log(numbersSorted);

    numbersSorted.forEach((num, counter) => {
        numbersSorted[counter] = `${num}(${num*num})`;
    });

    console.log(numbersSorted);

    numbersSorted.forEach(num => {
        let listItem = document.createElement('li');
        listItem.innerHTML = num;
        document.getElementById('content').appendChild(listItem);
    }); 
}