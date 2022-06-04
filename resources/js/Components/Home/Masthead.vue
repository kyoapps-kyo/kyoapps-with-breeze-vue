<script setup>
import AppLogo from "@/Components/ApplicationLogo.vue";
import { ref, onMounted, watchEffect } from "vue";
import VueTyped from "@/Components/VueTypedJs.vue";

const mounted = ref(false);
const refContainer = ref(null);
const progress = ref(0);
const props = defineProps({
    scrollY: Number,
});

onMounted(() => {
    setTimeout(() => {
        mounted.value = true;
    }, 500);
});

watchEffect(() => {
    if (refContainer.value) {
        progress.value = Math.min(
            1,
            props.scrollY / refContainer.value.clientHeight
        );
    }
});
</script>

<template>
    <div
        ref="refContainer"
        class="h-screen w-screen flex flex-col items-center justify-center sticky -z-10 top-0 transition-transform duration-200"
        :style="`transform: translateY(${-progress * 20}vh);`"
    >
        <img
            class="absolute w-full h-full object-cover -z-10"
            src="/media/masthead-bg.jpg"
        />
        <div
            class="flex-grow-0 pt-16 transition-opacity duration-1000 h-12 w-12"
            :class="{ 'opacity-0': !mounted, 'opacity-100': mounted }"
        >
            <AppLogo></AppLogo>
        </div>
        <div
            class="p-12 font-bold text-center flex flex-1 items-center justify-center flex-col transition-opacity duration-1000 delay-300"
            :class="{ 'opacity-0': !mounted, 'opacity-100': mounted }"
        >
            <h1 class="mb-6 text-4xl xl:text-5xl text-gradient-mint-blue-dark">
                KYOAPPS - Web应用开发
            </h1>
            <h2
                class="mb-2 text-2xl xl:text-3xl tracking-tight text-gradient-mint-blue-dark"
            >
                <VueTyped
                    :strings="['WEB应用开发，DONE IT', '设计、构建、运营']"
                    :typeSpeed="100"
                    :backSpeed="60"
                    :loop="true"
                >
                    <span class="typing"></span>
                </VueTyped>
            </h2>
        </div>
        <div
            id="scroll_down"
            class="mb-24 rounded-full p-1 bg-gradient-to-br from-[#a2facf] to-[#64acff] flex-grow-0 lg:mb-32 transition-all duration-1000 transform delay-500"
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
