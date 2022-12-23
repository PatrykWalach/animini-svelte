const { convertFactory } = require('@graphql-codegen/visitor-plugin-common')
const { concatAST } = require('graphql')
const { pipe } = require('fp-ts/lib/function.js')
const { filterMap } = require('fp-ts/lib/ReadonlyArray.js')
const { some, none } = require('fp-ts/lib/Option.js')

function getOperationSuffix(config, node, operationType) {
	const { omitOperationSuffix = false, dedupeOperationSuffix = false } = config || {}
	const operationName = typeof node === 'string' ? node : node.name ? node.name.value : ''
	return omitOperationSuffix
		? ''
		: dedupeOperationSuffix && operationName.toLowerCase().endsWith(operationType.toLowerCase())
		? ''
		: operationType
}
const plugin = (schema, documents, config) => {
	const allAst = concatAST(documents.map((v) => v.document))
	const convertName = convertFactory(config)

	const out = pipe(
		allAst.definitions,
		filterMap((node) => {
			if (node.kind === 'FragmentDefinition') {
				const operationTypeSuffix = getOperationSuffix(config, node, 'Fragment')

				const documentTypeName = convertName(node, {
					suffix: operationTypeSuffix
				})

				const documentVariableName = convertName(node, {
					suffix: operationTypeSuffix + 'Doc'
				})

				return some(
					`export const ${documentVariableName} = ${JSON.stringify(
						{ kind: 'Document', definitions: [node] },
						(key, value) => {
							if (key === 'loc') {
								// skip location
								return
							}
							if (Array.isArray(value) && !value.length) {
								// skip empty array
								return
							}
							return value
						}
					)} as unknown as DocumentNode<${documentTypeName}, unknown>`
				)
			}

			return none
		})
	)

	return {
		prepend: [],
		content: out.join('\n')
	}
}

module.exports = {
	plugin
}
