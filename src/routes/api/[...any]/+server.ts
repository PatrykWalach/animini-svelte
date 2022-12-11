import { addMocksToSchema } from '@graphql-tools/mock'
import { buildClientSchema } from 'graphql'

import introspectionResult from '$lib/gql/schema.json'

console.log('api')

interface Context {
	userId: number
}

// Create a new schema with mocks
const schema = addMocksToSchema<Resolvers<Context>>({
	schema: buildClientSchema(introspectionResult),
	// typePolicies: {
	// 	UserOptions: {
	// 		keyFieldName: false
	// 	}
	// },
	mocks: {
		UserOptions: () => ({
			profileColor: 'red'
		})
	},
	resolvers: (store) => ({
		Query: {
			Viewer: (_, _args, ctx) => {
				return store.get('User', ctx.userId)
			}
		},
		Mutation: {
			UpdateUser: (_, { profileColor }, ctx) => {
				store.set('User', ctx.userId, {
					options: {
						profileColor
					}
				})

				return store.get('User', ctx.userId)
			}
		}
	})
})

import type { Resolvers } from '$lib/gql/resolvers'
import { renderGraphiQL } from '@graphql-yoga/render-graphiql'
import type { RequestEvent } from '@sveltejs/kit'
import { GraphQLError } from 'graphql'
import { createYoga } from 'graphql-yoga'

const handler = createYoga<RequestEvent, Context>({
	fetchAPI: globalThis,
	renderGraphiQL,
	schema: schema,

	context(req) {
		const userId = Number(req.cookies.get('userId'))

		if (!isFinite(userId)) {
			throw new GraphQLError('Unauthorized')
		}

		return {
			userId
		}
	},

	// Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
	graphqlEndpoint: '/api/graphql'
})

export const GET = handler

export const POST = handler
