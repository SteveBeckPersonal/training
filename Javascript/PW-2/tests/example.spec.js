// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  let newVariable = "Look at my value";
  helloWorld();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

function helloWorld(){
  console.log(`Hello world`);
}

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
