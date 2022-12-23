<script lang="ts">
	export let disabled = false;

	function data(classes: Record<string, boolean>) {
		return Object.entries(classes)
			.filter(([, value]) => value)
			.map(([key]) => key)
			.join(' ');
	}
</script>

<div
	data-ui={data({ disabled })}
	class="relative flex items-center justify-center gap-2 overflow-hidden rounded-[1.25rem] text-label-lg text-primary surface state-primary min-w-[3rem] h-10 px-3 hover:state-hover focus:state-focus data-[ui~=disabled]:text-on-surface/[.38] data-[ui~=disabled]:state-none"
>
	<slot />
</div>
