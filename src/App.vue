<template>
    <div id="app" class="bg-gray-700 h-screen w-screen overflow-hidden">
        <div class="w-full h-full px-10 sm:px-20 lg:px-36 transition-all">
            <Loading v-if="loading"></Loading>
            <Chat v-if="user"></Chat>
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
        // authentication on app load
        firebase.auth().onAuthStateChanged(async (user) => {
            await this.$store.dispatch("updateUser", user);
        });

        // realtime updating of messages
        this.$store.getters.db.collection("messages").orderBy("createdAt", "desc").onSnapshot(async (snapshot) => {
            await this.$store.dispatch("setLoading", true);
            const messages = await snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                };
            });
            await this.$store.dispatch("updateMessages", messages);
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
input {
    color: black !important;
}
</style>>

