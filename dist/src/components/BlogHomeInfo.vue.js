/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import BlogHomeOverview from './BlogHomeOverview.vue';
import BlogHotArticle from './BlogHotArticle.vue';
import BlogHomeTags from './BlogHomeTags.vue';
import BlogFriendLink from './BlogFriendLink.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
__VLS_styleScopedClasses['blog-info'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("blog-info") }, "data-pagefind-ignore": ("all"), });
// @ts-ignore
[BlogHomeOverview,];
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(BlogHomeOverview, new BlogHomeOverview({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
// @ts-ignore
[BlogHotArticle,];
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(BlogHotArticle, new BlogHotArticle({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_10 = __VLS_resolvedLocalAndGlobalComponents.ClientOnly;
/** @type { [typeof __VLS_components.ClientOnly, typeof __VLS_components.ClientOnly, ] } */
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({}));
const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
// @ts-ignore
[BlogFriendLink,];
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(BlogFriendLink, new BlogFriendLink({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_nonNullable(__VLS_15.slots).default;
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
// @ts-ignore
[BlogHomeTags,];
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(BlogHomeTags, new BlogHomeTags({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_styleScopedClasses['blog-info'];
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
            BlogHomeOverview: BlogHomeOverview,
            BlogHotArticle: BlogHotArticle,
            BlogHomeTags: BlogHomeTags,
            BlogFriendLink: BlogFriendLink,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
