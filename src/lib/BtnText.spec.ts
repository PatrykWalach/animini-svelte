import { expect, test } from '@playwright/experimental-ct-svelte'
import BtnText from './BtnText.svelte'

test.use({ viewport: { width: 500, height: 500 } })

test('should work', async ({ mount, page }) => {
	const component = await mount(BtnText, {
		slots: {
			default: 'Enabled'
		}
	})

	await expect(await page.screenshot()).toMatchSnapshot()
	await expect(component).toContainText('Enabled')
})
