/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter, withBase } from 'vitepress';
import { ElButton } from 'element-plus';
import { wrapperCleanUrls } from '../utils/client';
import { useArticles, useBlogConfig, useCleanUrls, useFormatShowDate } from '../composables/config/blog';
import { recommendSVG } from '../constants/svg';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const formatShowDate = useFormatShowDate();
const { recommend: _recommend } = useBlogConfig();
const sidebarStyle = computed(() => _recommend && _recommend?.style ? _recommend.style : 'sidebar');
const recommendPadding = computed(() => sidebarStyle.value === 'card' ? '10px' : '0px');
const recommend = computed(() => _recommend === false ? undefined : _recommend);
const title = computed(() => recommend.value?.title ?? (`<span class="svg-icon">${recommendSVG}</span>` + '相关文章'));
const pageSize = computed(() => recommend.value?.pageSize || 9);
const nextText = computed(() => recommend.value?.nextText || '换一组');
const emptyText = computed(() => recommend.value?.empty ?? '暂无相关文章');
const docs = useArticles();
const route = useRoute();
function getRecommendCategory(page) {
    if (!page)
        return [];
    const { meta } = page;
    if (Array.isArray(meta.recommend)) {
        return meta.recommend.filter(v => typeof v === 'string');
    }
    if (typeof meta.recommend === 'string') {
        return [meta.recommend];
    }
    return [];
}
function getRecommendValue(page) {
    if (page === undefined) {
        return;
    }
    return Array.isArray(page?.meta?.recommend) ? page.meta.recommend[page.meta.recommend.length - 1] : page?.meta.recommend;
}
function hasIntersection(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}
const recommendList = computed(() => {
    // 中文支持
    const paths = decodeURIComponent(route.path).split('/');
    const currentPage = docs.value.find(v => isCurrentDoc(v.route));
    const currentRecommendCategory = getRecommendCategory(currentPage);
    const origin = docs.value
        .map(v => ({ ...v, route: withBase(v.route) }))
        .filter((v) => {
        // 筛选出类别有交集的
        if (currentRecommendCategory.length) {
            return hasIntersection(currentRecommendCategory, getRecommendCategory(v));
        }
        // 如果没有自定义归类则保持原逻辑
        // 过滤出公共路由前缀
        // 限制为同路由前缀
        return v.route.split('/').length === paths.length
            && v.route.startsWith(paths.slice(0, paths.length - 1).join('/'));
    })
        // 过滤出带标题的
        .filter(v => !!v.meta.title)
        // 过滤掉自己
        .filter(v => (recommend.value?.showSelf ?? true)
        || v.route !== decodeURIComponent(route.path).replace(/.html$/, ''))
        // 过滤掉不需要展示的
        .filter(v => v.meta.recommend !== false)
        // 自定义过滤
        .filter(v => recommend.value?.filter?.(v) ?? true);
    const topList = origin.filter((v) => {
        const value = getRecommendValue(v);
        return typeof value === 'number';
    });
    topList.sort((a, b) => Number(getRecommendValue(a)) - Number(getRecommendValue(b)));
    const normalList = origin.filter(v => typeof getRecommendValue(v) !== 'number');
    // 排序
    const sortMode = recommend.value?.sort ?? 'date';
    // 默认时间排序
    let compareFn = (a, b) => +new Date(b.meta.date) - +new Date(a.meta.date);
    // 文件名排序
    if (sortMode === 'filename') {
        compareFn = (a, b) => {
            const aName = a.route.split('/').pop();
            const bName = b.route.split('/').pop();
            return aName.localeCompare(bName);
        };
    }
    // 自定义排序
    if (typeof sortMode === 'function') {
        compareFn = sortMode;
    }
    normalList.sort(compareFn);
    return topList.concat(normalList);
});
function isCurrentDoc(value) {
    const path = decodeURIComponent(route.path).replace(/.html$/, '');
    return [value, value.replace(/index$/, '')].includes(path);
}
const currentPage = ref(1);
function changePage() {
    const newIdx = currentPage.value % Math.ceil(recommendList.value.length / pageSize.value);
    currentPage.value = newIdx + 1;
    return newIdx + 1;
}
// 当前页开始的序号
const startIdx = computed(() => (currentPage.value - 1) * pageSize.value);
const currentWikiData = computed(() => {
    const startIdx = (currentPage.value - 1) * pageSize.value;
    const endIdx = startIdx + pageSize.value;
    return recommendList.value.slice(startIdx, endIdx);
});
const showChangeBtn = computed(() => {
    return recommendList.value.length > pageSize.value;
});
onMounted(() => {
    // 更新当前页，确保访问页面在列表中
    const currentPageIndex = recommendList.value.findIndex(v => isCurrentDoc(v.route));
    if (currentPageIndex === -1)
        return;
    const currentPageNum = Math.floor(currentPageIndex / pageSize.value) + 1;
    currentPage.value = currentPageNum;
});
const cleanUrls = useCleanUrls();
const router = useRouter();
function handleLinkClick(link) {
    router.go(link);
}
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
__VLS_styleScopedClasses['title'];
__VLS_styleScopedClasses['title'];
// CSS variable injection 
__VLS_ctx.recommendPadding;
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx._recommend !== false && (__VLS_ctx.recommendList.length || __VLS_ctx.emptyText)) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("recommend") }, ...{ class: (({ card: __VLS_ctx.sidebarStyle === 'card' })) }, "data-pagefind-ignore": ("all"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    if (__VLS_ctx.title) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span)({ ...{ class: ("title") }, });
        __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.title) }, null, null);
    }
    if (__VLS_ctx.showChangeBtn) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
        /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, size: ("small"), type: ("primary"), text: (true), }));
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, size: ("small"), type: ("primary"), text: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_6;
        const __VLS_7 = {
            onClick: (__VLS_ctx.changePage)
        };
        let __VLS_3;
        let __VLS_4;
        (__VLS_ctx.nextText);
        __VLS_nonNullable(__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (__VLS_ctx.currentWikiData.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({ ...{ class: ("recommend-container") }, });
        for (const [v, idx] of __VLS_getVForSourceType((__VLS_ctx.currentWikiData))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((v.route)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("num") }, });
            (__VLS_ctx.startIdx + idx + 1);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("des") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: ((e) => {
                        e.preventDefault();
                        __VLS_ctx.handleLinkClick(__VLS_ctx.wrapperCleanUrls(__VLS_ctx.cleanUrls, v.route));
                    }) }, ...{ class: ("title") }, ...{ class: (({
                        current: __VLS_ctx.isCurrentDoc(v.route),
                    })) }, href: ((__VLS_ctx.wrapperCleanUrls(__VLS_ctx.cleanUrls, v.route))), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (v.meta.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("suffix") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("tag") }, });
            (__VLS_ctx.formatShowDate(v.meta.date));
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("empty-text") }, });
        (__VLS_ctx.emptyText);
    }
}
__VLS_styleScopedClasses['recommend'];
__VLS_styleScopedClasses['card'];
__VLS_styleScopedClasses['card-header'];
__VLS_styleScopedClasses['title'];
__VLS_styleScopedClasses['recommend-container'];
__VLS_styleScopedClasses['num'];
__VLS_styleScopedClasses['des'];
__VLS_styleScopedClasses['title'];
__VLS_styleScopedClasses['current'];
__VLS_styleScopedClasses['suffix'];
__VLS_styleScopedClasses['tag'];
__VLS_styleScopedClasses['empty-text'];
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
            ElButton: ElButton,
            wrapperCleanUrls: wrapperCleanUrls,
            formatShowDate: formatShowDate,
            _recommend: _recommend,
            sidebarStyle: sidebarStyle,
            recommendPadding: recommendPadding,
            title: title,
            nextText: nextText,
            emptyText: emptyText,
            recommendList: recommendList,
            isCurrentDoc: isCurrentDoc,
            changePage: changePage,
            startIdx: startIdx,
            currentWikiData: currentWikiData,
            showChangeBtn: showChangeBtn,
            cleanUrls: cleanUrls,
            handleLinkClick: handleLinkClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
