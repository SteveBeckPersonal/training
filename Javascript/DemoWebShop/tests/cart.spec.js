// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page}) => {
 //login
 await page.goto(`/`)
 await page.getByRole('link', { name: 'Log in' }).click();
 // @ts-ignore
 await page.getByLabel('Email:').fill(process.env.demo_user);
 // @ts-ignore
 await page.getByLabel('Password:').fill(process.env.demo_password);
 await page.getByRole('button', { name: 'Log in' }).click();

 await expect(page.getByRole('link', { name: process.env.demo_user })).toBeVisible();
 await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
 await page.goto(`/cart`);
})

test(`Add item to the cart`, async ({page}) => {
    //add an item to the cart
    await addItemToCart(page,`/camera-photo`, 'Digital SLR Camera 12.2 Mpixel', 'Digital SLR Camera - Black');


    //remove an item from the cart
    await page.goto(`/cart`);
    await expect(page.getByRole('row', { name: 'Picture of Digital SLR Camera' })).toBeVisible();
    await page.getByRole('row', { name: 'Picture of Digital SLR Camera' }).getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Update shopping cart' }).click();
    await expect(page.getByRole('row', { name: 'Picture of Digital SLR Camera' })).not.toBeVisible();
})

test(`Add multiple books to the cart`, async ({page}) => {
    const items = [{name:'Fiction', price:'24.00'},{name:'Computing and Internet', price: "10.00"}];
    
    for(let item of items){
        await addItemToCart(page, '/books', item.name);
    }
    await page.goto(`/cart`);
    for(let item of items){
        const price = await page.getByRole('row', { name: item.name }).locator(`.product-subtotal`).innerText();
        expect(price).toBe(item.price);
    }    
    
   //await removeItems(page,items)
})

async function removeItems(page,items){
    await page.goto(`/cart`);
    for(let item of items){
        await expect(page.getByRole('row', { name: item.name })).toBeVisible();
        await page.getByRole('row', { name: item.name }).getByRole('checkbox').check();
    }

    await page.getByRole('button', { name: 'Update shopping cart' }).click();
    
    for(let item of items){
        await expect(page.getByRole('row', { name: item.name })).not.toBeVisible();
    }
}

async function addItemToCart(page,section, itemName, itemVariation){
    await page.goto(section);
    await page.getByRole('link', { name: itemName, exact: true }).click()
    
    if(itemVariation !== undefined){
        //Explain this on wednesday
        await page.locator(`//div[contains(text(),'${itemVariation}')]/ancestor::div[@class='product-variant-line']//input[@value='Add to cart']`).click();
        return;
    }

    await page.locator(`//h1[contains(text(),'${itemName}')]/ancestor::div[@class='product-essential']//input[@value='Add to cart']`).click();
}