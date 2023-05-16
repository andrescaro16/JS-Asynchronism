import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi)
        .then(response => response.ok ? response.json() : Promise.reject(response));
}

fetchData(`${API}/products`)
    .then(products => {
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(product => {
        console.log(product);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(category => {
        console.log(category.name);
    })
    .then(() => console.log("Hey, I've finished!"))
    .catch(error => console.error(error))
    .finally(() => console.log("R"));