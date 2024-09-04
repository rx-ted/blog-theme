/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useData } from 'vitepress';
import { useBlogConfig } from '../composables/config/blog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { site, frontmatter } = useData();
const { home } = useBlogConfig();
const name = computed(() => (frontmatter.value.blog?.name ?? site.value.title) || home?.name || '');
const motto = computed(() => frontmatter.value.blog?.motto || home?.motto || '');
const inspiring = ref('');
const inspiringList = computed(() => {
    return [
        ...new Set([frontmatter.value.blog?.inspiring, home?.inspiring]
            .flat()
            .filter(v => !!v))
    ];
});
const inspiringIndex = ref(-1);
const inspiringTimeout = computed(() => frontmatter.value.blog?.inspiringTimeout || home?.inspiringTimeout || 0);
watch(inspiringTimeout, () => {
    startTimer();
});
const timer = ref(0);
function startTimer() {
    if (timer.value) {
        clearTimeout(timer.value);
    }
    if (inspiringTimeout.value > 0) {
        timer.value = setTimeout(() => {
            changeSlogan();
        }, inspiringTimeout.value);
    }
}
onMounted(() => {
    changeSlogan();
});
onUnmounted(() => {
    if (timer.value) {
        clearTimeout(timer.value);
    }
});
async function changeSlogan() {
    // 顺手启动定时器
    startTimer();
    if (inspiringList.value.length < 1)
        return;
    inspiringIndex.value = (inspiringIndex.value + 1) % inspiringList.value.length;
    const newValue = inspiringList.value[inspiringIndex.value];
    if (newValue === inspiring.value)
        return;
    // 重新渲染数据，同时触发动画
    inspiring.value = '';
    setTimeout(() => {
        inspiring.value = newValue;
    }, 100);
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
__VLS_styleScopedClasses['motto'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("name") }, });
(__VLS_ctx.name);
__VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("motto") }, });
__VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.motto) }, null, null);
(__VLS_ctx.motto);
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inspiring-wrapper") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ onClick: (__VLS_ctx.changeSlogan) }, });
__VLS_directiveAsFunction(__VLS_ctx.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!!__VLS_ctx.inspiring) }, null, null);
(__VLS_ctx.inspiring);
__VLS_styleScopedClasses['name'];
__VLS_styleScopedClasses['motto'];
__VLS_styleScopedClasses['inspiring-wrapper'];
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
            name: name,
            motto: motto,
            inspiring: inspiring,
            changeSlogan: changeSlogan,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
