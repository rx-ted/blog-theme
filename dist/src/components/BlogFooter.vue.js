/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
import { useHomeFooterConfig } from '../composables/config/blog';
import packageJSON from '../../package.json';
import { copyrightSVG, icpSVG, themeSVG } from '../constants/svg';
import { vOuterHtml } from '../directives';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const footerData = useHomeFooterConfig();
const renderData = computed(() => {
    if (!footerData) {
        return [];
    }
    const flatData = [footerData].flat();
    return flatData.flat().map((footer, idx) => {
        const { icpRecord, securityRecord, copyright, version, message, bottomMessage, list } = footer;
        const data = [];
        // message
        const messageData = [message || []].flat();
        const bottomMessageData = [bottomMessage || []].flat();
        // version
        const isLast = idx === flatData.length - 1;
        if ((version !== false && isLast) || version) {
            const versionItem = typeof version === 'object' ? version : {};
            data.push({
                name: versionItem?.name || `@rx-ted/theme@${packageJSON.version}`,
                link: versionItem?.link || 'https://github.com/rx-ted/blog-theme',
                icon: versionItem?.icon || themeSVG
            });
        }
        // copyright
        if (typeof copyright === 'string') {
            data.push({
                name: copyright,
                icon: copyrightSVG
            });
        }
        if (copyright instanceof Object) {
            data.push({
                icon: copyrightSVG,
                name: copyright.message,
                ...copyright
            });
        }
        // 备案信息
        if (icpRecord) {
            data.push({
                icon: icpSVG,
                ...icpRecord
            });
        }
        // 网备信息
        if (securityRecord) {
            data.push({
                icon: 'security',
                ...securityRecord
            });
        }
        if (list) {
            const listData = [list || []].flat();
            data.push(...listData.map((v) => {
                if (typeof v === 'string') {
                    return v;
                }
                return {
                    name: v.text,
                    icon: v.icon,
                    link: v.link
                };
            }));
        }
        return {
            data,
            messageData,
            bottomMessageData
        };
    });
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
__VLS_styleScopedClasses['footer-item-list'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx.renderData.length) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({ ...{ class: ("blog-footer") }, });
    for (const [{ data, messageData, bottomMessageData }] of __VLS_getVForSourceType((__VLS_ctx.renderData))) {
        for (const [message] of __VLS_getVForSourceType((messageData))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p)({});
            __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (message) }, null, null);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("footer-item-list") }, });
        for (const [item] of __VLS_getVForSourceType((data))) {
            if (typeof item !== 'string') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("footer-item") }, });
                if (item.icon === 'security') {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({});
                    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./../styles/gongan.png"), alt: ("公网安备"), });
                }
                else if (item.icon) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.i)({});
                    __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (item.icon) }, null, null);
                }
                if (item.link) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((item.link)), target: ("_blank"), rel: ("noopener noreferrer"), });
                    (item.name);
                }
                else {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                    (item.name);
                }
            }
            else {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span)({});
                __VLS_directiveAsFunction(__VLS_ctx.vOuterHtml)(null, { ...__VLS_directiveBindingRestFields, value: (item) }, null, null);
            }
        }
        for (const [message] of __VLS_getVForSourceType((bottomMessageData))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p)({});
            __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (message) }, null, null);
        }
    }
}
__VLS_styleScopedClasses['blog-footer'];
__VLS_styleScopedClasses['footer-item-list'];
__VLS_styleScopedClasses['footer-item'];
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
            vOuterHtml: vOuterHtml,
            renderData: renderData,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
