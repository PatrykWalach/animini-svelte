import {
	X as SvelteComponentDev,
	Y as init,
	Z as safe_not_equal,
	_ as dispatch_dev,
	$ as create_slot,
	a0 as validate_slots,
	a1 as element,
	a2 as claim_element,
	a3 as children,
	a4 as detach_dev,
	a5 as attr_dev,
	a6 as add_location,
	a7 as insert_hydration_dev,
	a8 as update_slot_base,
	a9 as get_all_dirty_from_scope,
	aa as get_slot_changes,
	ab as prop_dev,
	ac as transition_in,
	ad as transition_out,
	ae as create_component,
	af as claim_component,
	ag as mount_component,
	ah as destroy_component,
	ai as space,
	aj as claim_space,
	ak as text,
	al as claim_text,
	am as Comp1,
	an as Logo_square,
	ao as Logo_dark,
	ap as useDark,
	aq as useToggle,
	f as watch,
	ar as markRaw,
	R as reactive,
	d as defineComponent,
	k as ref,
	as as watchEffect,
	o as openBlock,
	c as createBlock,
	m as mergeProps,
	at as resolveDynamicComponent,
	q as createCommentVNode
} from './vendor.ebc1f38e.js'
const scriptRel = 'modulepreload'
const assetsURL = function (dep) {
	return '/' + dep
}
const seen = {}
const __vitePreload = function preload(baseModule, deps, importerUrl) {
	if (!deps || deps.length === 0) {
		return baseModule()
	}
	const links = document.getElementsByTagName('link')
	return Promise.all(
		deps.map((dep) => {
			dep = assetsURL(dep)
			if (dep in seen) return
			seen[dep] = true
			const isCss = dep.endsWith('.css')
			const cssSelector = isCss ? '[rel="stylesheet"]' : ''
			const isBaseRelative = !!importerUrl
			if (isBaseRelative) {
				for (let i = links.length - 1; i >= 0; i--) {
					const link2 = links[i]
					if (link2.href === dep && (!isCss || link2.rel === 'stylesheet')) {
						return
					}
				}
			} else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
				return
			}
			const link = document.createElement('link')
			link.rel = isCss ? 'stylesheet' : scriptRel
			if (!isCss) {
				link.as = 'script'
				link.crossOrigin = ''
			}
			link.href = dep
			document.head.appendChild(link)
			if (isCss) {
				return new Promise((res, rej) => {
					link.addEventListener('load', res)
					link.addEventListener('error', () => rej(new Error(`Unable to preload CSS for ${dep}`)))
				})
			}
		})
	).then(() => baseModule())
}
const file = 'D:/Projekty/animini-svelte/src/lib/BtnText.svelte'
function create_fragment$1(ctx) {
	let button
	let current
	const default_slot_template = ctx[2].default
	const default_slot = create_slot(default_slot_template, ctx, ctx[1], null)
	const block = {
		c: function create() {
			button = element('button')
			if (default_slot) default_slot.c()
			this.h()
		},
		l: function claim(nodes) {
			button = claim_element(nodes, 'BUTTON', { class: true })
			var button_nodes = children(button)
			if (default_slot) default_slot.l(button_nodes)
			button_nodes.forEach(detach_dev)
			this.h()
		},
		h: function hydrate() {
			button.disabled = ctx[0]
			attr_dev(
				button,
				'class',
				'relative flex items-center justify-center gap-2 overflow-hidden rounded-[1.25rem] text-label-lg text-primary surface state-primary min-w-[3rem] h-10 px-3 hover:state-hover focus:state-focus disabled:text-on-surface/[.38] disabled:state-none'
			)
			add_location(button, file, 3, 0, 61)
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, button, anchor)
			if (default_slot) {
				default_slot.m(button, null)
			}
			current = true
		},
		p: function update(ctx2, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & 2)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx2,
						ctx2[1],
						!current
							? get_all_dirty_from_scope(ctx2[1])
							: get_slot_changes(default_slot_template, ctx2[1], dirty, null),
						null
					)
				}
			}
			if (!current || dirty & 1) {
				prop_dev(button, 'disabled', ctx2[0])
			}
		},
		i: function intro(local) {
			if (current) return
			transition_in(default_slot, local)
			current = true
		},
		o: function outro(local) {
			transition_out(default_slot, local)
			current = false
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button)
			if (default_slot) default_slot.d(detaching)
		}
	}
	dispatch_dev('SvelteRegisterBlock', {
		block,
		id: create_fragment$1.name,
		type: 'component',
		source: '',
		ctx
	})
	return block
}
function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props
	validate_slots('BtnText', slots, ['default'])
	let { disabled = false } = $$props
	const writable_props = ['disabled']
	Object.keys($$props).forEach((key) => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot')
			console.warn(`<BtnText> was created with unknown prop '${key}'`)
	})
	$$self.$$set = ($$props2) => {
		if ('disabled' in $$props2) $$invalidate(0, (disabled = $$props2.disabled))
		if ('$$scope' in $$props2) $$invalidate(1, ($$scope = $$props2.$$scope))
	}
	$$self.$capture_state = () => ({ disabled })
	$$self.$inject_state = ($$props2) => {
		if ('disabled' in $$props2) $$invalidate(0, (disabled = $$props2.disabled))
	}
	if ($$props && '$$inject' in $$props) {
		$$self.$inject_state($$props.$$inject)
	}
	return [disabled, $$scope, slots]
}
class BtnText extends SvelteComponentDev {
	constructor(options) {
		super(options)
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { disabled: 0 })
		dispatch_dev('SvelteRegisterComponent', {
			component: this,
			tagName: 'BtnText',
			options,
			id: create_fragment$1.name
		})
	}
	get disabled() {
		throw new Error(
			"<BtnText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
		)
	}
	set disabled(value) {
		throw new Error(
			"<BtnText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
		)
	}
}
function create_default_slot_4(ctx) {
	let t
	const block = {
		c: function create() {
			t = text('Enabled')
		},
		l: function claim(nodes) {
			t = claim_text(nodes, 'Enabled')
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t, anchor)
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t)
		}
	}
	dispatch_dev('SvelteRegisterBlock', {
		block,
		id: create_default_slot_4.name,
		type: 'slot',
		source: '(8:4) <BtnText >',
		ctx
	})
	return block
}
function create_default_slot_3(ctx) {
	let btntext
	let current
	btntext = new BtnText({
		props: {
			$$slots: { default: [create_default_slot_4] },
			$$scope: { ctx }
		},
		$$inline: true
	})
	const block = {
		c: function create() {
			create_component(btntext.$$.fragment)
		},
		l: function claim(nodes) {
			claim_component(btntext.$$.fragment, nodes)
		},
		m: function mount(target, anchor) {
			mount_component(btntext, target, anchor)
			current = true
		},
		p: function update(ctx2, dirty) {
			const btntext_changes = {}
			if (dirty & 2) {
				btntext_changes.$$scope = { dirty, ctx: ctx2 }
			}
			btntext.$set(btntext_changes)
		},
		i: function intro(local) {
			if (current) return
			transition_in(btntext.$$.fragment, local)
			current = true
		},
		o: function outro(local) {
			transition_out(btntext.$$.fragment, local)
			current = false
		},
		d: function destroy(detaching) {
			destroy_component(btntext, detaching)
		}
	}
	dispatch_dev('SvelteRegisterBlock', {
		block,
		id: create_default_slot_3.name,
		type: 'slot',
		source: '(7:2) <Hst.Variant title=\\"Enabled\\">',
		ctx
	})
	return block
}
function create_default_slot_2(ctx) {
	let t
	const block = {
		c: function create() {
			t = text('Enabled')
		},
		l: function claim(nodes) {
			t = claim_text(nodes, 'Enabled')
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t, anchor)
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t)
		}
	}
	dispatch_dev('SvelteRegisterBlock', {
		block,
		id: create_default_slot_2.name,
		type: 'slot',
		source: '(13:4) <BtnText disabled={true}>',
		ctx
	})
	return block
}
function create_default_slot_1(ctx) {
	let btntext
	let current
	btntext = new BtnText({
		props: {
			disabled: true,
			$$slots: { default: [create_default_slot_2] },
			$$scope: { ctx }
		},
		$$inline: true
	})
	const block = {
		c: function create() {
			create_component(btntext.$$.fragment)
		},
		l: function claim(nodes) {
			claim_component(btntext.$$.fragment, nodes)
		},
		m: function mount(target, anchor) {
			mount_component(btntext, target, anchor)
			current = true
		},
		p: function update(ctx2, dirty) {
			const btntext_changes = {}
			if (dirty & 2) {
				btntext_changes.$$scope = { dirty, ctx: ctx2 }
			}
			btntext.$set(btntext_changes)
		},
		i: function intro(local) {
			if (current) return
			transition_in(btntext.$$.fragment, local)
			current = true
		},
		o: function outro(local) {
			transition_out(btntext.$$.fragment, local)
			current = false
		},
		d: function destroy(detaching) {
			destroy_component(btntext, detaching)
		}
	}
	dispatch_dev('SvelteRegisterBlock', {
		block,
		id: create_default_slot_1.name,
		type: 'slot',
		source: '(12:2) <Hst.Variant title=\\"Disabled\\">',
		ctx
	})
	return block
}
function create_default_slot(ctx) {
	let hst_variant0
	let t
	let hst_variant1
	let current
	hst_variant0 = new ctx[0].Variant({
		props: {
			title: 'Enabled',
			$$slots: { default: [create_default_slot_3] },
			$$scope: { ctx }
		},
		$$inline: true
	})
	hst_variant1 = new ctx[0].Variant({
		props: {
			title: 'Disabled',
			$$slots: { default: [create_default_slot_1] },
			$$scope: { ctx }
		},
		$$inline: true
	})
	const block = {
		c: function create() {
			create_component(hst_variant0.$$.fragment)
			t = space()
			create_component(hst_variant1.$$.fragment)
		},
		l: function claim(nodes) {
			claim_component(hst_variant0.$$.fragment, nodes)
			t = claim_space(nodes)
			claim_component(hst_variant1.$$.fragment, nodes)
		},
		m: function mount(target, anchor) {
			mount_component(hst_variant0, target, anchor)
			insert_hydration_dev(target, t, anchor)
			mount_component(hst_variant1, target, anchor)
			current = true
		},
		p: function update(ctx2, dirty) {
			const hst_variant0_changes = {}
			if (dirty & 2) {
				hst_variant0_changes.$$scope = { dirty, ctx: ctx2 }
			}
			hst_variant0.$set(hst_variant0_changes)
			const hst_variant1_changes = {}
			if (dirty & 2) {
				hst_variant1_changes.$$scope = { dirty, ctx: ctx2 }
			}
			hst_variant1.$set(hst_variant1_changes)
		},
		i: function intro(local) {
			if (current) return
			transition_in(hst_variant0.$$.fragment, local)
			transition_in(hst_variant1.$$.fragment, local)
			current = true
		},
		o: function outro(local) {
			transition_out(hst_variant0.$$.fragment, local)
			transition_out(hst_variant1.$$.fragment, local)
			current = false
		},
		d: function destroy(detaching) {
			destroy_component(hst_variant0, detaching)
			if (detaching) detach_dev(t)
			destroy_component(hst_variant1, detaching)
		}
	}
	dispatch_dev('SvelteRegisterBlock', {
		block,
		id: create_default_slot.name,
		type: 'slot',
		source: `(6:0) <Hst.Story title=\\"Text Button\\"   layout={{ type: 'grid', width: '25%' }}>`,
		ctx
	})
	return block
}
function create_fragment(ctx) {
	let hst_story
	let current
	hst_story = new ctx[0].Story({
		props: {
			title: 'Text Button',
			layout: { type: 'grid', width: '25%' },
			$$slots: { default: [create_default_slot] },
			$$scope: { ctx }
		},
		$$inline: true
	})
	const block = {
		c: function create() {
			create_component(hst_story.$$.fragment)
		},
		l: function claim(nodes) {
			claim_component(hst_story.$$.fragment, nodes)
		},
		m: function mount(target, anchor) {
			mount_component(hst_story, target, anchor)
			current = true
		},
		p: function update(ctx2, [dirty]) {
			const hst_story_changes = {}
			if (dirty & 2) {
				hst_story_changes.$$scope = { dirty, ctx: ctx2 }
			}
			hst_story.$set(hst_story_changes)
		},
		i: function intro(local) {
			if (current) return
			transition_in(hst_story.$$.fragment, local)
			current = true
		},
		o: function outro(local) {
			transition_out(hst_story.$$.fragment, local)
			current = false
		},
		d: function destroy(detaching) {
			destroy_component(hst_story, detaching)
		}
	}
	dispatch_dev('SvelteRegisterBlock', {
		block,
		id: create_fragment.name,
		type: 'component',
		source: '',
		ctx
	})
	return block
}
function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props
	validate_slots('BtnText_story', slots, [])
	let { Hst } = $$props
	$$self.$$.on_mount.push(function () {
		if (Hst === void 0 && !('Hst' in $$props || $$self.$$.bound[$$self.$$.props['Hst']])) {
			console.warn("<BtnText_story> was created without expected prop 'Hst'")
		}
	})
	const writable_props = ['Hst']
	Object.keys($$props).forEach((key) => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot')
			console.warn(`<BtnText_story> was created with unknown prop '${key}'`)
	})
	$$self.$$set = ($$props2) => {
		if ('Hst' in $$props2) $$invalidate(0, (Hst = $$props2.Hst))
	}
	$$self.$capture_state = () => ({ BtnText, Hst })
	$$self.$inject_state = ($$props2) => {
		if ('Hst' in $$props2) $$invalidate(0, (Hst = $$props2.Hst))
	}
	if ($$props && '$$inject' in $$props) {
		$$self.$inject_state($$props.$$inject)
	}
	return [Hst]
}
class BtnText_story extends SvelteComponentDev {
	constructor(options) {
		super(options)
		init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 })
		dispatch_dev('SvelteRegisterComponent', {
			component: this,
			tagName: 'BtnText_story',
			options,
			id: create_fragment.name
		})
	}
	get Hst() {
		throw new Error(
			"<BtnText_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
		)
	}
	set Hst(value) {
		throw new Error(
			"<BtnText_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
		)
	}
}
let files = [
	{
		id: 'src-lib-btntext-story-svelte',
		path: ['Text Button'],
		filePath: 'src/lib/BtnText.story.svelte',
		story: {
			id: 'src-lib-btntext-story-svelte',
			title: 'Text Button',
			group: null,
			layout: { type: 'grid', width: '25%' },
			icon: null,
			iconColor: null,
			docsOnly: false,
			variants: [
				{ id: 'src-lib-btntext-story-svelte-0', title: 'Enabled', icon: null, iconColor: null },
				{ id: 'src-lib-btntext-story-svelte-1', title: 'Disabled', icon: null, iconColor: null }
			]
		},
		supportPluginId: 'svelte3',
		index: 0,
		component: BtnText_story,
		source: () =>
			__vitePreload(
				() => import('./__resolved__virtual_story-source_src-lib-btntext-story-svelte.cf76c213.js'),
				true ? [] : void 0
			)
	},
	{
		id: 'tailwind',
		path: ['Tailwind'],
		filePath:
			'D:/Projekty/animini-svelte/node_modules/.histoire/plugins/builtin_tailwind-tokens/Tailwind.story.js',
		story: {
			id: 'tailwind',
			title: 'Tailwind',
			group: 'design-system',
			layout: { type: 'single', iframe: false },
			icon: 'mdi:tailwind',
			docsOnly: false,
			variants: [
				{ id: 'background-color', title: 'Background Color', icon: 'carbon:color-palette' },
				{ id: 'text-color', title: 'Text Color', icon: 'carbon:text-color' },
				{ id: 'border-color', title: 'Border Color', icon: 'carbon:color-palette' },
				{ id: 'padding', title: 'Padding', icon: 'carbon:area' },
				{ id: 'margin', title: 'Margin', icon: 'carbon:area' },
				{ id: 'font-size', title: 'Font Size', icon: 'carbon:text-font' },
				{ id: 'font-weight', title: 'Font Weight', icon: 'carbon:text-font' },
				{ id: 'font-family', title: 'Font Family', icon: 'carbon:text-font' },
				{ id: 'letter-spacing', title: 'Letter Spacing', icon: 'carbon:text-font' },
				{ id: 'line-height', title: 'Line Height', icon: 'carbon:text-font' },
				{ id: 'drop-shadow', title: 'Drop Shadow', icon: 'carbon:shape-except' },
				{ id: 'border-radius', title: 'Border Radius', icon: 'carbon:condition-wait-point' },
				{ id: 'border-width', title: 'Border Width', icon: 'carbon:checkbox' },
				{ id: 'width', title: 'Width', icon: 'carbon:pan-horizontal' },
				{ id: 'height', title: 'Height', icon: 'carbon:pan-vertical' },
				{ id: 'full-config', title: 'Full Config', icon: 'carbon:code' }
			]
		},
		supportPluginId: 'vanilla',
		index: 1,
		component: Comp1,
		source: () =>
			__vitePreload(
				() => import('./__resolved__virtual_story-source_tailwind.f743b57d.js'),
				true ? [] : void 0
			)
	}
]
let tree = [
	{
		group: true,
		id: 'design-system',
		title: 'Design System',
		children: [{ title: 'Tailwind', index: 1 }]
	},
	{ title: 'Text Button', index: 0 }
]
const config = {
	plugins: [
		{ name: 'builtin:tailwind-tokens' },
		{
			name: 'builtin:vanilla-support',
			supportPlugin: {
				id: 'vanilla',
				moduleName:
					'D:/Projekty/animini-svelte/node_modules/histoire/dist/node/builtin-plugins/vanilla-support',
				setupFn: 'setupVanilla'
			}
		},
		{
			name: '@histoire/plugin-svelte',
			supportPlugin: {
				id: 'svelte3',
				moduleName: '@histoire/plugin-svelte',
				setupFn: 'setupSvelte3'
			}
		},
		{ name: '@histoire/plugin-screenshot' }
	],
	outDir: 'D:/Projekty/animini-svelte/.histoire/dist',
	storyMatch: ['**/*.story.vue', '**/*.story.svelte'],
	storyIgnored: ['**/node_modules/**', '**/dist/**'],
	supportMatch: [
		{ id: 'vanilla', patterns: ['**/*.js'], pluginIds: ['vanilla'] },
		{ id: 'svelte', patterns: ['**/*.svelte'], pluginIds: ['svelte3'] }
	],
	tree: { file: 'title', order: 'asc', groups: [{ id: 'design-system', title: 'Design System' }] },
	theme: {
		title: 'Histoire',
		colors: {
			primary: {
				50: '#fff7ed',
				100: '#ffedd5',
				200: '#fed7aa',
				300: '#fdba74',
				400: '#fb923c',
				500: '#f97316',
				600: '#ea580c',
				700: '#c2410c',
				800: '#9a3412',
				900: '#7c2d12'
			},
			gray: {
				50: '#fafafa',
				100: '#f4f4f5',
				200: '#e4e4e7',
				300: '#d4d4d8',
				400: '#a1a1aa',
				500: '#71717a',
				600: '#52525b',
				700: '#3f3f46',
				750: '#323238',
				800: '#27272a',
				850: '#1f1f21',
				900: '#18181b',
				950: '#101012'
			}
		},
		logo: {
			square: '@histoire/plugin-svelte/assets/histoire-svelte.svg',
			light: '@histoire/plugin-svelte/assets/histoire-svelte-text.svg',
			dark: '@histoire/plugin-svelte/assets/histoire-svelte-text.svg'
		}
	},
	responsivePresets: [
		{ label: 'Mobile (Small)', width: 320, height: 560 },
		{ label: 'Mobile (Medium)', width: 360, height: 640 },
		{ label: 'Mobile (Large)', width: 414, height: 896 },
		{ label: 'Tablet', width: 768, height: 1024 },
		{ label: 'Laptop (Small)', width: 1024, height: null },
		{ label: 'Laptop (Large)', width: 1366, height: null },
		{ label: 'Desktop', width: 1920, height: null },
		{ label: '4K', width: 3840, height: null }
	],
	backgroundPresets: [
		{ label: 'Transparent', color: 'transparent', contrastColor: '#333' },
		{ label: 'White', color: '#fff', contrastColor: '#333' },
		{ label: 'Light gray', color: '#aaa', contrastColor: '#000' },
		{ label: 'Dark gray', color: '#333', contrastColor: '#fff' },
		{ label: 'Black', color: '#000', contrastColor: '#eee' }
	],
	sandboxDarkClass: 'dark',
	routerMode: 'history',
	viteIgnorePlugins: ['vite-plugin-svelte-kit'],
	setupFile: 'histoire.setup.ts'
}
const logos = { square: Logo_square, light: Logo_dark, dark: Logo_dark }
const histoireConfig = config
const customLogos = logos
const isDark = useDark({ valueDark: 'htw-dark' })
const toggleDark = useToggle(isDark)
function applyDarkToControls() {
	var _a
	;(_a = window.__hst_controls_dark) == null
		? void 0
		: _a.forEach((ref2) => {
				ref2.value = isDark.value
		  })
}
watch(
	isDark,
	() => {
		applyDarkToControls()
	},
	{
		immediate: true
	}
)
window.__hst_controls_dark_ready = () => {
	applyDarkToControls()
}
const copiedFromExistingVariant = [
	'state',
	'slots',
	'source',
	'responsiveDisabled',
	'autoPropsDisabled',
	'setupApp',
	'configReady',
	'previewReady'
]
function mapFile(file2, existingFile) {
	let result
	if (existingFile) {
		result = existingFile
		for (const key in file2) {
			if (key === 'story') {
				Object.assign(result.story, {
					...file2.story,
					file: markRaw(result),
					variants: file2.story.variants.map((v) =>
						mapVariant(
							v,
							existingFile.story.variants.find((item) => item.id === v.id)
						)
					)
				})
			} else if (key !== 'component') {
				result[key] = file2[key]
			}
		}
	} else {
		result = {
			...file2,
			component: markRaw(file2.component),
			story: {
				...file2.story,
				title: file2.story.title,
				file: markRaw(file2),
				variants: file2.story.variants.map((v) => mapVariant(v)),
				slots: () => ({})
			}
		}
	}
	return result
}
function mapVariant(variant, existingVariant) {
	let result
	if (existingVariant) {
		result = existingVariant
		for (const key in variant) {
			if (!copiedFromExistingVariant.includes(key)) {
				result[key] = variant[key]
			}
		}
	} else {
		result = {
			...variant,
			state: reactive({
				_hPropState: {},
				_hPropDefs: {}
			}),
			setupApp: null,
			slots: () => ({}),
			previewReady: false
		}
	}
	return result
}
const clientSupportPlugins = {
	vanilla: () =>
		__vitePreload(() => import('./vendor.ebc1f38e.js').then((n) => n.aX), true ? [] : void 0),
	svelte3: () =>
		__vitePreload(() => import('./vendor.ebc1f38e.js').then((n) => n.aY), true ? [] : void 0)
}
const __default__ = {
	inheritAttrs: false
}
const _sfc_main = /* @__PURE__ */ defineComponent({
	...__default__,
	__name: 'GenericMountStory',
	props: {
		story: null
	},
	setup(__props) {
		const props = __props
		const mountComponent = ref(null)
		watchEffect(async () => {
			var _a
			const clientPlugin =
				clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId]
			if (clientPlugin) {
				const pluginModule = await clientPlugin()
				mountComponent.value = markRaw(pluginModule.MountStory)
			}
		})
		return (_ctx, _cache) => {
			return mountComponent.value
				? (openBlock(),
				  createBlock(
						resolveDynamicComponent(mountComponent.value),
						mergeProps(
							{
								key: 0,
								class: 'histoire-generic-mount-story',
								story: __props.story
							},
							_ctx.$attrs
						),
						null,
						16,
						['story']
				  ))
				: createCommentVNode('', true)
		}
	}
})
export {
	__vitePreload as _,
	tree as a,
	_sfc_main as b,
	customLogos as c,
	clientSupportPlugins as d,
	files as f,
	histoireConfig as h,
	isDark as i,
	mapFile as m,
	toggleDark as t
}
