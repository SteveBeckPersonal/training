const { test, expect } = require("@playwright/test");
const { faker, fa } = require('@faker-js/faker');

export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function getProducts(request, token){
    const x = await request.get(`/api/products`, {
        headers: {
            authorization: `bearer ${token}`
        }
    });
    expect(x.status()).toBe(200);
    return await x.json();
}

export async function generateProduct(request, token){
    const product = { name: faker.vehicle.model(), price: getRandomNumber(10,10000) };
    const createResponse = await request.post(`/api/products`,{data:product,
        headers: {
            authorization: `bearer ${token}`
        }
    });
    expect(createResponse.status()).toBe(200);

    const apiItems = await getProducts(request, token);
    const item = apiItems.find(x => x.name === product.name && x.price === product.price);

    return item;
}