//Задание 1
let str = 'Строка';
str = str.toUpperCase();
console.log(str);


//Задание 2 
const array = ['Бабочка', 'Пекарь', 'Бабушка', 'Бушака', 'Барин', 'Боярин', 'Князь']
const string = 'ба';
const arrString = [];
array.forEach((person) => {
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
function getRandomNum(maxValue) {
    const getRandom = [];
    for (let i = 0; i < Math.floor(maxValue / 2); i++) {
        getRandom[i] = Math.floor(Math.random() * maxValue);
    }
    return getRandom;
}

console.log(getRandomNum(7));
console.log(getRandomNum(12));

//Задание 7
function randomInt(min, max) {

    var min = +prompt("Enter a number.");
    var max = +prompt("Enter another number.");
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return randNum;

}
alert(randomInt());


//Задание 8
let presentDate = new Date();
console.log(presentDate);


//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);


//Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const ten = (curDate) => {
    let date = curDate.getDate();
    if (date < 10) {
        date = "0" + date;
    }

    let month = months[curDate.getMonth() - 1];
    if (month < 10) {
        month = "0" + month;
    }

    let day = days[curDate.getDay()];
    if (day < 10) {
        day = "0" + day;
    }

    let hours = curDate.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }

    let minute = curDate.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }

    let second = curDate.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }

    console.log(`Дата: ${date}.${month}.${curDate.getFullYear()} - это ${day}.`);
    console.log(`Время: ${hours}:${minute}:${second}`);
};

ten(new Date(prompt(`Введите год`), prompt(`Введите номер месяца`), prompt(`Введите день месяца`), prompt(`Введите час`), prompt(`Введите минуты`), prompt(`Введите секунды`)));

//Почему среда, когда понедельник?😢