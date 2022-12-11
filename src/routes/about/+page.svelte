<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData, PageData } from './$types'

	export let form: ActionData
	export let data: PageData

	const cache = getCache()

	$: query = cache.getQuery({ ...data, query: AboutQuery })

	import { AboutQuery } from './gql'

	$: color = $query.data?.Viewer?.options?.profileColor

	import { PUBLIC_ANILIST_GQL_SERVER_URL } from '$env/static/public'
	import { getCache } from '$lib/client'
	import Dialog from '$lib/Dialog.svelte'
	import { offline } from '$lib/form'

	const onSubmit = offline<ActionData, undefined>((args) => {
		$query.update(
			(data) =>
				data?.Viewer?.options && {
					...data,
					Viewer: {
						...data.Viewer,
						options: {
							...data.Viewer.options,
							profileColor: String(args.data.get('profileColor'))
						}
					}
				}
		)

		return undefined
	})
</script>

<h1>{PUBLIC_ANILIST_GQL_SERVER_URL}</h1>
<h2>{color}</h2>

<form method="POST" use:enhance={onSubmit}>
	<label for="profileColor">Profile color</label>
	<input type="text" id="profileColor" name="profileColor" />

	<button type="submit">Submit</button>
</form>

<Dialog />
