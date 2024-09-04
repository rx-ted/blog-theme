/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useData, withBase } from 'vitepress';
import { computed } from 'vue';
import { useBlogConfig } from '../composables/config/blog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { home } = useBlogConfig();
const { frontmatter, site } = useData();
const logo = computed(() => frontmatter.value.logo
    ?? frontmatter.value?.blog?.logo
    ?? home?.logo
    ?? site.value.themeConfig?.logo
    ?? '/logo.png');
const alwaysHide = computed(() => frontmatter.value.blog?.minScreenAvatar === false);
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
__VLS_styleScopedClasses['blog-home-header-avatar'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("blog-home-header-avatar") }, });
__VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.alwaysHide) }, null, null);
__VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.withBase(__VLS_ctx.logo))), alt: ("avatar"), });
__VLS_styleScopedClasses['blog-home-header-avatar'];
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
            withBase: withBase,
            logo: logo,
            alwaysHide: alwaysHide,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
