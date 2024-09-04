/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { ElImageViewer } from 'element-plus';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const show = ref(false);
const previewImageInfo = reactive({
    url: '',
    list: [],
    idx: 0
});
function previewImage(e) {
    const target = e.target;
    const currentTarget = e.currentTarget;
    if (target.tagName.toLowerCase() === 'img') {
        const imgs = currentTarget.querySelectorAll('.content-container .main img');
        const idx = Array.from(imgs).findIndex(el => el === target);
        const urls = Array.from(imgs).map(el => el.src);
        const url = target.getAttribute('src');
        previewImageInfo.url = url;
        previewImageInfo.list = urls;
        previewImageInfo.idx = idx;
        // 兼容点击main之外的图片
        if (idx === -1 && url) {
            previewImageInfo.list.push(url);
            previewImageInfo.idx = previewImageInfo.list.length - 1;
        }
        show.value = true;
    }
}
onMounted(() => {
    const docDomContainer = document.querySelector('#VPContent');
    docDomContainer?.addEventListener('click', previewImage);
});
onUnmounted(() => {
    const docDomContainer = document.querySelector('#VPContent');
    docDomContainer?.removeEventListener('click', previewImage);
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
let __VLS_resolvedLocalAndGlobalComponents;
if (__VLS_ctx.show) {
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElImageViewer;
    /** @type { [typeof __VLS_components.ElImageViewer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, infinite: ((false)), hideOnClickModal: (true), teleported: (true), urlList: ((__VLS_ctx.previewImageInfo.list)), initialIndex: ((__VLS_ctx.previewImageInfo.idx)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, infinite: ((false)), hideOnClickModal: (true), teleported: (true), urlList: ((__VLS_ctx.previewImageInfo.list)), initialIndex: ((__VLS_ctx.previewImageInfo.idx)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (...[$event]) => {
            if (!((__VLS_ctx.show)))
                return;
            __VLS_ctx.show = false;
        }
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
}
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
            ElImageViewer: ElImageViewer,
            show: show,
            previewImageInfo: previewImageInfo,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
