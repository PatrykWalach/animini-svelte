import { HstScreenshot } from '@histoire/plugin-screenshot'
import { HstSvelte } from '@histoire/plugin-svelte'
import { defineConfig } from 'histoire'

export default defineConfig({
  setupFile: 'histoire.setup.ts',
  plugins: [
    HstSvelte(),HstScreenshot()
  ],
})