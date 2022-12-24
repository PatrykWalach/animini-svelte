<script lang="ts">
	import { getTextFieldContext } from './TextField.svelte';

	const { id } = getTextFieldContext();
</script>

<label
	for={id}
	class="pointer-events-none absolute -top-2 left-4 text-body-sm text-on-surface-variant transition-all after:content-['*'] group-hover:text-on-surface peer-placeholder-shown:top-4 peer-placeholder-shown:text-body-lg peer-invalid:text-error group-data-[error=true]:text-error group-hover:group-data-[error=true]:text-on-error-container group-hover:peer-invalid:text-on-error-container peer-focus:text-primary peer-focus:peer-placeholder-shown:-top-2 peer-focus:peer-placeholder-shown:left-4 peer-focus:peer-placeholder-shown:text-body-sm group-data-[error=true]:peer-focus:text-error peer-focus:peer-invalid:text-error group-hover:group-data-[error=true]:peer-focus:text-error group-hover:peer-invalid:peer-focus:text-error peer-disabled:text-on-surface/[.38]  group-hover:peer-disabled:text-on-surface/[.38] group-data-[error=true]:peer-disabled: text-on-surface/[.38] peer-disabled:peer-invalid:text-on-surface/[.38] group-data-[leading]:peer-placeholder-shown:left-12"
>
	<slot />
</label>
<fieldset
	class="border-1 peer-group pointer-events-none absolute -top-[10px] left-0 right-0 bottom-[17.5px] rounded-xs border border-outline transition-all px-3 group-focus-within:border-2 group-focus-within:border-primary group-hover:border-on-surface group-hover:group-focus-within:border-primary group-data-[error=true]:border-error peer-invalid:border-error group-focus-within:group-data-[error=true]:border-error group-focus-within:peer-invalid:border-error group-hover:group-data-[error=true]:border-on-error-container group-hover:peer-invalid:border-on-error-container group-focus-within:group-hover:group-data-[error=true]:border-error group-focus-within:group-hover:peer-invalid:border-error peer-disabled:border-outline/[.12] group-hover:peer-disabled:border-outline/[.12]"
>
	<legend
		class={'overflow-hidden whitespace-nowrap opacity-0 transition-all peer-group-placeholder-shown:max-w-0 group-focus-within:peer-group-placeholder-shown:max-w-none'}
	>
		<span class="text-label-sm px-1">
			<slot>
				<!-- <span class=" after:content-['*']"> Token </span> -->
			</slot>
		</span>
	</legend>
</fieldset>
