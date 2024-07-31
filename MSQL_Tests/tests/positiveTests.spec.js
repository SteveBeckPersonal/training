/// <reference types="playwright" />

// @ts-check
const { test, expect } = require("@playwright/test");
import {MSSQLDatabase} from './functions/mssql.helper.js';
import config from './data/dbConfig.json';
import {generateProduct, getRandomNumber, getProducts} from './functions/productsFunctions.js';
const { faker, fa } = require('@faker-js/faker');


const credentials = {username:"admin", password:'admin'};
let token;



test.beforeAll(async ({request}) => {
    const response = await request.post(`/api/login`, {
        data: credentials
    });

    token = (await response.json()).token;
});


test("Positive tests products - get all", async ({ request }) => {
    const response = await request.get(`/api/products`, {
        headers: {
            authorization: `bearer ${token}`
        }
    });
    expect(response.status()).toBe(200);
    //get data from backend server
    const apiItems = await response.json();
   
    //get data from DB
    const msDB = new MSSQLDatabase(config);
    const productData = await msDB.runQuery(`select * from products;`);
    
    //confirm that backend and DB agree on data values
    expect.soft(apiItems.length).toBe(productData.length);

    for(let item of productData){
        let id = item.id;
        let apiItem = apiItems.find(x => x.id === id);
        expect.soft(apiItem).not.toBeUndefined();
        expect.soft(item.name).toBe(apiItem.name);
        expect.soft(item.price).toBe(apiItem.price);
    }
});



test("Positive tests products - get one", async ({ request }) => {
    //given
    

    const item = await generateProduct(request, token);

    //when
    const response = await request.get(`/api/products/${item.id}`, {
        headers: {
            authorization: `bearer ${token}`
        }
    });
    //then
    expect(response.status()).toBe(200);

    const msDB = new MSSQLDatabase(config);
    const productData = (await msDB.runQuery(`select * from products where id=${item.id};`))[0];

    expect.soft(productData).not.toBeUndefined();
    expect.soft(item.name).toBe(productData.name);
    expect.soft(item.price).toBe(productData.price);

});
  

test("Positive tests products - post", async ({ request }) => {
    
    const product = { name: faker.vehicle.model(), price: getRandomNumber(10,10000) };
    const createResponse = await request.post(`/api/products`,{data:product,
        headers: {
            authorization: `bearer ${token}`
        }
    });
    expect(createResponse.status()).toBe(200);

    const apiItems = await getProducts(request, token);
    const item = apiItems.find(x => x.name === product.name && x.price === product.price);
    const msDB = new MSSQLDatabase(config);
    const productData = (await msDB.runQuery(`select * from products where id=${item.id};`))[0];

    expect.soft(productData).not.toBeUndefined();
    expect.soft(item.name).toBe(productData.name);
    expect.soft(item.price).toBe(productData.price);
});
  

test("Positive tests products - delete", async ({ request }) => {
     //given
     const item = await generateProduct(request, token);
    //when
    const response = await request.delete(`/api/products/${item.id}`, {
        headers: {
            authorization: `bearer ${token}`
        }
    });
    expect(response.status()).toBe(204);

    //then
    const msDB = new MSSQLDatabase(config);
    const productData = (await msDB.runQuery(`select * from products where id=${item.id};`))[0];

    expect(productData).toBeUndefined();
});