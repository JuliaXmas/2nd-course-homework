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
