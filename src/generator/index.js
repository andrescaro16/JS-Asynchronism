function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = gen();
console.log(generator.next());
console.log(generator.next().value);
console.log(generator.next().value);



function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const iterator = iterate(["Andrés", "Camilo", "María", "Sofía"]);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);