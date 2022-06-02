<script setup>
import { Icon } from "@iconify/vue";
import { ref, watchEffect } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
const props = defineProps({
    scrollY: Number,
});
const refContainer = ref(null);
const opacity = ref(0.2);
const scale = ref(0.8);

watchEffect(() => {
    if (refContainer.value) {
        const { clientHeight, offsetTop } = refContainer.value;
        const screenH = window.innerHeight;
        let progress = (offsetTop - props.scrollY) / screenH;
        progress = Math.min(1 - progress, 1);
        if (progress <= 0.2) {
            opacity.value = 0.2;
            scale.value = 0.8;
        } else {
            opacity.value = 1;
            scale.value = 1;
        }
    }
});
</script>
<template>
    <div ref="refContainer" class="relative max-w-4xl mx-auto">
        <img
            src="/media/repo-editor-glow.svg"
            class="absolute -z-10 top-0 transition-opacity delay-200"
            style="
                width: 117.31%;
                margin: 0 -8.65%;
                transform: translateY(-20%);
            "
            alt="Light glowing behind the editor"
            decoding="async"
            :style="`opacity: ${opacity};`"
        />
        <div
            id="about_us"
            class="max-w-4xl mx-auto py-20 bg-white flex flex-col transition duration-500"
            :style="`opacity: ${opacity}; transform:scale(${scale});`"
        >
            <div
                class="max-w-xl mx-auto w-full flex items-start justify-between px-6 md:px-0"
            >
                <p class="leading-tight text-lg tracking-tight text-[#627597]">
                    <strong class="text-2xl text-gradient-pink-blue">
                        Wu Yang </strong
                    ><br />
                    Digital Craftsman ( Developer / Designer )
                </p>
                <div class="avatar">
                    <div
                        class="w-24 rounded-full ring ring-primary overflow-hidden bg-gradient-to-br from-[#db469f] to-[#2188ff]"
                    >
                        <img src="/media/avatar.png" />
                    </div>
                </div>
            </div>
            <div class="max-w-xl mx-auto w-full px-6 md:px-0 mb-6">
                <h3 class="text-xl font-bold leading-[1.2] my-6">
                    <span class="border-b-4 pb-1">工作 / Work</span>
                </h3>
                <p class="indent-8">
                    <span class="text-gradient-pink-blue">Wu Yang - 午羊</span>
                    ，全栈开发者，位于东京 /
                    京都，热衷于构建有趣的数字服务和内容，思考计划和设计使用代码解决生活中的难题，不在编程的时候，会拿着相机到处闲逛，记录有趣的影像，目前他正在筹划建立一个内容分享频道，展示平时用代码制作的有趣内容
                </p>
                <div class="flex items-center justify-center mt-6">
                    <Link
                        class="py-2 px-4 rounded-lg border border-[#c47cde] text-gray-900 inline-flex items-center hover:bg-gradient-to-br hover:from-[#db469f] hover:to-[#2188ff] hover:text-white"
                        >My Profile
                        <Icon
                            icon="ep:arrow-right"
                            width="14"
                            height="14"
                            :inline="true"
                            class="ml-4"
                        />
                    </Link>
                </div>
            </div>
            <div class="max-w-xl mx-auto w-full px-6 md:px-0 mb-6">
                <h3 class="text-xl font-bold leading-[1.2] my-6">
                    <span class="border-b-4 pb-1">轨迹 / Bio</span>
                </h3>
                <div class="flex items-start">
                    <p class="font-bold mr-12">1991</p>
                    <p>Born in Hunan, CHINA</p>
                </div>
                <div class="flex items-start">
                    <p class="font-bold mr-12">2018</p>
                    <p>
                        Completed the Master's Program in the Graduate School of
                        Information Science at Kyoto Institute of Science and
                        Technology
                    </p>
                </div>
                <div class="flex items-start">
                    <p class="font-bold mr-12">2019</p>
                    <p>Working as a freelancer</p>
                </div>
            </div>
            <div class="max-w-xl mx-auto w-full px-6 md:px-0 mb-6">
                <h3 class="text-xl font-bold leading-[1.2] my-6">
                    <span class="border-b-4 pb-1">兴趣 / I ♥</span>
                </h3>
                <p class="indent-8">健身、音乐、蓝调口琴、摄影、料理</p>
            </div>
            <div class="max-w-xl mx-auto w-full px-6 md:px-0 mb-6">
                <h3 class="text-xl font-bold leading-[1.2] my-6">
                    <span class="border-b-4 pb-1">在哪 / On the web</span>
                </h3>
                <ul class="pl-6 text-gray-700">
                    <li
                        class="hover:bg-gradient-to-br hover:from-[#db469f] hover:to-[#2188ff] hover:text-white hover:cursor-pointer rounded-lg w-fit p-2 mt-2"
                    >
                        <a
                            href="https://github.com/kyoapps-kyo"
                            class="flex font-semibold"
                        >
                            <Icon
                                icon="ant-design:github-filled"
                                width="24"
                                height="24"
                                class="mr-2"
                            />
                            @kyoapps-kyo
                        </a>
                    </li>
                    <!-- <li
                    class="hover:bg-gradient-to-br hover:from-[#db469f] hover:to-[#2188ff] hover:text-white hover:cursor-pointer rounded-lg w-fit p-2 mt-2"
                >
                    <a href="#" class="flex font-semibold">
                        <Icon
                            icon="ant-design:youtube-filled"
                            width="24"
                            height="24"
                            class="mr-2"
                        />
                        @kyoapps-channel
                    </a>
                </li>
                <li
                    class="hover:bg-gradient-to-br hover:from-[#db469f] hover:to-[#2188ff] hover:text-white hover:cursor-pointer rounded-lg w-fit p-2 mt-2"
                >
                    <a href="#" class="flex font-semibold">
                        <Icon
                            icon="ant-design:wechat-filled"
                            width="24"
                            height="24"
                            class="mr-2"
                        />
                        @wuyang
                    </a>
                </li>
                <li
                    class="hover:bg-gradient-to-br hover:from-[#db469f] hover:to-[#2188ff] hover:text-white hover:cursor-pointer rounded-lg w-fit p-2 mt-2"
                >
                    <a href="#" class="flex font-semibold">
                        <Icon
                            icon="ant-design:weibo-circle-filled"
                            width="24"
                            height="24"
                            class="mr-2"
                        />
                        @wuyang
                    </a>
                </li> -->
                </ul>
                <div class="flex items-center justify-center mt-6">
                    <Link
                        class="py-2 px-4 rounded-lg border border-[#c47cde] text-gray-900 inline-flex items-center hover:bg-gradient-to-br hover:from-[#db469f] hover:to-[#2188ff] hover:text-white"
                        >More popular posts
                        <Icon
                            icon="ep:arrow-right"
                            width="14"
                            height="14"
                            :inline="true"
                            class="ml-4"
                        />
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>
