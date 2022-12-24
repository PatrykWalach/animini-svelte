<script lang="ts">
	import TextField from '$lib/TextField.svelte';
	import TextFieldInput from '$lib/TextFieldInput.svelte';
	import TextFieldLeading from '$lib/TextFieldLeading.svelte';
	import TextFieldOutlined from '$lib/TextFieldOutlined.svelte';
	import TextFieldTrailing from '$lib/TextFieldTrailing.svelte';

	export let children: string;
	export let supporting: string;
	export let name: string;
	export let value: string;
	export let error = false;
	export let required = false;
	export let disabled = false;
	export let trailing: 'MagnifyingGlassIcon' | 'XCircleIcon' | 'ExclamationCircleIcon' | null =
		null;
	export let leading: 'MagnifyingGlassIcon' | 'XCircleIcon' | 'ExclamationCircleIcon' | null = null;
</script>

<TextField {name} {error} {disabled}>
	{#if leading}
		<TextFieldLeading />
	{/if}
	<TextFieldInput {required} {value} />
	<TextFieldOutlined>
		{children}
	</TextFieldOutlined>
	{#if trailing}
		<TextFieldTrailing />
	{/if}
	<svelte:fragment slot="message">
		{supporting}
	</svelte:fragment>
</TextField>
