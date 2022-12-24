const addPlugin = require('@graphql-codegen/add');
const typedDocumentNodePlugin = require('@graphql-codegen/typed-document-node');
const typescriptOperationPlugin = require('@graphql-codegen/typescript-operations');
const typescriptPlugin = require('@graphql-codegen/typescript');

const gqlTagPlugin = require('@graphql-codegen/gql-tag-operations');
const {
	processSources
} = require('./node_modules/@graphql-codegen/client-preset/cjs/process-sources');
const { ClientSideBaseVisitor } = require('@graphql-codegen/visitor-plugin-common');
const fragmentMaskingPlugin = require('./node_modules/@graphql-codegen/client-preset/cjs/fragment-masking-plugin');

/**
 * @typedef FragmentMaskingConfig
 * @property {string} [augmentedModuleName]
 * @property {string} [unmaskFunctionName]
 */

/**
 * @typedef GqlTagConfig
 * @property {string} [augmentedModuleName]
 * @property {FragmentMaskingConfig | boolean} [fragmentMasking]
 */

/** @type {import('@graphql-codegen/plugin-helpers').Types.OutputPreset<GqlTagConfig>} */
const preset = {
	buildGeneratesSection: (options) => {
		/** when not using augmentation stuff must be re-exported. */
		/** @type {Array<string>} */
		const reexports = [];

		const visitor = new ClientSideBaseVisitor(
			options.schemaAst,
			[],
			options.config,
			options.config
		);

		/** @type {FragmentMaskingConfig | null} */
		let fragmentMaskingConfig = null;

		if (typeof options?.presetConfig?.fragmentMasking === 'object') {
			fragmentMaskingConfig = options.presetConfig.fragmentMasking;
		} else if (options?.presetConfig?.fragmentMasking === true) {
			fragmentMaskingConfig = {};
		}

		const sourcesWithOperations = processSources(options.documents, (node) => {
			if (node.kind === 'FragmentDefinition') {
				return visitor.getFragmentVariableName(node);
			}
			return visitor.getOperationVariableName(node);
		});
		const sources = sourcesWithOperations.map(({ source }) => source);

		const pluginMap = {
			...options.pluginMap,
			[`add`]: addPlugin,
			[`typescript`]: typescriptPlugin,
			[`typescript-operations`]: typescriptOperationPlugin,
			[`typed-document-node`]: typedDocumentNodePlugin,
			[`gen-dts`]: gqlTagPlugin
		};

		/** @type {Array<import('@graphql-codegen/plugin-helpers').Types.ConfiguredPlugin>} */
		const plugins = [
			{ [`add`]: { content: `/* eslint-disable */` } },
			{ [`typescript`]: {} },
			{ [`typescript-operations`]: {} },
			{ [`typed-document-node`]: { flattenGeneratedTypes: true } },
			...options.plugins
		];

		/** @type {Array<import('@graphql-codegen/plugin-helpers').Types.ConfiguredPlugin>} */
		const genDtsPlugins = [
			{ [`add`]: { content: `/* eslint-disable */` } },
			{ [`gen-dts`]: { sourcesWithOperations } }
		];

		let gqlArtifactFileExtension = '.d.ts';
		if (options.presetConfig.augmentedModuleName == null) {
			gqlArtifactFileExtension = '.ts';
			reexports.push('gql');
		}

		const config = {
			...options.config,
			inlineFragmentTypes:
				fragmentMaskingConfig != null ? 'mask' : options.config['inlineFragmentTypes']
		};

		/** @type {import('@graphql-codegen/plugin-helpers').Types.GenerateOptions | null } */
		let fragmentMaskingFileGenerateConfig = null;

		if (fragmentMaskingConfig != null) {
			let fragmentMaskingArtifactFileExtension = '.d.ts';

			if (fragmentMaskingConfig.augmentedModuleName == null) {
				reexports.push('fragment-masking');
				fragmentMaskingArtifactFileExtension = '.ts';
			}

			fragmentMaskingFileGenerateConfig = {
				filename: `${options.baseOutputDir}/fragment-masking${fragmentMaskingArtifactFileExtension}`,
				pluginMap: {
					[`fragment-masking`]: fragmentMaskingPlugin
				},
				plugins: [
					{
						[`fragment-masking`]: {}
					}
				],
				schema: options.schema,
				config: {
					useTypeImports: options.config.useTypeImports,
					augmentedModuleName: fragmentMaskingConfig.augmentedModuleName,
					unmaskFunctionName: fragmentMaskingConfig.unmaskFunctionName
				},
				documents: []
			};
		}

		/** @type {import('@graphql-codegen/plugin-helpers').Types.GenerateOptions | null } */
		let indexFileGenerateConfig = null;

		const reexportsExtension = options.config.emitLegacyCommonJSImports ? '' : '.js';

		if (reexports.length) {
			indexFileGenerateConfig = {
				filename: `${options.baseOutputDir}/index.ts`,
				pluginMap: {
					[`add`]: addPlugin
				},
				plugins: [
					{
						[`add`]: {
							content: reexports
								.map((moduleName) => `export * from "./${moduleName}${reexportsExtension}"`)
								.join('\n')
						}
					}
				],
				schema: options.schema,
				config: {},
				documents: []
			};
		}

		return [
			{
				filename: `${options.baseOutputDir}/graphql.ts`,
				plugins,
				pluginMap,
				schema: options.schema,
				config,
				documents: sources
			},
			{
				filename: `${options.baseOutputDir}/gql${gqlArtifactFileExtension}`,
				plugins: genDtsPlugins,
				pluginMap,
				schema: options.schema,
				config: {
					...config,
					augmentedModuleName: options.presetConfig.augmentedModuleName
				},
				documents: sources
			},
			...(fragmentMaskingFileGenerateConfig ? [fragmentMaskingFileGenerateConfig] : []),
			...(indexFileGenerateConfig ? [indexFileGenerateConfig] : [])
		];
	}
};

module.exports = {
	preset
};
