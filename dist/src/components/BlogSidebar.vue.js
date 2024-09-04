/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
import { useBlogConfig } from '../composables/config/blog';
import BlogRecommendArticle from './BlogRecommendArticle.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { recommend: _recommend } = useBlogConfig();
const sidebarStyle = computed(() => _recommend && _recommend?.style ? _recommend.style : 'card');
const marginTop = computed(() => sidebarStyle.value === 'card' ? '40px' : '0px');
const marginTopMini = computed(() => sidebarStyle.value === 'card' ? '60px' : '0px');
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
__VLS_styleScopedClasses['sidebar'];
// CSS variable injection 
__VLS_ctx.marginTop;
__VLS_ctx.marginTopMini;
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx._recommend !== false) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sidebar") }, "data-pagefind-ignore": ("all"), });
    // @ts-ignore
    [BlogRecommendArticle,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BlogRecommendArticle, new BlogRecommendArticle({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
__VLS_styleScopedClasses['sidebar'];
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
            BlogRecommendArticle: BlogRecommendArticle,
            _recommend: _recommend,
            marginTop: marginTop,
            marginTopMini: marginTopMini,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
