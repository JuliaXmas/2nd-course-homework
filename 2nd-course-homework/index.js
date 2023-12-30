let number = Number(prompt('Введите месяц в числовом значении'));

function date(number) {
    if ((number >= 1 && number <= 2) || number === 12) {
        return `Зима`;
    } else if (number >= 3 && number <= 5) {
        return `Весна`;
    } else if (number >= 6 && number <= 8) {
        return `Лето`;
    } else if (number >= 9 && number <= 11) {
        return `Осень`;
    } else {
        return 'Такого месяца не существует!'
    }
}

alert(date(number));
