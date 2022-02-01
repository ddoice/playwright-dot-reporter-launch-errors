import { test, expect } from '@playwright/test';

test('Main flow', async ({ page, isMobile }) => {

  await page.goto('http://localhost:3000');
  const locator = page.locator('h1');
  await expect(locator).toHaveText("Hi there!");
});
