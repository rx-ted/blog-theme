/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ElAlert } from 'element-plus';
import { onMounted, ref } from 'vue';
import { useBlogConfig } from '../composables/config/blog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { alert: alertProps } = useBlogConfig();
const show = ref(false);
const storageKey = 'theme-blog-alert';
const closeFlag = `${storageKey}-close`;
onMounted(() => {
    // 取旧值
    const oldValue = localStorage.getItem(storageKey);
    const newValue = JSON.stringify(alertProps);
    localStorage.setItem(storageKey, newValue);
    // >= 0 每次都展示，区别是否自动消失
    if (Number(alertProps?.duration) >= 0) {
        show.value = true;
        if (alertProps?.duration) {
            setTimeout(() => {
                show.value = false;
            }, alertProps?.duration);
        }
        return;
    }
    if (oldValue !== newValue && alertProps?.duration === -1) {
        // 当做新值处理
        show.value = true;
        localStorage.removeItem(closeFlag);
        return;
    }
    // 新旧相等，判断是否点击过close，没点击关闭依然展示
    if (oldValue === newValue && alertProps?.duration === -1 && !localStorage.getItem(closeFlag)) {
        show.value = true;
    }
});
function handleClose() {
    show.value = false;
    if (alertProps?.duration === -1) {
        localStorage.setItem(closeFlag, `${+new Date()}`);
    }
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
__VLS_styleScopedClasses['global-alert'];
__VLS_styleScopedClasses['global-alert'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx.show) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("global-alert") }, "data-pagefind-ignore": ("all"), });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElAlert;
    /** @type { [typeof __VLS_components.ElAlert, typeof __VLS_components.ElAlert, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, title: ((__VLS_ctx.alertProps?.title)), type: ((__VLS_ctx.alertProps?.type)), showIcon: ((__VLS_ctx.alertProps?.showIcon)), center: ((__VLS_ctx.alertProps?.center)), closable: ((__VLS_ctx.alertProps?.closable)), closeText: ((__VLS_ctx.alertProps?.closeText)), description: ((__VLS_ctx.alertProps?.description)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, title: ((__VLS_ctx.alertProps?.title)), type: ((__VLS_ctx.alertProps?.type)), showIcon: ((__VLS_ctx.alertProps?.showIcon)), center: ((__VLS_ctx.alertProps?.center)), closable: ((__VLS_ctx.alertProps?.closable)), closeText: ((__VLS_ctx.alertProps?.closeText)), description: ((__VLS_ctx.alertProps?.description)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.handleClose)
    };
    let __VLS_3;
    let __VLS_4;
    if (__VLS_ctx.alertProps?.html) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div)({});
        __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.alertProps?.html) }, null, null);
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
}
__VLS_styleScopedClasses['global-alert'];
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
            ElAlert: ElAlert,
            alertProps: alertProps,
            show: show,
            handleClose: handleClose,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
