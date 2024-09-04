/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useElementSize, useScroll } from '@vueuse/core';
import { ElIcon } from 'element-plus';
import { computed, ref } from 'vue';
import { vOuterHtml } from '../directives';
import { useBackToTopConfig } from '../composables/config/blog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
function handleBackRoTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const $vpDoc = document.querySelector('.vp-doc');
const el = ref($vpDoc);
const { width } = useElementSize(el);
const docWidth = computed(() => `${width.value}px`);
const backToTopConfig = useBackToTopConfig();
const open = computed(() => !!(backToTopConfig ?? true));
const { y } = useScroll(window);
const defaultTriggerHeight = 450;
const triggerTop = computed(() => (typeof backToTopConfig === 'boolean' ? undefined : backToTopConfig?.top) ?? defaultTriggerHeight);
const show = computed(() => width && y.value > triggerTop.value);
const iconSVGStr = computed(() => typeof backToTopConfig === 'boolean' ? '' : backToTopConfig?.icon);
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
const __VLS_ctxBase = {};
const __VLS_ctx = __VLS_ctxBase;
let __VLS_name;
const __VLS_localComponents = {
    ...{},
    ...{},
    ...__VLS_ctxBase,
};
let __VLS_components;
let __VLS_styleScopedClasses;
__VLS_styleScopedClasses['back-to-top'];
__VLS_styleScopedClasses['icon-wrapper'];
// CSS variable injection 
__VLS_ctx.docWidth;
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx.open) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("back-to-top") }, });
    __VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.show) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.handleBackRoTop) }, ...{ class: ("icon-wrapper") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ size: ((20)), }));
    const __VLS_2 = __VLS_1({ size: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.iconSVGStr) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.i)({});
        __VLS_directiveAsFunction(__VLS_ctx.vOuterHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.iconSVGStr) }, null, null);
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("512"), height: ("512"), viewBox: ("0 0 24 24"), xmlns: ("http://www.w3.org/2000/svg"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ fill: ("currentColor"), d: ("m20 22l-3.86-1.55c.7-1.53 1.2-3.11 1.51-4.72zM7.86 20.45L4 22l2.35-6.27c.31 1.61.81 3.19 1.51 4.72M12 2s5 2 5 10c0 3.1-.75 5.75-1.67 7.83A2 2 0 0 1 13.5 21h-3a2 2 0 0 1-1.83-1.17C7.76 17.75 7 15.1 7 12c0-8 5-10 5-10m0 10c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2"), });
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
}
__VLS_styleScopedClasses['back-to-top'];
__VLS_styleScopedClasses['icon-wrapper'];
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: $refs,
    attrs: {},
};
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            ElIcon: ElIcon,
            vOuterHtml: vOuterHtml,
            handleBackRoTop: handleBackRoTop,
            docWidth: docWidth,
            open: open,
            show: show,
            iconSVGStr: iconSVGStr,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
