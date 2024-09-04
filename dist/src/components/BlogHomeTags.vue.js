/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { computed, watch } from 'vue';
import { ElTag } from 'element-plus';
import { useBrowserLocation, useDark, useUrlSearchParams } from '@vueuse/core';
import { useRoute, useRouter } from 'vitepress';
import { useActiveTag, useArticles, useConfig, useCurrentPageNum, } from '../composables/config/blog';
import { tagsSvgStr } from '../constants/svg';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const docs = useArticles();
const homeTagsConfig = useConfig()?.config?.blog?.homeTags;
const showTags = computed(() => !!(homeTagsConfig ?? true));
const title = computed(() => (typeof homeTagsConfig === 'boolean' || !homeTagsConfig?.title)
    ? `${tagsSvgStr}标签`
    : homeTagsConfig?.title);
const tags = computed(() => {
    return [...new Set(docs.value.map(v => v.meta.tag || []).flat(3))];
});
const activeTag = useActiveTag();
const isDark = useDark({
    storageKey: 'vitepress-theme-appearance'
});
const colorMode = computed(() => (isDark.value ? 'light' : 'dark'));
const tagType = ['', 'info', 'success', 'warning', 'danger'];
const currentPage = useCurrentPageNum();
const router = useRouter();
function handleCloseTag() {
    activeTag.value.label = '';
    activeTag.value.type = '';
    currentPage.value = 1;
    router.go(`${window.location.origin}${router.route.path}`);
}
const location = useBrowserLocation();
function handleTagClick(tag, type) {
    if (tag === activeTag.value.label) {
        handleCloseTag();
        return;
    }
    activeTag.value.type = type;
    activeTag.value.label = tag;
    currentPage.value = 1;
    router.go(`${location.value.origin}${router.route.path}?tag=${tag}&type=${type}`);
}
watch(location, () => {
    if (location.value.href) {
        const url = new URL(location.value.href);
        activeTag.value.type = url.searchParams.get('type') || '';
        activeTag.value.label = url.searchParams.get('tag') || '';
    }
}, {
    immediate: true
});
watch(route, () => {
    const params = useUrlSearchParams();
    if (!params.tag) {
        activeTag.value.type = '';
        activeTag.value.label = '';
    }
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
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx.showTags && __VLS_ctx.tags.length) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card tags") }, "data-pagefind-ignore": ("all"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span)({ ...{ class: ("title svg-icon") }, });
    __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.title) }, null, null);
    if (__VLS_ctx.activeTag.label) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, type: ((__VLS_ctx.activeTag.type || 'primary')), effect: ((__VLS_ctx.colorMode)), closable: (true), }));
        const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, type: ((__VLS_ctx.activeTag.type || 'primary')), effect: ((__VLS_ctx.colorMode)), closable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_6;
        const __VLS_7 = {
            onClose: (__VLS_ctx.handleCloseTag)
        };
        let __VLS_3;
        let __VLS_4;
        (__VLS_ctx.activeTag.label);
        __VLS_nonNullable(__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("tag-list") }, });
    for (const [tag, idx] of __VLS_getVForSourceType((__VLS_ctx.tags))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((tag)), });
        const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.ElTag;
        /** @type { [typeof __VLS_components.ElTag, typeof __VLS_components.ElTag, ] } */
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onClick': {} }, type: ((__VLS_ctx.tagType[idx % __VLS_ctx.tagType.length] || 'primary')), effect: ((__VLS_ctx.colorMode)), }));
        const __VLS_10 = __VLS_9({ ...{ 'onClick': {} }, type: ((__VLS_ctx.tagType[idx % __VLS_ctx.tagType.length] || 'primary')), effect: ((__VLS_ctx.colorMode)), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        let __VLS_14;
        const __VLS_15 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.showTags && __VLS_ctx.tags.length)))
                    return;
                __VLS_ctx.handleTagClick(tag, __VLS_ctx.tagType[idx % __VLS_ctx.tagType.length]);
            }
        };
        let __VLS_11;
        let __VLS_12;
        (tag);
        __VLS_nonNullable(__VLS_13.slots).default;
        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    }
}
__VLS_styleScopedClasses['card'];
__VLS_styleScopedClasses['tags'];
__VLS_styleScopedClasses['card-header'];
__VLS_styleScopedClasses['title'];
__VLS_styleScopedClasses['svg-icon'];
__VLS_styleScopedClasses['tag-list'];
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
            ElTag: ElTag,
            showTags: showTags,
            title: title,
            tags: tags,
            activeTag: activeTag,
            colorMode: colorMode,
            tagType: tagType,
            handleCloseTag: handleCloseTag,
            handleTagClick: handleTagClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
