<script lang="ts" context="module">
	const KEY = Symbol();

	interface Context {
		name: string;
		id: string;
	}

	export function getTextFieldContext() {
		return getContext<Context>(KEY);
	}

	export function setTextFieldContext(ctx: Context) {
		return setContext<Context>(KEY, ctx);
	}
</script>

<script lang="ts">
	import { getContext, setContext } from 'svelte';

	export let disabled = false;
	export let error = false;
	export let name: string;

	setTextFieldContext({ name, id: name });
</script>

<div class="group relative grid" data-error={!!error} data-disabled={!!disabled}>
	<slot />
	<p
		class="gap-4 text-body-sm text-on-surface-variant transition-all line-clamp-1 h-[17.5px] px-4 pt-1 group-data-[error=true]:text-error peer-invalid:text-error peer-disabled:text-on-surface/[.38] group-data-[error=true]:peer-disabled:text-on-surface/[.38] peer-invalid:peer-disabled:text-on-surface/[.38]"
	>
		<slot name="message">
			<!-- {#if message}
				message
			{:else} -->
			<!-- <span class="before:content-['*']">required</span> -->
			<!-- {/if} -->
		</slot>
	</p>
</div>
