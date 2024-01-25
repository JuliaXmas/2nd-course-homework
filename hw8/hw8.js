//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
});

console.log(people);

//Задание 2
function isPositive(num) {
    if (num > 0) {
        return num;
    }
}

function isMale(item) {
    if (item.gender === 'male') {
        return item;
    }
}
function filter(array, ruleFunction) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//Задание 3
let currentDate = new Date();
console.log(currentDate);

const timer = (currentDate) => {
    let timerId = setInterval(() => {
        console.log(new Date);
    }, 3000);

    setTimeout(() => {
        clearInterval(timerId)
        console.log("30 секунд прошло")
    }, 30000)
};

timer(currentDate);