import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function getData(urlApi) {
    return fetch(urlApi)
        .then(response => response.json());
}

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
    return response;
}

function putData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
    return response;
}

function deleteData(urlApi) {
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

getData(`${API}/products/69`)
    .then(product => console.log(product))
    .catch(error => console.log(error))
    .finally(() => console.log('getData has finished'));

postData(`${API}/products/`, {
    "title": "Watch 2",
    "price": 1700,
    "description": "A great example 2",
    "categoryId": 2,
    "images": ["https://placeimg.com/640/480/tech"]
})  .then(product => console.log(product))
    .catch(error => console.log(error))
    .finally(() => console.log('postData has finished'));

putData(`${API}/products/250`, {
    "title": "Original Watch",
    "price": 2300,
})  .then(product => console.log(product))
    .catch(error => console.log(error))
    .finally(() => console.log('putData has finished'));

// deleteData(`${API}/products/250`)
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
//     .finally(() => console.log('deleteData has finished'));