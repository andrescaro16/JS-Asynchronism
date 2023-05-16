import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const getData = async (urlApi) => {
    const response = await fetch(urlApi);
    return response.json();
}

const displayData = async () => {
    try {
        const products = await getData(`${API}/products/`);
        const product = await getData(`${API}/products/${products[0].id}`);
        const category = await getData(`${API}/categories/${product.category.id}`);
        console.log(product);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
}

displayData();