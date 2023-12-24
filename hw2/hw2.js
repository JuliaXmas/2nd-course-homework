//Задание 1
//just to get the GitHub
let passwordRequest = prompt('Введите пароль');

let message;

if (passwordRequest === 'пароль') {
    message = 'Доступ разрешен';
}
else {
    message = 'Доступ запрещен';
}

alert(message);

//Задание 2
let c = Number(prompt('Введите любое число'));

if (c > 0 && c < 10) {
    alert('Верно');
}
else {
    alert('Неверно');
}

// Здание 3

let d = 5;
let e = 120;

if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = Number(prompt('Введите месяц в числовом значении'));

switch (monthNumber) {
    case 12:
        alert('Зима');
        break;
    case 1:
        alert('Зима');
        break;
    case 2:
        alert('Зима');
        break;
    case 3:
        alert('Весна');
        break;
    case 4:
        alert('Весна');
        break;
    case 5:
        alert('Весна');
        break;
    case 6:
        alert('Лето');
        break;
    case 7:
        alert('Лето');
        break;
    case 8:
        alert('Лето');
        break;
    case 9:
        alert('Осень');
        break;
    case 10:
        alert('Осень');
        break;
    case 11:
        alert('Осень');
        break;
    default:
        alert('Такого месяца не существует!');
        break;
}
