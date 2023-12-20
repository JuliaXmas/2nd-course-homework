//Задание 1
let a = '10';
a = '20';
alert(a);

//Задание 2
const iphoneBirthday = 'Год выпуска первого Iphone - 2007';
alert(iphoneBirthday);


//Задание 3
const fatherofJavaScript = 'Создатель Java Script - Бренданом Айком';
alert(fatherofJavaScript);


//Задание 4
let x = 10;
let y = 2;
let result = x + y;
alert(result);

let result2 = x - y;
alert(result2);

let result3 = x * y;
alert(result3);

let result4 = x / y;
alert(result4);


//Задание 5
let b = 2;
let result5 = b ** 5;
alert(result5);


//Задание 6
let l = 9;
let i = 2;
let result6 = l % i;
alert(result6);


//Задание 7
let num = 1;
alert(num + 5);
alert(num - 3);
alert(num * 7);
alert(num / 3);
alert(++num);
alert(--num);


//Задание 8
let age = prompt("Сколько вам лет?");
alert(age);


//Задание 9
const user = {
    name: 'Julia',
    age: 24,
    isAdmin: false
}

user.cityofResidence = 'Нaбережные Челны';

user.age = 25;

delete user.cityofResidence;

let info = prompt("Какую информацию хотите узнать о пользователе?", "name");

alert(user[info]);


//Задание 10
let human = prompt("Как Вас зовут?");
alert(`Привет, ${human}!`)