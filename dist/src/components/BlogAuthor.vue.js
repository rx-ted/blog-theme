/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useData, withBase } from "vitepress";
import { computed } from "vue";
import { useBlogConfig } from "../composables/config/blog";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { home } = useBlogConfig();
const { frontmatter, site } = useData();
const author = computed(() => frontmatter.value.author ??
    frontmatter.value?.blog?.author ??
    home?.author ??
    site.value.themeConfig?.blog?.author);
const authorImgUrl = computed(() => frontmatter.value?.authorImgUrl ??
    frontmatter.value?.blog?.authorImgUrl ??
    home?.authorImgUrl ??
    site.value?.themeConfig?.authorImgUrl ??
    "");
const show = computed(() => author.value || logo.value);
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
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx.show) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("blog-author") }, });
    if (__VLS_ctx.authorImgUrl) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.withBase(__VLS_ctx.authorImgUrl))), alt: ("avatar"), });
    }
    if (__VLS_ctx.author) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.author);
    }
}
__VLS_styleScopedClasses['blog-author'];
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
            author: author,
            authorImgUrl: authorImgUrl,
            show: show,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
