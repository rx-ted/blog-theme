/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { useElementSize, useElementVisibility, useWindowSize } from '@vueuse/core';
import { useData } from 'vitepress';
import { computed, h, ref } from 'vue';
import { ElIcon } from 'element-plus';
import { Comment } from '@element-plus/icons-vue';
import { useBlogConfig } from '../composables/config/blog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { frontmatter } = useData();
const commentEl = ref(null);
const commentIsVisible = useElementVisibility(commentEl);
function handleScrollToComment() {
    document.querySelector('#blog-comment-wrapper')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
const { comment: _comment } = useBlogConfig();
const commentConfig = computed(() => _comment === false ? undefined : _comment);
const show = computed(() => {
    return _comment && frontmatter.value.comment !== false;
});
const { width } = useWindowSize();
const mobileMinify = computed(() => width.value < 768 && (commentConfig.value?.mobileMinify ?? true));
const CommentIcon = commentConfig.value?.icon
    ? h('i', {
        onVnodeMounted(vnode) {
            if (vnode.el) {
                vnode.el.outerHTML = commentConfig.value?.icon;
            }
        },
    })
    : h(Comment);
const $vpDoc = document.querySelector('.vp-doc');
const el = ref($vpDoc);
const { width: _docWidth } = useElementSize(el);
const docWidth = computed(() => `${_docWidth.value}px`);
const labelText = computed(() => {
    return commentConfig.value?.label ?? '评论';
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
__VLS_styleScopedClasses['icon-wrapper-text'];
__VLS_styleScopedClasses['comment-btn-wrapper'];
__VLS_styleScopedClasses['icon-wrapper'];
__VLS_styleScopedClasses['icon-wrapper-text'];
// CSS variable injection 
__VLS_ctx.docWidth;
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx.show && __VLS_ctx._docWidth) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("blog-comment-wrapper"), ref: ("commentEl"), ...{ class: ("blog-comment-wrapper") }, "data-pagefind-ignore": ("all"), });
    // @ts-ignore
    __VLS_ctx.commentEl;
    var __VLS_0 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("comment-btn-wrapper") }, });
    __VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.commentIsVisible) }, null, null);
    if (!__VLS_ctx.mobileMinify && __VLS_ctx.labelText) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.handleScrollToComment) }, ...{ class: ("icon-wrapper-text") }, });
        const __VLS_1 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
        // @ts-ignore
        const __VLS_2 = __VLS_asFunctionalComponent(__VLS_1, new __VLS_1({ size: ((20)), }));
        const __VLS_3 = __VLS_2({ size: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_2));
        const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.CommentIcon;
        /** @type { [typeof __VLS_components.CommentIcon, ] } */
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
        const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
        __VLS_nonNullable(__VLS_6.slots).default;
        const __VLS_6 = __VLS_pickFunctionalComponentCtx(__VLS_1, __VLS_3);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text") }, });
        (__VLS_ctx.labelText);
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.handleScrollToComment) }, ...{ class: ("icon-wrapper") }, });
        const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
        /** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ size: ((20)), }));
        const __VLS_15 = __VLS_14({ size: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
        const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.CommentIcon;
        /** @type { [typeof __VLS_components.CommentIcon, ] } */
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
        const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
        __VLS_nonNullable(__VLS_18.slots).default;
        const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15);
    }
}
__VLS_styleScopedClasses['blog-comment-wrapper'];
__VLS_styleScopedClasses['comment-btn-wrapper'];
__VLS_styleScopedClasses['icon-wrapper-text'];
__VLS_styleScopedClasses['text'];
__VLS_styleScopedClasses['icon-wrapper'];
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {
    "commentEl": __VLS_intrinsicElements['div'],
};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: $refs,
    attrs: {},
};
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            ElIcon: ElIcon,
            commentEl: commentEl,
            commentIsVisible: commentIsVisible,
            handleScrollToComment: handleScrollToComment,
            show: show,
            mobileMinify: mobileMinify,
            CommentIcon: CommentIcon,
            _docWidth: _docWidth,
            docWidth: docWidth,
            labelText: labelText,
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
