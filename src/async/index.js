const promise = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Async!"), 2000)
            : reject(new Error("Error"))
    })
}

const asyncAwait = async () => {
    const response = await promise();
    console.log(response);
    console.log("Hi from async await function");
}

console.log("Before");
asyncAwait();
console.log("After");