const plugin = require('tailwindcss/plugin');
const withAlphaVariable = require('tailwindcss/lib/util/withAlphaVariable').default;
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const createUtilityPlugin = require('tailwindcss/lib/util/createUtilityPlugin').default;

const config = require('./tailwind.config.json');

const themeDark = require('./src/lib/theme-dark.json');
const themeLight = require('./src/lib/theme-light.json');
const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import('tailwindcss').Config}
 * */
module.exports = {
	...config,
	theme: {
		...config.theme,
		extend: {
			colors: {
				'current-bg': 'var(--current-bg)',
				...Object.fromEntries(
					config.colors.map((color) => [color, `rgb(var(--${color}) / <alpha-value>)`])
				)
			}
		}
	},
	corePlugins: {
		padding: false,
		margin: false,
		width: false,
		height: false,
		maxHeight: false,
		maxWidth: false,
		minWidth: false,
		minHeight: false,
		space: false
	},
	plugins: [
		plugin(({ addVariant, matchVariant }) => {
			addVariant('error', [':merge(.group)[data-error=true] &', '&:invalid']);
			addVariant('peer-error', [':merge(.group)[data-error=true] &', ':merge(.peer):invalid ~ &']);

			matchVariant('not', (value) => `&:not(${value})`, {
				values: {
					disabled: ':disabled'
				}
			});
			matchVariant('peer-not', (value) => `:merge(.peer):not(${value}) ~ &`, {
				values: {
					disabled: ':disabled',
					'focus-within': ':focus-within'
				}
			});
			matchVariant('group-not', (value) => `:merge(.group):not(${value}) &`, {
				values: {
					disabled: ':disabled',
					'focus-within': ':focus-within'
				}
			});
		}),
		plugin(({ matchVariant }) => {
			const { normalize } = require('tailwindcss/lib/util/dataTypes');

			const fn = (_, { modifier }) =>
				modifier
					? [`:merge(.peer\\/${modifier})`, ' ~ .peer-group &']
					: [':merge(.peer)', ' ~ .peer-group &'];

			matchVariant(
				'peer-group',
				(value = '', extra) => {
					let result = normalize(typeof value === 'function' ? value(extra) : value);
					if (!result.includes('&')) result = '&' + result;

					let [a, b] = fn('', extra);
					return result.replace(/&(\S+)?/g, (_, pseudo = '') => a + pseudo + b);
				},

				{
					values: {
						hover: '&:hover',
						focus: '&:focus',
						'placeholder-shown': '&:placeholder-shown'
					}
				}
			);
		}),
		// require('@tailwindcss/container-queries'),
		plugin(({ matchUtilities, theme, addVariant, addBase, addUtilities }) => {
			addBase({
				':root': {
					fontSize: '16px',
					...themeLight
				},
				'@media (prefers-color-scheme: dark)': {
					':root': themeDark
				}
			});

			addVariant('pointer', '@media(pointer:fine)');

			// 'space-x':

			matchUtilities(
				{
					'space-y': (value) => ({
						'& > :not([hidden]) ~ :not([hidden])': {
							'--tw-space-y-reverse': '0',
							marginBlockStart: `calc(${value} * calc(1 - var(--tw-space-y-reverse)))`,
							marginBlockEnd: `calc(${value} * var(--tw-space-y-reverse))`
						}
					})
				},
				{ values: theme('space') }
			);

			matchUtilities(
				{
					'line-clamp'(value) {
						return {
							...(value !== 'none' && {
								overflow: 'hidden',
								display: '-webkit-box',
								'-webkit-box-orient': 'vertical'
							}),
							'-webkit-line-clamp': String(value)
						};
					}
				},
				{
					values: {
						none: 'unset',
						...Object.fromEntries(Array.from({ length: 5 }, (_, i) => [i + 1, i + 1]))
					},
					type: ['number']
				}
			);

			const backgroundImage =
				'linear-gradient(rgb(var(--surface-tint) / var(--mdi-elevation-opacity)), rgb(var(--surface-tint) / var(--mdi-elevation-opacity))), linear-gradient(var(--mdi-state-color), var(--mdi-state-color))';

			addUtilities({
				'.surface': {
					'--mdi-elevation-opacity': '0',
					'--mdi-state-color': 'transparent',
					backgroundImage
				}
			});

			matchUtilities(
				{
					elevation(opacity) {
						return {
							'--mdi-elevation-opacity': opacity
						};
					}
				},
				{
					values: theme('elevation'),
					type: ['percentage']
				}
			);

			matchUtilities(
				{
					state(opacity) {
						return {
							'--mdi-state-opacity': opacity
						};
					}
				},
				{
					values: theme('state'),
					type: ['percentage']
				}
			);

			matchUtilities(
				{
					state(color) {
						return {
							...withAlphaVariable({
								color,
								property: '--mdi-state-color',
								variable: '--mdi-state-opacity'
							}),
							'--mdi-state-opacity': 0
						};
					}
				},
				{
					values: flattenColorPalette(theme('colors')),
					type: ['color', 'any']
				}
			);

			addBase({
				'.i': {
					fontFamily: 'Material Symbols Outlined',
					lineHeight: '1',
					verticalAlign: '-0.115em',
					fontSize: '0.83333333333333333333333em',
					'--mdi-symbol-fill': '0',
					'--mdi-symbol-weight': '400',
					'--mdi-symbol-grade': '0',
					'--mdi-symbol-optical-size': '24',
					fontVariationSettings:
						"'FILL' var(--mdi-symbol-fill), 'wght' var(--mdi-symbol-weight), 'GRAD' var(--mdi-symbol-grade), 'opsz' var(--mdi-symbol-optical-size)",
					'@media (prefers-color-scheme: dark)': {
						'--mdi-symbol-grade': '-25'
					}
				}
			});

			matchUtilities(
				{
					'i-grade'(grade) {
						return {
							'--mdi-symbol-grade': String(grade)
						};
					}
				},
				{
					values: { '-25': -25, 0: 0, 200: 200 },
					type: ['number']
				}
			);

			matchUtilities(
				{
					'i-size'(size) {
						return {
							'--mdi-symbol-optical-size': String(size),
							fontSize: Number(size) / 16 + 'rem'
						};
					}
				},
				{
					values: { 20: '20', 24: '24', 40: '40', 48: '48' }
					// type: ['absolute-size']
				}
			);

			matchUtilities(
				{
					'i-fill'(fill) {
						return {
							'--mdi-symbol-fill': String(fill)
						};
					}
				},
				{
					values: { none: '0', DEFAULT: '1' }
				}
			);

			matchUtilities(
				{
					'i-weight'(weight) {
						return {
							'--mdi-symbol-weight': String(weight)
						};
					}
				},
				{
					values: { 100: 100, 200: 200, 300: 300, 400: 400, 500: 500, 600: 600, 700: 700 }
				}
			);

			createUtilityPlugin('maxWidth', [['max-w', ['maxInlineSize']]])({ matchUtilities, theme });
			createUtilityPlugin('minWidth', [['min-w', ['minInlineSize']]])({ matchUtilities, theme });
			createUtilityPlugin('width', [['w', ['inlineSize']]])({ matchUtilities, theme });

			createUtilityPlugin('maxHeight', [['max-h', ['maxBlockSize']]])({ matchUtilities, theme });
			createUtilityPlugin('minHeight', [['min-h', ['minBlockSize']]])({ matchUtilities, theme });
			createUtilityPlugin('height', [['h', ['blockSize']]])({ matchUtilities, theme });

			matchUtilities(
				{
					mx: (value) => ({ marginInline: value }),
					my: (value) => ({ marginBlock: value }),
					ml: (value) => ({ marginInlineStart: value }),
					mr: (value) => ({ marginInlineEnd: value }),
					mt: (value) => ({ marginBlockStart: value }),
					mb: (value) => ({ marginBlockEnd: value }),
					m: (value) => ({ margin: value })
				},
				{
					values: theme('margin'),
					supportsNegativeValues: true
				}
			);

			matchUtilities(
				{
					px: (value) => ({ paddingInline: value }),
					py: (value) => ({ paddingBlock: value }),
					pl: (value) => ({ paddingInlineStart: value }),
					pr: (value) => ({ paddingInlineEnd: value }),
					pt: (value) => ({ paddingBlockStart: value }),
					pb: (value) => ({ paddingBlockEnd: value }),
					p: (value) => ({ padding: value })
				},
				{
					values: theme('padding')
				}
			);
		})
	]
};
