function date() {
    let number = Number(prompt('Введите месяц в числовом значении'));

    if ((number >= 1 && number <= 2) || number === 12) {
        alert(`Зима`);
    } else if (number >= 3 && number <= 5) {
        alert(`Весна`);
    } else if (number >= 6 && number <= 8) {
        alert(`Лето`);
    } else if (number >= 9 && number <= 11) {
        alert(`Осень`);
    } else {
        alert('Такого месяца не существует!')
    }
}


