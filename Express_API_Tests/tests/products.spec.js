// @ts-check
const { test, expect } = require('@playwright/test');
// @ts-check
// @ts-ignore
const { faker, fa } = require('@faker-js/faker');
const { query } = require('../functions/db.functions');
const { SQLite3Database } = require('../functions/sqlite.helper');



test(`Add item to DB`, async ({ request }) => {
    //Create product via api
    const product = { name: faker.vehicle.model(), price: getRandomNumber };

    const response = await request.post(`/api/Products`, {
        data: product
    });

    expect(response.status()).toBe(200);

    const db = new SQLite3Database(`../Express_Server_Session1/products.db`);
    //Check DB for new item in table
    try {
        const productData = await db.allQuery(`select * from products;`);
    } catch {

    } finally {
        db.close();
    }

});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}