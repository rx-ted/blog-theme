/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import Theme from 'vitepress/theme';
import { useData } from 'vitepress';
import { computed } from 'vue';
import { useDarkTransition } from '../hooks/useDarkTransition';
import { useBlogThemeMode, useDarkTransitionConfig } from '../composables/config/blog';
import BlogHomeInfo from './BlogHomeInfo.vue';
import BlogHomeBanner from './BlogHomeBanner.vue';
import BlogList from './BlogList.vue';
import BlogSidebar from './BlogSidebar.vue';
import BlogImagePreview from './BlogImagePreview.vue';
import BlogArticleAnalyze from './BlogArticleAnalyze.vue';
import BlogAlert from './BlogAlert.vue';
import BlogPopover from './BlogPopover.vue';
import BlogFooter from './BlogFooter.vue';
import BlogHomeHeaderAvatar from './BlogHomeHeaderAvatar.vue';
import BlogBackToTop from './BlogBackToTop.vue';
import CommentGiscus from './CommentGiscus.vue';
import BlogOml2d from './BlogOml2d.vue';
import CommentArtalk from './CommentArtalk.vue';
import BlogButtonAfterArticle from './BlogButtonAfterArticle.vue';
import BlogCommentWrapper from './BlogCommentWrapper.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { frontmatter } = useData();
const layout = computed(() => frontmatter.value.layout);
const isBlogTheme = useBlogThemeMode();
const { Layout } = Theme;
// 切换深色模式过渡
// https://vitepress.dev/zh/guide/extending-default-theme#on-appearance-toggle
useDarkTransition();
const openTransition = useDarkTransitionConfig();
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
__VLS_styleScopedClasses['home'];
__VLS_styleScopedClasses['blog-info-wrapper'];
__VLS_styleScopedClasses['content-wrapper'];
__VLS_styleScopedClasses['blog-info-wrapper'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Layout;
/** @type { [typeof __VLS_components.Layout, typeof __VLS_components.Layout, ] } */
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: (({ 'blog-theme-layout': __VLS_ctx.openTransition })) }, }));
const __VLS_2 = __VLS_1({ ...{ class: (({ 'blog-theme-layout': __VLS_ctx.openTransition })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "layout-top": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.ClientOnly;
    /** @type { [typeof __VLS_components.ClientOnly, typeof __VLS_components.ClientOnly, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    // @ts-ignore
    [BlogOml2d,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(BlogOml2d, new BlogOml2d({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    // @ts-ignore
    [BlogAlert,];
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(BlogAlert, new BlogAlert({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
    // @ts-ignore
    [BlogPopover,];
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(BlogPopover, new BlogPopover({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
    __VLS_nonNullable(__VLS_12.slots).default;
    const __VLS_12 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "doc-before": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_28 = {};
    const __VLS_29 = __VLS_resolvedLocalAndGlobalComponents.ClientOnly;
    /** @type { [typeof __VLS_components.ClientOnly, typeof __VLS_components.ClientOnly, ] } */
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
    const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
    // @ts-ignore
    [BlogArticleAnalyze,];
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(BlogArticleAnalyze, new BlogArticleAnalyze({}));
    const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
    // @ts-ignore
    [BlogImagePreview,];
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(BlogImagePreview, new BlogImagePreview({}));
    const __VLS_41 = __VLS_40({}, ...__VLS_functionalComponentArgsRest(__VLS_40));
    __VLS_nonNullable(__VLS_34.slots).default;
    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "nav-bar-content-before": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_45 = {};
}
if (__VLS_ctx.isBlogTheme) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { "home-hero-before": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        var __VLS_46 = {};
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home") }, });
        // @ts-ignore
        [BlogHomeHeaderAvatar,];
        // @ts-ignore
        const __VLS_47 = __VLS_asFunctionalComponent(BlogHomeHeaderAvatar, new BlogHomeHeaderAvatar({}));
        const __VLS_48 = __VLS_47({}, ...__VLS_functionalComponentArgsRest(__VLS_47));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-banner") }, });
        // @ts-ignore
        [BlogHomeBanner,];
        // @ts-ignore
        const __VLS_52 = __VLS_asFunctionalComponent(BlogHomeBanner, new BlogHomeBanner({}));
        const __VLS_53 = __VLS_52({}, ...__VLS_functionalComponentArgsRest(__VLS_52));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content-wrapper") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("blog-list-wrapper") }, });
        // @ts-ignore
        [BlogList,];
        // @ts-ignore
        const __VLS_57 = __VLS_asFunctionalComponent(BlogList, new BlogList({}));
        const __VLS_58 = __VLS_57({}, ...__VLS_functionalComponentArgsRest(__VLS_57));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("blog-info-wrapper") }, });
        // @ts-ignore
        [BlogHomeInfo,];
        // @ts-ignore
        const __VLS_62 = __VLS_asFunctionalComponent(BlogHomeInfo, new BlogHomeInfo({}));
        const __VLS_63 = __VLS_62({}, ...__VLS_functionalComponentArgsRest(__VLS_62));
    }
}
if (__VLS_ctx.isBlogTheme) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { "sidebar-nav-after": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        var __VLS_67 = {};
        // @ts-ignore
        [BlogSidebar,];
        // @ts-ignore
        const __VLS_68 = __VLS_asFunctionalComponent(BlogSidebar, new BlogSidebar({}));
        const __VLS_69 = __VLS_68({}, ...__VLS_functionalComponentArgsRest(__VLS_68));
    }
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "doc-after": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_73 = {};
    const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.ClientOnly;
    /** @type { [typeof __VLS_components.ClientOnly, typeof __VLS_components.ClientOnly, ] } */
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
    const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
    // @ts-ignore
    [BlogButtonAfterArticle,];
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent(BlogButtonAfterArticle, new BlogButtonAfterArticle({}));
    const __VLS_81 = __VLS_80({}, ...__VLS_functionalComponentArgsRest(__VLS_80));
    // @ts-ignore
    [BlogBackToTop,];
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(BlogBackToTop, new BlogBackToTop({}));
    const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
    // @ts-ignore
    [BlogCommentWrapper, BlogCommentWrapper,];
    // @ts-ignore
    const __VLS_90 = __VLS_asFunctionalComponent(BlogCommentWrapper, new BlogCommentWrapper({}));
    const __VLS_91 = __VLS_90({}, ...__VLS_functionalComponentArgsRest(__VLS_90));
    // @ts-ignore
    [CommentArtalk,];
    // @ts-ignore
    const __VLS_95 = __VLS_asFunctionalComponent(CommentArtalk, new CommentArtalk({}));
    const __VLS_96 = __VLS_95({}, ...__VLS_functionalComponentArgsRest(__VLS_95));
    // @ts-ignore
    [CommentGiscus,];
    // @ts-ignore
    const __VLS_100 = __VLS_asFunctionalComponent(CommentGiscus, new CommentGiscus({}));
    const __VLS_101 = __VLS_100({}, ...__VLS_functionalComponentArgsRest(__VLS_100));
    __VLS_nonNullable(__VLS_94.slots).default;
    const __VLS_94 = __VLS_pickFunctionalComponentCtx(BlogCommentWrapper, __VLS_91);
    __VLS_nonNullable(__VLS_79.slots).default;
    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "layout-bottom": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    if (__VLS_ctx.layout === 'home') {
        // @ts-ignore
        [BlogFooter,];
        // @ts-ignore
        const __VLS_105 = __VLS_asFunctionalComponent(BlogFooter, new BlogFooter({}));
        const __VLS_106 = __VLS_105({}, ...__VLS_functionalComponentArgsRest(__VLS_105));
    }
    var __VLS_110 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "nav-bar-title-before": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_111 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "nav-bar-title-after": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_112 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "nav-bar-content-after": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_113 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "nav-screen-content-before": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_114 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "nav-screen-content-after": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_115 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "sidebar-nav-before": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_116 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "page-top": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_117 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "page-bottom": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_118 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "not-found": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_119 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "home-hero-info": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_120 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "home-hero-image": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_121 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "home-hero-after": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_122 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "home-features-before": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_123 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "home-features-after": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_124 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "doc-footer-before": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_125 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "doc-top": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_126 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "doc-bottom": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_127 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "aside-top": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_128 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "aside-bottom": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_129 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "aside-outline-before": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_130 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "aside-outline-after": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_131 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "aside-ads-before": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_132 = {};
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { "aside-ads-after": __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    var __VLS_133 = {};
}
const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
__VLS_styleScopedClasses['blog-theme-layout'];
__VLS_styleScopedClasses['home'];
__VLS_styleScopedClasses['header-banner'];
__VLS_styleScopedClasses['content-wrapper'];
__VLS_styleScopedClasses['blog-list-wrapper'];
__VLS_styleScopedClasses['blog-info-wrapper'];
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
            BlogHomeInfo: BlogHomeInfo,
            BlogHomeBanner: BlogHomeBanner,
            BlogList: BlogList,
            BlogSidebar: BlogSidebar,
            BlogImagePreview: BlogImagePreview,
            BlogArticleAnalyze: BlogArticleAnalyze,
            BlogAlert: BlogAlert,
            BlogPopover: BlogPopover,
            BlogFooter: BlogFooter,
            BlogHomeHeaderAvatar: BlogHomeHeaderAvatar,
            BlogBackToTop: BlogBackToTop,
            CommentGiscus: CommentGiscus,
            BlogOml2d: BlogOml2d,
            CommentArtalk: CommentArtalk,
            BlogButtonAfterArticle: BlogButtonAfterArticle,
            BlogCommentWrapper: BlogCommentWrapper,
            layout: layout,
            isBlogTheme: isBlogTheme,
            Layout: Layout,
            openTransition: openTransition,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default {};
;
