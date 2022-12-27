/** @type {Partial<import("workbox-build").GenerateSWOptions>} */
const workbox = {
	// globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}'],
	globPatterns: ['client/**/*'],
	runtimeCaching: [
		{
			urlPattern: ({ request }) => request.mode === 'navigate',
			handler: 'NetworkFirst',
			options: {
				cacheName: 'navigations',
				expiration: {
					maxAgeSeconds: 60 * 60 * 24 * 30 // <== 30 days
				},
				cacheableResponse: {
					statuses: [0, 200]
				}
			}
		},
		{
			urlPattern: ({ request }) =>
				/** @type {RequestDestination[]} */ (['style', 'script', 'image', 'document']).includes(
					request.destination
				) || request.url.match(/\.json/),
			handler: 'StaleWhileRevalidate',
			options: {
				cacheName: 'static-assets',
				expiration: {
					maxAgeSeconds: 60 * 60 * 24 * 30 // <== 30 days
				},
				cacheableResponse: {
					statuses: [0, 200]
				}
			}
		},
		{
			urlPattern: () => true,
			method: 'POST',
			handler: 'NetworkOnly',
			options: {
				backgroundSync: {
					name: 'mutations'
				}
			}
		},
		{
			urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
			handler: 'CacheFirst',
			options: {
				cacheName: 'google-fonts-cache',
				expiration: {
					maxEntries: 10,
					maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
				},
				cacheableResponse: {
					statuses: [0, 200]
				}
			}
		}
	]
};
export default workbox;
