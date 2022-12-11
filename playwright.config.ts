import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		env: {
			// PUBLIC_ANILIST_GQL_SERVER_URL: 'http://127.0.0.1:4173/api/graphql'
			PUBLIC_ANILIST_GQL_SERVER_URL: '/api/graphql'
		}
	},

	timeout: 10 * 1000,

	use: {
		trace: 'on-first-retry',
		// video: 'on',
		// screenshot: 'on',
		...devices['Desktop Chrome']
	},
	testDir: 'tests',
	projects: [
		{
			name: 'default'
		},
		{
			name: 'noscript',
			use: { javaScriptEnabled: false }
		},
		{
			name: 'pwa',
			use: {
				goOffline: true
				// offline: true
			}
		}
	],
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0
}

export default config
