/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { computed } from 'vue';
import { useData } from 'vitepress';
import { isCurrentWeek } from '../utils/client';
import { useArticles, useBlogConfig, useHomeAnalysis } from '../composables/config/blog';
import BlogAuthor from './BlogAuthor.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { home } = useBlogConfig();
const { frontmatter } = useData();
const avatarMode = computed(() => frontmatter.value?.blog?.avatarMode || home?.avatarMode || 'card');
const showCardAvatar = computed(() => avatarMode.value === 'card');
const showSplitCard = computed(() => avatarMode.value === 'split');
const docs = useArticles();
const notHiddenArticles = computed(() => {
    return docs.value.filter(v => v.meta?.publish !== false);
});
const nowMonth = new Date().getMonth();
const nowYear = new Date().getFullYear();
const currentMonth = computed(() => {
    return notHiddenArticles.value.filter((v) => {
        const pubDate = new Date(v.meta?.date);
        return pubDate?.getMonth() === nowMonth && pubDate.getFullYear() === nowYear;
    });
});
const currentWeek = computed(() => {
    return notHiddenArticles.value.filter((v) => {
        const pubDate = new Date(v.meta?.date);
        return isCurrentWeek(pubDate);
    });
});
const analysis = useHomeAnalysis();
const titles = computed(() => (frontmatter.value?.blog?.analysis?.articles?.title || analysis?.articles?.title || []));
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
if (__VLS_ctx.showSplitCard) {
    // @ts-ignore
    [BlogAuthor,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BlogAuthor, new BlogAuthor({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
if (__VLS_ctx.showCardAvatar) {
    // @ts-ignore
    [BlogAuthor,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(BlogAuthor, new BlogAuthor({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overview-data") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overview-item") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("count") }, });
(__VLS_ctx.notHiddenArticles.length);
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label") }, });
(__VLS_ctx.titles[0] || '博客文章');
__VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("split") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overview-item") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("count") }, });
(__VLS_ctx.currentMonth?.length);
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label") }, });
(__VLS_ctx.titles[1] || '本月更新');
__VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("split") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overview-item") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("count") }, });
(__VLS_ctx.currentWeek?.length);
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label") }, });
(__VLS_ctx.titles[2] || '本周更新');
__VLS_styleScopedClasses['card'];
__VLS_styleScopedClasses['overview-data'];
__VLS_styleScopedClasses['overview-item'];
__VLS_styleScopedClasses['count'];
__VLS_styleScopedClasses['label'];
__VLS_styleScopedClasses['split'];
__VLS_styleScopedClasses['overview-item'];
__VLS_styleScopedClasses['count'];
__VLS_styleScopedClasses['label'];
__VLS_styleScopedClasses['split'];
__VLS_styleScopedClasses['overview-item'];
__VLS_styleScopedClasses['count'];
__VLS_styleScopedClasses['label'];
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
            BlogAuthor: BlogAuthor,
            showCardAvatar: showCardAvatar,
            showSplitCard: showSplitCard,
            notHiddenArticles: notHiddenArticles,
            currentMonth: currentMonth,
            currentWeek: currentWeek,
            titles: titles,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
