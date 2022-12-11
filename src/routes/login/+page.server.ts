import type { Actions } from './$types.js'

export const actions: Actions = {
	async default(event) {
		const data = await event.request.formData()

		event.cookies.set('userId', data.get('userId'), {
			path: '/',
			maxAge: 24 * 60 * 60
		})
		return
	}
}
