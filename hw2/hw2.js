//Задание 1
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

