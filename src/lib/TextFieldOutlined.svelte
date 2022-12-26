<script lang="ts">
	import { getTextFieldContext } from './TextField.svelte';

	const { id } = getTextFieldContext();
</script>

<label
	for={id}
	class="pointer-events-none absolute -top-2 left-4 text-body-sm text-on-surface-variant transition-all group-focus-within:text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-lg group-focus-within:peer-placeholder-shown:-top-2 group-focus-within:peer-placeholder-shown:left-4 group-focus-within:peer-placeholder-shown:text-body-sm peer-disabled:text-on-surface/[.38] peer-placeholder-shown:peer-[]/leading:left-12 peer-error:text-error group-not-focus-within:group-hover:peer-error:text-on-error-container group-not-focus-within:group-hover:peer-not-disabled:text-on-surface"
>
	<slot>
		<!-- <span class=" after:content-['*']"> Token </span> -->
	</slot>
</label>
<fieldset
	class="border-1 peer-group pointer-events-none absolute -top-[10px] left-0 right-0 bottom-[17.5px] rounded-xs border border-outline transition-all px-3 group-focus-within:border-2 group-focus-within:border-primary peer-disabled:border-outline/[.12] peer-error:border-error group-not-focus-within:group-hover:peer-error:border-on-error-container group-not-focus-within:group-hover:peer-not-disabled:border-on-surface"
>
	<legend
		class="overflow-hidden whitespace-nowrap opacity-0 transition-all peer-group-placeholder-shown:max-w-0 group-focus-within:peer-group-placeholder-shown:max-w-none"
	>
		<span class="text-label-sm px-1">
			<slot>
				<!-- <span class=" after:content-['*']"> Token </span> -->
			</slot>
		</span>
	</legend>
</fieldset>
