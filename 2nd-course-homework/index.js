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


function words() {
    let arrWord = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrWord = arrWord.sort(() => Math.random() - 0.5);
    alert(arrWord)

    let inputWordFirst = prompt('Напишите первое слово');
    let inputWordLast = prompt(`Напишите последнее слово`);

    if (inputWordFirst === arrWord[0] && inputWordLast === arrWord[6]) {
        return alert('Верно!');
    } else if (inputWordFirst === arrWord[0] || inputWordLast === arrWord[6]) {
        return alert('Вы были близки к победе!');
    } else {
        return alert('Неверно!');
    }
}

