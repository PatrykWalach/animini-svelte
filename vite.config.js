import { babelPlugin } from '@graphql-codegen/gql-tag-operations-preset';
import { sveltekit } from '@sveltejs/kit/vite';

import babel from 'vite-plugin-babel';

const babelConfig = {
	plugins: [[babelPlugin, { artifactDirectory: './src/lib/gql' }]]
};

/** @type {import('vitest/config').UserConfig} */
const config = {
	plugins: [sveltekit(), babel({ babelConfig })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
