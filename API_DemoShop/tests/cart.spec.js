// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Add item to cart', async ({ request }) => {
   
    await login(request,'bob@robert.com','123QWEasd');
    //add product to cart post

    const responseData = await addProductToCart(request,13);


    expect(responseData.success).toBe(true);
    expect(responseData.message).toContain(`The product has been added to your`);

});

test('Add second item to cart', async ({ request }) => {
    await login(request,'bob@robert.com','123QWEasd');
    //add product to cart post

    const responseData = await addProductToCart(request,22);


    expect(responseData.success).toBe(true);
    expect(responseData.message).toContain(`The product has been added to your`);

});

test('Add non existing item to cart', async ({ request }) => {
    await login(request,'bob@robert.com','123QWEasd');
    //add product to cart post

    const responseData = await addProductToCart(request,222222);

    expect(responseData.success).toBe(false);
    expect(responseData.message).toContain(`No product found with the specified ID`);

});

async function login(request, email, password){
    const loginData = new URLSearchParams();
    loginData.append(`Email`,email);
    loginData.append(`Password`,password);
    loginData.append(`RememberMe`,`false`);


    //login
    const loginResponse = await request.post(`/login`,{
        headers:{
            "content-type":"application/x-www-form-urlencoded"
        },
        data: loginData.toString()
    })

    expect(loginResponse.status()).toBe(200);
}

async function addProductToCart(request, itemId){
    const addItemResponse = await request.post(`https://demowebshop.tricentis.com/addproducttocart/catalog/${itemId}/1/1`);
    expect(addItemResponse.status()).toBe(200);
    
    return await addItemResponse.json();
}
