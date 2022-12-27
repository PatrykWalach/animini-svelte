import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vitest/config';
import manifest from './manifest.json';
import workbox from './workbox';

const config = defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true
			},
			manifest,
			workbox
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

export default config;
