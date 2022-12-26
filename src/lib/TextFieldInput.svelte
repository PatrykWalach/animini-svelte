<script lang="ts">
	import { getTextFieldContext } from './TextField.svelte';

	const { name, id } = getTextFieldContext();

	export let value: string | undefined | null;
	export let required: boolean | undefined | null;
</script>

<input
	{id}
	{name}
	bind:value
	{required}
	spellCheck="false"
	placeholder=" "
	class="peer resize-none appearance-none items-center bg-transparent text-body-lg text-on-surface placeholder-transparent caret-primary outline-none min-w-0 w-full p-4 placeholder:transition-all focus:placeholder-on-surface-variant focus:ring-0 disabled:text-on-surface/[.38] error:caret-error"
/>
