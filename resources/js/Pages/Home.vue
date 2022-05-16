<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import AppLayout from "@/Layouts/AppLayout.vue";
import AppLogo from "@/Components/ApplicationLogo.vue";
import Masthead from "@/Components/Home/Masthead.vue";
import AboutUs from "@/Components/Home/AboutUs.vue";

import { ref, onMounted } from "vue";
import { store } from "@/Components/Home/store.ts";

function scrollHandle(e) {
    store.top = e.srcElement.scrollingElement.scrollTop;
    // console.log(document.body.offsetHeight);
}

onMounted(() => {
    window.addEventListener("scroll", scrollHandle);
});
</script>

<template>
    <Head title="Home" />
    <AppLayout>
        <Masthead />
        <AboutUs />
    </AppLayout>
</template>

<style scoped></style>
