/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { useData } from 'vitepress';
import { computed } from 'vue';
import { useBlogConfig, useCurrentArticle } from '../composables/config/blog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { frontmatter } = useData();
const cover = computed(() => frontmatter.value.cover);
const currentArticle = useCurrentArticle();
const realCover = computed(() => import.meta.env.DEV ? cover.value : currentArticle.value?.meta?.cover);
const { article } = useBlogConfig();
const hiddenCover = computed(() => frontmatter.value?.hiddenCover ?? article?.hiddenCover ?? false);
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
__VLS_styleScopedClasses['blog-doc-cover'];
__VLS_styleScopedClasses['blog-doc-cover'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx.cover && !__VLS_ctx.hiddenCover) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("blog-doc-cover") }, src: ((__VLS_ctx.realCover)), });
}
__VLS_styleScopedClasses['blog-doc-cover'];
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
            cover: cover,
            realCover: realCover,
            hiddenCover: hiddenCover,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
