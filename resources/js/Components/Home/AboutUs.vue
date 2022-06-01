<script setup></script>
<template>
    <div
        id="about_us"
        class="max-w-4xl mx-auto py-20 bg-white text-3xl md:text-4xl flex flex-col"
    >
        <div class="max-w-xl mx-auto w-full flex items-start justify-between">
            <p class="leading-tight text-lg tracking-tight">
                <strong class="text-2xl"> Wu Yang </strong><br />
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
        <div class="container mx-auto px-11 text-center mt-28">
            <h2>Developer</h2>
            <div class="mt-2">the &ldquo;dream-in-shell&rdquo;</div>
            <div
                class="mt-10 mb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20"
            >
                <div>
                    <img
                        class="h-full w-full object-cover"
                        src="/media/avatar.png"
                        alt="avatar"
                    />
                    <div class="text-2xl xl:text-3xl mt-2">Wu Yang</div>
                    <div class="text-xl mt-2">
                        <a href="" target="_blank">@kyoapps/kyo</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-gradient-pink-blue {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
}
</style>
