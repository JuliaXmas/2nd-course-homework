//Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == 10) {
        break;
    }
}

//Задание 2
const numbs = [1, 5, 4, 10, 0, 3];

console.log(numbs.indexOf(4))

//Задание 3
let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(' ');
console.log(numbers);

//Задание 4 
let table = []

for (let i = 0; i < 3; i++) {
    table[i] = [];
    for (let j = 0; j < 3; j++) {
        table[i][j] = 1;
    };
};

console.log(table);

//Задание 5
let arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

//Задание 6
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6 = arr6.sort();
console.log(arr6);
console.log(arr6.pop());
console.log(arr6);

//Задание 7
let arr7 = [9, 8, 7, 6, 5];
let userAnswer = prompt('Угадайте число');
let search = arr7.includes(Number(userAnswer));

console.log(search);

//Задание 8
let reverse = a => a.split('')
    .reverse()
    .join('');

console.log(reverse('abcdef'))

//Задание 9
let arr9 = [
    [1, 2, 3,],
    [4, 5, 6]
];

const flat = arr9.flat();
console.log(flat);

//Задание 10
let arr10 = [3, 7, 4, 9, 1, 10, 6, 2, 8, 5];

for (let i = 0; i < arr10.length - 1; i++) {

    console.log(arr10[i] + arr10[i + 1]);
}

