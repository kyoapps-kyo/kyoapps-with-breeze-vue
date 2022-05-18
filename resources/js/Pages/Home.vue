<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import AppLayout from "@/Layouts/AppLayout.vue";
import Masthead from "@/Components/Home/Masthead.vue";
import AboutUs from "@/Components/Home/AboutUs.vue";
import Skills from "@/Components/Home/Skills.vue";

import { onMounted, onUnmounted } from "vue";
import { store } from "@/Components/Home/store.ts";
import _ from "lodash";

function scrollHandle(e) {
    store.updateTop(e.target.scrollingElement.scrollTop);
    // console.log(document.body.offsetHeight);
}

onMounted(() => {
    window.addEventListener("scroll", _.throttle(scrollHandle, 10));
});

onUnmounted(() => {
    window.removeEventListener("scroll", _.throttle(scrollHandle, 10));
    console.log("unmounted");
});
</script>

<template>
    <Head title="Home">
        <meta name="description" content="App develop" />
    </Head>
    <AppLayout>
        <Masthead />
        <AboutUs />
        <Skills />
    </AppLayout>
</template>

<style scoped></style>
