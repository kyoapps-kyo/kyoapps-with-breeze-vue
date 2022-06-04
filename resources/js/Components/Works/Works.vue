<script setup>
import { Icon } from "@iconify/vue";
import { ref, watchEffect, onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import VueTyped from "@/Components/VueTypedJs.vue";

const props = defineProps({
    scrollY: Number,
});
const refContainer = ref(null);
const show = ref(false);
const active = ref(false);

watchEffect(() => {
    if (refContainer.value) {
        const { clientHeight, offsetTop } = refContainer.value;
        const screenH = window.innerHeight;
        let progress = (offsetTop - props.scrollY) / screenH;
        progress = Math.min(1 - progress, 1);
        if (progress <= 0.2) {
            active.value = false;
            show.value = false;
        } else if (progress <= 0.5) {
            active.value = true;
            show.value = true;
        } else if (progress <= 0.8) {
            active.value = false;
        } else {
            active.value = true;
        }
    }
});

onMounted(() => {
    show.value = true;
    setTimeout(() => {
        window.scrollTo({
            top: window.innerHeight / 2,
            behavior: "smooth",
        });
    }, 100);
});
</script>
<template>
    <div ref="refContainer" class="relative max-w-4xl mx-auto">
        <img
            src="/media/repo-editor-glow.svg"
            class="absolute -z-10 top-0 transition-opacity duration-1000"
            style="width: 100%; transform: translateY(-20%) rotateY(180deg)"
            alt="Light glowing behind the editor"
            decoding="async"
            :class="{ 'opacity-100': show, 'opacity-0': !show }"
        />
        <div
            id="works"
            class="max-w-4xl mx-auto py-20 bg-white flex flex-col transition duration-200 relative"
            :class="{ 'opacity-100': show, 'opacity-0': !show }"
        >
            <div
                class="absolute top-0 left-1/2 transition-opacity duration-1000 delay-500 transform -translate-x-1/2 -translate-y-1/3 md:-translate-y-1/2 px-4 md:px-0 w-fit"
                :class="{
                    'opacity-0': !active,
                    'opacity-100': active,
                }"
            >
                <span
                    class="text-[56px] text-gradient-pink-blue font-black reggae-one ease-in-out"
                    >改える</span
                >
                <span class="text-[#627597] text-base pl-2 md:pl-6"
                    >不为完成任务而妥协，不为自我感觉良好而终止！</span
                >
            </div>
            <div class="max-w-xl mx-auto w-full px-6 md:px-0">
                <h2 class="text-xl text-gradient-pink-blue font-semibold">
                    工作 / Works
                </h2>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 pt-4 md:pt-10"
                >
                    <div class="h-[200px] w-full bg-red-300"></div>
                    <div class="h-[200px] w-full bg-red-300"></div>
                    <div class="h-[200px] w-full bg-red-300"></div>
                    <div class="h-[200px] w-full bg-red-300"></div>
                </div>
                <h2
                    class="text-xl text-gradient-pink-blue font-semibold mt-8 md:mt-20"
                >
                    委托 / Collaborations
                </h2>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 pt-4 md:pt-10"
                >
                    <div class="h-[200px] w-full bg-red-300"></div>
                    <div class="h-[200px] w-full bg-red-300"></div>
                    <div class="h-[200px] w-full bg-red-300"></div>
                    <div class="h-[200px] w-full bg-red-300"></div>
                </div>
                <h2
                    class="text-xl text-gradient-pink-blue font-semibold mt-8 md:mt-20"
                >
                    其他 / Other
                </h2>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 pt-4 md:pt-10"
                >
                    <div class="h-[200px] w-full bg-red-300"></div>
                    <div class="h-[200px] w-full bg-red-300"></div>
                    <div class="h-[200px] w-full bg-red-300"></div>
                    <div class="h-[200px] w-full bg-red-300"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Reggae+One&display=swap");
.reggae-one {
    font-family: "Reggae One", cursive;
}
</style>
