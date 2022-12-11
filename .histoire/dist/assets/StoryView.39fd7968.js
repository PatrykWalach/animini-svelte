import {
	j as useRoute,
	i as computed,
	d as defineComponent,
	u as useCssVars,
	h as unref,
	ax as toRefs,
	k as ref,
	o as openBlock,
	l as createElementBlock,
	p as createVNode,
	w as withCtx,
	I as Icon,
	n as normalizeClass,
	a as createBaseVNode,
	t as toDisplayString,
	z as defineStore,
	A as useStorage,
	J as resolveDirective,
	K as withDirectives,
	ay as useRouter,
	az as useResizeObserver,
	r as resolveComponent,
	c as createBlock,
	q as createCommentVNode,
	E as normalizeStyle,
	D as withModifiers,
	N as pushScopeId,
	O as popScopeId,
	f as watch,
	b as renderSlot,
	e as withKeys,
	M as createTextVNode,
	B as renderList,
	F as Fragment,
	g as onMounted,
	aA as vModelText,
	C as onUnmounted,
	aB as VTooltip,
	aC as createStaticVNode,
	G as useEventListener,
	R as reactive,
	aw as applyState,
	aD as toRaw,
	m as mergeProps,
	aE as Dropdown,
	aF as clone,
	aG as omit,
	aH as useTimeoutFn,
	aI as onClickOutside,
	H as isRef,
	aJ as nextTick,
	aK as jg,
	aL as Rg,
	aM as Ng,
	aN as Eg,
	at as resolveDynamicComponent,
	as as watchEffect,
	ar as markRaw,
	aO as shallowRef,
	aP as unindent,
	aQ as getHighlighter,
	aR as _g,
	aS as setCDN,
	T as Transition,
	av as h,
	aT as onBeforeUnmount
} from './vendor.ebc1f38e.js';
import {
	u as useScrollOnActive,
	B as BaseListItemLink,
	_ as _export_sfc,
	b as base,
	a as useStoryStore,
	i as isMobile,
	c as BaseSplitPane,
	d as _sfc_main$y
} from './bundle-main.0f374b94.js';
import { B as BaseEmpty } from './BaseEmpty.041cdabb.js';
import {
	g as getContrastColor,
	_ as _sfc_main$x,
	b as SANDBOX_READY,
	E as EVENT_SEND,
	S as STATE_SYNC,
	t as toRawDeep,
	P as PREVIEW_SETTINGS_SYNC
} from './state.b40f823e.js';
import {
	h as histoireConfig,
	i as isDark,
	d as clientSupportPlugins
} from './GenericMountStory.vue_vue_type_script_setup_true_lang.c15759ab.js';
function useCurrentVariantRoute(variant) {
	const route = useRoute();
	const isActive = computed(() => route.query.variantId === variant.value.id);
	const targetRoute = computed(() => ({
		...route,
		query: {
			...route.query,
			variantId: variant.value.id
		}
	}));
	return {
		isActive,
		targetRoute
	};
}
const _hoisted_1$s = { class: 'htw-truncate' };
const _sfc_main$w = /* @__PURE__ */ defineComponent({
	__name: 'StoryVariantListItem',
	props: {
		variant: {
			type: Object,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		useCssVars((_ctx) => ({
			'89126aaa': unref(variant).iconColor
		}));
		const { variant } = toRefs(props);
		const { isActive, targetRoute } = useCurrentVariantRoute(variant);
		const el = ref();
		useScrollOnActive(isActive, el);
		return (_ctx, _cache) => {
			return (
				openBlock(),
				createElementBlock(
					'div',
					{
						ref_key: 'el',
						ref: el,
						class: 'histoire-story-variant-list-item',
						'data-test-id': 'story-variant-list-item'
					},
					[
						createVNode(
							BaseListItemLink,
							{
								to: unref(targetRoute),
								'is-active': unref(isActive),
								class:
									'htw-px-2 htw-py-2 md:htw-py-1.5 htw-m-1 htw-rounded-sm htw-flex htw-items-center htw-gap-2'
							},
							{
								default: withCtx(({ active }) => {
									var _a;
									return [
										createVNode(
											unref(Icon),
											{
												icon: (_a = unref(variant).icon) != null ? _a : 'carbon:cube',
												class: normalizeClass([
													'htw-w-5 htw-h-5 sm:htw-w-4 sm:htw-h-4 htw-flex-none',
													{
														'htw-text-gray-500': !active && !unref(variant).iconColor,
														'bind-icon-color': !active && unref(variant).iconColor
													}
												])
											},
											null,
											8,
											['icon', 'class']
										),
										createBaseVNode('span', _hoisted_1$s, toDisplayString(unref(variant).title), 1)
									];
								}),
								_: 1
							},
							8,
							['to', 'is-active']
						)
					],
					512
				)
			);
		};
	}
});
const StoryVariantListItem = /* @__PURE__ */ _export_sfc(_sfc_main$w, [
	['__scopeId', 'data-v-ab890d9c']
]);
const usePreviewSettingsStore = defineStore('preview-settings', () => {
	const currentSettings = useStorage('_histoire-sandbox-settings-v3', {
		responsiveWidth: 720,
		responsiveHeight: null,
		rotate: false,
		backgroundColor: 'transparent',
		checkerboard: false,
		textDirection: 'ltr'
	});
	return {
		currentSettings
	};
});
function getSandboxUrl(story, variant) {
	const url = new URLSearchParams();
	url.append('storyId', story.id);
	url.append('variantId', variant.id);
	return `${base}__sandbox.html?${url.toString()}`;
}
const _hoisted_1$r = ['href'];
const _sfc_main$v = /* @__PURE__ */ defineComponent({
	__name: 'ToolbarNewTab',
	props: {
		variant: null,
		story: null
	},
	setup(__props) {
		const props = __props;
		const sandboxUrl = computed(() => {
			return getSandboxUrl(props.story, props.variant);
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective('tooltip');
			return withDirectives(
				(openBlock(),
				createElementBlock(
					'a',
					{
						href: unref(sandboxUrl),
						target: '_blank',
						class:
							'histoire-toolbar-new-tab htw-flex htw-items-center htw-gap-1 htw-h-full htw-px-2 hover:htw-text-primary-500 htw-opacity-50 hover:htw-opacity-100 dark:hover:htw-text-primary-400 htw-text-gray-900 dark:htw-text-gray-100'
					},
					[
						createVNode(unref(Icon), {
							icon: 'carbon:launch',
							class: 'htw-w-4 htw-h-4'
						})
					],
					8,
					_hoisted_1$r
				)),
				[[_directive_tooltip, 'Open variant in new tab']]
			);
		};
	}
});
const _sfc_main$u = {};
const _hoisted_1$q = { fill: 'none' };
const _hoisted_2$j = /* @__PURE__ */ createBaseVNode(
	'pattern',
	{
		id: 'checkerboard',
		width: '64',
		height: '64',
		patternUnits: 'userSpaceOnUse'
	},
	[
		/* @__PURE__ */ createBaseVNode('rect', {
			x: '0',
			y: '0',
			width: '32',
			height: '32',
			fill: 'currentColor'
		}),
		/* @__PURE__ */ createBaseVNode('rect', {
			x: '32',
			y: '32',
			width: '32',
			height: '32',
			fill: 'currentColor'
		})
	],
	-1
);
const _hoisted_3$e = /* @__PURE__ */ createBaseVNode(
	'rect',
	{
		x: '0',
		y: '0',
		width: '100%',
		height: '100%',
		fill: 'url(#checkerboard)'
	},
	null,
	-1
);
const _hoisted_4$a = [_hoisted_2$j, _hoisted_3$e];
function _sfc_render$4(_ctx, _cache) {
	return openBlock(), createElementBlock('svg', _hoisted_1$q, _hoisted_4$a);
}
const CheckerboardPattern = /* @__PURE__ */ _export_sfc(_sfc_main$u, [['render', _sfc_render$4]]);
const _withScopeId$2 = (n) => (pushScopeId('data-v-f7c98176'), (n = n()), popScopeId(), n);
const _hoisted_1$p = { class: 'htw-flex-none htw-flex htw-items-center' };
const _hoisted_2$i = { class: 'htw-truncate htw-flex-1' };
const _hoisted_3$d = {
	class: 'htw-flex-none htw-ml-auto htw-hidden group-hover:htw-flex htw-items-center'
};
const _hoisted_4$9 = /* @__PURE__ */ _withScopeId$2(() =>
	/* @__PURE__ */ createBaseVNode(
		'div',
		{
			class: 'htw-absolute htw-inset-0 htw-rounded bind-preview-bg',
			'data-test-id': 'responsive-preview-bg'
		},
		null,
		-1
	)
);
const _sfc_main$t = /* @__PURE__ */ defineComponent({
	__name: 'StoryVariantGridItem',
	props: {
		variant: {
			type: Object,
			required: true
		},
		story: {
			type: Object,
			required: true
		}
	},
	emits: {
		resize: (width, height) => true
	},
	setup(__props, { emit }) {
		const props = __props;
		useCssVars((_ctx) => ({
			edeb0368: unref(variant).iconColor,
			f4b27ac2: unref(settings).backgroundColor
		}));
		const { variant } = toRefs(props);
		const { isActive, targetRoute } = useCurrentVariantRoute(variant);
		Object.assign(props.variant, {
			previewReady: false
		});
		function onReady() {
			Object.assign(props.variant, {
				previewReady: true
			});
		}
		const router = useRouter();
		function selectVariant() {
			router.push(targetRoute.value);
		}
		const el = ref();
		const { autoScroll } = useScrollOnActive(isActive, el);
		useResizeObserver(el, () => {
			if (props.variant.previewReady) {
				emit('resize', el.value.clientWidth, el.value.clientHeight);
				if (isActive.value) {
					autoScroll();
				}
			}
		});
		const settings = usePreviewSettingsStore().currentSettings;
		const contrastColor = computed(() => getContrastColor(settings));
		const autoApplyContrastColor = computed(() => !!histoireConfig.autoApplyContrastColor);
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent('RouterLink');
			const _directive_tooltip = resolveDirective('tooltip');
			return (
				openBlock(),
				createElementBlock(
					'div',
					{
						ref_key: 'el',
						ref: el,
						class:
							'histoire-story-variant-grid-item htw-cursor-default htw-flex htw-flex-col htw-gap-y-1 htw-group'
					},
					[
						createBaseVNode('div', _hoisted_1$p, [
							withDirectives(
								(openBlock(),
								createBlock(
									_component_RouterLink,
									{
										to: unref(targetRoute),
										class: normalizeClass([
											'htw-rounded htw-w-max htw-px-2 htw-py-0.5 htw-min-w-16 htw-cursor-pointer htw-flex htw-items-center htw-gap-1 htw-flex-shrink',
											{
												'hover:htw-bg-gray-200 htw-text-gray-500 dark:hover:htw-bg-gray-800':
													!unref(isActive),
												'htw-bg-primary-200 hover:htw-bg-primary-300 htw-text-primary-800 dark:htw-bg-primary-700 dark:hover:htw-bg-primary-800 dark:htw-text-primary-200':
													unref(isActive)
											}
										])
									},
									{
										default: withCtx(() => {
											var _a;
											return [
												createVNode(
													unref(Icon),
													{
														icon: (_a = unref(variant).icon) != null ? _a : 'carbon:cube',
														class: normalizeClass([
															'htw-w-4 htw-h-4 htw-opacity-50',
															{
																'htw-text-gray-500': !unref(isActive) && !unref(variant).iconColor,
																'bind-icon-color': !unref(isActive) && unref(variant).iconColor
															}
														])
													},
													null,
													8,
													['icon', 'class']
												),
												createBaseVNode(
													'span',
													_hoisted_2$i,
													toDisplayString(unref(variant).title),
													1
												)
											];
										}),
										_: 1
									},
									8,
									['to', 'class']
								)),
								[[_directive_tooltip, unref(variant).title]]
							),
							createBaseVNode('div', _hoisted_3$d, [
								createVNode(
									_sfc_main$v,
									{
										variant: unref(variant),
										story: __props.story
									},
									null,
									8,
									['variant', 'story']
								)
							])
						]),
						createBaseVNode(
							'div',
							{
								class: normalizeClass([
									'htw-border htw-bg-white dark:htw-bg-gray-700 htw-rounded htw-flex-1 htw-p-4 htw-relative',
									{
										'htw-border-gray-100 dark:htw-border-gray-800': !unref(isActive),
										'htw-border-primary-200 dark:htw-border-primary-900': unref(isActive)
									}
								]),
								'data-test-id': 'sandbox-render',
								onClick:
									_cache[0] || (_cache[0] = withModifiers(($event) => selectVariant(), ['stop'])),
								onKeyup: _cache[1] || (_cache[1] = ($event) => selectVariant())
							},
							[
								_hoisted_4$9,
								unref(settings).checkerboard
									? (openBlock(),
									  createBlock(CheckerboardPattern, {
											key: 0,
											class: 'htw-absolute htw-inset-0 htw-w-full htw-h-full htw-text-gray-500/20'
									  }))
									: createCommentVNode('', true),
								createBaseVNode(
									'div',
									{
										class: 'htw-relative htw-h-full',
										style: normalizeStyle({
											'--histoire-contrast-color': unref(contrastColor),
											color: unref(autoApplyContrastColor) ? unref(contrastColor) : void 0
										})
									},
									[
										(openBlock(),
										createBlock(
											_sfc_main$x,
											{
												key: `${__props.story.id}-${unref(variant).id}`,
												variant: unref(variant),
												story: __props.story,
												dir: unref(settings).textDirection,
												onReady
											},
											null,
											8,
											['variant', 'story', 'dir']
										))
									],
									4
								)
							],
							34
						)
					],
					512
				)
			);
		};
	}
});
const StoryVariantGridItem = /* @__PURE__ */ _export_sfc(_sfc_main$t, [
	['__scopeId', 'data-v-f7c98176']
]);
const _hoisted_1$o = { class: 'htw-text-white htw-w-[16px] htw-h-[16px] htw-relative' };
const _hoisted_2$h = {
	width: '16',
	height: '16',
	viewBox: '0 0 24 24',
	class: 'htw-relative htw-z-10'
};
const _hoisted_3$c = ['stroke-dasharray', 'stroke-dashoffset'];
const _sfc_main$s = /* @__PURE__ */ defineComponent({
	__name: 'BaseCheckbox',
	props: {
		modelValue: {
			type: Boolean,
			default: false
		}
	},
	emits: {
		'update:modelValue': (newValue) => true
	},
	setup(__props, { emit }) {
		const props = __props;
		function toggle() {
			emit('update:modelValue', !props.modelValue);
			animationEnabled.value = true;
		}
		const path = ref();
		const dasharray = ref(0);
		const progress = computed(() => (props.modelValue ? 1 : 0));
		const dashoffset = computed(() => (1 - progress.value) * dasharray.value);
		const animationEnabled = ref(false);
		watch(path, () => {
			var _a, _b, _c;
			dasharray.value =
				(_c = (_b = (_a = path.value).getTotalLength) == null ? void 0 : _b.call(_a)) != null
					? _c
					: 21.21;
		});
		return (_ctx, _cache) => {
			return (
				openBlock(),
				createElementBlock(
					'div',
					{
						role: 'checkbox',
						tabindex: '0',
						class:
							'histoire-base-checkbox htw-flex htw-items-center htw-gap-2 htw-select-none htw-px-4 htw-py-3 htw-cursor-pointer hover:htw-bg-primary-100 dark:hover:htw-bg-primary-700',
						onClick: _cache[0] || (_cache[0] = ($event) => toggle()),
						onKeydown: [
							_cache[1] ||
								(_cache[1] = withKeys(
									withModifiers(($event) => toggle(), ['prevent']),
									['enter']
								)),
							_cache[2] ||
								(_cache[2] = withKeys(
									withModifiers(($event) => toggle(), ['prevent']),
									['space']
								))
						]
					},
					[
						createBaseVNode('div', _hoisted_1$o, [
							createBaseVNode(
								'div',
								{
									class: normalizeClass([
										'htw-border group-active:htw-bg-gray-500/20 htw-rounded-sm htw-box-border htw-absolute htw-inset-0 htw-transition-border htw-duration-150 htw-ease-out',
										[
											__props.modelValue
												? 'htw-border-primary-500 htw-border-8'
												: 'htw-border-black/25 dark:htw-border-white/25 htw-delay-150'
										]
									])
								},
								null,
								2
							),
							(openBlock(),
							createElementBlock('svg', _hoisted_2$h, [
								createBaseVNode(
									'path',
									{
										ref_key: 'path',
										ref: path,
										d: 'm 4 12 l 5 5 l 10 -10',
										fill: 'none',
										class: normalizeClass([
											'htw-stroke-white htw-stroke-2 htw-duration-200 htw-ease-in-out',
											[
												animationEnabled.value ? 'htw-transition-all' : 'htw-transition-none',
												{
													'htw-delay-150': __props.modelValue
												}
											]
										]),
										'stroke-dasharray': dasharray.value,
										'stroke-dashoffset': unref(dashoffset)
									},
									null,
									10,
									_hoisted_3$c
								)
							]))
						]),
						renderSlot(_ctx.$slots, 'default')
					],
					32
				)
			);
		};
	}
});
const _hoisted_1$n = {
	class:
		'htw-cursor-pointer hover:htw-text-primary-500 htw-flex htw-items-center htw-gap-1 htw-h-full htw-px-2 htw-group'
};
const _hoisted_2$g = {
	class:
		'bind-preview-bg htw-w-4 htw-h-4 htw-rounded-full htw-border htw-border-black/50 dark:htw-border-white/50 htw-flex htw-items-center htw-justify-center htw-text-xs'
};
const _hoisted_3$b = { key: 0 };
const _hoisted_4$8 = {
	class: 'htw-flex htw-flex-col htw-items-stretch',
	'data-test-id': 'background-popper'
};
const _hoisted_5$5 = ['onClick'];
const _hoisted_6$4 = { class: 'htw-mr-auto' };
const _hoisted_7$3 = { class: 'htw-ml-auto htw-opacity-70' };
const _hoisted_8$2 = { key: 0 };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
	__name: 'ToolbarBackground',
	setup(__props) {
		useCssVars((_ctx) => ({
			'627bec82': unref(settings).backgroundColor,
			35068428: unref(contrastColor)
		}));
		const settings = usePreviewSettingsStore().currentSettings;
		const contrastColor = computed(() => getContrastColor(settings));
		return (_ctx, _cache) => {
			const _component_VDropdown = resolveComponent('VDropdown');
			const _directive_tooltip = resolveDirective('tooltip');
			return unref(histoireConfig).backgroundPresets.length
				? (openBlock(),
				  createBlock(
						_component_VDropdown,
						{
							key: 0,
							placement: 'bottom-end',
							skidding: 6,
							class: 'histoire-toolbar-background htw-h-full htw-flex-none',
							'data-test-id': 'toolbar-background'
						},
						{
							popper: withCtx(({ hide }) => [
								createBaseVNode('div', _hoisted_4$8, [
									createVNode(
										_sfc_main$s,
										{
											modelValue: unref(settings).checkerboard,
											'onUpdate:modelValue':
												_cache[0] ||
												(_cache[0] = ($event) => (unref(settings).checkerboard = $event))
										},
										{
											default: withCtx(() => [createTextVNode(' Checkerboard ')]),
											_: 1
										},
										8,
										['modelValue']
									),
									(openBlock(true),
									createElementBlock(
										Fragment,
										null,
										renderList(unref(histoireConfig).backgroundPresets, (option, index) => {
											return (
												openBlock(),
												createElementBlock(
													'button',
													{
														key: index,
														class: normalizeClass([
															'htw-px-4 htw-py-3 htw-cursor-pointer htw-text-left htw-flex htw-items-baseline htw-gap-4',
															[
																unref(settings).backgroundColor === option.color
																	? 'htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black'
																	: 'htw-bg-transparent hover:htw-bg-primary-100 dark:hover:htw-bg-primary-700'
															]
														]),
														onClick: ($event) => {
															unref(settings).backgroundColor = option.color;
															hide();
														}
													},
													[
														createBaseVNode('span', _hoisted_6$4, toDisplayString(option.label), 1),
														option.color !== '$checkerboard'
															? (openBlock(),
															  createElementBlock(
																	Fragment,
																	{ key: 0 },
																	[
																		createBaseVNode(
																			'span',
																			_hoisted_7$3,
																			toDisplayString(option.color),
																			1
																		),
																		createBaseVNode(
																			'div',
																			{
																				class:
																					'htw-w-4 htw-h-4 htw-rounded-full htw-border htw-border-black/20 dark:htw-border-white/20 htw-flex htw-items-center htw-justify-center htw-text-xs',
																				style: normalizeStyle({
																					backgroundColor: option.color,
																					color: option.contrastColor
																				})
																			},
																			[
																				option.contrastColor
																					? (openBlock(),
																					  createElementBlock('span', _hoisted_8$2, 'a'))
																					: createCommentVNode('', true)
																			],
																			4
																		)
																	],
																	64
															  ))
															: createCommentVNode('', true)
													],
													10,
													_hoisted_5$5
												)
											);
										}),
										128
									))
								])
							]),
							default: withCtx(() => [
								withDirectives(
									(openBlock(),
									createElementBlock('div', _hoisted_1$n, [
										createBaseVNode('div', _hoisted_2$g, [
											unref(contrastColor)
												? (openBlock(), createElementBlock('span', _hoisted_3$b, 'a'))
												: createCommentVNode('', true)
										]),
										createVNode(unref(Icon), {
											icon: 'carbon:caret-down',
											class: 'htw-w-4 htw-h-4 htw-opacity-50 group-hover:htw-opacity-100'
										})
									])),
									[[_directive_tooltip, 'Background color']]
								)
							]),
							_: 1
						}
				  ))
				: createCommentVNode('', true);
		};
	}
});
const ToolbarBackground = /* @__PURE__ */ _export_sfc(_sfc_main$r, [
	['__scopeId', 'data-v-c48fb2b2']
]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
	__name: 'ToolbarTextDirection',
	setup(__props) {
		const settings = usePreviewSettingsStore().currentSettings;
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective('tooltip');
			return withDirectives(
				(openBlock(),
				createElementBlock(
					'a',
					{
						class:
							'histoire-toolbar-text-direction htw-flex htw-items-center htw-gap-1 htw-h-full htw-px-2 hover:htw-text-primary-500 htw-opacity-50 hover:htw-opacity-100 dark:hover:htw-text-primary-400 htw-text-gray-900 dark:htw-text-gray-100',
						onClick:
							_cache[0] ||
							(_cache[0] = ($event) =>
								(unref(settings).textDirection =
									unref(settings).textDirection === 'ltr' ? 'rtl' : 'ltr'))
					},
					[
						createVNode(
							unref(Icon),
							{
								icon:
									unref(settings).textDirection === 'ltr'
										? 'fluent:text-paragraph-direction-right-16-regular'
										: 'fluent:text-paragraph-direction-left-16-regular',
								class: 'htw-w-4 htw-h-4'
							},
							null,
							8,
							['icon']
						)
					]
				)),
				[
					[
						_directive_tooltip,
						`Switch to text direction ${
							unref(settings).textDirection === 'ltr' ? 'Right to Left' : 'Left to Right'
						}`
					]
				]
			);
		};
	}
});
const _hoisted_1$m = {
	class:
		'histoire-story-variant-grid htw-flex htw-flex-col htw-items-stretch htw-h-full __histoire-pane-shadow-from-right'
};
const _hoisted_2$f = {
	key: 0,
	class: 'htw-flex-none htw-flex htw-items-center htw-justify-end htw-h-8 htw-mx-2 htw-mt-1'
};
const _hoisted_3$a = { class: 'htw-overflow-y-auto htw-flex htw-flex-1' };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
	__name: 'StoryVariantGrid',
	setup(__props) {
		const storyStore = useStoryStore();
		const gridTemplateWidth = computed(() => {
			if (storyStore.currentStory.layout.type !== 'grid') {
				return;
			}
			const layoutWidth = storyStore.currentStory.layout.width;
			if (!layoutWidth) {
				return '200px';
			}
			if (typeof layoutWidth === 'number') {
				return layoutWidth + 'px';
			}
			return layoutWidth;
		});
		const margin = 16;
		const gap = 16;
		const itemWidth = ref(16);
		const maxItemHeight = ref(0);
		const maxCount = ref(10);
		const countPerRow = ref(0);
		const visibleRows = ref(0);
		const el = ref(null);
		useResizeObserver(el, () => {
			updateMaxCount();
			updateSize();
		});
		function updateMaxCount() {
			if (!maxItemHeight.value) return;
			const width = el.value.clientWidth - margin * 2;
			const height = el.value.clientHeight;
			const scrollTop = el.value.scrollTop;
			countPerRow.value = Math.floor((width + gap) / (itemWidth.value + gap));
			visibleRows.value = Math.ceil((height + scrollTop + gap) / (maxItemHeight.value + gap));
			const newMaxCount = countPerRow.value * visibleRows.value;
			if (maxCount.value < newMaxCount) {
				maxCount.value = newMaxCount;
			}
			if (storyStore.currentVariant) {
				const index = storyStore.currentStory.variants.indexOf(storyStore.currentVariant);
				if (index + 1 > maxCount.value) {
					maxCount.value = index + 1;
				}
			}
		}
		function onItemResize(w, h2) {
			itemWidth.value = w;
			if (maxItemHeight.value < h2) {
				maxItemHeight.value = h2;
				updateMaxCount();
			}
		}
		watch(
			() => storyStore.currentVariant,
			() => {
				maxItemHeight.value = 0;
				updateMaxCount();
			}
		);
		const gridEl = ref(null);
		const gridColumnWidth = ref(1);
		const viewWidth = ref(1);
		function updateSize() {
			if (!el.value) return;
			viewWidth.value = el.value.clientWidth;
			if (!gridEl.value) return;
			if (gridTemplateWidth.value.endsWith('%')) {
				gridColumnWidth.value = (viewWidth.value * parseInt(gridTemplateWidth.value)) / 100 - gap;
			} else {
				gridColumnWidth.value = parseInt(gridTemplateWidth.value);
			}
		}
		onMounted(() => {
			updateSize();
		});
		useResizeObserver(gridEl, () => {
			updateSize();
		});
		const columnCount = computed(() =>
			Math.min(
				storyStore.currentStory.variants.length,
				Math.floor((viewWidth.value + gap) / (gridColumnWidth.value + gap))
			)
		);
		return (_ctx, _cache) => {
			return (
				openBlock(),
				createElementBlock('div', _hoisted_1$m, [
					!unref(isMobile)
						? (openBlock(),
						  createElementBlock('div', _hoisted_2$f, [
								createVNode(ToolbarBackground),
								createVNode(_sfc_main$q)
						  ]))
						: createCommentVNode('', true),
					createBaseVNode('div', _hoisted_3$a, [
						createBaseVNode(
							'div',
							{
								ref_key: 'el',
								ref: el,
								class: 'htw-flex htw-w-0 htw-flex-1 htw-mx-4',
								onScroll: _cache[0] || (_cache[0] = ($event) => updateMaxCount())
							},
							[
								createBaseVNode(
									'div',
									{
										class: 'htw-m-auto',
										style: normalizeStyle({
											minHeight: `${
												(unref(storyStore).currentStory.variants.length / countPerRow.value) *
													(maxItemHeight.value + gap) -
												gap
											}px`
										})
									},
									[
										createBaseVNode(
											'div',
											{
												ref_key: 'gridEl',
												ref: gridEl,
												class: 'htw-grid htw-gap-4 htw-my-4',
												style: normalizeStyle({
													gridTemplateColumns: `repeat(${unref(columnCount)}, ${
														gridColumnWidth.value
													}px)`
												})
											},
											[
												(openBlock(true),
												createElementBlock(
													Fragment,
													null,
													renderList(
														unref(storyStore).currentStory.variants.slice(0, maxCount.value),
														(variant, index) => {
															return (
																openBlock(),
																createBlock(
																	StoryVariantGridItem,
																	{
																		key: index,
																		variant,
																		story: unref(storyStore).currentStory,
																		onResize: onItemResize
																	},
																	null,
																	8,
																	['variant', 'story']
																)
															);
														}
													),
													128
												))
											],
											4
										)
									],
									4
								)
							],
							544
						)
					])
				])
			);
		};
	}
});
const _hoisted_1$l = {
	class:
		'histoire-toolbar-title htw-flex htw-items-center htw-gap-1 htw-text-gray-500 htw-flex-1 htw-truncate htw-min-w-0'
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
	__name: 'ToolbarTitle',
	props: {
		variant: null
	},
	setup(__props) {
		return (_ctx, _cache) => {
			var _a;
			return (
				openBlock(),
				createElementBlock('div', _hoisted_1$l, [
					createVNode(
						unref(Icon),
						{
							icon: (_a = __props.variant.icon) != null ? _a : 'carbon:cube',
							class: normalizeClass([
								'htw-w-4 htw-h-4 htw-opacity-50',
								[__props.variant.iconColor ? 'bind-icon-color' : 'htw-text-gray-500']
							])
						},
						null,
						8,
						['icon', 'class']
					),
					createBaseVNode('span', null, toDisplayString(__props.variant.title), 1)
				])
			);
		};
	}
});
const _hoisted_1$k = { class: 'htw-flex htw-flex-col htw-items-stretch' };
const _hoisted_2$e = { class: 'htw-flex htw-items-center htw-gap-2 htw-px-4 htw-py-3' };
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode(
	'span',
	{ class: 'htw-opacity-50' },
	'\xD7',
	-1
);
const _hoisted_4$7 = ['onClick'];
const _hoisted_5$4 = { class: 'htw-ml-auto htw-opacity-70 htw-flex htw-gap-1' };
const _hoisted_6$3 = { key: 0 };
const _hoisted_7$2 = { key: 0 };
const _hoisted_8$1 = { key: 1 };
const _hoisted_9$1 = { key: 2 };
const _hoisted_10 = { key: 0 };
const _sfc_main$n = /* @__PURE__ */ defineComponent({
	__name: 'ToolbarResponsiveSize',
	setup(__props) {
		const settings = usePreviewSettingsStore().currentSettings;
		return (_ctx, _cache) => {
			var _a;
			const _component_VDropdown = resolveComponent('VDropdown');
			const _directive_tooltip = resolveDirective('tooltip');
			return (
				openBlock(),
				createBlock(
					_component_VDropdown,
					{
						placement: 'bottom-end',
						skidding: 6,
						disabled: !((_a = unref(histoireConfig).responsivePresets) == null
							? void 0
							: _a.length),
						class: 'histoire-toolbar-responsive-size htw-h-full htw-flex-none'
					},
					{
						popper: withCtx(({ hide }) => [
							createBaseVNode('div', _hoisted_1$k, [
								createVNode(
									_sfc_main$s,
									{
										modelValue: unref(settings).rotate,
										'onUpdate:modelValue':
											_cache[0] || (_cache[0] = ($event) => (unref(settings).rotate = $event))
									},
									{
										default: withCtx(() => [createTextVNode(' Rotate ')]),
										_: 1
									},
									8,
									['modelValue']
								),
								createBaseVNode('div', _hoisted_2$e, [
									withDirectives(
										createBaseVNode(
											'input',
											{
												'onUpdate:modelValue':
													_cache[1] ||
													(_cache[1] = ($event) => (unref(settings).responsiveWidth = $event)),
												type: 'number',
												class:
													'htw-bg-transparent htw-border htw-border-gray-200 dark:htw-border-gray-850 htw-rounded htw-w-20 htw-opacity-50 focus:htw-opacity-100 htw-flex-1 htw-min-w-0',
												step: '16',
												placeholder: 'Auto'
											},
											null,
											512
										),
										[
											[vModelText, unref(settings).responsiveWidth, void 0, { number: true }],
											[_directive_tooltip, 'Responsive width (px)']
										]
									),
									_hoisted_3$9,
									withDirectives(
										createBaseVNode(
											'input',
											{
												'onUpdate:modelValue':
													_cache[2] ||
													(_cache[2] = ($event) => (unref(settings).responsiveHeight = $event)),
												type: 'number',
												class:
													'htw-bg-transparent htw-border htw-border-gray-200 dark:htw-border-gray-850 htw-rounded htw-w-20 htw-opacity-50 focus:htw-opacity-100 htw-flex-1 htw-min-w-0',
												step: '16',
												placeholder: 'Auto'
											},
											null,
											512
										),
										[
											[vModelText, unref(settings).responsiveHeight, void 0, { number: true }],
											[_directive_tooltip, 'Responsive height (px)']
										]
									)
								]),
								(openBlock(true),
								createElementBlock(
									Fragment,
									null,
									renderList(unref(histoireConfig).responsivePresets, (preset, index) => {
										return (
											openBlock(),
											createElementBlock(
												'button',
												{
													key: index,
													class: normalizeClass([
														'htw-px-4 htw-py-3 htw-cursor-pointer htw-text-left htw-flex htw-gap-4',
														[
															unref(settings).responsiveWidth === preset.width &&
															unref(settings).responsiveHeight === preset.height
																? 'htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black'
																: 'htw-bg-transparent hover:htw-bg-primary-100 dark:hover:htw-bg-primary-700'
														]
													]),
													onClick: ($event) => {
														unref(settings).responsiveWidth = preset.width;
														unref(settings).responsiveHeight = preset.height;
														hide();
													}
												},
												[
													createTextVNode(toDisplayString(preset.label) + ' ', 1),
													createBaseVNode('span', _hoisted_5$4, [
														preset.width
															? (openBlock(),
															  createElementBlock('span', _hoisted_6$3, [
																	createTextVNode(toDisplayString(preset.width), 1),
																	!preset.height
																		? (openBlock(), createElementBlock('span', _hoisted_7$2, 'px'))
																		: createCommentVNode('', true)
															  ]))
															: createCommentVNode('', true),
														preset.width && preset.height
															? (openBlock(), createElementBlock('span', _hoisted_8$1, 'x'))
															: createCommentVNode('', true),
														preset.height
															? (openBlock(),
															  createElementBlock('span', _hoisted_9$1, [
																	createTextVNode(toDisplayString(preset.height), 1),
																	!preset.width
																		? (openBlock(), createElementBlock('span', _hoisted_10, 'px'))
																		: createCommentVNode('', true)
															  ]))
															: createCommentVNode('', true)
													])
												],
												10,
												_hoisted_4$7
											)
										);
									}),
									128
								))
							])
						]),
						default: withCtx(() => {
							var _a2;
							return [
								withDirectives(
									(openBlock(),
									createElementBlock(
										'div',
										{
											class: normalizeClass([
												'htw-flex htw-items-center htw-gap-1 htw-h-full htw-px-2 htw-group',
												{
													'htw-cursor-pointer hover:htw-text-primary-500':
														(_a2 = unref(histoireConfig).responsivePresets) == null
															? void 0
															: _a2.length
												}
											])
										},
										[
											createVNode(unref(Icon), {
												icon: 'carbon:devices',
												class: 'htw-w-4 htw-h-4 htw-opacity-50 group-hover:htw-opacity-100'
											}),
											createVNode(unref(Icon), {
												icon: 'carbon:caret-down',
												class: 'htw-w-4 htw-h-4 htw-opacity-50 group-hover:htw-opacity-100'
											})
										],
										2
									)),
									[[_directive_tooltip, 'Responsive sizes']]
								)
							];
						}),
						_: 1
					},
					8,
					['disabled']
				)
			);
		};
	}
});
const _sfc_main$m = {};
const _hoisted_1$j = { class: '__histoire-hatched-pattern' };
function _sfc_render$3(_ctx, _cache) {
	return openBlock(), createElementBlock('div', _hoisted_1$j);
}
const HatchedPattern = /* @__PURE__ */ _export_sfc(_sfc_main$m, [
	['render', _sfc_render$3],
	['__scopeId', 'data-v-91561117']
]);
const _withScopeId$1 = (n) => (pushScopeId('data-v-a83b1911'), (n = n()), popScopeId(), n);
const _hoisted_1$i = {
	class:
		'histoire-story-responsive-preview htw-w-full htw-h-full htw-flex-1 htw-rounded-lg htw-relative htw-overflow-hidden'
};
const _hoisted_2$d = {
	key: 0,
	class:
		'htw-absolute htw-inset-0 htw-w-full htw-h-full htw-bg-gray-100 dark:htw-bg-gray-750 htw-rounded-r-lg htw-border-l-2 htw-border-gray-500/10 dark:htw-border-gray-700/30 htw-overflow-hidden'
};
const _hoisted_3$8 = {
	class: 'bind-preview-bg htw-rounded-lg htw-h-full',
	'data-test-id': 'responsive-preview-bg'
};
const _hoisted_4$6 = { class: 'htw-p-8 htw-h-full htw-relative' };
const _hoisted_5$3 = { class: 'htw-w-full htw-h-full htw-relative' };
const _hoisted_6$2 = /* @__PURE__ */ _withScopeId$1(() =>
	/* @__PURE__ */ createBaseVNode('div', { class: 'htw-absolute htw-inset-0' }, null, -1)
);
const _hoisted_7$1 = /* @__PURE__ */ createStaticVNode(
	'<div class="htw-absolute htw-top-5 htw-left-8 htw-h-2 htw-w-px htw-bg-gray-400/25" data-v-a83b1911></div><div class="htw-absolute htw-top-5 htw-right-8 htw-h-2 htw-w-px htw-bg-gray-400/25" data-v-a83b1911></div><div class="htw-absolute htw-bottom-5 htw-left-8 htw-h-2 htw-w-px htw-bg-gray-400/25" data-v-a83b1911></div><div class="htw-absolute htw-bottom-5 htw-right-8 htw-h-2 htw-w-px htw-bg-gray-400/25" data-v-a83b1911></div><div class="htw-absolute htw-left-5 htw-top-8 htw-w-2 htw-h-px htw-bg-gray-400/25" data-v-a83b1911></div><div class="htw-absolute htw-left-5 htw-bottom-8 htw-w-2 htw-h-px htw-bg-gray-400/25" data-v-a83b1911></div><div class="htw-absolute htw-right-5 htw-top-8 htw-w-2 htw-h-px htw-bg-gray-400/25" data-v-a83b1911></div><div class="htw-absolute htw-right-5 htw-bottom-8 htw-w-2 htw-h-px htw-bg-gray-400/25" data-v-a83b1911></div>',
	8
);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
	__name: 'StoryResponsivePreview',
	props: {
		variant: null
	},
	setup(__props) {
		const props = __props;
		useCssVars((_ctx) => ({
			'03d1950e': unref(settings).backgroundColor
		}));
		const settings = usePreviewSettingsStore().currentSettings;
		const resizing = ref(false);
		const onUnmountedCleanupFns = [];
		onUnmounted(() => {
			onUnmountedCleanupFns.forEach((fn) => fn());
		});
		function addWindowListener(event, listener) {
			window.addEventListener(event, listener);
			const removeListener = () => window.removeEventListener(event, listener);
			onUnmountedCleanupFns.push(removeListener);
			return () => {
				removeListener();
				onUnmountedCleanupFns.splice(onUnmountedCleanupFns.indexOf(removeListener), 1);
			};
		}
		function useDragger(el, value, min, max, axis) {
			function onMouseDown(event) {
				var _a;
				event.preventDefault();
				event.stopPropagation();
				const start = axis === 'x' ? event.clientX : event.clientY;
				const startValue =
					(_a = value.value) != null
						? _a
						: axis === 'x'
						? previewWrapper.value.clientWidth - 67
						: previewWrapper.value.clientHeight - 70;
				resizing.value = true;
				const removeListeners = [
					addWindowListener('mousemove', onMouseMove),
					addWindowListener('mouseup', onMouseUp)
				];
				function onMouseMove(event2) {
					const snapTarget =
						axis === 'x' ? previewWrapper.value.clientWidth : previewWrapper.value.clientHeight;
					const delta = (axis === 'x' ? event2.clientX : event2.clientY) - start;
					value.value = Math.max(min, Math.min(max, startValue + delta));
					if (Math.abs(value.value - (snapTarget - 67)) < 16) {
						value.value = null;
					}
				}
				function onMouseUp() {
					removeListeners.forEach((fn) => fn());
					resizing.value = false;
				}
			}
			useEventListener(el, 'mousedown', onMouseDown);
			function onTouchStart(event) {
				event.preventDefault();
				event.stopPropagation();
				const start = axis === 'x' ? event.touches[0].clientX : event.touches[0].clientY;
				const startValue = value.value;
				resizing.value = true;
				const removeListeners = [
					addWindowListener('touchmove', onTouchMove),
					addWindowListener('touchend', onTouchEnd),
					addWindowListener('touchcancel', onTouchEnd)
				];
				function onTouchMove(event2) {
					const delta =
						(axis === 'x' ? event2.touches[0].clientX : event2.touches[0].clientY) - start;
					value.value = Math.max(min, Math.min(max, startValue + delta));
				}
				function onTouchEnd() {
					removeListeners.forEach((fn) => fn());
					resizing.value = false;
				}
			}
			useEventListener(el, 'touchstart', onTouchStart);
		}
		const responsiveWidth = computed({
			get: () => settings[settings.rotate ? 'responsiveHeight' : 'responsiveWidth'],
			set: (value) => {
				settings[settings.rotate ? 'responsiveHeight' : 'responsiveWidth'] = value;
			}
		});
		const responsiveHeight = computed({
			get: () => settings[settings.rotate ? 'responsiveWidth' : 'responsiveHeight'],
			set: (value) => {
				settings[settings.rotate ? 'responsiveWidth' : 'responsiveHeight'] = value;
			}
		});
		const horizontalDragger = ref();
		const verticalDragger = ref();
		const cornerDragger = ref();
		const previewWrapper = ref();
		useDragger(horizontalDragger, responsiveWidth, 32, 2e4, 'x');
		useDragger(verticalDragger, responsiveHeight, 32, 2e4, 'y');
		useDragger(cornerDragger, responsiveWidth, 32, 2e4, 'x');
		useDragger(cornerDragger, responsiveHeight, 32, 2e4, 'y');
		const finalWidth = computed(() =>
			settings.rotate ? settings.responsiveHeight : settings.responsiveWidth
		);
		const finalHeight = computed(() =>
			settings.rotate ? settings.responsiveWidth : settings.responsiveHeight
		);
		const isResponsiveEnabled = computed(() => !props.variant.responsiveDisabled);
		const sizeTooltip = computed(() => {
			var _a, _b;
			return (
				((_a = responsiveWidth.value) != null ? _a : 'Auto') +
				' \xD7 ' +
				((_b = responsiveHeight.value) != null ? _b : 'Auto')
			);
		});
		return (_ctx, _cache) => {
			return (
				openBlock(),
				createElementBlock('div', _hoisted_1$i, [
					unref(isResponsiveEnabled)
						? (openBlock(),
						  createElementBlock('div', _hoisted_2$d, [
								createVNode(HatchedPattern, {
									class: 'htw-w-full htw-h-full htw-text-black/[1%] dark:htw-text-white/[1%]'
								})
						  ]))
						: createCommentVNode('', true),
					createBaseVNode(
						'div',
						{
							ref_key: 'previewWrapper',
							ref: previewWrapper,
							class: 'htw-h-full htw-overflow-auto htw-relative'
						},
						[
							createBaseVNode(
								'div',
								{
									class: normalizeClass([
										'htw-h-full htw-overflow-hidden htw-bg-white dark:htw-bg-gray-700 htw-rounded-lg htw-relative',
										unref(isResponsiveEnabled)
											? {
													'htw-w-fit': !!unref(finalWidth),
													'htw-h-fit': !!unref(finalHeight)
											  }
											: void 0
									])
								},
								[
									createBaseVNode('div', _hoisted_3$8, [
										unref(settings).checkerboard
											? (openBlock(),
											  createBlock(CheckerboardPattern, {
													key: 0,
													class:
														'htw-absolute htw-inset-0 htw-w-full htw-h-full htw-text-gray-500/20'
											  }))
											: createCommentVNode('', true),
										createBaseVNode('div', _hoisted_4$6, [
											createBaseVNode('div', _hoisted_5$3, [
												_hoisted_6$2,
												renderSlot(
													_ctx.$slots,
													'default',
													{
														isResponsiveEnabled: unref(isResponsiveEnabled),
														finalWidth: unref(finalWidth),
														finalHeight: unref(finalHeight),
														resizing: resizing.value
													},
													void 0,
													true
												)
											]),
											_hoisted_7$1
										]),
										unref(isResponsiveEnabled)
											? (openBlock(),
											  createElementBlock(
													Fragment,
													{ key: 1 },
													[
														withDirectives(
															(openBlock(),
															createElementBlock(
																'div',
																{
																	ref_key: 'horizontalDragger',
																	ref: horizontalDragger,
																	class:
																		'htw-absolute htw-w-4 htw-top-0 htw-bottom-4 htw-right-0 hover:htw-bg-primary-500/30 htw-flex htw-items-center htw-justify-center htw-cursor-ew-resize htw-group hover:htw-text-primary-500'
																},
																[
																	createVNode(unref(Icon), {
																		icon: 'mdi:drag-vertical-variant',
																		class:
																			'htw-w-4 htw-h-4 htw-opacity-20 group-hover:htw-opacity-90'
																	})
																]
															)),
															[[unref(VTooltip), unref(sizeTooltip), void 0, { right: true }]]
														),
														withDirectives(
															(openBlock(),
															createElementBlock(
																'div',
																{
																	ref_key: 'verticalDragger',
																	ref: verticalDragger,
																	class:
																		'htw-absolute htw-h-4 htw-left-0 htw-right-4 htw-bottom-0 hover:htw-bg-primary-500/30 htw-flex htw-items-center htw-justify-center htw-cursor-ns-resize htw-group hover:htw-text-primary-500'
																},
																[
																	createVNode(unref(Icon), {
																		icon: 'mdi:drag-horizontal-variant',
																		class:
																			'htw-w-4 htw-h-4 htw-opacity-20 group-hover:htw-opacity-90'
																	})
																]
															)),
															[[unref(VTooltip), unref(sizeTooltip), void 0, { bottom: true }]]
														),
														withDirectives(
															createBaseVNode(
																'div',
																{
																	ref_key: 'cornerDragger',
																	ref: cornerDragger,
																	class:
																		'htw-absolute htw-w-4 htw-h-4 htw-right-0 htw-bottom-0 hover:htw-bg-primary-500/30 htw-flex htw-items-center htw-justify-center htw-cursor-nwse-resize htw-group hover:htw-text-primary-500'
																},
																null,
																512
															),
															[[unref(VTooltip), unref(sizeTooltip), void 0, { bottom: true }]]
														)
													],
													64
											  ))
											: createCommentVNode('', true)
									])
								],
								2
							)
						],
						512
					)
				])
			);
		};
	}
});
const StoryResponsivePreview = /* @__PURE__ */ _export_sfc(_sfc_main$l, [
	['__scopeId', 'data-v-a83b1911']
]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
	__name: 'StoryVariantSinglePreviewNative',
	props: {
		story: null,
		variant: null
	},
	setup(__props) {
		const props = __props;
		Object.assign(props.variant, {
			previewReady: false
		});
		function onReady() {
			Object.assign(props.variant, {
				previewReady: true
			});
		}
		const settings = usePreviewSettingsStore().currentSettings;
		const contrastColor = computed(() => getContrastColor(settings));
		const autoApplyContrastColor = computed(() => !!histoireConfig.autoApplyContrastColor);
		return (_ctx, _cache) => {
			return (
				openBlock(),
				createBlock(
					StoryResponsivePreview,
					{
						class: 'histoire-story-variant-single-preview-native',
						variant: __props.variant
					},
					{
						default: withCtx(({ isResponsiveEnabled, finalWidth, finalHeight }) => [
							createBaseVNode(
								'div',
								{
									style: normalizeStyle([
										isResponsiveEnabled
											? {
													width: finalWidth ? `${finalWidth}px` : '100%',
													height: finalHeight ? `${finalHeight}px` : '100%'
											  }
											: { width: '100%', height: '100%' },
										{
											'--histoire-contrast-color': unref(contrastColor),
											color: unref(autoApplyContrastColor) ? unref(contrastColor) : void 0
										}
									]),
									class: 'htw-relative',
									'data-test-id': 'sandbox-render'
								},
								[
									(openBlock(),
									createBlock(
										_sfc_main$x,
										{
											key: `${__props.story.id}-${__props.variant.id}`,
											variant: __props.variant,
											story: __props.story,
											class: normalizeClass([
												'htw-h-full',
												[unref(isDark) ? unref(histoireConfig).sandboxDarkClass : void 0]
											]),
											dir: unref(settings).textDirection,
											onReady
										},
										null,
										8,
										['variant', 'story', 'class', 'dir']
									))
								],
								4
							)
						]),
						_: 1
					},
					8,
					['variant']
				)
			);
		};
	}
});
const useEventsStore = defineStore('events', () => {
	const storyStore = useStoryStore();
	const events = reactive([]);
	const unseen = ref(0);
	function addEvent(event) {
		events.push(event);
		unseen.value++;
	}
	function reset() {
		events.length = 0;
		unseen.value = 0;
	}
	watch(
		() => {
			var _a;
			return (_a = storyStore.currentVariant) == null ? void 0 : _a.id;
		},
		() => {
			reset();
		}
	);
	return {
		addEvent,
		reset,
		events,
		unseen
	};
});
const _hoisted_1$h = ['src'];
const _sfc_main$j = /* @__PURE__ */ defineComponent({
	__name: 'StoryVariantSinglePreviewRemote',
	props: {
		story: null,
		variant: null
	},
	setup(__props) {
		const props = __props;
		const settings = usePreviewSettingsStore().currentSettings;
		const iframe = ref();
		function syncState() {
			if (iframe.value && props.variant.previewReady) {
				iframe.value.contentWindow.postMessage({
					type: STATE_SYNC,
					state: toRawDeep(props.variant.state, true)
				});
			}
		}
		let synced = false;
		watch(
			() => props.variant.state,
			() => {
				if (synced) {
					synced = false;
					return;
				}
				syncState();
			},
			{
				deep: true,
				immediate: true
			}
		);
		Object.assign(props.variant, {
			previewReady: false
		});
		useEventListener(window, 'message', (event) => {
			switch (event.data.type) {
				case STATE_SYNC:
					updateVariantState(event.data.state);
					break;
				case EVENT_SEND:
					logEvent(event.data.event);
					break;
				case SANDBOX_READY:
					setPreviewReady();
					break;
			}
		});
		function updateVariantState(state) {
			synced = true;
			applyState(props.variant.state, state);
		}
		function logEvent(event) {
			const eventsStore = useEventsStore();
			eventsStore.addEvent(event);
		}
		function setPreviewReady() {
			Object.assign(props.variant, {
				previewReady: true
			});
		}
		const sandboxUrl = computed(() => {
			return getSandboxUrl(props.story, props.variant);
		});
		const isIframeLoaded = ref(false);
		watch(sandboxUrl, () => {
			isIframeLoaded.value = false;
			Object.assign(props.variant, {
				previewReady: false
			});
		});
		function syncSettings() {
			if (iframe.value) {
				iframe.value.contentWindow.postMessage({
					type: PREVIEW_SETTINGS_SYNC,
					settings: toRaw(settings)
				});
			}
		}
		watch(
			() => settings,
			() => {
				syncSettings();
			},
			{
				deep: true,
				immediate: true
			}
		);
		function onIframeLoad() {
			isIframeLoaded.value = true;
			syncState();
			syncSettings();
		}
		return (_ctx, _cache) => {
			return (
				openBlock(),
				createBlock(
					StoryResponsivePreview,
					{
						class: 'histoire-story-variant-single-preview-remote',
						variant: __props.variant
					},
					{
						default: withCtx(({ isResponsiveEnabled, finalWidth, finalHeight, resizing }) => [
							createBaseVNode(
								'iframe',
								{
									ref_key: 'iframe',
									ref: iframe,
									src: unref(sandboxUrl),
									class: normalizeClass([
										'htw-w-full htw-h-full htw-relative',
										{
											'htw-invisible': !isIframeLoaded.value,
											'htw-pointer-events-none': resizing
										}
									]),
									style: normalizeStyle(
										isResponsiveEnabled
											? {
													width: finalWidth ? `${finalWidth}px` : null,
													height: finalHeight ? `${finalHeight}px` : null
											  }
											: void 0
									),
									'data-test-id': 'preview-iframe',
									onLoad: _cache[0] || (_cache[0] = ($event) => onIframeLoad())
								},
								null,
								46,
								_hoisted_1$h
							)
						]),
						_: 1
					},
					8,
					['variant']
				)
			);
		};
	}
});
const _hoisted_1$g = {
	class: 'histoire-story-variant-single-view htw-h-full htw-flex htw-flex-col',
	'data-test-id': 'story-variant-single-view'
};
const _hoisted_2$c = {
	key: 0,
	class: 'htw-flex-none htw-flex htw-items-center htw-h-8 -htw-mt-1'
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
	__name: 'StoryVariantSingleView',
	props: {
		variant: null,
		story: null
	},
	setup(__props) {
		return (_ctx, _cache) => {
			var _a;
			return (
				openBlock(),
				createElementBlock('div', _hoisted_1$g, [
					!unref(isMobile)
						? (openBlock(),
						  createElementBlock('div', _hoisted_2$c, [
								createVNode(_sfc_main$o, { variant: __props.variant }, null, 8, ['variant']),
								!__props.variant.responsiveDisabled
									? (openBlock(), createBlock(_sfc_main$n, { key: 0 }))
									: createCommentVNode('', true),
								createVNode(ToolbarBackground),
								createVNode(_sfc_main$q),
								createVNode(
									_sfc_main$v,
									{
										variant: __props.variant,
										story: __props.story
									},
									null,
									8,
									['variant', 'story']
								)
						  ]))
						: createCommentVNode('', true),
					((_a = __props.story.layout) == null ? void 0 : _a.iframe) === false
						? (openBlock(),
						  createBlock(
								_sfc_main$k,
								{
									key: 1,
									story: __props.story,
									variant: __props.variant
								},
								null,
								8,
								['story', 'variant']
						  ))
						: (openBlock(),
						  createBlock(
								_sfc_main$j,
								{
									key: 2,
									story: __props.story,
									variant: __props.variant
								},
								null,
								8,
								['story', 'variant']
						  ))
				])
			);
		};
	}
});
const _hoisted_1$f = {
	key: 0,
	class: 'histoire-story-variant-single htw-p-2 htw-h-full __histoire-pane-shadow-from-right'
};
const _hoisted_2$b = {
	key: 0,
	class:
		'htw-divide-y htw-divide-gray-100 dark:htw-divide-gray-800 htw-h-full htw-flex htw-flex-col'
};
const _hoisted_3$7 = {
	key: 0,
	class: 'htw-p-2 htw-h-full'
};
const _hoisted_4$5 = { class: 'htw-h-full htw-overflow-y-auto' };
const _hoisted_5$2 = {
	key: 0,
	class: 'htw-p-2 htw-h-full __histoire-pane-shadow-from-right'
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
	__name: 'StoryVariantSingle',
	emits: {
		'open-variant-menu': () => true
	},
	setup(__props) {
		useCssVars((_ctx) => {
			var _a;
			return {
				'4d25d048': (_a = unref(variant)) == null ? void 0 : _a.iconColor
			};
		});
		const storyStore = useStoryStore();
		const hasSingleVariant = computed(() => {
			var _a;
			return ((_a = storyStore.currentStory) == null ? void 0 : _a.variants.length) === 1;
		});
		const variant = computed(() => storyStore.currentVariant);
		return (_ctx, _cache) => {
			var _a;
			return unref(hasSingleVariant) && unref(variant)
				? (openBlock(),
				  createElementBlock('div', _hoisted_1$f, [
						createVNode(
							_sfc_main$i,
							{
								variant: unref(variant),
								story: unref(storyStore).currentStory
							},
							null,
							8,
							['variant', 'story']
						)
				  ]))
				: (openBlock(),
				  createElementBlock(
						Fragment,
						{ key: 1 },
						[
							unref(isMobile)
								? (openBlock(),
								  createElementBlock('div', _hoisted_2$b, [
										createBaseVNode(
											'a',
											{
												class:
													'htw-px-6 htw-h-12 hover:htw-text-primary-500 dark:hover:htw-text-primary-400 htw-cursor-pointer htw-flex htw-gap-2 htw-flex-wrap htw-w-full htw-items-center htw-flex-none',
												onClick:
													_cache[0] || (_cache[0] = ($event) => _ctx.$emit('open-variant-menu'))
											},
											[
												unref(variant)
													? (openBlock(),
													  createElementBlock(
															Fragment,
															{ key: 0 },
															[
																createVNode(
																	unref(Icon),
																	{
																		icon: (_a = unref(variant).icon) != null ? _a : 'carbon:cube',
																		class: normalizeClass([
																			'htw-w-5 htw-h-5 htw-flex-none',
																			{
																				'htw-text-gray-500': !unref(variant).iconColor,
																				'bind-icon-color': unref(variant).iconColor
																			}
																		])
																	},
																	null,
																	8,
																	['icon', 'class']
																),
																createTextVNode(' ' + toDisplayString(unref(variant).title), 1)
															],
															64
													  ))
													: (openBlock(),
													  createElementBlock(
															Fragment,
															{ key: 1 },
															[createTextVNode(' Select a variant... ')],
															64
													  )),
												createVNode(unref(Icon), {
													icon: 'carbon:chevron-sort',
													class: 'htw-w-5 htw-h-5 htw-shrink-0 htw-ml-auto'
												})
											]
										),
										unref(storyStore).currentVariant
											? (openBlock(),
											  createElementBlock('div', _hoisted_3$7, [
													createVNode(
														_sfc_main$i,
														{
															variant: unref(storyStore).currentVariant,
															story: unref(storyStore).currentStory
														},
														null,
														8,
														['variant', 'story']
													)
											  ]))
											: createCommentVNode('', true)
								  ]))
								: (openBlock(),
								  createBlock(
										BaseSplitPane,
										{
											key: 1,
											'save-id': 'story-single-main-split',
											min: 5,
											max: 40,
											'default-split': 17
										},
										{
											first: withCtx(() => [
												createBaseVNode('div', _hoisted_4$5, [
													(openBlock(true),
													createElementBlock(
														Fragment,
														null,
														renderList(unref(storyStore).currentStory.variants, (v, index) => {
															return (
																openBlock(),
																createBlock(
																	StoryVariantListItem,
																	{
																		key: index,
																		variant: v
																	},
																	null,
																	8,
																	['variant']
																)
															);
														}),
														128
													))
												])
											]),
											last: withCtx(() => [
												unref(storyStore).currentVariant
													? (openBlock(),
													  createElementBlock('div', _hoisted_5$2, [
															createVNode(
																_sfc_main$i,
																{
																	variant: unref(storyStore).currentVariant,
																	story: unref(storyStore).currentStory
																},
																null,
																8,
																['variant', 'story']
															)
													  ]))
													: createCommentVNode('', true)
											]),
											_: 1
										}
								  ))
						],
						64
				  ));
		};
	}
});
const StoryVariantSingle = /* @__PURE__ */ _export_sfc(_sfc_main$h, [
	['__scopeId', 'data-v-ddfc5b4f']
]);
const _hoisted_1$e = {
	class: 'histoire-story-viewer htw-bg-gray-50 htw-h-full dark:htw-bg-gray-750'
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
	__name: 'StoryViewer',
	setup(__props) {
		useCssVars((_ctx) => {
			var _a;
			return {
				'663732b6': (_a = unref(variant)) == null ? void 0 : _a.iconColor
			};
		});
		const storyStore = useStoryStore();
		const variant = computed(() => storyStore.currentVariant);
		const isMenuOpened = ref(false);
		function closeMenu() {
			isMenuOpened.value = false;
		}
		watch(variant, () => {
			isMenuOpened.value = false;
		});
		return (_ctx, _cache) => {
			return (
				openBlock(),
				createElementBlock(
					Fragment,
					null,
					[
						createBaseVNode('div', _hoisted_1$e, [
							unref(storyStore).currentStory.layout.type === 'grid'
								? (openBlock(), createBlock(_sfc_main$p, { key: 0 }))
								: unref(storyStore).currentStory.layout.type === 'single'
								? (openBlock(),
								  createBlock(StoryVariantSingle, {
										key: 1,
										onOpenVariantMenu:
											_cache[0] || (_cache[0] = ($event) => (isMenuOpened.value = true))
								  }))
								: createCommentVNode('', true)
						]),
						createVNode(
							_sfc_main$y,
							{
								title: 'Select a variant',
								opened: isMenuOpened.value,
								onClose: closeMenu
							},
							{
								default: withCtx(() => [
									(openBlock(true),
									createElementBlock(
										Fragment,
										null,
										renderList(unref(storyStore).currentStory.variants, (v, index) => {
											return (
												openBlock(),
												createBlock(
													StoryVariantListItem,
													{
														key: index,
														variant: v
													},
													null,
													8,
													['variant']
												)
											);
										}),
										128
									))
								]),
								_: 1
							},
							8,
							['opened']
						)
					],
					64
				)
			);
		};
	}
});
const StoryViewer = /* @__PURE__ */ _export_sfc(_sfc_main$g, [['__scopeId', 'data-v-6046525f']]);
const _hoisted_1$d = {
	class:
		'htw-cursor-pointer htw-w-full htw-outline-none htw-px-2 htw-h-[27px] -htw-my-1 htw-border htw-border-solid htw-border-black/25 dark:htw-border-white/25 hover:htw-border-primary-500 dark:hover:htw-border-primary-500 htw-rounded-sm htw-flex htw-gap-2 htw-items-center htw-leading-normal'
};
const _hoisted_2$a = { class: 'htw-flex-1 htw-truncate' };
const _hoisted_3$6 = { class: 'htw-flex htw-flex-col htw-bg-gray-50 dark:htw-bg-gray-700' };
const _hoisted_4$4 = ['onClick'];
const _sfc_main$f = /* @__PURE__ */ defineComponent({
	__name: 'BaseSelect',
	props: {
		modelValue: null,
		options: null
	},
	emits: ['update:modelValue', 'select'],
	setup(__props, { emit: emits }) {
		const props = __props;
		const formattedOptions = computed(() => {
			if (Array.isArray(props.options)) {
				return Object.fromEntries(props.options.map((value) => [value, value]));
			}
			return props.options;
		});
		const selectedLabel = computed(() => formattedOptions.value[props.modelValue]);
		function selectValue(value, hide) {
			emits('update:modelValue', value);
			emits('select', value);
			hide();
		}
		return (_ctx, _cache) => {
			return (
				openBlock(),
				createBlock(
					unref(Dropdown),
					{
						class: 'histoire-base-select',
						'auto-size': ''
					},
					{
						popper: withCtx(({ hide }) => [
							createBaseVNode('div', _hoisted_3$6, [
								(openBlock(true),
								createElementBlock(
									Fragment,
									null,
									renderList(unref(formattedOptions), (label, value) => {
										return (
											openBlock(),
											createElementBlock(
												'div',
												mergeProps(
													{ ..._ctx.$attrs, class: null, style: null },
													{
														key: label,
														class: [
															'htw-px-2 htw-py-1 htw-cursor-pointer hover:htw-bg-primary-100 dark:hover:htw-bg-primary-700',
															{
																'htw-bg-primary-200 dark:htw-bg-primary-800':
																	props.modelValue === value
															}
														],
														onClick: ($event) => selectValue(value, hide)
													}
												),
												[
													renderSlot(
														_ctx.$slots,
														'option',
														{
															label,
															value
														},
														() => [createTextVNode(toDisplayString(label), 1)]
													)
												],
												16,
												_hoisted_4$4
											)
										);
									}),
									128
								))
							])
						]),
						default: withCtx(() => [
							createBaseVNode('div', _hoisted_1$d, [
								createBaseVNode('div', _hoisted_2$a, [
									renderSlot(_ctx.$slots, 'default', { label: unref(selectedLabel) }, () => [
										createTextVNode(toDisplayString(unref(selectedLabel)), 1)
									])
								]),
								createVNode(unref(Icon), {
									icon: 'carbon:chevron-sort',
									class: 'htw-w-4 htw-h-4 htw-flex-none htw-ml-auto'
								})
							])
						]),
						_: 3
					}
				)
			);
		};
	}
});
const _hoisted_1$c = {
	class: 'histoire-state-presets htw-flex htw-gap-2 htw-w-full htw-items-center'
};
const _hoisted_2$9 = ['onUpdate:modelValue'];
const _hoisted_3$5 = {
	key: 1,
	class: 'htw-flex htw-items-center htw-gap-2'
};
const _hoisted_4$3 = { class: 'htw-flex-1 htw-truncate' };
const _hoisted_5$1 = { class: 'htw-flex htw-gap-2 htw-items-center' };
const _hoisted_6$1 = { class: 'htw-flex-1 htw-truncate' };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
	__name: 'StatePresets',
	props: {
		story: null,
		variant: null
	},
	setup(__props) {
		const props = __props;
		const DEFAULT_ID = 'default';
		const saveId = computed(() => `${props.story.id}:${props.variant.id}`);
		const omitKeys = ['_hPropDefs'];
		const defaultState = clone(omit(toRawDeep(props.variant.state), omitKeys));
		const selectedOption = useStorage(`_histoire-presets/${saveId.value}/selected`, DEFAULT_ID);
		const presetStates = useStorage(
			`_histoire-presets/${saveId.value}/states`,
			/* @__PURE__ */ new Map()
		);
		const presetsOptions = computed(() => {
			const options = { [DEFAULT_ID]: 'Initial state' };
			presetStates.value.forEach((value, key) => {
				options[key] = value.label;
			});
			return options;
		});
		function resetState() {
			selectedOption.value = DEFAULT_ID;
			applyState(props.variant.state, clone(defaultState));
		}
		function applyPreset(id) {
			if (id === DEFAULT_ID) {
				resetState();
			} else if (presetStates.value.has(id)) {
				applyState(props.variant.state, clone(toRawDeep(presetStates.value.get(id).state)));
			}
		}
		onMounted(() => {
			if (selectedOption.value !== DEFAULT_ID) {
				applyPreset(selectedOption.value);
			}
		});
		const input = ref();
		const select = ref();
		const canEdit = computed(() => selectedOption.value !== DEFAULT_ID);
		const isEditing = ref(false);
		async function createPreset() {
			const id = new Date().getTime().toString();
			presetStates.value.set(id, {
				state: clone(omit(toRawDeep(props.variant.state), omitKeys)),
				label: 'New preset'
			});
			selectedOption.value = id;
			isEditing.value = true;
			await nextTick();
			input.value.select();
		}
		const savedNotif = ref(false);
		const savedTimeout = useTimeoutFn(() => {
			savedNotif.value = false;
		}, 1e3);
		async function savePreset() {
			if (!canEdit.value) return;
			const preset = presetStates.value.get(selectedOption.value);
			preset.state = clone(omit(toRawDeep(props.variant.state), omitKeys));
			savedNotif.value = true;
			savedTimeout.start();
		}
		function deletePreset(id) {
			if (!confirm('Are you sure you want to delete this preset?')) {
				return;
			}
			if (selectedOption.value === id) {
				resetState();
			}
			presetStates.value.delete(id);
		}
		async function startEditing() {
			if (!canEdit.value) {
				return;
			}
			isEditing.value = true;
			await nextTick();
			input.value.select();
		}
		function stopEditing() {
			isEditing.value = false;
		}
		onClickOutside(select, stopEditing);
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective('tooltip');
			return (
				openBlock(),
				createElementBlock('div', _hoisted_1$c, [
					createBaseVNode(
						'div',
						{
							ref_key: 'select',
							ref: select,
							class: 'htw-flex-1 htw-min-w-0'
						},
						[
							createVNode(
								_sfc_main$f,
								{
									modelValue: unref(selectedOption),
									'onUpdate:modelValue':
										_cache[2] ||
										(_cache[2] = ($event) =>
											isRef(selectedOption) ? (selectedOption.value = $event) : null),
									options: unref(presetsOptions),
									onDblclick: _cache[3] || (_cache[3] = ($event) => startEditing()),
									onKeydown: [
										_cache[4] || (_cache[4] = withKeys(($event) => stopEditing(), ['enter'])),
										_cache[5] || (_cache[5] = withKeys(($event) => stopEditing(), ['escape']))
									],
									onSelect: _cache[6] || (_cache[6] = (id) => applyPreset(id))
								},
								{
									default: withCtx(({ label }) => [
										isEditing.value
											? withDirectives(
													(openBlock(),
													createElementBlock(
														'input',
														{
															key: 0,
															ref_key: 'input',
															ref: input,
															'onUpdate:modelValue': ($event) =>
																(unref(presetStates).get(unref(selectedOption)).label = $event),
															type: 'text',
															class:
																'htw-text-inherit htw-bg-transparent htw-w-full htw-h-full htw-outline-none',
															onClick:
																_cache[0] ||
																(_cache[0] = withModifiers(() => {}, ['stop', 'prevent']))
														},
														null,
														8,
														_hoisted_2$9
													)),
													[[vModelText, unref(presetStates).get(unref(selectedOption)).label]]
											  )
											: (openBlock(),
											  createElementBlock('div', _hoisted_3$5, [
													createBaseVNode('span', _hoisted_4$3, toDisplayString(label), 1),
													unref(canEdit)
														? withDirectives(
																(openBlock(),
																createBlock(
																	unref(Icon),
																	{
																		key: 0,
																		icon: 'carbon:edit',
																		class:
																			'htw-flex-none htw-cursor-pointer htw-w-4 htw-h-4 hover:htw-text-primary-500 htw-opacity-50 hover:htw-opacity-100 dark:hover:htw-text-primary-400 htw-text-gray-900 dark:htw-text-gray-100',
																		onClick:
																			_cache[1] ||
																			(_cache[1] = withModifiers(
																				($event) => startEditing(),
																				['stop']
																			))
																	},
																	null,
																	512
																)),
																[[_directive_tooltip, 'Rename this preset']]
														  )
														: createCommentVNode('', true)
											  ]))
									]),
									option: withCtx(({ label, value }) => [
										createBaseVNode('div', _hoisted_5$1, [
											createBaseVNode('span', _hoisted_6$1, toDisplayString(label), 1),
											value !== DEFAULT_ID
												? withDirectives(
														(openBlock(),
														createBlock(
															unref(Icon),
															{
																key: 0,
																icon: 'carbon:trash-can',
																class:
																	'htw-flex-none htw-cursor-pointer htw-w-4 htw-h-4 hover:htw-text-primary-500 htw-opacity-50 hover:htw-opacity-100 dark:hover:htw-text-primary-400 htw-text-gray-900 dark:htw-text-gray-100',
																onClick: withModifiers(($event) => deletePreset(value), ['stop'])
															},
															null,
															8,
															['onClick']
														)),
														[[_directive_tooltip, 'Delete this preset']]
												  )
												: createCommentVNode('', true)
										])
									]),
									_: 1
								},
								8,
								['modelValue', 'options']
							)
						],
						512
					),
					withDirectives(
						createVNode(
							unref(Icon),
							{
								icon: savedNotif.value ? 'carbon:checkmark' : 'carbon:save',
								class: normalizeClass([
									'htw-cursor-pointer htw-w-4 htw-h-4 hover:htw-text-primary-500 dark:hover:htw-text-primary-400 htw-text-gray-900 dark:htw-text-gray-100',
									[
										unref(canEdit)
											? 'htw-opacity-50 hover:htw-opacity-100'
											: 'htw-opacity-25 htw-pointer-events-none'
									]
								]),
								onClick: _cache[7] || (_cache[7] = ($event) => savePreset())
							},
							null,
							8,
							['icon', 'class']
						),
						[
							[
								_directive_tooltip,
								savedNotif.value ? 'Saved!' : unref(canEdit) ? 'Save to preset' : null
							]
						]
					),
					withDirectives(
						createVNode(
							unref(Icon),
							{
								icon: 'carbon:add-alt',
								class:
									'htw-cursor-pointer htw-w-4 htw-h-4 hover:htw-text-primary-500 htw-opacity-50 hover:htw-opacity-100 dark:hover:htw-text-primary-400 htw-text-gray-900 dark:htw-text-gray-100',
								onClick: _cache[8] || (_cache[8] = ($event) => createPreset())
							},
							null,
							512
						),
						[[_directive_tooltip, 'Create new preset']]
					),
					withDirectives(
						createVNode(
							unref(Icon),
							{
								icon: 'carbon:reset',
								class:
									'htw-cursor-pointer htw-w-4 htw-h-4 hover:htw-text-primary-500 htw-opacity-50 hover:htw-opacity-100 dark:hover:htw-text-primary-400 htw-text-gray-900 dark:htw-text-gray-100',
								onClick: _cache[9] || (_cache[9] = ($event) => resetState())
							},
							null,
							512
						),
						[[_directive_tooltip, 'Reset to initial state']]
					)
				])
			);
		};
	}
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
	__name: 'ControlsComponentPropItem',
	props: {
		variant: null,
		component: null,
		definition: null
	},
	setup(__props) {
		const props = __props;
		const comp = computed(() => {
			var _a;
			switch ((_a = props.definition.types) == null ? void 0 : _a[0]) {
				case 'string':
					return Eg;
				case 'number':
					return Ng;
				case 'boolean':
					return Rg;
				case 'object':
				default:
					return jg;
			}
		});
		const model = computed({
			get: () => {
				var _a;
				return (_a = props.variant.state._hPropState[props.component.index]) == null
					? void 0
					: _a[props.definition.name];
			},
			set: (value) => {
				if (!props.variant.state._hPropState[props.component.index]) {
					props.variant.state._hPropState[props.component.index] = {};
				}
				props.variant.state._hPropState[props.component.index][props.definition.name] = value;
			}
		});
		function reset() {
			if (props.variant.state._hPropState[props.component.index]) {
				delete props.variant.state._hPropState[props.component.index][props.definition.name];
			}
		}
		const canReset = computed(() => {
			var _a, _b;
			return (
				((_b = (_a = props.variant.state) == null ? void 0 : _a._hPropState) == null
					? void 0
					: _b[props.component.index]) &&
				props.definition.name in props.variant.state._hPropState[props.component.index]
			);
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective('tooltip');
			return unref(comp)
				? (openBlock(),
				  createBlock(
						resolveDynamicComponent(unref(comp)),
						{
							key: 0,
							modelValue: unref(model),
							'onUpdate:modelValue':
								_cache[1] ||
								(_cache[1] = ($event) => (isRef(model) ? (model.value = $event) : null)),
							class: 'histoire-controls-component-prop-item',
							title: `${__props.definition.name}${unref(canReset) ? ' *' : ''}`
						},
						{
							actions: withCtx(() => [
								withDirectives(
									createVNode(
										unref(Icon),
										{
											icon: 'carbon:erase',
											class: normalizeClass([
												'htw-cursor-pointer htw-w-4 htw-h-4 hover:htw-text-primary-500 dark:hover:htw-text-primary-400 htw-text-gray-900 dark:htw-text-gray-100',
												[
													unref(canReset)
														? 'htw-opacity-50 hover:htw-opacity-100'
														: 'htw-opacity-25 htw-pointer-events-none'
												]
											]),
											onClick:
												_cache[0] || (_cache[0] = withModifiers(($event) => reset(), ['stop']))
										},
										null,
										8,
										['class']
									),
									[[_directive_tooltip, 'Remove override']]
								)
							]),
							_: 1
						},
						8,
						['modelValue', 'title']
				  ))
				: createCommentVNode('', true);
		};
	}
});
const _hoisted_1$b = { class: 'histoire-controls-component-props' };
const _hoisted_2$8 = { class: 'htw-font-mono htw-p-2 htw-flex htw-items-center htw-gap-1' };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode('span', { class: 'htw-opacity-30' }, '<', -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode('span', { class: 'htw-opacity-30' }, '>', -1);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
	__name: 'ControlsComponentProps',
	props: {
		variant: null,
		definition: null
	},
	setup(__props) {
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective('tooltip');
			return (
				openBlock(),
				createElementBlock('div', _hoisted_1$b, [
					createBaseVNode('div', _hoisted_2$8, [
						withDirectives(
							createVNode(
								unref(Icon),
								{
									icon: 'carbon:flash',
									class: 'htw-w-4 htw-h-4 htw-text-primary-500 htw-flex-none'
								},
								null,
								512
							),
							[[_directive_tooltip, 'Auto-detected props']]
						),
						createBaseVNode('div', null, [
							_hoisted_3$4,
							createTextVNode(toDisplayString(__props.definition.name), 1),
							_hoisted_4$2
						])
					]),
					(openBlock(true),
					createElementBlock(
						Fragment,
						null,
						renderList(__props.definition.props, (prop) => {
							return (
								openBlock(),
								createBlock(
									_sfc_main$d,
									{
										key: prop.name,
										variant: __props.variant,
										component: __props.definition,
										definition: prop
									},
									null,
									8,
									['variant', 'component', 'definition']
								)
							);
						}),
						128
					))
				])
			);
		};
	}
});
const _hoisted_1$a = {
	'data-test-id': 'story-controls',
	class:
		'histoire-story-controls htw-flex htw-flex-col htw-divide-y htw-divide-gray-100 dark:htw-divide-gray-750'
};
const _hoisted_2$7 = { class: 'htw-h-9 htw-flex-none htw-px-2 htw-flex htw-items-center' };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode(
	'span',
	null,
	'No controls available for this story',
	-1
);
const _hoisted_4$1 = { key: 2 };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
	__name: 'StoryControls',
	props: {
		variant: {
			type: Object,
			required: true
		},
		story: {
			type: Object,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		const ready = ref(false);
		watch(
			() => props.variant,
			() => {
				ready.value = false;
			}
		);
		const hasCustomControls = computed(
			() => props.variant.slots().controls || props.story.slots().controls
		);
		return (_ctx, _cache) => {
			var _a, _b, _c, _d;
			return (
				openBlock(),
				createElementBlock('div', _hoisted_1$a, [
					createBaseVNode('div', _hoisted_2$7, [
						ready.value || !unref(hasCustomControls)
							? (openBlock(),
							  createBlock(
									_sfc_main$e,
									{
										key: 0,
										story: __props.story,
										variant: __props.variant
									},
									null,
									8,
									['story', 'variant']
							  ))
							: createCommentVNode('', true)
					]),
					unref(hasCustomControls)
						? (openBlock(),
						  createBlock(
								_sfc_main$x,
								{
									key: `${__props.story.id}-${__props.variant.id}`,
									'slot-name': 'controls',
									variant: __props.variant,
									story: __props.story,
									class: 'htw-flex-none',
									onReady: _cache[0] || (_cache[0] = ($event) => (ready.value = true))
								},
								null,
								8,
								['variant', 'story']
						  ))
						: !((_b = (_a = __props.variant.state) == null ? void 0 : _a._hPropDefs) == null
								? void 0
								: _b.length)
						? (openBlock(),
						  createBlock(
								BaseEmpty,
								{ key: 1 },
								{
									default: withCtx(() => [
										createVNode(unref(Icon), {
											icon: 'carbon:audio-console',
											class: 'htw-w-8 htw-h-8 htw-opacity-50 htw-mb-6'
										}),
										_hoisted_3$3
									]),
									_: 1
								}
						  ))
						: createCommentVNode('', true),
					(
						(_d = (_c = __props.variant.state) == null ? void 0 : _c._hPropDefs) == null
							? void 0
							: _d.length
					)
						? (openBlock(),
						  createElementBlock('div', _hoisted_4$1, [
								(openBlock(true),
								createElementBlock(
									Fragment,
									null,
									renderList(__props.variant.state._hPropDefs, (def, index) => {
										return (
											openBlock(),
											createBlock(
												_sfc_main$c,
												{
													key: index,
													variant: __props.variant,
													definition: def,
													class: 'htw-flex-none htw-my-2'
												},
												null,
												8,
												['variant', 'definition']
											)
										);
									}),
									128
								))
						  ]))
						: createCommentVNode('', true)
				])
			);
		};
	}
});
const markdownFiles = reactive({});
const _hoisted_1$9 = ['innerHTML'];
function useStoryDoc(story) {
	const renderedDoc = ref('');
	watchEffect(async () => {
		var _a;
		const mdKey = story.value.file.filePath.replace(/\.(\w*?)$/, '.md');
		if (markdownFiles[mdKey]) {
			const md = await markdownFiles[mdKey]();
			renderedDoc.value = md.html;
			return;
		}
		let comp = (_a = story.value.file) == null ? void 0 : _a.component;
		if (comp) {
			if (comp.__asyncResolved) {
				comp = comp.__asyncResolved;
			} else if (comp.__asyncLoader) {
				comp = await comp.__asyncLoader();
			} else if (typeof comp === 'function') {
				try {
					comp = await comp();
				} catch (e) {}
			}
			if (comp == null ? void 0 : comp.default) {
				comp = comp.default;
			}
			renderedDoc.value = comp.doc;
		}
	});
	return {
		renderedDoc
	};
}
const _sfc_main$a = /* @__PURE__ */ defineComponent({
	__name: 'StoryDocs',
	props: {
		story: {
			type: Object,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		const { story } = toRefs(props);
		const { renderedDoc } = useStoryDoc(story);
		const router = useRouter();
		const fakeHost = `http://a.com`;
		function onClick(e) {
			const link = e.target.closest('a');
			if (
				link &&
				link.getAttribute('data-route') &&
				!e.ctrlKey &&
				!e.shiftKey &&
				!e.altKey &&
				!e.metaKey &&
				link.target !== `_blank`
			) {
				e.preventDefault();
				const url = new URL(link.href, fakeHost);
				const targetHref = url.pathname + url.search + url.hash;
				router.push(targetHref);
			}
		}
		return (_ctx, _cache) => {
			return (
				openBlock(),
				createElementBlock(
					'div',
					{
						class: 'histoire-story-docs',
						onClickCapture: onClick
					},
					[
						!unref(renderedDoc)
							? (openBlock(),
							  createBlock(
									BaseEmpty,
									{ key: 0 },
									{
										default: withCtx(() => [
											createVNode(unref(Icon), {
												icon: 'carbon:document-unknown',
												class: 'htw-w-8 htw-h-8 htw-opacity-50 htw-mb-6'
											}),
											createTextVNode(' No documentation available ')
										]),
										_: 1
									}
							  ))
							: (openBlock(),
							  createElementBlock(
									'div',
									{
										key: 1,
										class: 'htw-prose dark:htw-prose-invert htw-p-4 htw-max-w-none',
										'data-test-id': 'story-docs',
										innerHTML: unref(renderedDoc)
									},
									null,
									8,
									_hoisted_1$9
							  ))
					],
					32
				)
			);
		};
	}
});
const _hoisted_1$8 = {
	key: 0,
	class: 'htw-text-xs htw-opacity-50 htw-truncate'
};
const _hoisted_2$6 = { class: 'htw-overflow-auto htw-max-w-[400px] htw-max-h-[400px]' };
const _hoisted_3$2 = { class: 'htw-p-4' };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
	__name: 'StoryEvent',
	props: {
		event: null
	},
	setup(__props) {
		const props = __props;
		const formattedArgument = computed(() => {
			switch (typeof props.event.argument) {
				case 'string':
					return `"${props.event.argument}"`;
				case 'object':
					return `{ ${Object.keys(props.event.argument)
						.map((key) => `${key}: ${props.event.argument[key]}`)
						.join(', ')} }`;
				default:
					return props.event.argument;
			}
		});
		return (_ctx, _cache) => {
			const _component_VDropdown = resolveComponent('VDropdown');
			return (
				openBlock(),
				createBlock(
					_component_VDropdown,
					{
						class: 'histoire-story-event htw-group',
						placement: 'right',
						'data-test-id': 'event-item'
					},
					{
						default: withCtx(({ shown }) => [
							createBaseVNode(
								'div',
								{
									class: normalizeClass([
										'group-hover:htw-bg-primary-100 dark:group-hover:htw-bg-primary-700 htw-cursor-pointer htw-py-2 htw-px-4 htw-flex htw-items-baseline htw-gap-1 htw-leading-normal',
										[
											shown
												? 'htw-bg-primary-50 dark:htw-bg-primary-600'
												: 'group-odd:htw-bg-gray-100/50 dark:group-odd:htw-bg-gray-750/40'
										]
									])
								},
								[
									createBaseVNode(
										'span',
										{
											class: normalizeClass({
												'htw-text-primary-500': shown
											})
										},
										toDisplayString(__props.event.name),
										3
									),
									__props.event.argument
										? (openBlock(),
										  createElementBlock(
												'span',
												_hoisted_1$8,
												toDisplayString(unref(formattedArgument)),
												1
										  ))
										: createCommentVNode('', true)
								],
								2
							)
						]),
						popper: withCtx(() => [
							createBaseVNode('div', _hoisted_2$6, [
								createBaseVNode('pre', _hoisted_3$2, toDisplayString(__props.event.argument), 1)
							])
						]),
						_: 1
					}
				)
			);
		};
	}
});
const _hoisted_1$7 = { key: 1 };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
	__name: 'StoryEvents',
	setup(__props) {
		const eventsStore = useEventsStore();
		const hasEvents = computed(() => eventsStore.events.length);
		onMounted(resetUnseen);
		watch(() => eventsStore.unseen, resetUnseen);
		async function resetUnseen() {
			if (eventsStore.unseen > 0) {
				eventsStore.unseen = 0;
			}
			await nextTick();
			eventsElement.value.scrollTo({ top: eventsElement.value.scrollHeight });
		}
		const eventsElement = ref();
		return (_ctx, _cache) => {
			return (
				openBlock(),
				createElementBlock(
					'div',
					{
						ref_key: 'eventsElement',
						ref: eventsElement,
						class: 'histoire-story-events'
					},
					[
						!unref(hasEvents)
							? (openBlock(),
							  createBlock(
									BaseEmpty,
									{ key: 0 },
									{
										default: withCtx(() => [
											createVNode(unref(Icon), {
												icon: 'carbon:event-schedule',
												class: 'htw-w-8 htw-h-8 htw-opacity-50 htw-mb-6'
											}),
											createTextVNode(' No event fired ')
										]),
										_: 1
									}
							  ))
							: (openBlock(),
							  createElementBlock('div', _hoisted_1$7, [
									(openBlock(true),
									createElementBlock(
										Fragment,
										null,
										renderList(unref(eventsStore).events, (event, key) => {
											return (
												openBlock(),
												createBlock(
													_sfc_main$9,
													{
														key,
														event
													},
													null,
													8,
													['event']
												)
											);
										}),
										128
									))
							  ]))
					],
					512
				)
			);
		};
	}
});
const _withScopeId = (n) => (pushScopeId('data-v-36810e45'), (n = n()), popScopeId(), n);
const _hoisted_1$6 = {
	class:
		'histoire-story-source-code htw-bg-gray-50 dark:htw-bg-gray-750 htw-h-full htw-overflow-hidden htw-flex htw-flex-col'
};
const _hoisted_2$5 = {
	key: 0,
	class:
		'htw-h-10 htw-flex-none htw-border-b htw-border-solid htw-border-gray-500/5 htw-px-4 htw-flex htw-items-center htw-gap-2'
};
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() =>
	/* @__PURE__ */ createBaseVNode(
		'div',
		{ class: 'htw-text-gray-900 dark:htw-text-gray-100' },
		' Source ',
		-1
	)
);
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() =>
	/* @__PURE__ */ createBaseVNode('div', { class: 'htw-flex-1' }, null, -1)
);
const _hoisted_5 = { class: 'htw-flex htw-flex-none htw-gap-px htw-h-full htw-py-2' };
const _hoisted_6 = {
	key: 1,
	class: 'htw-text-red-500 htw-h-full htw-p-2 htw-overflow-auto htw-font-mono htw-text-sm'
};
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() =>
	/* @__PURE__ */ createBaseVNode('span', null, 'Not available', -1)
);
const _hoisted_8 = ['value'];
const _hoisted_9 = ['innerHTML'];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
	__name: 'StorySourceCode',
	props: {
		story: null,
		variant: null
	},
	setup(__props) {
		const props = __props;
		const generateSourceCodeFn = ref(null);
		watchEffect(async () => {
			var _a;
			const clientPlugin =
				clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
			if (clientPlugin) {
				const pluginModule = await clientPlugin();
				generateSourceCodeFn.value = markRaw(pluginModule.generateSourceCode);
			}
		});
		const highlighter = shallowRef();
		const dynamicSourceCode = ref('');
		const error = ref(null);
		watch(
			() => [props.variant, generateSourceCodeFn.value],
			async () => {
				var _a, _b, _c, _d;
				if (!generateSourceCodeFn.value) return;
				error.value = null;
				dynamicSourceCode.value = '';
				try {
					if (props.variant.source) {
						dynamicSourceCode.value = props.variant.source;
					} else if ((_b = (_a = props.variant).slots) == null ? void 0 : _b.call(_a).source) {
						const source =
							(_d = (_c = props.variant).slots) == null ? void 0 : _d.call(_c).source()[0].children;
						if (source) {
							dynamicSourceCode.value = await unindent(source);
						}
					} else {
						dynamicSourceCode.value = await generateSourceCodeFn.value(props.variant);
					}
				} catch (e) {
					console.error(e);
					error.value = e.message;
				}
				if (!dynamicSourceCode.value) {
					displayedSource.value = 'static';
				}
			},
			{
				deep: true,
				immediate: true
			}
		);
		const staticSourceCode = ref('');
		watch(
			() => {
				var _a, _b;
				return [
					props.story,
					(_b = (_a = props.story) == null ? void 0 : _a.file) == null ? void 0 : _b.source
				];
			},
			async () => {
				var _a;
				staticSourceCode.value = '';
				const sourceLoader = (_a = props.story.file) == null ? void 0 : _a.source;
				if (sourceLoader) {
					staticSourceCode.value = (await sourceLoader()).default;
				}
			},
			{
				immediate: true
			}
		);
		const displayedSource = ref('dynamic');
		const displayedSourceCode = computed(() => {
			if (displayedSource.value === 'dynamic') {
				return dynamicSourceCode.value;
			}
			return staticSourceCode.value;
		});
		onMounted(async () => {
			setCDN('https://unpkg.com/shiki@0.10.1/');
			highlighter.value = await getHighlighter({
				langs: ['html', 'jsx'],
				themes: ['github-light', 'github-dark']
			});
		});
		const sourceHtml = computed(() => {
			var _a;
			return displayedSourceCode.value
				? (_a = highlighter.value) == null
					? void 0
					: _a.codeToHtml(displayedSourceCode.value, {
							lang: 'html',
							theme: isDark.value ? 'github-dark' : 'github-light'
					  })
				: '';
		});
		let lastScroll = 0;
		watch(
			() => props.variant,
			() => {
				lastScroll = 0;
			}
		);
		const scroller = ref();
		function onScroll(event) {
			if (sourceHtml.value) {
				lastScroll = event.target.scrollTop;
			}
		}
		watch(sourceHtml, async () => {
			await nextTick();
			if (scroller.value) {
				scroller.value.scrollTop = lastScroll;
			}
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective('tooltip');
			return (
				openBlock(),
				createElementBlock('div', _hoisted_1$6, [
					!error.value
						? (openBlock(),
						  createElementBlock('div', _hoisted_2$5, [
								_hoisted_3$1,
								_hoisted_4,
								createBaseVNode('div', _hoisted_5, [
									withDirectives(
										(openBlock(),
										createElementBlock(
											'button',
											{
												class: normalizeClass([
													'htw-flex htw-items-center htw-gap-1 htw-h-full htw-px-1 htw-bg-gray-500/10 htw-rounded-l htw-transition-all htw-ease-[cubic-bezier(0,1,.6,1)] htw-duration-300 htw-overflow-hidden',
													[
														displayedSource.value !== 'dynamic'
															? 'htw-max-w-6 htw-opacity-70'
															: 'htw-max-w-[82px] htw-text-primary-600 dark:htw-text-primary-400',
														dynamicSourceCode.value
															? 'htw-cursor-pointer hover:htw-bg-gray-500/30 active:htw-bg-gray-600/50'
															: 'htw-opacity-50'
													]
												]),
												onClick:
													_cache[0] ||
													(_cache[0] = ($event) =>
														dynamicSourceCode.value && (displayedSource.value = 'dynamic'))
											},
											[
												createVNode(unref(Icon), {
													icon: 'carbon:flash',
													class: 'htw-w-4 htw-h-4 htw-flex-none'
												}),
												createBaseVNode(
													'span',
													{
														class: normalizeClass([
															'transition-opacity duration-300',
															{
																'opacity-0': displayedSource.value !== 'dynamic'
															}
														])
													},
													' Dynamic ',
													2
												)
											],
											2
										)),
										[
											[
												_directive_tooltip,
												!dynamicSourceCode.value
													? 'Dynamic source code is not available'
													: displayedSource.value !== 'dynamic'
													? 'Switch to dynamic source'
													: null
											]
										]
									),
									withDirectives(
										(openBlock(),
										createElementBlock(
											'button',
											{
												class: normalizeClass([
													'htw-flex htw-items-center htw-gap-1 htw-h-full htw-px-1 htw-bg-gray-500/10 htw-rounded-r htw-transition-all htw-ease-[cubic-bezier(0,1,.6,1)] htw-duration-300 htw-overflow-hidden',
													[
														displayedSource.value !== 'static'
															? 'htw-max-w-6 htw-opacity-70'
															: 'htw-max-w-[63px] htw-text-primary-600 dark:htw-text-primary-400',
														staticSourceCode.value
															? 'htw-cursor-pointer hover:htw-bg-gray-500/30 active:htw-bg-gray-600/50'
															: 'htw-opacity-50'
													]
												]),
												onClick:
													_cache[1] ||
													(_cache[1] = ($event) =>
														staticSourceCode.value && (displayedSource.value = 'static'))
											},
											[
												createVNode(unref(Icon), {
													icon: 'carbon:document',
													class: 'htw-w-4 htw-h-4 htw-flex-none'
												}),
												createBaseVNode(
													'span',
													{
														class: normalizeClass([
															'transition-opacity duration-300',
															{
																'opacity-0': displayedSource.value !== 'static'
															}
														])
													},
													' Static ',
													2
												)
											],
											2
										)),
										[
											[
												_directive_tooltip,
												!staticSourceCode.value
													? 'Static source code is not available'
													: displayedSource.value !== 'static'
													? 'Switch to static source'
													: null
											]
										]
									)
								]),
								createVNode(
									unref(_g),
									{
										content: unref(displayedSourceCode),
										class: 'htw-flex-none'
									},
									null,
									8,
									['content']
								)
						  ]))
						: createCommentVNode('', true),
					error.value
						? (openBlock(),
						  createElementBlock('div', _hoisted_6, ' Error: ' + toDisplayString(error.value), 1))
						: !unref(displayedSourceCode)
						? (openBlock(),
						  createBlock(
								BaseEmpty,
								{ key: 2 },
								{
									default: withCtx(() => [
										createVNode(unref(Icon), {
											icon: 'carbon:code-hide',
											class: 'htw-w-8 htw-h-8 htw-opacity-50 htw-mb-6'
										}),
										_hoisted_7
									]),
									_: 1
								}
						  ))
						: !unref(sourceHtml)
						? (openBlock(),
						  createElementBlock(
								'textarea',
								{
									key: 3,
									ref_key: 'scroller',
									ref: scroller,
									class:
										'__histoire-code-placeholder htw-w-full htw-h-full htw-p-4 htw-outline-none htw-bg-transparent htw-resize-none htw-m-0',
									value: unref(displayedSourceCode),
									readonly: '',
									'data-test-id': 'story-source-code',
									onScroll
								},
								null,
								40,
								_hoisted_8
						  ))
						: (openBlock(),
						  createElementBlock(
								'div',
								{
									key: 4,
									ref_key: 'scroller',
									ref: scroller,
									class: 'htw-w-full htw-h-full htw-overflow-auto',
									'data-test-id': 'story-source-code',
									onScroll
								},
								[
									createBaseVNode(
										'div',
										{
											class: '__histoire-code htw-p-4 htw-w-fit',
											innerHTML: unref(sourceHtml)
										},
										null,
										8,
										_hoisted_9
									)
								],
								544
						  ))
				])
			);
		};
	}
});
const StorySourceCode = /* @__PURE__ */ _export_sfc(_sfc_main$7, [
	['__scopeId', 'data-v-36810e45']
]);
const _sfc_main$6 = defineComponent({
	inheritAttrs: false,
	props: {
		exact: {
			type: Boolean,
			default: false
		},
		matched: {
			type: Boolean,
			default: null
		}
	}
});
const _hoisted_1$5 = ['href', 'onClick'];
const _hoisted_2$4 = {
	key: 0,
	class:
		'htw-absolute htw-bottom-0 htw-left-0 htw-w-full htw-h-[2px] htw-bg-primary-500 dark:htw-bg-primary-400'
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent('router-link');
	return (
		openBlock(),
		createBlock(
			_component_router_link,
			mergeProps({ class: 'histoire-base-tab' }, _ctx.$attrs, { custom: '' }),
			{
				default: withCtx(({ isActive, isExactActive, href, navigate }) => [
					createBaseVNode(
						'a',
						mergeProps(_ctx.$attrs, {
							href,
							class: [
								'htw-px-4 htw-h-full htw-inline-flex htw-items-center hover:htw-bg-primary-50 dark:hover:htw-bg-primary-900 htw-relative htw-text-gray-900 dark:htw-text-gray-100',
								{
									'htw-text-primary-500 dark:htw-text-primary-400':
										_ctx.matched != null
											? _ctx.matched
											: (_ctx.exact && isExactActive) || (!_ctx.exact && isActive)
								}
							],
							onClick: navigate
						}),
						[
							renderSlot(_ctx.$slots, 'default'),
							createVNode(
								Transition,
								{ name: '__histoire-scale-x' },
								{
									default: withCtx(() => [
										(
											_ctx.matched != null
												? _ctx.matched
												: (_ctx.exact && isExactActive) || (!_ctx.exact && isActive)
										)
											? (openBlock(), createElementBlock('div', _hoisted_2$4))
											: createCommentVNode('', true)
									]),
									_: 2
								},
								1024
							)
						],
						16,
						_hoisted_1$5
					)
				]),
				_: 3
			},
			16
		)
	);
}
const BaseTab = /* @__PURE__ */ _export_sfc(_sfc_main$6, [['render', _sfc_render$2]]);
const _hoisted_1$4 = {
	role: 'button',
	class:
		'htw-cursor-pointer hover:htw-bg-primary-50 dark:hover:htw-bg-primary-900 htw-w-8 htw-h-full htw-flex htw-items-center htw-justify-center htw-absolute htw-top-0 htw-right-0'
};
const _hoisted_2$3 = { class: 'htw-flex htw-flex-col htw-items-stretch' };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
	__name: 'BaseOverflowMenu',
	setup(__props) {
		const overflowButtonWidth = 32;
		const el = ref();
		const availableWidth = ref(0);
		useResizeObserver(el, (entries) => {
			const containerWidth = entries[0].contentRect.width;
			availableWidth.value = containerWidth - overflowButtonWidth;
		});
		const children = ref(/* @__PURE__ */ new Map());
		const visibleChildrenCount = computed(() => {
			let width = 0;
			const c = [...children.value.values()].sort((a, b) => a.index - b.index);
			for (let i = 0; i < c.length; i++) {
				width += c[i].width;
				if (width > availableWidth.value) {
					return i;
				}
			}
			return c.length;
		});
		const ChildWrapper = {
			name: 'ChildWrapper',
			props: ['index'],
			setup(props, { slots }) {
				const el2 = ref();
				const state = reactive({ width: 0, index: props.index });
				useResizeObserver(el2, (entries) => {
					const width = entries[0].contentRect.width;
					if (!children.value.has(el2.value)) {
						children.value.set(el2.value, state);
					}
					state.width = width;
				});
				onBeforeUnmount(() => {
					children.value.delete(el2.value);
				});
				const visible = computed(() => visibleChildrenCount.value > state.index);
				return () =>
					h(
						'div',
						{ ref: el2, style: { visibility: visible.value ? 'visible' : 'hidden' } },
						slots.default()
					);
			}
		};
		const ChildrenRender = (props, { slots }) => {
			const [fragment] = slots.default();
			return fragment.children.map((vnode, index) => h(ChildWrapper, { index }, () => [vnode]));
		};
		const ChildrenSlice = (props, { slots }) => {
			const [fragment] = slots.default();
			return fragment.children.slice(props.start, props.end);
		};
		return (_ctx, _cache) => {
			const _component_VDropdown = resolveComponent('VDropdown');
			return (
				openBlock(),
				createElementBlock(
					'div',
					{
						ref_key: 'el',
						ref: el,
						class: 'histoire-base-overflow-menu htw-flex htw-overflow-hidden htw-relative'
					},
					[
						createVNode(ChildrenRender, null, {
							default: withCtx(() => [renderSlot(_ctx.$slots, 'default')]),
							_: 3
						}),
						unref(visibleChildrenCount) < children.value.size
							? (openBlock(),
							  createBlock(
									_component_VDropdown,
									{ key: 0 },
									{
										popper: withCtx(() => [
											createBaseVNode('div', _hoisted_2$3, [
												createVNode(
													ChildrenSlice,
													{ start: unref(visibleChildrenCount) },
													{
														default: withCtx(() => [renderSlot(_ctx.$slots, 'overflow')]),
														_: 3
													},
													8,
													['start']
												)
											])
										]),
										default: withCtx(() => [
											createBaseVNode('div', _hoisted_1$4, [
												createVNode(unref(Icon), {
													icon: 'carbon:caret-down',
													class: 'htw-w-4 htw-h-4 htw-opacity-50 group-hover:htw-opacity-100'
												})
											])
										]),
										_: 3
									}
							  ))
							: createCommentVNode('', true)
					],
					512
				)
			);
		};
	}
});
const _sfc_main$4 = defineComponent({
	inheritAttrs: false,
	props: {
		exact: {
			type: Boolean,
			default: false
		},
		matched: {
			type: Boolean,
			default: null
		}
	}
});
const _hoisted_1$3 = ['href', 'onClick'];
const _hoisted_2$2 = {
	key: 0,
	class:
		'htw-absolute htw-top-0 htw-left-0 htw-h-full htw-w-[2px] htw-bg-primary-500 dark:htw-bg-primary-400'
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent('router-link');
	return (
		openBlock(),
		createBlock(
			_component_router_link,
			mergeProps({ class: 'histoire-base-overflow-tab' }, _ctx.$attrs, { custom: '' }),
			{
				default: withCtx(({ isActive, isExactActive, href, navigate }) => [
					createBaseVNode(
						'a',
						mergeProps(_ctx.$attrs, {
							href,
							class: [
								'htw-px-4 htw-h-10 htw-min-w-[150px] htw-inline-flex htw-items-center hover:htw-bg-primary-50 dark:hover:htw-bg-primary-900 htw-relative htw-text-gray-900 dark:htw-text-gray-100',
								{
									'htw-text-primary-500 dark:htw-text-primary-400':
										_ctx.matched != null
											? _ctx.matched
											: (_ctx.exact && isExactActive) || (!_ctx.exact && isActive)
								}
							],
							onClick: navigate
						}),
						[
							renderSlot(_ctx.$slots, 'default'),
							createVNode(
								Transition,
								{ name: '__histoire-scale-y' },
								{
									default: withCtx(() => [
										(
											_ctx.matched != null
												? _ctx.matched
												: (_ctx.exact && isExactActive) || (!_ctx.exact && isActive)
										)
											? (openBlock(), createElementBlock('div', _hoisted_2$2))
											: createCommentVNode('', true)
									]),
									_: 2
								},
								1024
							)
						],
						16,
						_hoisted_1$3
					)
				]),
				_: 3
			},
			16
		)
	);
}
const BaseOverflowTab = /* @__PURE__ */ _export_sfc(_sfc_main$4, [['render', _sfc_render$1]]);
const _sfc_main$3 = {};
const _hoisted_1$2 = {
	class:
		'histoire-base-tag htw-text-center htw-text-xs htw-mx-1 htw-px-0.5 htw-h-4 htw-uppercase htw-min-w-4 htw-rounded-full htw-bg-primary-500 htw-text-white dark:htw-text-black'
};
function _sfc_render(_ctx, _cache) {
	return (
		openBlock(), createElementBlock('span', _hoisted_1$2, [renderSlot(_ctx.$slots, 'default')])
	);
}
const BaseTag = /* @__PURE__ */ _export_sfc(_sfc_main$3, [['render', _sfc_render]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
	__name: 'PaneTabs',
	props: {
		story: null,
		variant: null
	},
	setup(__props) {
		const props = __props;
		const { story } = toRefs(props);
		const { renderedDoc } = useStoryDoc(story);
		const eventsStore = useEventsStore();
		const hasEvents = computed(() => eventsStore.events.length);
		return (_ctx, _cache) => {
			return (
				openBlock(),
				createBlock(
					_sfc_main$5,
					{
						class:
							'histoire-pane-tabs htw-h-10 htw-flex-none htw-border-b htw-border-gray-100 dark:htw-border-gray-750'
					},
					{
						overflow: withCtx(() => [
							createVNode(
								BaseOverflowTab,
								{
									to: { ..._ctx.$route, query: { ..._ctx.$route.query, tab: '' } },
									matched: !_ctx.$route.query.tab
								},
								{
									default: withCtx(() => [createTextVNode(' Controls ')]),
									_: 1
								},
								8,
								['to', 'matched']
							),
							createVNode(
								BaseOverflowTab,
								{
									to: { ..._ctx.$route, query: { ..._ctx.$route.query, tab: 'docs' } },
									matched: _ctx.$route.query.tab === 'docs',
									class: normalizeClass({
										'opacity-50': !unref(renderedDoc)
									})
								},
								{
									default: withCtx(() => [createTextVNode(' Docs ')]),
									_: 1
								},
								8,
								['to', 'matched', 'class']
							),
							createVNode(
								BaseOverflowTab,
								{
									to: { ..._ctx.$route, query: { ..._ctx.$route.query, tab: 'events' } },
									matched: _ctx.$route.query.tab === 'events',
									class: normalizeClass({
										'htw-opacity-50': !unref(hasEvents)
									})
								},
								{
									default: withCtx(() => [
										createTextVNode(' Events '),
										unref(eventsStore).unseen
											? (openBlock(),
											  createBlock(
													BaseTag,
													{ key: 0 },
													{
														default: withCtx(() => [
															createTextVNode(
																toDisplayString(
																	unref(eventsStore).unseen <= 99
																		? unref(eventsStore).unseen
																		: '99+'
																),
																1
															)
														]),
														_: 1
													}
											  ))
											: createCommentVNode('', true)
									]),
									_: 1
								},
								8,
								['to', 'matched', 'class']
							)
						]),
						default: withCtx(() => [
							createVNode(
								BaseTab,
								{
									to: { ..._ctx.$route, query: { ..._ctx.$route.query, tab: '' } },
									matched: !_ctx.$route.query.tab
								},
								{
									default: withCtx(() => [createTextVNode(' Controls ')]),
									_: 1
								},
								8,
								['to', 'matched']
							),
							createVNode(
								BaseTab,
								{
									to: { ..._ctx.$route, query: { ..._ctx.$route.query, tab: 'docs' } },
									matched: _ctx.$route.query.tab === 'docs',
									class: normalizeClass({
										'htw-opacity-50': !unref(renderedDoc)
									})
								},
								{
									default: withCtx(() => [createTextVNode(' Docs ')]),
									_: 1
								},
								8,
								['to', 'matched', 'class']
							),
							createVNode(
								BaseTab,
								{
									to: { ..._ctx.$route, query: { ..._ctx.$route.query, tab: 'events' } },
									matched: _ctx.$route.query.tab === 'events',
									class: normalizeClass({
										'htw-opacity-50': !unref(hasEvents)
									})
								},
								{
									default: withCtx(() => [
										createTextVNode(' Events '),
										unref(eventsStore).unseen
											? (openBlock(),
											  createBlock(
													BaseTag,
													{ key: 0 },
													{
														default: withCtx(() => [
															createTextVNode(
																toDisplayString(
																	unref(eventsStore).unseen <= 99
																		? unref(eventsStore).unseen
																		: '99+'
																),
																1
															)
														]),
														_: 1
													}
											  ))
											: createCommentVNode('', true)
									]),
									_: 1
								},
								8,
								['to', 'matched', 'class']
							)
						]),
						_: 1
					}
				)
			);
		};
	}
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode('span', null, 'Select a variant', -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode('span', null, 'Loading...', -1);
const _hoisted_3 = { class: 'htw-flex htw-flex-col htw-h-full' };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
	__name: 'StorySidePanel',
	setup(__props) {
		const storyStore = useStoryStore();
		const route = useRoute();
		const panelContentComponent = computed(() => {
			switch (route.query.tab) {
				case 'docs':
					return _sfc_main$a;
				case 'events':
					return _sfc_main$8;
				default:
					return _sfc_main$b;
			}
		});
		return (_ctx, _cache) => {
			return !unref(storyStore).currentVariant
				? (openBlock(),
				  createBlock(
						BaseEmpty,
						{
							key: 0,
							class: 'histoire-story-side-panel histoire-selection'
						},
						{
							default: withCtx(() => [_hoisted_1$1]),
							_: 1
						}
				  ))
				: !unref(storyStore).currentVariant.configReady ||
				  !unref(storyStore).currentVariant.previewReady
				? (openBlock(),
				  createBlock(
						BaseEmpty,
						{
							key: 1,
							class: 'histoire-story-side-panel histoire-loading'
						},
						{
							default: withCtx(() => [_hoisted_2$1]),
							_: 1
						}
				  ))
				: (openBlock(),
				  createBlock(
						BaseSplitPane,
						{
							key: 2,
							'save-id': 'story-sidepane',
							orientation: 'portrait',
							class: 'histoire-story-side-panel histoire-loaded htw-h-full',
							'data-test-id': 'story-side-panel'
						},
						{
							first: withCtx(() => [
								createBaseVNode('div', _hoisted_3, [
									createVNode(
										_sfc_main$2,
										{
											story: unref(storyStore).currentStory,
											variant: unref(storyStore).currentVariant
										},
										null,
										8,
										['story', 'variant']
									),
									(openBlock(),
									createBlock(
										resolveDynamicComponent(unref(panelContentComponent)),
										{
											story: unref(storyStore).currentStory,
											variant: unref(storyStore).currentVariant,
											class: 'htw-h-full htw-overflow-auto'
										},
										null,
										8,
										['story', 'variant']
									))
								])
							]),
							last: withCtx(() => [
								createVNode(
									StorySourceCode,
									{
										story: unref(storyStore).currentStory,
										variant: unref(storyStore).currentVariant,
										class: 'htw-h-full'
									},
									null,
									8,
									['story', 'variant']
								)
							]),
							_: 1
						}
				  ));
		};
	}
});
const _hoisted_1 = {
	key: 1,
	class: 'histoire-story-view histoire-with-story htw-h-full'
};
const _hoisted_2 = {
	key: 0,
	class: 'htw-h-full htw-overflow-auto'
};
const _sfc_main = /* @__PURE__ */ defineComponent({
	__name: 'StoryView',
	setup(__props) {
		const storyStore = useStoryStore();
		const router = useRouter();
		const route = useRoute();
		watch(
			() => storyStore.currentVariant,
			(value) => {
				if (value) {
					storyStore.currentStory.lastSelectedVariant = value;
				}
			},
			{
				immediate: true
			}
		);
		watch(
			() => [storyStore.currentStory, storyStore.currentVariant],
			() => {
				var _a, _b;
				if (!storyStore.currentVariant) {
					if ((_a = storyStore.currentStory) == null ? void 0 : _a.lastSelectedVariant) {
						setVariant(storyStore.currentStory.lastSelectedVariant.id);
						return;
					}
					if (((_b = storyStore.currentStory) == null ? void 0 : _b.variants.length) === 1) {
						setVariant(storyStore.currentStory.variants[0].id);
					}
				}
			},
			{
				immediate: true
			}
		);
		function setVariant(variantId) {
			router.replace({
				...route,
				query: {
					...route.query,
					variantId
				}
			});
		}
		return (_ctx, _cache) => {
			return !unref(storyStore).currentStory
				? (openBlock(),
				  createBlock(
						BaseEmpty,
						{
							key: 0,
							class: 'histoire-story-view histoire-no-story'
						},
						{
							default: withCtx(() => [
								createVNode(unref(Icon), {
									icon: 'carbon:software-resource-resource',
									class: 'htw-w-16 htw-h-16 htw-opacity-50'
								})
							]),
							_: 1
						}
				  ))
				: (openBlock(),
				  createElementBlock('div', _hoisted_1, [
						unref(storyStore).currentStory.docsOnly
							? (openBlock(),
							  createElementBlock('div', _hoisted_2, [
									createVNode(
										_sfc_main$a,
										{
											story: unref(storyStore).currentStory,
											class:
												'md:htw-p-12 htw-w-full md:htw-max-w-[600px] lg:htw-max-w-[800px] xl:htw-max-w-[900px]'
										},
										null,
										8,
										['story']
									)
							  ]))
							: unref(isMobile)
							? (openBlock(), createBlock(StoryViewer, { key: 1 }))
							: (openBlock(),
							  createBlock(
									BaseSplitPane,
									{
										key: 2,
										'save-id': 'story-main',
										min: 30,
										max: 95,
										'default-split': 75,
										class: 'htw-h-full'
									},
									{
										first: withCtx(() => [createVNode(StoryViewer)]),
										last: withCtx(() => [createVNode(_sfc_main$1)]),
										_: 1
									}
							  ))
				  ]));
		};
	}
});
export { _sfc_main as default };
