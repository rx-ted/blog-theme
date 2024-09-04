/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ElButton, ElIcon } from 'element-plus';
import { CircleCloseFilled } from '@element-plus/icons-vue';
import { computed, h, onMounted, ref, watch } from 'vue';
import { parseStringStyle } from '@vue/shared';
import { useDebounceFn, useWindowSize } from '@vueuse/core';
import { useRoute, useRouter } from 'vitepress';
import { useBlogConfig } from '../composables/config/blog';
import { vOuterHtml } from '../directives';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { popover: popoverProps } = useBlogConfig();
const show = ref(false);
const bodyContent = computed(() => {
    return popoverProps?.body || [];
});
const footerContent = computed(() => {
    return popoverProps?.footer || [];
});
const storageKey = 'theme-blog-popover';
const closeFlag = `${storageKey}-close`;
// 移动端最小化
const { width } = useWindowSize();
const router = useRouter();
const route = useRoute();
onMounted(() => {
    if (!popoverProps?.title) {
        return;
    }
    // 取旧值
    const oldValue = localStorage.getItem(storageKey);
    const newValue = JSON.stringify(popoverProps);
    localStorage.setItem(storageKey, newValue);
    // 移动端最小化
    if (width.value < 768 && popoverProps?.mobileMinify) {
        show.value = false;
        return;
    }
    // >= 0 每次都展示，区别是否自动消失
    if (Number(popoverProps?.duration ?? '') >= 0) {
        show.value = true;
        if (popoverProps?.duration) {
            setTimeout(() => {
                show.value = false;
            }, popoverProps?.duration);
        }
        return;
    }
    if (oldValue !== newValue && popoverProps?.duration === -1) {
        // 当做新值处理
        show.value = true;
        localStorage.removeItem(closeFlag);
        return;
    }
    // 新旧相等，判断是否点击过close，没点击关闭依然展示
    if (oldValue === newValue && popoverProps?.duration === -1 && !localStorage.getItem(closeFlag)) {
        show.value = true;
    }
});
const onAfterRouteChanged = useDebounceFn(() => {
    popoverProps?.onRouteChanged?.(route, show);
}, 10);
watch(route, onAfterRouteChanged, { immediate: true });
function handleClose() {
    show.value = false;
    if (popoverProps?.duration === -1) {
        localStorage.setItem(closeFlag, `${+new Date()}`);
    }
}
function PopoverValue(props, { slots }) {
    const { key, item } = props;
    if (item.type === 'title') {
        return h('h4', {
            style: parseStringStyle(item.style || '')
        }, item.content);
    }
    if (item.type === 'text') {
        return h('p', {
            style: parseStringStyle(item.style || '')
        }, item.content);
    }
    if (item.type === 'image') {
        return h('img', {
            src: item.src,
            style: parseStringStyle(item.style || '')
        });
    }
    if (item.type === 'button') {
        return h(ElButton, {
            type: 'primary',
            onClick: () => {
                if (/^\s*http(s)?:\/\//.test(item.link)) {
                    window.open(item.link);
                }
                else {
                    router.go(item.link);
                }
            },
            style: parseStringStyle(item.style || ''),
            ...item.props
        }, slots);
    }
    return h('div', {
        key
    }, '');
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
__VLS_styleScopedClasses['body'];
__VLS_styleScopedClasses['footer'];
__VLS_styleScopedClasses['content'];
__VLS_styleScopedClasses['theme-blog-popover-close'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("theme-blog-popover") }, "data-pagefind-ignore": ("all"), });
__VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.show) }, null, null);
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title-wrapper") }, });
const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
/** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ size: ("20px"), }));
const __VLS_2 = __VLS_1({ size: ("20px"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
if (__VLS_ctx.popoverProps?.icon) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.i)({});
    __VLS_directiveAsFunction(__VLS_ctx.vOuterHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.popoverProps.icon) }, null, null);
}
else {
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ t: ("1716085184855"), viewBox: ("0 0 1024 1024"), version: ("1.1"), xmlns: ("http://www.w3.org/2000/svg"), "p-id": ("4274"), width: ("200"), height: ("200"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M660.48 872.448q6.144 0-3.584 15.36t-29.696 33.792-47.104 33.792-57.856 15.36q-27.648 0-53.248-15.36t-45.056-33.792-29.696-33.792-6.144-15.36l272.384 0zM914.432 785.408q7.168 9.216 6.656 17.92t-4.608 14.848-10.24 9.728-12.288 3.584l-747.52 0q-14.336 0-20.992-11.776t4.608-29.184q17.408-30.72 40.96-68.608t44.544-81.408 36.352-92.16 15.36-101.888q0-51.2 14.336-92.16t37.376-71.68 53.248-52.224 62.976-32.768q-16.384-26.624-16.384-55.296 0-41.984 28.672-70.656t70.656-28.672 70.656 28.672 28.672 70.656q0 14.336-4.096 28.16t-11.264 25.088q34.816 11.264 66.048 32.768t54.272 53.248 36.864 72.704 13.824 91.136q0 51.2 15.36 100.864t36.864 94.208 45.568 81.408 43.52 63.488zM478.208 142.336q0 16.384 11.264 28.16t27.648 11.776l2.048 0q16.384-1.024 27.648-12.288t11.264-27.648q0-17.408-11.264-28.672t-28.672-11.264-28.672 11.264-11.264 28.672z"), "p-id": ("4275"), });
}
__VLS_nonNullable(__VLS_5.slots).default;
const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("title") }, });
(__VLS_ctx.popoverProps?.title);
const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
/** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, ...{ class: ("close-icon") }, size: ("20px"), }));
const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, ...{ class: ("close-icon") }, size: ("20px"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_12;
const __VLS_13 = {
    onClick: (__VLS_ctx.handleClose)
};
let __VLS_9;
let __VLS_10;
if (__VLS_ctx.popoverProps?.closeIcon) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.i)({});
    __VLS_directiveAsFunction(__VLS_ctx.vOuterHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.popoverProps.closeIcon) }, null, null);
}
else {
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.CircleCloseFilled;
    /** @type { [typeof __VLS_components.CircleCloseFilled, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
}
__VLS_nonNullable(__VLS_11.slots).default;
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
if (__VLS_ctx.bodyContent.length) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("body content") }, });
    for (const [v, idx] of __VLS_getVForSourceType((__VLS_ctx.bodyContent))) {
        const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.PopoverValue;
        /** @type { [typeof __VLS_components.PopoverValue, typeof __VLS_components.PopoverValue, ] } */
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ key: ((idx)), item: ((v)), }));
        const __VLS_22 = __VLS_21({ key: ((idx)), item: ((v)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        (v.type !== "image" ? v.content : "");
        __VLS_nonNullable(__VLS_25.slots).default;
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    }
    if (__VLS_ctx.footerContent.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    }
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("footer content") }, });
for (const [v, idx] of __VLS_getVForSourceType((__VLS_ctx.footerContent))) {
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.PopoverValue;
    /** @type { [typeof __VLS_components.PopoverValue, typeof __VLS_components.PopoverValue, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ key: ((idx)), item: ((v)), }));
    const __VLS_28 = __VLS_27({ key: ((idx)), item: ((v)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    (v.type !== "image" ? v.content : "");
    __VLS_nonNullable(__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
            __VLS_ctx.show = true;
        } }, ...{ class: ("theme-blog-popover-close") }, ...{ class: (({ twinkle: !__VLS_ctx.show && (__VLS_ctx.popoverProps?.twinkle ?? true) })) }, });
__VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.show && (__VLS_ctx.popoverProps?.reopen ?? true) && __VLS_ctx.popoverProps?.title) }, null, null);
const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.ElIcon;
/** @type { [typeof __VLS_components.ElIcon, typeof __VLS_components.ElIcon, ] } */
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
if (__VLS_ctx.popoverProps?.icon) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.i)({});
    __VLS_directiveAsFunction(__VLS_ctx.vOuterHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.popoverProps.icon) }, null, null);
}
else {
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ t: ("1716085184855"), viewBox: ("0 0 1024 1024"), version: ("1.1"), xmlns: ("http://www.w3.org/2000/svg"), "p-id": ("4274"), width: ("200"), height: ("200"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M660.48 872.448q6.144 0-3.584 15.36t-29.696 33.792-47.104 33.792-57.856 15.36q-27.648 0-53.248-15.36t-45.056-33.792-29.696-33.792-6.144-15.36l272.384 0zM914.432 785.408q7.168 9.216 6.656 17.92t-4.608 14.848-10.24 9.728-12.288 3.584l-747.52 0q-14.336 0-20.992-11.776t4.608-29.184q17.408-30.72 40.96-68.608t44.544-81.408 36.352-92.16 15.36-101.888q0-51.2 14.336-92.16t37.376-71.68 53.248-52.224 62.976-32.768q-16.384-26.624-16.384-55.296 0-41.984 28.672-70.656t70.656-28.672 70.656 28.672 28.672 70.656q0 14.336-4.096 28.16t-11.264 25.088q34.816 11.264 66.048 32.768t54.272 53.248 36.864 72.704 13.824 91.136q0 51.2 15.36 100.864t36.864 94.208 45.568 81.408 43.52 63.488zM478.208 142.336q0 16.384 11.264 28.16t27.648 11.776l2.048 0q16.384-1.024 27.648-12.288t11.264-27.648q0-17.408-11.264-28.672t-28.672-11.264-28.672 11.264-11.264 28.672z"), "p-id": ("4275"), });
}
__VLS_nonNullable(__VLS_37.slots).default;
const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
__VLS_styleScopedClasses['theme-blog-popover'];
__VLS_styleScopedClasses['header'];
__VLS_styleScopedClasses['title-wrapper'];
__VLS_styleScopedClasses['title'];
__VLS_styleScopedClasses['close-icon'];
__VLS_styleScopedClasses['body'];
__VLS_styleScopedClasses['content'];
__VLS_styleScopedClasses['footer'];
__VLS_styleScopedClasses['content'];
__VLS_styleScopedClasses['theme-blog-popover-close'];
__VLS_styleScopedClasses['twinkle'];
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
            ElIcon: ElIcon,
            CircleCloseFilled: CircleCloseFilled,
            vOuterHtml: vOuterHtml,
            popoverProps: popoverProps,
            show: show,
            bodyContent: bodyContent,
            footerContent: footerContent,
            handleClose: handleClose,
            PopoverValue: PopoverValue,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
