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
func(2);

//3.2
numberSquare(function (num) {
    return num * num;
});

function numberSquare(func) {
    console.log(func(3));
}

//Задание 4



