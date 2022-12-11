import { PUBLIC_TEST_TOKEN } from '$env/static/public'
import { readable } from 'svelte/store'
import { makeSubject, pipe, subscribe } from 'wonka'
import { resetCache } from './client'

const { next, source } = makeSubject<void>()

export { source }

export async function logout() {
	localStorage.clear()
	console.log('logout')
	await resetCache()
	next()
}

export async function login(token: string) {
	localStorage.setItem('anilist-token', token)
	console.log('login')
	await resetCache()
	next()
}

export function getToken() {
	return globalThis.localStorage?.getItem('anilist-token') || PUBLIC_TEST_TOKEN
}

export const useAuth = () => {
	return readable(getToken(), (setToken) => {
		const { unsubscribe } = pipe(
			source,
			subscribe(() => {
				setToken(getToken())
			})
		)
		return unsubscribe
	})
}
