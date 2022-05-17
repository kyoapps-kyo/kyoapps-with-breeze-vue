<script setup>
import { ref, watchEffect } from "vue";
import { store } from "./store.ts";

const refContainer = ref(null);
const progress = ref(0);
function opacityForBlock(sectionProgress, blockNo) {
    let opacityProgress = sectionProgress - blockNo;
    if (opacityProgress >= 0 && opacityProgress < 1) return 1;
    return 0.2;
}
watchEffect(() => {
    if (refContainer.value) {
        const { clientHeight, offsetTop } = refContainer.value;
        const screenH = window.innerHeight;
        const halfH = screenH / 2;
        const percentY =
            Math.min(
                clientHeight + halfH,
                Math.max(-screenH, store.top - offsetTop) + halfH
            ) / clientHeight;
        const numOfPages = 3;
        progress.value = Math.min(
            numOfPages - 0.5,
            Math.max(0.5, percentY * numOfPages)
        );
    } else {
        console.log(progress.value);
    }
});
</script>
<template>
    <div ref="refContainer" class="bg-[rgb(12,26,20)] text-white">
        <div
            class="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold"
        >
            <div class="leading-[1.15]">
                <div
                    class="skill_text"
                    :style="`opacity:${opacityForBlock(progress, 0)}`"
                >
                    对于使用的工具了如指掌
                </div>
                <span
                    class="skill_text inline-block after:content-['_']"
                    :style="`opacity:${opacityForBlock(progress, 1)}`"
                    >长期活跃于各种技术社区，持续为社区贡献着自己的力量，跟进最新技术，保持自身技术领先</span
                >
                <span
                    class="skill_text inline-block"
                    :style="`opacity:${opacityForBlock(progress, 2)}`"
                >
                    正在维护多个颇受用户好评的应用,以人为本，为客户提供持续优质的服务
                </span>
            </div>
        </div>
    </div>
</template>
