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
let square = n => n * n;

let x = square(7);

console.log(x);


