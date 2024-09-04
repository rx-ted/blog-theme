/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useRouter, withBase } from 'vitepress';
import { computed } from 'vue';
import { wrapperCleanUrls } from '../utils/client';
import { useCleanUrls, useFormatShowDate, useImageStyle } from '../composables/config/blog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const formatShowDate = useFormatShowDate();
const showTime = computed(() => {
    if (props.date instanceof Date) {
        return formatShowDate(props.date.toString());
    }
    return formatShowDate(props.date);
});
const cleanUrls = useCleanUrls();
const link = computed(() => withBase(wrapperCleanUrls(!!cleanUrls, props.route)));
const router = useRouter();
function handleSkipDoc() {
    router.go(link.value);
}
const { coverPreview } = useImageStyle();
const resultCover = computed(() => {
    if (!props.cover) {
        return '';
    }
    const baseCover = withBase(props.cover);
    const coverRule = [coverPreview]
        .flat()
        .filter(v => !!v)
        .find((coverRule) => {
        if (!coverRule) {
            return false;
        }
        return coverRule.rule instanceof RegExp ? coverRule.rule.test(baseCover) : baseCover.includes(coverRule.rule);
    });
    if (!coverRule) {
        return baseCover;
    }
    const { suffix, replace, rule } = coverRule;
    if (!replace && suffix) {
        return `${baseCover}${suffix}`;
    }
    if (typeof replace === 'function') {
        return replace(baseCover);
    }
    if (typeof replace === 'string') {
        return baseCover.replace(rule, replace);
    }
    return baseCover;
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
__VLS_styleScopedClasses['blog-item'];
__VLS_styleScopedClasses['pin'];
__VLS_styleScopedClasses['blog-item'];
__VLS_styleScopedClasses['pin'];
__VLS_styleScopedClasses['blog-item'];
__VLS_styleScopedClasses['cover-img'];
__VLS_styleScopedClasses['pc-visible'];
__VLS_styleScopedClasses['mobile-visible'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: ((e) => {
            e.preventDefault();
            __VLS_ctx.handleSkipDoc();
        }) }, ...{ class: ("blog-item") }, href: ((__VLS_ctx.link)), });
__VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("pin") }, });
__VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!!__VLS_ctx.pin) }, null, null);
__VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("title mobile-visible") }, });
(__VLS_ctx.title);
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("info-container") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("info-part") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("title pc-visible") }, });
(__VLS_ctx.title);
__VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("description") }, });
__VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.descriptionHTML && !!__VLS_ctx.description) }, null, null);
(__VLS_ctx.description);
if (__VLS_ctx.descriptionHTML) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("description-html") }, });
    __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.descriptionHTML) }, null, null);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("badge-list pc-visible") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("split") }, });
__VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.author) }, null, null);
(__VLS_ctx.author);
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("split") }, });
(__VLS_ctx.showTime);
if (__VLS_ctx.tag?.length) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("split") }, });
    (__VLS_ctx.tag?.join(" · "));
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("cover-img") }, ...{ style: ((`background-image: url(${__VLS_ctx.resultCover});`)) }, });
__VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.cover) }, null, null);
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("badge-list mobile-visible") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("split") }, });
__VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.author) }, null, null);
(__VLS_ctx.author);
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("split") }, });
(__VLS_ctx.showTime);
if (__VLS_ctx.tag?.length) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("split") }, });
    (__VLS_ctx.tag?.join(" · "));
}
__VLS_styleScopedClasses['blog-item'];
__VLS_styleScopedClasses['pin'];
__VLS_styleScopedClasses['title'];
__VLS_styleScopedClasses['mobile-visible'];
__VLS_styleScopedClasses['info-container'];
__VLS_styleScopedClasses['info-part'];
__VLS_styleScopedClasses['title'];
__VLS_styleScopedClasses['pc-visible'];
__VLS_styleScopedClasses['description'];
__VLS_styleScopedClasses['description-html'];
__VLS_styleScopedClasses['badge-list'];
__VLS_styleScopedClasses['pc-visible'];
__VLS_styleScopedClasses['split'];
__VLS_styleScopedClasses['split'];
__VLS_styleScopedClasses['split'];
__VLS_styleScopedClasses['cover-img'];
__VLS_styleScopedClasses['badge-list'];
__VLS_styleScopedClasses['mobile-visible'];
__VLS_styleScopedClasses['split'];
__VLS_styleScopedClasses['split'];
__VLS_styleScopedClasses['split'];
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
            showTime: showTime,
            link: link,
            handleSkipDoc: handleSkipDoc,
            resultCover: resultCover,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
;
