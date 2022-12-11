<script lang="ts">
	import BtnText from './BtnText.svelte';
	import type * as H from '@histoire/plugin-svelte';

	export let Hst: H.Hst;
</script>

<Hst.Story title="Text Button" layout={{ type: 'grid', width: '25%' }}>
	<Hst.Variant title="Enabled">
		<BtnText>Enabled</BtnText>
	</Hst.Variant>
	<Hst.Variant title="Disabled">
		<BtnText disabled={true}>Enabled</BtnText>
	</Hst.Variant>
</Hst.Story>
