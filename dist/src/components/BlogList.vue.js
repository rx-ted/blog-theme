/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { computed, watch } from 'vue';
import { ElPagination } from 'element-plus';
import { useData, useRoute, useRouter } from 'vitepress';
import { useActiveTag, useArticles, useBlogConfig, useCurrentPageNum } from '../composables/config/blog';
import BlogItem from './BlogItem.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { theme, frontmatter } = useData();
const globalAuthor = computed(() => theme.value.blog?.author || '');
const docs = useArticles();
const activeTag = useActiveTag();
const activeTagLabel = computed(() => activeTag.value.label);
const wikiList = computed(() => {
    const topList = docs.value.filter(v => !v.meta.hidden && !!v.meta.top);
    topList.sort((a, b) => {
        const aTop = a?.meta?.top;
        const bTop = b?.meta.top;
        return Number(aTop) - Number(bTop);
    });
    const data = docs.value.filter(v => v.meta.date && v.meta.title && !v.meta.top && !v.meta.hidden);
    data.sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
    return topList.concat(data);
});
const filterData = computed(() => {
    if (!activeTagLabel.value)
        return wikiList.value;
    return wikiList.value.filter(v => v.meta?.tag?.includes(activeTagLabel.value));
});
const { home } = useBlogConfig();
const pageSize = computed(() => frontmatter.value.blog?.pageSize || home?.pageSize || 6);
const currentPage = useCurrentPageNum();
const currentWikiData = computed(() => {
    const startIdx = (currentPage.value - 1) * pageSize.value;
    const endIdx = startIdx + pageSize.value;
    return filterData.value.slice(startIdx, endIdx);
});
const router = useRouter();
const queryPageNumKey = 'pageNum';
function handleUpdatePageNum(current) {
    if (currentPage.value === current) {
        return;
    }
    currentPage.value = current;
    const { searchParams } = new URL(window.location.href);
    searchParams.delete(queryPageNumKey);
    searchParams.append(queryPageNumKey, String(current));
    window.scrollTo({ top: 0, behavior: 'auto' });
    router.go(`${router.route.path}?${searchParams.toString()}`);
}
const route = useRoute();
function refreshCurrentPage() {
    if (typeof window === 'undefined')
        return;
    const search = window.location.search.slice(1);
    const searchParams = new URLSearchParams(search);
    const pageNum = Number(searchParams.get(queryPageNumKey)) || 1;
    if (pageNum !== currentPage.value) {
        currentPage.value = pageNum;
    }
}
watch(route, () => {
    refreshCurrentPage();
}, { immediate: true });
// 未覆盖的场景处理 左上回到首页
router.onAfterRouteChanged = () => {
    refreshCurrentPage();
};
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
__VLS_styleScopedClasses['el-pagination'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ "data-pagefind-ignore": ("all"), });
for (const [v] of __VLS_getVForSourceType((__VLS_ctx.currentWikiData))) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((v.route)), });
    // @ts-ignore
    [BlogItem,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BlogItem, new BlogItem({ route: ((v.route)), title: ((v.meta.title)), description: ((v.meta.description)), descriptionHTML: ((v.meta.descriptionHTML)), date: ((v.meta.date)), tag: ((v.meta.tag)), cover: ((v.meta.cover)), author: ((v.meta.author || __VLS_ctx.globalAuthor)), pin: ((v.meta.top)), }));
    const __VLS_1 = __VLS_0({ route: ((v.route)), title: ((v.meta.title)), description: ((v.meta.description)), descriptionHTML: ((v.meta.descriptionHTML)), date: ((v.meta.date)), tag: ((v.meta.tag)), cover: ((v.meta.cover)), author: ((v.meta.author || __VLS_ctx.globalAuthor)), pin: ((v.meta.top)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
const __VLS_5 = __VLS_resolvedLocalAndGlobalComponents.ClientOnly;
/** @type { [typeof __VLS_components.ClientOnly, typeof __VLS_components.ClientOnly, ] } */
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("el-pagination-wrapper") }, });
if (__VLS_ctx.wikiList.length >= __VLS_ctx.pageSize) {
    const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, ] } */
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ ...{ 'onUpdate:currentPage': {} }, small: (true), background: (true), defaultCurrentPage: ((1)), currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.filterData.length)), layout: ("prev, pager, next, jumper"), }));
    const __VLS_13 = __VLS_12({ ...{ 'onUpdate:currentPage': {} }, small: (true), background: (true), defaultCurrentPage: ((1)), currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.filterData.length)), layout: ("prev, pager, next, jumper"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    let __VLS_17;
    const __VLS_18 = {
        'onUpdate:currentPage': (__VLS_ctx.handleUpdatePageNum)
    };
    let __VLS_14;
    let __VLS_15;
    const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
}
__VLS_nonNullable(__VLS_10.slots).default;
const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
__VLS_styleScopedClasses['el-pagination-wrapper'];
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
            ElPagination: ElPagination,
            BlogItem: BlogItem,
            globalAuthor: globalAuthor,
            wikiList: wikiList,
            filterData: filterData,
            pageSize: pageSize,
            currentPage: currentPage,
            currentWikiData: currentWikiData,
            handleUpdatePageNum: handleUpdatePageNum,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
