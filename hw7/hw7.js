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