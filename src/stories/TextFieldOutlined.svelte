<script lang="ts">
	import IconExclamationCircle from '$lib/IconExclamationCircle.svelte';
	import IconMagnifyingGlass from '$lib/IconMagnifyingGlass.svelte';
	import IconXCircle from '$lib/IconXCircle.svelte';
	import TextField from '$lib/TextField.svelte';
	import TextFieldInput from '$lib/TextFieldInput.svelte';
	import TextFieldLeading from '$lib/TextFieldLeading.svelte';
	import TextFieldOutlined from '$lib/TextFieldOutlined.svelte';
	import TextFieldTrailing from '$lib/TextFieldTrailing.svelte';

	export let children: string;
	export let supporting: string;
	export let name = '';
	export let value = '';
	export let error = false;
	export let required = false;
	export let disabled = false;
	export let trailing: 'IconMagnifyingGlass' | 'IconExclamationCircle' | 'IconXCircle' | null =
		null;
	export let leading: 'IconMagnifyingGlass' | 'IconExclamationCircle' | 'IconXCircle' | null = null;
</script>

<fieldset {disabled}>
	<TextField {name} {error}>
		<TextFieldInput {required} {value} />

		{#if leading}
			<TextFieldLeading>
				{#if leading == 'IconMagnifyingGlass'}
					<IconMagnifyingGlass />
				{:else if leading == 'IconExclamationCircle'}
					<IconExclamationCircle />
				{:else}
					<IconXCircle />
				{/if}
			</TextFieldLeading>
		{/if}

		<TextFieldOutlined>
			{children}
		</TextFieldOutlined>

		{#if trailing}
			<TextFieldTrailing>
				{#if trailing == 'IconMagnifyingGlass'}
					<IconMagnifyingGlass />
				{:else if trailing == 'IconExclamationCircle'}
					<IconExclamationCircle />
				{:else}
					<IconXCircle />
				{/if}
			</TextFieldTrailing>
		{/if}
		<svelte:fragment slot="message">
			{supporting}
		</svelte:fragment>
	</TextField>
</fieldset>
