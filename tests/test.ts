import { test as base } from '@playwright/test';

import { expect } from '@playwright/test';

const test = base.extend({
	async offline({ offline, context, page, baseURL }, use) {
		if (offline) {
			await context.setOffline(false);
			await page.goto('/', { waitUntil: 'networkidle' });
			await context.setOffline(true);
		}

		use(offline);
	}
});

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1')).toBe('About this app');
});
