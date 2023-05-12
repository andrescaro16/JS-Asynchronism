function sum(num1, num2) {
    return num1 + num2;
}

function calc(callback, num1, num2) {
    return callback(num1, num2);
}

console.log(calc(sum, 6, 2));

function greeting(name) {
    console.log(`Hello ${name}`);
}

setTimeout(greeting, 2000, 'Andrés');