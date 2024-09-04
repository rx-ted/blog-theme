/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { ElCarousel, ElCarouselItem, ElImage, ElMessage } from 'element-plus';
// import VPDocAsideOutline from 'vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue'
import { computed, reactive, ref, watch, watchEffect } from 'vue';
import { slugify } from '@mdit-vue/shared';
import { useWindowSize } from '@vueuse/core';
import { formatDate, getGithubDirUpdateTime, getGithubUpdateTime } from '../utils/client';
import { useActiveAnchor, useAutoUpdateAnchor, useUserWorks } from '../composables/config/blog';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const currentAnchor = useAutoUpdateAnchor();
// 更新锚点的时候更新 url 中的 hash
watch(() => currentAnchor.id, (val) => {
    if (val) {
        window.history.replaceState(null, '', `#${val}`);
    }
});
const mountActiveAnchorEl = useActiveAnchor();
watch(mountActiveAnchorEl, () => {
    const { value } = mountActiveAnchorEl;
    if (value) {
        value.scroll({
            behavior: 'smooth'
        });
    }
});
const works = useUserWorks();
const workList = reactive([]);
// 格式化数据
watch(works, (val) => {
    const sortDate = [...val.list].map((v) => {
        const { time } = v;
        // 格式化时间
        const metaInfo = typeof time === 'string'
            ? {
                startTime: time,
                endTime: '',
                lastUpdate: ''
            }
            : {
                startTime: time.start,
                endTime: time.end,
                lastUpdate: time.lastupdate
            };
        // 格式化封面信息
        const covers = [];
        let coverLayout = 'swiper';
        if (typeof v.cover === 'string') {
            covers.push(v.cover);
        }
        else if (Array.isArray(v.cover)) {
            covers.push(...v.cover);
        }
        else if (typeof v.cover === 'object') {
            covers.push(...v.cover.urls);
            coverLayout = v.cover.layout ?? coverLayout;
        }
        return {
            ...v,
            ...metaInfo,
            covers,
            coverLayout
        };
    });
    // 过滤出置顶数据
    const topDate = sortDate.filter(v => v.top !== undefined);
    const normalDate = sortDate.filter(v => v.top === undefined);
    // 数据排序
    topDate.sort((a, b) => a.top - b.top);
    normalDate.sort((a, b) => +new Date(b.startTime) - +new Date(a.startTime));
    if (topDate.length) {
        // @ts-expect-error
        topDate[0].year = works.value.topTitle ?? '置顶';
    }
    // 数据分组
    const groupDate = normalDate.reduce((prev, cur) => {
        const { startTime } = cur;
        const year = new Date(startTime).getFullYear();
        const data = { ...cur };
        if (!prev[year]) {
            prev[year] = [];
            // 第一项数据加上year属性
            // @ts-expect-error
            data.year = year;
        }
        prev[year].push(data);
        return prev;
    }, {});
    workList.push(...topDate, ...Object.values(groupDate).reverse().flat());
}, { immediate: true });
const init = ref(true);
// 更新时间信息
watchEffect(() => {
    if (workList.length && init.value) {
        init.value = false;
        workList.forEach((data) => {
            // 接口获取最后更新时间
            if (!data.lastUpdate && data.github) {
                data.lastUpdate = '获取中...';
                const { github } = data;
                if (typeof github === 'string') {
                    getGithubUpdateTime(github)
                        .then((time) => {
                        data.lastUpdate = formatDate(time, 'yyyy-MM-dd');
                    })
                        .catch(() => {
                        data.lastUpdate = '地址解析失败';
                    });
                }
                else {
                    const { owner, repo, path, branch } = github;
                    // 拼接Github链接
                    let githubUrl = `https://github.com/${owner}/${repo}`;
                    if (path) {
                        githubUrl += `/tree/${branch || 'master'}/${path}`;
                    }
                    else if (branch) {
                        githubUrl += `/tree/${branch}`;
                    }
                    data.github = githubUrl;
                    getGithubDirUpdateTime(owner, repo, path ?? '', branch)
                        .then((time) => {
                        data.lastUpdate = formatDate(time, 'yyyy-MM-dd');
                    })
                        .catch(() => {
                        data.lastUpdate = '地址解析失败';
                    });
                }
            }
        });
    }
});
const { width } = useWindowSize();
const isCardMode = computed(() => width.value > 768);
function handleChooseTag(tag) {
    ElMessage({
        message: `点击了${tag}标签，标签过滤功能开发中ing...`,
        type: 'warning'
    });
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
__VLS_styleScopedClasses['pin'];
__VLS_styleScopedClasses['times'];
__VLS_styleScopedClasses['links'];
__VLS_styleScopedClasses['tags'];
__VLS_styleScopedClasses['tag'];
__VLS_styleScopedClasses['aside-container'];
__VLS_styleScopedClasses['el-image'];
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user-works-page VPDoc") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside-container") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("filter") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div)({});
__VLS_elementAsFunction(__VLS_intrinsicElements.div)({});
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("works") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
(__VLS_ctx.works.title);
if (__VLS_ctx.works.description) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("description") }, });
    (__VLS_ctx.works.description);
}
for (const [work, idx] of __VLS_getVForSourceType((__VLS_ctx.workList))) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((idx)), ...{ class: ("work") }, });
    if (work.year) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ id: ((`work_${work.year}`)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((`#work_${work.year}`)), });
        (work.year);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ id: ((__VLS_ctx.slugify(work.title))), ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a)({ ...{ class: ("pin") }, href: ((`#${__VLS_ctx.slugify(work.title)}`)), });
    if (work.url) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ rel: ("noopener"), target: ("_blank"), href: ((work.url)), });
        (work.title);
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (work.title);
    }
    if (work.status) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Badge;
        /** @type { [typeof __VLS_components.Badge, typeof __VLS_components.Badge, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ type: ((work.status?.type || 'tip')), }));
        const __VLS_2 = __VLS_1({ type: ((work.status?.type || 'tip')), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        (work.status.text);
        __VLS_nonNullable(__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("info") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("times") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("icon") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), "xmlns:xlink": ("http://www.w3.org/1999/xlink"), viewBox: ("0 0 24 24"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.title, __VLS_intrinsicElements.title)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z"), fill: ("currentColor"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (work.startTime);
    if (work.endTime) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (work.endTime);
    }
    if (work.github) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("links") }, });
        if (work.github) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("github-link") }, href: work.github, target: ("_blank"), rel: ("noopener"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("icon") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), "xmlns:xlink": ("http://www.w3.org/1999/xlink"), viewBox: ("0 0 496 512"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z"), fill: ("currentColor"), });
            if (work.lastUpdate) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("lastupdate") }, });
                (work.lastUpdate);
            }
        }
    }
    if (work.links?.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("links") }, });
        if (work.links?.length) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("icon") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), "xmlns:xlink": ("http://www.w3.org/1999/xlink"), viewBox: ("0 0 24 24"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.g, __VLS_intrinsicElements.g)({ fill: ("none"), stroke: ("currentColor"), "stroke-width": ("2"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5"), });
        }
        for (const [link] of __VLS_getVForSourceType((work.links || []))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ key: ((link.url)), ...{ class: ("link") }, href: ((link.url)), title: ((link.title)), target: ("_blank"), rel: ("noopener"), });
            (link.title);
        }
    }
    if (work.tags?.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tags") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("icon") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 1024 1024"), "data-v-d328c40a": (""), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ fill: ("currentColor"), d: ("M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"), });
        for (const [tag] of __VLS_getVForSourceType((work.tags))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (...[$event]) => {
                        if (!((work.tags?.length)))
                            return;
                        __VLS_ctx.handleChooseTag(tag);
                    } }, key: ((tag)), ...{ class: ("tag") }, });
            (tag);
        }
    }
    if (work.covers?.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("images") }, });
        if (work.coverLayout === 'swiper') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("swiper-mode") }, });
            const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.ElCarousel;
            /** @type { [typeof __VLS_components.ElCarousel, typeof __VLS_components.ElCarousel, ] } */
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ autoplay: (true), height: ("260px"), type: ((__VLS_ctx.isCardMode && work.covers.length >= 3 ? 'card' : '')), }));
            const __VLS_8 = __VLS_7({ autoplay: (true), height: ("260px"), type: ((__VLS_ctx.isCardMode && work.covers.length >= 3 ? 'card' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            for (const [url, idx] of __VLS_getVForSourceType((work.covers))) {
                const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ElCarouselItem;
                /** @type { [typeof __VLS_components.ElCarouselItem, typeof __VLS_components.ElCarouselItem, ] } */
                // @ts-ignore
                const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((url)), ...{ style: ({}) }, }));
                const __VLS_14 = __VLS_13({ key: ((url)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ElImage;
                /** @type { [typeof __VLS_components.ElImage, ] } */
                // @ts-ignore
                const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ key: ((url)), previewTeleported: (true), src: ((url)), loading: ("lazy"), previewSrcList: ((work.covers)), initialIndex: ((idx)), hideOnClickModal: (true), alt: ((`${work.title}-${idx}`)), }));
                const __VLS_20 = __VLS_19({ key: ((url)), previewTeleported: (true), src: ((url)), loading: ("lazy"), previewSrcList: ((work.covers)), initialIndex: ((idx)), hideOnClickModal: (true), alt: ((`${work.title}-${idx}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
                __VLS_nonNullable(__VLS_17.slots).default;
                const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            }
            __VLS_nonNullable(__VLS_11.slots).default;
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        }
        if (work.coverLayout === 'list') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("list-mode") }, });
            for (const [url, idx] of __VLS_getVForSourceType((work.covers))) {
                const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ElImage;
                /** @type { [typeof __VLS_components.ElImage, ] } */
                // @ts-ignore
                const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ key: ((url)), src: ((url)), loading: ("lazy"), previewSrcList: ((work.covers)), initialIndex: ((idx)), hideOnClickModal: (true), }));
                const __VLS_26 = __VLS_25({ key: ((url)), src: ((url)), loading: ("lazy"), previewSrcList: ((work.covers)), initialIndex: ((idx)), hideOnClickModal: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
            }
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("description") }, });
    __VLS_directiveAsFunction(__VLS_ctx.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (work.description) }, null, null);
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside-container") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside-outline-container") }, });
__VLS_styleScopedClasses['user-works-page'];
__VLS_styleScopedClasses['VPDoc'];
__VLS_styleScopedClasses['aside-container'];
__VLS_styleScopedClasses['filter'];
__VLS_styleScopedClasses['works'];
__VLS_styleScopedClasses['description'];
__VLS_styleScopedClasses['work'];
__VLS_styleScopedClasses['title'];
__VLS_styleScopedClasses['pin'];
__VLS_styleScopedClasses['info'];
__VLS_styleScopedClasses['times'];
__VLS_styleScopedClasses['icon'];
__VLS_styleScopedClasses['links'];
__VLS_styleScopedClasses['github-link'];
__VLS_styleScopedClasses['icon'];
__VLS_styleScopedClasses['lastupdate'];
__VLS_styleScopedClasses['links'];
__VLS_styleScopedClasses['icon'];
__VLS_styleScopedClasses['link'];
__VLS_styleScopedClasses['tags'];
__VLS_styleScopedClasses['icon'];
__VLS_styleScopedClasses['tag'];
__VLS_styleScopedClasses['images'];
__VLS_styleScopedClasses['swiper-mode'];
__VLS_styleScopedClasses['list-mode'];
__VLS_styleScopedClasses['description'];
__VLS_styleScopedClasses['aside-container'];
__VLS_styleScopedClasses['aside-outline-container'];
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
            ElCarousel: ElCarousel,
            ElCarouselItem: ElCarouselItem,
            ElImage: ElImage,
            slugify: slugify,
            works: works,
            workList: workList,
            isCardMode: isCardMode,
            handleChooseTag: handleChooseTag,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
