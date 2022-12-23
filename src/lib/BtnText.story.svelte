<script lang="ts">
	import type * as H from '@histoire/plugin-svelte';

	export let Hst: H.Hst;
</script>

<Hst.Story title="Text Button" layout={{ type: 'grid', width: '25%' }}>
	<Hst.Variant title="Enabled">
		<button type="submit" class="btn">
			Enabled
		</button>
	</Hst.Variant>
	<Hst.Variant title="Disabled">
		<button type="submit" class="btn" disabled>
			Disabled
		</button>
	</Hst.Variant>
	<Hst.Variant title="Link">
		<a href="?" class="btn">
	 Link 
		</a>
	</Hst.Variant>
</Hst.Story>
