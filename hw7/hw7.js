//Задание 1
let str = 'Строка';
str = str.toUpperCase();
console.log(str);


//Задание 2 
const arr = ['Бабочка', 'Пекарь', 'Бабушка', 'Бушака', 'Барин', 'Боярин', 'Князь']
const string = 'ба';
const arrString = [];
arr.forEach((person) => {
    if (person.toLowerCase().startsWith(string)) {
        arrString.push(person)
    }
});

console.log(arrString);


//Задание 3
console.log(Math.ceil(32.58884));
console.log(Math.floor(32.58884));
console.log(Math.round(32.58884));


//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`Наименьшее число: ${min}`);
console.log(`Наибольшее число: ${max}`);


//Задание 5
function getRandomInt(minValue, maxValue) {

    return Math.random() * maxValue
}
console.log(getRandomInt(0, 10));


//Задание 6
let random = Math.floor(Math.random() * 10) + 1;
console.log(random); 