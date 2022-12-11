<script lang="ts">
	export let disabled = false
</script>

<button
	{disabled}
	class="relative flex items-center justify-center gap-2 overflow-hidden rounded-[1.25rem] text-label-lg text-primary surface state-primary min-w-[3rem] h-10 px-3 hover:state-hover focus:state-focus disabled:text-on-surface/[.38] disabled:state-none"
>
	<slot />
</button>
