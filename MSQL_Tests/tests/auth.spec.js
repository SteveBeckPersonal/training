/// <reference types="playwright" />

// @ts-check
const { test, expect } = require("@playwright/test");


test(`Invalid login`,async ({request}) => {
    const response = await request.post(`/api/login`, {
        data: {username:'adh',password:'123'}
    });

    expect(response.status()).toBe(400);

    const responseText = await response.text();
    expect(responseText).toBe("Invalid credentials");
});


test("Negative Auth - get all products", async ({ request }) => {
    const response = await request.get(`/api/products`);
    expect(response.status()).toBe(401);
});
  

test("Negative Auth - get product by id", async ({ request }) => {
    
    const response = await request.get(`/api/products/1`);
    expect(response.status()).toBe(401);
});
  

test("Negative Auth - add new product", async ({ request }) => {
    
    const response = await request.post(`/api/products`,{data:{}});
    expect(response.status()).toBe(401);
});
  

test("Negative Auth - delete product", async ({ request }) => {
    
    const response = await request.delete(`/api/products/1`);
    expect(response.status()).toBe(401);
});
  