const cows = 1;

const counterCows = new Promise((resolve, reject) => {
    if(cows > 10){
        resolve("We can do the job");
    } else {
        reject("There are not enough cows");
    }
})

counterCows
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Finally"))