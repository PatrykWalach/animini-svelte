<script lang="ts">
	import { page } from '$app/stores'

	import { Dialog, DialogOverlay, DialogTitle } from '@rgossiaux/svelte-headlessui'

	export let name = 'payment-successful'
</script>

<a
	href="?dialog={name}"
	class="relative flex items-center justify-center gap-2 rounded-[1.25rem] text-label-lg text-primary surface state-primary min-w-[3rem] h-10 px-3 hover:state-hover focus:state-focus focus-visible:ring-4 ring-primary outline-none disabled:text-on-surface/[.38] disabled:state-none"
	>Open</a
>
{#if $page.url.searchParams.get('dialog') === name}
	<Dialog open static class="fixed inset-0 overflow-y-auto" on:close={(e) => console.log(e)}>
		<form
			class="grid md:grid-cols-2 items-center min-h-full justify-items-center max-h-screen p-12 lg:p-14 supports-[height:1dvb]:max-h-[100dvb]"
			on:formdata={(e) => {
				for (const [key, value] of e.formData.entries()) {
					if (!value) {
						e.formData.delete(key)
					}
				}
			}}
		>
			<DialogOverlay class="fixed inset-0">
				<button
					type="submit"
					class="bg-scrim/[32%] w-full h-full focus-visible:ring-4 ring-primary outline-none ring-inset transition-all backdrop-blur-sm hover:backdrop-blur-none focus:backdrop-blur-none cursor-default"
				/>
			</DialogOverlay>
			<div
				class="flex transition-all relative flex-col overflow-hidden surface rounded-xl bg-surface elevation-3 max-w-[min(100%,35rem)] min-w-[17.5rem] max-h-full h-auto p-6 lg:max-h-[min(100%,35rem)]"
			>
				<DialogTitle class="row-start-2 text-headline-sm text-on-surface mb-4"
					>Payment successful</DialogTitle
				>

				<div
					class="row-start-3 overflow-auto overscroll-contain text-body-md text-on-surface-variant"
				>
					Your payment has been successfully submitted. We’ve sent you an email with all of the
					details of your order.
				</div>

				<div class="row-start-4 flex justify-end gap-2 mt-6">
					<input type="hidden" name="dialog" value="" />

					<button
						class="relative flex items-center justify-center gap-2 rounded-[1.25rem] text-label-lg text-primary surface state-primary min-w-[3rem] h-10 px-3 hover:state-hover focus:state-focus focus-visible:ring-4 ring-primary outline-none disabled:text-on-surface/[.38] disabled:state-none"
						type="submit"
					>
						Got it, thanks!
					</button>
				</div>
			</div>
		</form>
	</Dialog>
{/if}

<!-- 
  <a href="#dialog">Open</a>
  
  <dialog
	bind:this={dialog}
	id="dialog"
	on:click={(e) => {
    if (e.currentTarget === e.target) {
      console.log('close');
		}
	}}
  class="target:flex p-12  lg:p-14"
>
 
	<div

	>
		<div class="row-start-4 flex justify-end gap-2 mt-6">
			<a
				href="# "
				class="relative flex items-center justify-center gap-2 overflow-hidden rounded-[1.25rem] text-label-lg text-primary surface state-primary min-w-[3rem] h-10 px-3 hover:state-hover focus:state-focus disabled:text-on-surface/[.38] disabled:state-none"
				>Close</a
			>

			<form action="" use:enhance method="POST">
				<button
					class="relative flex items-center justify-center gap-2 overflow-hidden rounded-[1.25rem] text-label-lg text-primary surface state-primary min-w-[3rem] h-10 px-3 hover:state-hover focus:state-focus disabled:text-on-surface/[.38] disabled:state-none"
					type="submit">Submit</button
				>
			</form>
		</div>
	</div>
</dialog> -->
