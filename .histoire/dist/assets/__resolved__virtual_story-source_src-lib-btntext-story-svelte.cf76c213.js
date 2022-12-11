const __resolved__virtual_storySource_srcLibBtntextStorySvelte = `<script lang="ts">\r
  import BtnText from "./BtnText.svelte";\r
  import type * as H from '@histoire/plugin-svelte'\r
\r
  export let Hst: H.Hst\r
<\/script>\r
\r
\r
<Hst.Story title="Text Button"   layout={{ type: 'grid', width: '25%' }}>\r
  <Hst.Variant title="Enabled">\r
    <BtnText > \r
      Enabled\r
    </BtnText> \r
  </Hst.Variant>\r
  <Hst.Variant title="Disabled">\r
    <BtnText disabled={true}> \r
      Enabled\r
    </BtnText> \r
  </Hst.Variant>\r
</Hst.Story>`;
export { __resolved__virtual_storySource_srcLibBtntextStorySvelte as default };
