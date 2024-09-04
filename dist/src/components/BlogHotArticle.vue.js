/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { computed, ref } from 'vue';
import { ElButton } from 'element-plus';
import { useRouter, withBase } from 'vitepress';
import { useArticles, useBlogConfig, useCleanUrls, useFormatShowDate } from '../composables/config/blog';
import { wrapperCleanUrls } from '../utils/client';
import { fireSVG } from '../constants/svg';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const formatShowDate = useFormatShowDate();
const { hotArticle: _hotArticle } = useBlogConfig();
const hotArticle = computed(() => _hotArticle === false ? undefined : _hotArticle);
const title = computed(() => hotArticle.value?.title || `${fireSVG}精选文章`);
const nextText = computed(() => hotArticle.value?.nextText || '换一组');
const pageSize = computed(() => hotArticle.value?.pageSize || 9);
const empty = computed(() => hotArticle.value?.empty ?? '暂无精选内容');
const docs = useArticles();
const recommendList = computed(() => {
    const data = docs.value.filter(v => v.meta.sticky);
    data.sort((a, b) => b.meta.sticky - a.meta.sticky);
    return [...data];
});
const currentPage = ref(1);
const router = useRouter();
function handleLinkClick(link) {
    router.go(link);
}
function changePage() {
    const newIdx = currentPage.value % Math.ceil(recommendList.value.length / pageSize.value);
    currentPage.value = newIdx + 1;
}
const cleanUrls = useCleanUrls();
const currentWikiData = computed(() => {
    const startIdx = (currentPage.value - 1) * pageSize.value;
    const endIdx = startIdx + pageSize.value;
    return recommendList.value.slice(startIdx, endIdx).map(v => ({
        ...v,
        route: wrapperCleanUrls(cleanUrls, v.route)
    }));
});
const showChangeBtn = computed(() => {
    return recommendList.value.length > pageSize.value;
});
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
__VLS_styleScopedClasses['num'];
__VLS_styleScopedClasses['num'];
__VLS_styleScopedClasses['num'];
__VLS_styleScopedClasses['title'];
__VLS_styleScopedClasses['title'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx._hotArticle !== false && (__VLS_ctx.recommendList.length || __VLS_ctx.empty)) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card recommend") }, "data-pagefind-ignore": ("all"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span)({ ...{ class: ("title svg-icon") }, });
    __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.title) }, null, null);
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
            (idx + 1);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("des") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: ((e) => {
                        e.preventDefault();
                        __VLS_ctx.handleLinkClick(__VLS_ctx.withBase(v.route));
                    }) }, href: ((__VLS_ctx.withBase(v.route))), ...{ class: ("title") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (v.meta.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("suffix") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("tag") }, });
            (__VLS_ctx.formatShowDate(v.meta.date));
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("empty-text") }, });
        (__VLS_ctx.empty);
    }
}
__VLS_styleScopedClasses['card'];
__VLS_styleScopedClasses['recommend'];
__VLS_styleScopedClasses['card-header'];
__VLS_styleScopedClasses['title'];
__VLS_styleScopedClasses['svg-icon'];
__VLS_styleScopedClasses['recommend-container'];
__VLS_styleScopedClasses['num'];
__VLS_styleScopedClasses['des'];
__VLS_styleScopedClasses['title'];
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
            withBase: withBase,
            formatShowDate: formatShowDate,
            _hotArticle: _hotArticle,
            title: title,
            nextText: nextText,
            empty: empty,
            recommendList: recommendList,
            handleLinkClick: handleLinkClick,
            changePage: changePage,
            currentWikiData: currentWikiData,
            showChangeBtn: showChangeBtn,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
