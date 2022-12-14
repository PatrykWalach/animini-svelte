import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	projects: [
		{
			name: 'default'
		},
		{
			name: 'progressive enchancment',
			use: { javaScriptEnabled: false }
		},
		{
			name: 'pwa',
			use: {
				offline: true
			}
		}
	]
};

export default config;
