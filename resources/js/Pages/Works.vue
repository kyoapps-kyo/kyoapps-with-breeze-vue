<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import AppLayout from "@/Layouts/AppLayout.vue";
import Masthead from "@/Components/Home/Masthead.vue";
import Works from "@/Components/Works/Works.vue";

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
        <Works :scrollY="slotProps.scrollY" />
    </AppLayout>
</template>

<style scoped></style>
