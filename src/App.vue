<template>
    <div id="app">
        <Chat v-if="user"></Chat>
        <Login v-else></Login>
    </div>
</template>
<script>
import Chat from './components/Chat.vue'
import Login from './components/Login.vue'

export default {
    components: {
        Chat,
        Login
    },
    data() {
        return {
            user: this.$store.state.user,
        }
    },
}
</script>

<style lang="less">
</style>>

