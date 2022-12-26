import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

/** @type {import('vitest/config').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			devOptions: {
				enabled: true,
				type: 'module',
				navigateFallback: '/'
			},
			scope: '/',
			base: '/',
			srcDir: './src',
			mode: 'development',
			// strategies: 'injectManifest',

			// injectManifest: {
			// 	globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
			// },
			manifest: {
				short_name: 'SvelteKit PWA',
				name: 'SvelteKit PWA',
				start_url: '/',
				scope: '/',
				display: 'standalone',
				theme_color: '#ffffff',
				background_color: '#ffffff',
				icons: [
					{
						src: '/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				]
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
