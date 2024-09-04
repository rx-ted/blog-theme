/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { ElAvatar } from 'element-plus';
import { useDark, useIntervalFn } from '@vueuse/core';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Swiper from 'swiper';
import { useBlogConfig } from '../composables/config/blog';
import { getImageUrl, shuffleArray } from '../utils/client';
import { friendLinkSvgStr } from '../constants/svg';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isDark = useDark({
    storageKey: 'vitepress-theme-appearance'
});
const { friend } = useBlogConfig();
const friendConfig = computed(() => ({
    list: [],
    random: false,
    limit: Number.MAX_SAFE_INTEGER,
    title: `${friendLinkSvgStr}友情链接`,
    ...(Array.isArray(friend) ? { list: friend } : friend)
}));
const limit = computed(() => {
    const { limit } = friendConfig.value;
    return (!limit || limit <= 0) ? 0 : limit || Number.MAX_SAFE_INTEGER;
});
const scrollSpeed = computed(() => {
    const { scrollSpeed } = friendConfig.value;
    return scrollSpeed ?? 1500;
});
const openScroll = computed(() => {
    return scrollSpeed.value > 0 && limit.value < friendConfig.value.list.length;
});
const friendList = computed(() => {
    const data = [...friendConfig.value.list];
    // 简单的随机打乱
    if (friendConfig.value.random) {
        data.splice(0, data.length, ...shuffleArray(data));
    }
    // 展示个数限制，删除多余的
    if (scrollSpeed.value === 0 && limit.value) {
        data.splice(limit.value);
    }
    const list = data.map((v) => {
        const { avatar, nickname } = v;
        const avatarUrl = getImageUrl(avatar, isDark.value);
        let alt = nickname;
        if (typeof avatar !== 'string') {
            alt = avatar.alt || '';
        }
        return {
            ...v,
            avatar: avatarUrl,
            alt
        };
    });
    return list;
});
const cardHeight = 76;
const scrollWrapperHeight = computed(() => {
    return openScroll.value ? limit.value * cardHeight : 0;
});
const containerHeight = computed(() => {
    return scrollWrapperHeight.value ? `${scrollWrapperHeight.value}px` : 'auto';
});
const swiper = ref();
const { resume, pause } = useIntervalFn(() => {
    swiper.value?.slideNext();
}, scrollSpeed.value);
onMounted(() => {
    pause();
    if (openScroll.value) {
        // eslint-disable-next-line no-new
        swiper.value = new Swiper('.scroll-wrapper', {
            direction: 'vertical',
            slidesPerView: limit.value,
            loop: true,
        });
        resume();
    }
});
onUnmounted(() => {
    pause();
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
if (__VLS_ctx.friendList?.length) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card friend-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span)({ ...{ class: ("title svg-icon") }, });
    __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.friendConfig.title) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("scroll-wrapper") }, ...{ style: (({
                height: __VLS_ctx.containerHeight,
            })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({ ...{ class: ("friend-list swiper-wrapper") }, });
    for (const [v, idx] of __VLS_getVForSourceType((__VLS_ctx.friendList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((idx)), ...{ class: ("swiper-slide") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((v.url)), target: ("_blank"), });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.ElAvatar;
        /** @type { [typeof __VLS_components.ElAvatar, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ size: ((50)), src: ((v.avatar)), alt: ((v.alt)), }));
        const __VLS_2 = __VLS_1({ size: ((50)), src: ((v.avatar)), alt: ((v.alt)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("info-wrapper") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("nickname") }, });
        (v.nickname);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("des") }, });
        (v.des);
    }
}
__VLS_styleScopedClasses['card'];
__VLS_styleScopedClasses['friend-wrapper'];
__VLS_styleScopedClasses['card-header'];
__VLS_styleScopedClasses['title'];
__VLS_styleScopedClasses['svg-icon'];
__VLS_styleScopedClasses['scroll-wrapper'];
__VLS_styleScopedClasses['friend-list'];
__VLS_styleScopedClasses['swiper-wrapper'];
__VLS_styleScopedClasses['swiper-slide'];
__VLS_styleScopedClasses['info-wrapper'];
__VLS_styleScopedClasses['nickname'];
__VLS_styleScopedClasses['des'];
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
            ElAvatar: ElAvatar,
            friendConfig: friendConfig,
            friendList: friendList,
            containerHeight: containerHeight,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
