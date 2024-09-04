/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
// 阅读时间计算方式参考
// https://zhuanlan.zhihu.com/p/36375802
import { useData } from 'vitepress';
import { computed, onMounted, ref } from 'vue';
import { ElIcon } from 'element-plus';
import { AlarmClock, Clock, CollectionTag, EditPen, UserFilled } from '@element-plus/icons-vue';
import { useAnalyzeTitles, useBlogConfig, useCurrentArticle, useDocMetaInsertPosition, useDocMetaInsertSelector, useFormatShowDate } from '../composables/config/blog';
import countWord, { formatDate } from '../utils/client';
import BlogDocCover from './BlogDocCover.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const formatShowDate = useFormatShowDate();
const { article, authorList } = useBlogConfig();
const readingTimePosition = article?.readingTimePosition || 'inline';
const { frontmatter } = useData();
const tags = computed(() => {
    const { tag, tags, categories } = frontmatter.value;
    return [
        ...new Set([]
            .concat(tag, tags, categories)
            .flat()
            .filter(v => !!v))
    ];
});
const showAnalyze = computed(() => frontmatter.value?.readingTime ?? article?.readingTime ?? true);
const wordCount = ref(0);
const imageCount = ref(0);
const wordTime = computed(() => {
    return ~~((wordCount.value / 275) * 60);
});
const imageTime = computed(() => {
    const n = imageCount.value;
    if (imageCount.value <= 10) {
        // 等差数列求和
        return n * 13 + (n * (n - 1)) / 2;
    }
    return 175 + (n - 10) * 3;
});
const readTime = computed(() => {
    return Math.ceil((wordTime.value + imageTime.value) / 60);
});
const docMetaInsertSelector = useDocMetaInsertSelector();
const docMetaInsertPosition = useDocMetaInsertPosition();
const $des = ref();
function analyze() {
    if (!$des.value) {
        return;
    }
    document.querySelectorAll('.meta-des').forEach(v => v.remove());
    const docDomContainer = window.document.querySelector('#VPContent');
    const imgs = docDomContainer?.querySelectorAll('.content-container .main img');
    imageCount.value = imgs?.length || 0;
    const words = docDomContainer?.querySelector('.content-container .main')?.textContent
        || '';
    wordCount.value = countWord(words);
    let el = docDomContainer?.querySelector(docMetaInsertSelector.value);
    if (!el) {
        el = docDomContainer?.querySelector('h1');
    }
    el?.[docMetaInsertPosition.value]?.($des.value);
}
onMounted(() => {
    const observer = new MutationObserver(() => {
        const targetInstance = document.querySelector('#hack-article-des');
        if (!targetInstance) {
            analyze();
        }
    });
    observer.observe(document.body, {
        childList: true, // 观察目标子节点的变化，是否有添加或者删除
        subtree: true // 观察后代节点，默认为 false
    });
    // 初始化时执行一次
    analyze();
});
const currentArticle = useCurrentArticle();
const publishDate = computed(() => {
    return formatShowDate(currentArticle.value?.meta?.date || '');
});
const hoverDate = computed(() => {
    return currentArticle.value?.meta?.date ? `: ${formatDate(currentArticle.value?.meta?.date)}` : '';
});
const hiddenTime = computed(() => frontmatter.value.date === false);
const { theme } = useData();
const globalAuthor = computed(() => theme.value.blog?.author || '');
const author = computed(() => (frontmatter.value.author || currentArticle.value?.meta.author)
    ?? globalAuthor.value);
