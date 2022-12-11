import { applyAction, type SubmitFunction } from '$app/forms'

type D = Record<string, unknown> | undefined
type SubmitFunctionArgs = {
	action: URL
	data: FormData
	form: HTMLFormElement
	controller: AbortController
	cancel(): void
}

export function offline<Success extends D, Invalid extends D>(
	optimistic: (args: SubmitFunctionArgs) => Success
): SubmitFunction<Success, Invalid> {
	return (args) => {
		const data = optimistic(args)

		return async ({ result, update, action, form }) => {
			if (result.type === 'error' && !navigator.onLine) {
				const saved = {
					url: action.href,
					data: Object.fromEntries(new FormData(form))
				}

				/** @TODO save */
				console.log({ saved })

				return applyAction<Success, Invalid>({
					type: 'success',
					data,
					status: 200
				})
			}

			return update()
		}
	}
}
