// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {}

declare namespace svelte.JSX {
	interface DOMAttributes<T extends EventTarget> {
		onformdata?: EventHandler<FormDataEvent, T> | null | undefined
	}
}

interface FormDataEvent extends Event {
	formData: FormData
}

// optional constructor:
interface FormDataEventInit extends EventInit {
	formData: FormData
}

declare global {
	let FormDataEvent: {
		prototype: FormDataEvent
		new (type: string, eventInitDict?: FormDataEventInit): FormDataEvent
	}
}
//
