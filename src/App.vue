<template>
    <div id="app" class="bg-gray-700 h-screen w-screen">
        <div class="w-full h-full px-10 sm:px-20 lg:px-36">
            <Loading v-if="loading"></Loading>
            <Chat v-else-if="user"></Chat>
            <Login v-else></Login>
        </div>
    </div>
</template>
<script>
import Chat from "./components/Chat.vue";
import Login from "./components/Login.vue";
import Loading from "./components/Loading.vue";
import firebase from 'firebase/compat/app'

export default {
    components: {
        Chat,
        Login,
        Loading
    },
    data() {
        return {
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        loading() {
            return this.$store.state.loading;
        }
    },
    created() {
        firebase.auth().onAuthStateChanged(async (user) => {
            await this.$store.dispatch("updateUser", user);
            await this.$store.dispatch("setLoading", false);
        });
    },
};
</script>

<style lang="less">
body {
    color: white;
    font-family: "Fira Code", "JetBrains Mono", 'Roboto Mono', monospace;
}
</style>>

