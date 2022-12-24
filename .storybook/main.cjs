const path = require('path');
const { mergeConfig } = require('vite');
module.exports = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-coverage',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'storybook-addon-pseudo-states'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	viteFinal: (config) => {
		return mergeConfig(config, {
			resolve: {
				alias: {
					$lib: path.resolve(__dirname, '../src/lib')
				}
			}
		});
	}
};
