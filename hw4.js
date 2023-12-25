// Задание 1
let i = 0;

while (i < 2) {
    console.log('Привет!');
    i++;
}

//Задание 2
let a = 1;

while (a <= 25) {
    console.log(a);
    a++;
}

//Задание 3
let b = 7;

while (b <= 22) {
    console.log(b);
    b++;
}

// или
for (z = 7; z <= 22; z++) {
    console.log(z);
}


//Задание 4
const peopleSalary = {
    'Коля': '200$',
    'Вася': '300$',
    'Петя': '400$',

};
for (let human in peopleSalary) {
    console.log(`${human} — зарплата ${peopleSalary[human]}`);
}

//Задание 5
let n = 1000;
let num = 0;

while (n > 50) {
    n = n / 2;
    num++;
}
console.log(`Получилось число ${n}. Число итераций равно ${num}`);