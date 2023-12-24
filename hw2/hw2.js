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



