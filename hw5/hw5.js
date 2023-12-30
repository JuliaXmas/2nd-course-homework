// Задание 1 
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

console.log(min(8, 4));
console.log(min(6, 6));

//Задание 2 
function even_or_odd(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
};

console.log(even_or_odd(5));
console.log(even_or_odd(6));

// Задание 3
//3.1
function func(n) {
    console.log(n * n);
}
func(8);

//3.2
numberSquare(function (num) {
    return num * num;
});

function numberSquare(func) {
    console.log(func(10));
}

//Задание 4
"use strict";
let age = Number(prompt("Сколько Вам лет?"));
let printMessage;

if (age < 0) {
    printMessage = function () {
        console.log("Вы ввели неверное значение");
    }
} else if (age >= 0 && age <= 12) {
    printMessage = function () {
        console.log("Привет, друг!");
    }
} else {
    console.log("Добро пожаловать!")
}

//Задание 5
let a = prompt(`Введите первое число`);
let b = prompt(`Введите второе число`);
function exampl(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}
console.log(exampl(a, b));

//Задание 6
let number = prompt("Введите число:");

function cubeNumber() {
    if (isNaN(number)) {
        return "Переданный параметр не является числом";
    }

    return `${number} в кубе равняется ${number * number * number}`;
}

console.log(`${number} в кубе равняется ${number * number * number}`);

//Задание 7

function getRectangleArea() {
    return 3.14 * this.radius * this.radius;
};
function getRectanglePerimeter() {
    return 2 * 3.14 * this.radius;
};

const circle1 = {
    radius: 4,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

const circle2 = {
    radius: 5,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

