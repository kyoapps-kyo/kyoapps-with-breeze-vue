<script setup>
import { ref, watchEffect } from "vue";
import { store } from "./store.js";

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
        let screenY = store.scrollY;
        const percentY =
            Math.min(
                clientHeight + halfH,
                Math.max(-screenH, screenY - offsetTop) + halfH
            ) / clientHeight;
        // console.log(
        //     "screenY= " + screenY,
        //     " offsetTop= " + offsetTop,
        //     " screenY - offsetTop = " + (screenY - offsetTop),
        //     " screen - " + screenH
        // );
        const numOfPages = 3;
        progress.value = Math.min(
            numOfPages - 0.5,
            Math.max(0.5, percentY * numOfPages)
        );
    } else {
        console.log("refContainer 还未初始化");
    }
});
</script>
<template>
    <div id="skills" ref="refContainer" class="bg-[rgb(12,26,20)] text-white">
        <div
            class="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-6xl tracking-tight font-semibold"
        >
            <div class="leading-[1.3]">
                <div
                    class="skill_text"
                    :style="`opacity:${opacityForBlock(progress, 0)}`"
                >
                    紧跟技术前沿，构建安全、高效、交互性强的WEB应用
                </div>
                <span
                    class="skill_text inline-block after:content-['_']"
                    :style="`opacity:${opacityForBlock(progress, 1)}`"
                    >熟练运用Laravel、Vue等编程技术，为客户构建易于SEO的单页面应用<br />以夯实的编程能力为基础，关注用户体验，创建优秀的WEB应用程序</span
                >
                <span
                    class="skill_text inline-block"
                    :style="`opacity:${opacityForBlock(progress, 2)}`"
                >
                    正在维护多个颇受用户好评的应用，以人为本，长久持续为客户提供持续优质的服务
                </span>
            </div>
        </div>
    </div>
</template>
