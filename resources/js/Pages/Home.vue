<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import AppLayout from "@/Layouts/AppLayout.vue";
import Masthead from "@/Components/Home/Masthead.vue";
import AboutUs from "@/Components/Home/AboutUs.vue";
import Skills from "@/Components/Home/Skills.vue";

import { onMounted, onUnmounted } from "vue";
</script>

<template>
    <Head title="Home">
        <meta
            name="description"
            content="单页面web应用设计构建，找到最适合的方法"
        />
    </Head>
    <AppLayout v-slot="slotProps">
        <Masthead :scrollY="slotProps.scrollY" />
        <AboutUs />
    </AppLayout>
</template>

<style scoped></style>
