/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { useData, useRoute } from 'vitepress';
import { computed, nextTick, ref, watch } from 'vue';
import Giscus from '@giscus/vue';
import { useBlogConfig } from '../composables/config/blog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 读取配制
const { comment } = useBlogConfig();
const commentConfig = computed(() => {
    if (!comment) {
        return false;
    }
    if ('type' in comment && comment.type === 'giscus') {
        return comment.options;
    }
    else if (!('type' in comment)) {
        return comment;
    }
    return false;
});
const { isDark } = useData();
const route = useRoute();
const showComment = ref(false);
watch(route, () => {
    showComment.value = false;
    nextTick(() => {
        showComment.value = true;
    });
}, {
    immediate: true
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
if (__VLS_ctx.commentConfig && __VLS_ctx.showComment) {
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Giscus;
    /** @type { [typeof __VLS_components.Giscus, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ repo: ((__VLS_ctx.commentConfig.repo)), repoId: ((__VLS_ctx.commentConfig.repoId)), category: ((__VLS_ctx.commentConfig.category)), categoryId: ((__VLS_ctx.commentConfig.categoryId)), mapping: ((__VLS_ctx.commentConfig.mapping || 'pathname')), reactionsEnabled: ("1"), emitMetadata: ("0"), inputPosition: ((__VLS_ctx.commentConfig.inputPosition || 'top')), theme: ((__VLS_ctx.isDark ? 'dark' : 'light')), lang: ((__VLS_ctx.commentConfig.lang || 'zh-CN')), loading: ((__VLS_ctx.commentConfig.loading || 'eager')), }));
    const __VLS_2 = __VLS_1({ repo: ((__VLS_ctx.commentConfig.repo)), repoId: ((__VLS_ctx.commentConfig.repoId)), category: ((__VLS_ctx.commentConfig.category)), categoryId: ((__VLS_ctx.commentConfig.categoryId)), mapping: ((__VLS_ctx.commentConfig.mapping || 'pathname')), reactionsEnabled: ("1"), emitMetadata: ("0"), inputPosition: ((__VLS_ctx.commentConfig.inputPosition || 'top')), theme: ((__VLS_ctx.isDark ? 'dark' : 'light')), lang: ((__VLS_ctx.commentConfig.lang || 'zh-CN')), loading: ((__VLS_ctx.commentConfig.loading || 'eager')), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
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
            Giscus: Giscus,
            commentConfig: commentConfig,
            isDark: isDark,
            showComment: showComment,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
