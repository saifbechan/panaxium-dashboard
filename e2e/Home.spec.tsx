import { expect, test } from '@playwright/test';

test('should display the welcome message', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toContainText('Saif Bechan');
});
