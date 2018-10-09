'use strict';

// Сделать так, чтобы строка начиналась с большой буквы
let str = 'урок-3-был слишком легким';

str = str[0].toLocaleUpperCase() + str.slice(1);
console.log(str);

// Теперь замените все “-” на пробелы
str = str.replace(/-/g, ' ');
console.log(str);

// вырезать слово “легким”, в этом же слове заменить 2 последние буквы на букву “о”
let template = 'легким';
let pos = str.indexOf(template);
if (pos > -1){
  str = str.slice(pos, pos + template.length);
}
str = str.slice(0, -2) + 'оо';
console.log(str);


// Вывести в консоль квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
let arr = [20, 33, 1, 'Человек', 2, 3];

let qubicSum = 0;
for (let i=0; i<arr.length; i++){
  if ( isNumeric(arr[i]) ){
    qubicSum += arr[i]**3;
  }
}
console.log( Math.sqrt(qubicSum));


// Создайте функцию, которая принимает 1 аргумент
function shorter(text) {
  if (typeof text !== "string" || text === '' || text === null){
    console.log('give me a StrinG!');
    return null;
  }
  
  text = text.trim();
  
  return text.length > 50 ? text.slice(0, 50) + '…' : text;
}
