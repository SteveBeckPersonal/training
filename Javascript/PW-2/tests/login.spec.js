import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('/v1');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click({});
    await expect(page.getByText('Products')).toBeVisible({timeout:10000});
})


test('Add item to cart and remove', async ({ page }) => {
    await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.goto(`/v1/cart.html`);
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toBeVisible();
    await page.getByRole('button', { name: 'REMOVE' }).click();
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).not.toBeVisible();
  });

  test('Add items to cart and remove', async ({ page }) => {

    const items = [`Sauce Labs Backpack`,`Sauce Labs Onesie`];

    for(let item of items){
        await page.locator(`.inventory_item`).filter({hasText:item}).getByRole('button', { name: 'ADD TO CART' }).click();
    }

    //go to cart
    await page.goto(`/v1/cart.html`);

    for(let item of items){
        await expect(page.getByRole('link', { name: item })).toBeVisible();
        await page.locator(`.cart_item`).filter({hasText:item}).getByRole('button', { name: 'REMOVE' }).click();
        await expect(page.getByRole('link', { name: item })).not.toBeVisible();
    }
   
  });