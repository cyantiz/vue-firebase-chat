<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login v-screen h-screen flex items-center justify-center">
        <button
            class="login-btn px-4 py-2 bg-black rounded transition-all ease-linear duration-300q hover:bg-white hover:text-black"
            @click="handleLogin"
        >
            Login with Google!
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        handleLogin() {
            this.$store.dispatch("setLoading", true);
            this.$store.dispatch("login");
            this.$store.dispatch("setLoading", false);
        },
    },
};
</script>

<style lang="less" scoped>
.login {
    font-family: "Fira Code", "JetBrains Mono", 'Roboto Mono', monospace;
}
</style>