const currentAuthorInfo = computed(() => authorList?.find(v => author.value === v.nickname));
const hiddenAuthor = computed(() => frontmatter.value.author === false);
const { topWordCount, topReadTime, inlineWordCount, inlineReadTime, authorTitle, readTimeTitle, wordCountTitle, publishDateTitle, lastUpdatedTitle, tagTitle } = useAnalyzeTitles(wordCount, readTime);
const timeTitle = computed(() => frontmatter.value.date ? publishDateTitle.value : lastUpdatedTitle.value);
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
__VLS_styleScopedClasses['el-icon'];
__VLS_styleScopedClasses['link'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx.showAnalyze && __VLS_ctx.readingTimePosition === 'top') {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("doc-analyze") }, "data-pagefind-ignore": ("all"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.EditPen;
    /** @type { [typeof __VLS_components.EditPen, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    (__VLS_ctx.topWordCount);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.AlarmClock;
    /** @type { [typeof __VLS_components.AlarmClock, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_ctx.topReadTime);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("hack-article-des"), ref: ("$des"), ...{ class: ("meta-des") }, });
// @ts-ignore
__VLS_ctx.$des;
if (__VLS_ctx.author && !__VLS_ctx.hiddenAuthor) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("author") }, title: ((__VLS_ctx.authorTitle)), });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.UserFilled;
    /** @type { [typeof __VLS_components.UserFilled, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_nonNullable(__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    if (__VLS_ctx.currentAuthorInfo) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("link") }, href: ((__VLS_ctx.currentAuthorInfo.url)), title: ((__VLS_ctx.currentAuthorInfo.des)), });
        (__VLS_ctx.currentAuthorInfo.nickname);
    }
    else {
        (__VLS_ctx.author);
    }
}
if (__VLS_ctx.publishDate && !__VLS_ctx.hiddenTime) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("publishDate") }, title: ((__VLS_ctx.timeTitle + __VLS_ctx.hoverDate)), });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.Clock;
    /** @type { [typeof __VLS_components.Clock, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_nonNullable(__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    (__VLS_ctx.publishDate);
}
if (__VLS_ctx.tags.length) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("tags") }, title: ((__VLS_ctx.tagTitle)), });
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.CollectionTag;
    /** @type { [typeof __VLS_components.CollectionTag, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
    const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_nonNullable(__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    for (const [tag] of __VLS_getVForSourceType((__VLS_ctx.tags))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ key: ((tag)), ...{ class: ("link") }, href: ((`/?tag=${tag}`)), });
        (tag);
    }
}
if (__VLS_ctx.readingTimePosition === 'inline' && __VLS_ctx.showAnalyze) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ title: ((__VLS_ctx.wordCountTitle)), });
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
    const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.EditPen;
    /** @type { [typeof __VLS_components.EditPen, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
    const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
    __VLS_nonNullable(__VLS_65.slots).default;
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    (__VLS_ctx.inlineWordCount);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ title: ((__VLS_ctx.readTimeTitle)), });
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
    const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.AlarmClock;
    /** @type { [typeof __VLS_components.AlarmClock, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({}));
    const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
    __VLS_nonNullable(__VLS_77.slots).default;
    const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    (__VLS_ctx.inlineReadTime);
}
if (__VLS_ctx.readingTimePosition === 'newLine' && __VLS_ctx.showAnalyze) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, ...{ class: ("new-line-meta-des") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ title: ((__VLS_ctx.wordCountTitle)), });
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({}));
    const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
    const __VLS_90 = __VLS_resolvedLocalAndGlobalComponents.EditPen;
    /** @type { [typeof __VLS_components.EditPen, ] } */
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({}));
    const __VLS_92 = __VLS_91({}, ...__VLS_functionalComponentArgsRest(__VLS_91));
    __VLS_nonNullable(__VLS_89.slots).default;
    const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
    (__VLS_ctx.inlineWordCount);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ title: ((__VLS_ctx.readTimeTitle)), });
    const __VLS_96 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
    /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({}));
    const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
    const __VLS_102 = __VLS_resolvedLocalAndGlobalComponents.AlarmClock;
    /** @type { [typeof __VLS_components.AlarmClock, ] } */
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({}));
    const __VLS_104 = __VLS_103({}, ...__VLS_functionalComponentArgsRest(__VLS_103));
    __VLS_nonNullable(__VLS_101.slots).default;
    const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
    (__VLS_ctx.inlineReadTime);
}
const __VLS_108 = __VLS_resolvedLocalAndGlobalComponents.ClientOnly;
/** @type { [typeof __VLS_components.ClientOnly, typeof __VLS_components.ClientOnly, ] } */
// @ts-ignore
const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({}));
const __VLS_110 = __VLS_109({}, ...__VLS_functionalComponentArgsRest(__VLS_109));
// @ts-ignore
[BlogDocCover,];
// @ts-ignore
const __VLS_114 = __VLS_asFunctionalComponent(BlogDocCover, new BlogDocCover({}));
const __VLS_115 = __VLS_114({}, ...__VLS_functionalComponentArgsRest(__VLS_114));
__VLS_nonNullable(__VLS_113.slots).default;
const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
__VLS_styleScopedClasses['doc-analyze'];
__VLS_styleScopedClasses['meta-des'];
__VLS_styleScopedClasses['author'];
__VLS_styleScopedClasses['link'];
__VLS_styleScopedClasses['publishDate'];
__VLS_styleScopedClasses['tags'];
__VLS_styleScopedClasses['link'];
__VLS_styleScopedClasses['new-line-meta-des'];
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {
    "$des": __VLS_intrinsicElements['div'],
};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: $refs,
    attrs: {},
};
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            ElIcon: ElIcon,
            AlarmClock: AlarmClock,
            Clock: Clock,
            CollectionTag: CollectionTag,
            EditPen: EditPen,
            UserFilled: UserFilled,
            BlogDocCover: BlogDocCover,
            readingTimePosition: readingTimePosition,
            tags: tags,
            showAnalyze: showAnalyze,
            $des: $des,
            publishDate: publishDate,
            hoverDate: hoverDate,
            hiddenTime: hiddenTime,
            author: author,
            currentAuthorInfo: currentAuthorInfo,
            hiddenAuthor: hiddenAuthor,
            topWordCount: topWordCount,
            topReadTime: topReadTime,
            inlineWordCount: inlineWordCount,
            inlineReadTime: inlineReadTime,
            authorTitle: authorTitle,
            readTimeTitle: readTimeTitle,
            wordCountTitle: wordCountTitle,
            tagTitle: tagTitle,
            timeTitle: timeTitle,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
