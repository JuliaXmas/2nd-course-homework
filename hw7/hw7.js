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