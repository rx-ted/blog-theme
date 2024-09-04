/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { ElButton } from 'element-plus';
import { computed, ref, watch } from 'vue';
import { useData } from 'vitepress';
import { useBlogConfig } from '../composables/config/blog';
import { aliPaySVG, weChatPaySVG } from '../constants/svg';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { buttonAfterArticle: _buttonAfterArticle } = useBlogConfig();
const { frontmatter } = useData();
const frontmatterConfig = computed(() => frontmatter.value.buttonAfterArticle);
const buttonAfterArticleConfig = computed(() => {
    if (frontmatterConfig.value === false || (!frontmatterConfig.value && !_buttonAfterArticle)) {
        return false;
    }
    return { ..._buttonAfterArticle, ...frontmatterConfig.value };
});
const showContent = ref(false);
watch(buttonAfterArticleConfig, () => {
    showContent.value = !!buttonAfterArticleConfig.value?.expand;
}, {
    immediate: true
});
const svg = computed(() => {
    const icon = buttonAfterArticleConfig.value?.icon;
    if (icon === 'aliPay') {
        return aliPaySVG;
    }
    else if (icon === 'wechatPay') {
        return weChatPaySVG;
    }
    else {
        return icon;
    }
});
function toggleContent() {
    showContent.value = !showContent.value;
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
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx.buttonAfterArticleConfig) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("appreciation-container") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, size: ((__VLS_ctx.buttonAfterArticleConfig.size || 'default')), ...{ class: ("content-button") }, type: ((__VLS_ctx.showContent ? 'danger' : 'primary')), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, size: ((__VLS_ctx.buttonAfterArticleConfig.size || 'default')), ...{ class: ("content-button") }, type: ((__VLS_ctx.showContent ? 'danger' : 'primary')), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.toggleContent)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span)({ ...{ class: ("content-icon") }, });
    __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.svg) }, null, null);
    (__VLS_ctx.showContent ? __VLS_ctx.buttonAfterArticleConfig.closeTitle : __VLS_ctx.buttonAfterArticleConfig.openTitle);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ name: ("content"), }));
    const __VLS_10 = __VLS_9({ name: ("content"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    if (__VLS_ctx.showContent) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("content-container") }, });
        __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.buttonAfterArticleConfig.content) }, null, null);
    }
    __VLS_nonNullable(__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
}
__VLS_styleScopedClasses['appreciation-container'];
__VLS_styleScopedClasses['content-button'];
__VLS_styleScopedClasses['content-icon'];
__VLS_styleScopedClasses['content-container'];
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
            buttonAfterArticleConfig: buttonAfterArticleConfig,
            showContent: showContent,
            svg: svg,
            toggleContent: toggleContent,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
