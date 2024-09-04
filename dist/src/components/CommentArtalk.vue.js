/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useData, useRoute } from 'vitepress';
import { useBlogConfig } from '../composables/config/blog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { isDark, page } = useData();
const el = ref();
const route = useRoute();
const artalk = ref();
const { comment } = useBlogConfig();
const commentConfig = computed(() => {
    if (comment && 'type' in comment && comment.type === 'artalk') {
        return comment.options;
    }
    return false;
});
onMounted(() => {
    // CDN 异步加载，有优化空间
    const observer = new MutationObserver((mutationsList, observer) => {
        if (window.Artalk && commentConfig.value && el.value) {
            artalk.value = window.Artalk.init({
                el: el.value,
                darkMode: isDark.value,
                pageKey: route.path,
                pageTitle: page.value.title,
                server: commentConfig.value?.server,
                site: commentConfig.value?.site,
            });
            observer.disconnect();
        }
    });
    observer.observe(document.head, { subtree: true, childList: true, attributes: true, attributeFilter: ['id'] });
});
watch(() => route.path, () => {
    if (artalk.value) {
        artalk.value.update({
            pageKey: route.path,
            pageTitle: page.value.title,
        });
        artalk.value.reload();
    }
});
onUnmounted(() => {
    if (artalk.value) {
        artalk.value.destroy();
    }
});
watch(isDark, () => {
    if (artalk.value) {
        artalk.value.setDarkMode(isDark.value);
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
if (__VLS_ctx.commentConfig) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ref: ("el"), ...{ class: ("artalk-container") }, });
    // @ts-ignore
    __VLS_ctx.el;
}
__VLS_styleScopedClasses['artalk-container'];
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {
    "el": __VLS_intrinsicElements['div'],
};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: $refs,
    attrs: {},
};
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            el: el,
            commentConfig: commentConfig,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
