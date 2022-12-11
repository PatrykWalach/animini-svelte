import request from '$lib/client'
import { AboutMutation } from './gql'

import type { Actions } from './$types'

export const actions: Actions = {
	async default(event) {
		const data = await event.request.formData()

		const result = await request({
			document: AboutMutation,
			variables: {
				profileColor: data.get('profileColor')
			},
			fetch: event.fetch
		})

		console.log(result)

		// return result;
	}
}

export {}

import { AboutQuery } from './gql'

import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch, request: { signal } }) => {
	const variables = {}

	const data = await request({ document: AboutQuery, variables, fetch, signal })

	return { data, variables }
}
