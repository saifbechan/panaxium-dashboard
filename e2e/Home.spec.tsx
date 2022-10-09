import { expect, test } from '@playwright/test';

test('should display the patients name', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toContainText('Name: John Doe');
});
