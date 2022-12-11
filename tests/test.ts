import { test as base } from '@playwright/test'

const users = [{ userId: 1 }, { userId: 2 }, { userId: 3 }, { userId: 4 }]

const test = base.extend<{ visited: string[]; goOffline: boolean }>({
	goOffline: [false, { option: true }],
	visited: [[], { option: true }],
	// offline: async ({ offline, page }, use) => {
	// 	if (offline) {
	// 		await page.goto('/', {
	// 			waitUntil: 'networkidle'
	// 		});
	// 	}
	// 	use(offline)
	// },
	page: async ({ goOffline, page, context }, use) => {
		if (goOffline) {
			await page.goto('/', { waitUntil: 'networkidle' })
			await context.setOffline(true)
			await page.route(/.*/, (route) => route.abort('internetdisconnected'))
		}
		await use(page)
	},
	storageState: async ({ browser, baseURL }, use, testInfo) => {
		use({
			cookies: [
				{
					name: 'userId',
					value: String(testInfo.workerIndex + 1),
					domain: 'localhost',
					path: '/',
					expires: 1670082455.98871,
					httpOnly: true,
					secure: false,
					sameSite: 'Lax'
				}
			],
			origins: []
		})

		// // Override storage state, use worker index to look up logged-in info and generate it lazily.
		// const fileName = path.join(testInfo.project.outputDir, 'storage-' + testInfo.workerIndex);
		// if (!fs.existsSync(fileName)) {
		// 	// Make sure we are not using any other storage state.
		// 	const page = await browser.newPage({ storageState: undefined, baseURL });
		// 	await page.goto('/login');
		// 	// Create a unique username for each worker.
		// 	await page.getByLabel('User id').fill(String(users[testInfo.workerIndex].userId));
		// 	await page.getByText('Submit').click();
		// 	await page.context().storageState({ path: fileName });
		// 	await page.close();
		// }
		// await use(fileName);
	}
})

test.use({ visited: ['/about'] })

test('about page has expected h1', async ({ page, context, goOffline }) => {
	await page.goto('/about')

	await page.getByRole('heading', { name: 'red' }).waitFor()
	await page.getByLabel('Profile color').fill('blue')
	// if (goOffline) {
	// 	await context.setOffline(true);
	// 	await page.route(/.*/, (route) => route.abort('internetdisconnected'));
	// }
	await page.getByRole('button', { name: 'Submit' }).click()
	await page.getByRole('heading', { name: 'blue' }).waitFor()
})
