test('Add item to cart and remove', async ({ page }) => {
    await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.goto(`/v1/cart.html`);
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toBeVisible();
    await page.getByRole('button', { name: 'REMOVE' }).click();
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).not.toBeVisible();
  });
