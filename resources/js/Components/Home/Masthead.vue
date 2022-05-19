<script setup>
import { store } from "./store.ts";
import AppLogo from "@/Components/ApplicationLogo.vue";
import { ref, onMounted, watchEffect } from "vue";

const mounted = ref(false);
const refContainer = ref(null);
const progress = ref(0);

onMounted(() => {
    setTimeout(() => {
        mounted.value = true;
    }, 500);
});

watchEffect(() => {
    if (refContainer.value) {
        progress.value = Math.min(
            1,
            store.top / refContainer.value.clientHeight
        );
    } else {
        console.log(progress.value);
    }
});
</script>

<template>
    <div
        ref="refContainer"
        class="h-screen w-screen flex flex-col items-center justify-center -z-10 sticky top-0"
        :style="`transform: translateY(${-progress * 20}vh);`"
    >
        <video
            autoplay
            loop
            muted
            playsInline
            class="absolute w-full h-full object-cover -z-10"
        >
            <source src="/media/masthead-bg.mp4" type="video/mp4;" />
            <source src="/media/masthead-bg.flv" type="video/flv;codecs=h264" />
        </video>
        <div
            class="flex-grow-0 pt-16 transition-opacity duration-1000 h-12 w-12"
            :class="{ 'opacity-0': !mounted, 'opacity-100': mounted }"
        >
            <AppLogo></AppLogo>
        </div>
        <div
            class="p-12 font-bold text-white drop-shadow-[0_5px_3px_rgba(255,255,255,0.6)] text-center flex flex-1 items-center justify-center flex-col"
        >
            <h1 class="mb-6 text-4xl xl:text-5xl">KYOAPPS</h1>
            <h2 class="mb-2 text-2xl xl:text-3xl tracking-tight">
                <span id="typing">WEB应用开发,DONE IT</span>
            </h2>
        </div>
        <div
            id="scroll_down"
            class="mb-24 rounded-full p-1 bg-gradient-to-t from-green-500 to-transparent flex-grow-0 lg:mb-32 transition-all duration-1000 transform"
            :class="{
                'opacity-0': !mounted,
                'translate-y-20': !mounted,
                'opacity-100': mounted,
                'translate-y-0': mounted,
            }"
        >
            <a href="#about_us"
                ><img
                    class="w-10 h-10"
                    src="/media/mouse.png"
                    alt="scroll-down"
            /></a>
        </div>
    </div>
</template>
