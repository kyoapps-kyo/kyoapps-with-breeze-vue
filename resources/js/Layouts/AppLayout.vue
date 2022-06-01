<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import BreezeDropdown from "@/Components/Dropdown.vue";
import BreezeDropdownLink from "@/Components/DropdownLink.vue";
import BreezeNavLink from "@/Components/NavLink.vue";
import BreezeResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { Icon } from "@iconify/vue";
import _ from "lodash";

const showingNavigationDropdown = ref(false);

const mounted = ref(false);
const scrollY = ref(0);

onMounted(() => {
    setTimeout(() => {
        mounted.value = true;
    }, 500);
});
// const scrollHandle = _.throttle((e) => {
//     scrollY.value = e.target.scrollingElement.scrollTop;
// }, 1);
const scrollHandle = (e) => {
    scrollY.value = e.target.scrollingElement.scrollTop;
};
onMounted(() => {
    window.addEventListener("scroll", scrollHandle);
});

onUnmounted(() => {
    window.removeEventListener("scroll", scrollHandle);
});
</script>

<template>
    <div>
        <div class="w-screen h-full">
            <!-- button Navigation Menu -->
            <nav class="fixed container mx-auto z-50">
                <div class="absolute top-[5vh] right-[5vw] md:right-0">
                    <div
                        class="transition-opacity duration-1000"
                        :class="{
                            'opacity-0': !mounted,
                            'opacity-100': mounted,
                        }"
                    >
                        <button
                            @click="
                                showingNavigationDropdown =
                                    !showingNavigationDropdown
                            "
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <Icon
                                :class="{
                                    hidden: showingNavigationDropdown,
                                    'inline-flex': !showingNavigationDropdown,
                                }"
                                icon="heroicons-solid:menu"
                                width="30"
                                height="30"
                            />
                            <Icon
                                :class="{
                                    hidden: !showingNavigationDropdown,
                                    'inline-flex': showingNavigationDropdown,
                                }"
                                icon="heroicons-solid:x"
                                width="30"
                                height="30"
                            />
                        </button>
                    </div>
                    <ul
                        v-if="showingNavigationDropdown"
                        class="absolute top-15 right-10 backdrop-blur-sm bg-black/50 text-white p-6 rounded-lg text-xl xl:text-2xl"
                    >
                        <li><a href="#about_us">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>
                </div>
            </nav>
            <!-- Page Heading -->
            <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot :scrollY="scrollY" />
            </main>
        </div>

        <!-- footer -->
        <footer class="bg-[rgb(12,26,20)] w-screen">
            <div class="container mx-auto py-6">
                <div
                    class="w-full flex justify-center items-center space-x-4 my-10"
                >
                    <ApplicationLogo class="h-6"></ApplicationLogo>
                    <h2 class="text-xl text-white">KYO APPS</h2>
                </div>
                <div
                    class="w-full flex flex-col md:flex-row md:justify-center md:space-x-2 items-center px-4 mt-4"
                >
                    <p class="text-xs text-gray-500">
                        © KYOAPPS all rights reserved (2021~)
                    </p>
                    <p class="text-xs text-gray-500">
                        <a class="underline" href="https://beian.miit.gov.cn"
                            >京ICP备2022011418号</a
                        >
                    </p>
                    <p class="text-xs text-gray-500">
                        Design & Code by
                        <a
                            href="https://github.com/kyoapps-kyo"
                            class="underline hover:text-opacity-50"
                            target="_blank"
                        >
                            Wu Yang
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>
