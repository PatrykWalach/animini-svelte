import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vitest/config').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['.yarn']
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
