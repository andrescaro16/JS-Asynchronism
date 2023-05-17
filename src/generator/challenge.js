import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function* generator(){
    let i = 1;
    while(true){
        yield i;
        i++;
    }
}

const getData = async (urlApi) => {
    const response = await fetch(urlApi);
    return response.json();
}

const displayData = async () => {
    try{
        const product = await getData(`${API}/products/${gen.next().value}`);
        console.log(product);
    } catch(error){
        console.error(error);
    }
}

const gen = generator();
displayData()
displayData()
displayData()
displayData()
displayData()