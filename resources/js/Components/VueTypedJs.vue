<script setup>
import Typed from "typed.js";
import { onMounted } from "vue";
const props = defineProps({
    strings: Array,
    typeSpeed: Number,
    backSpeed: Number,
    loop: Boolean,
});
function initTyped() {
    let typing = new Typed(".typing", {
        strings: props.strings,
        typeSpeed: props.typeSpeed,
        BackSpeed: props.backSpeed,
        loop: props.loop,
    });
}

onMounted(() => {
    initTyped();
});
</script>
<template>
    <slot></slot>
</template>
