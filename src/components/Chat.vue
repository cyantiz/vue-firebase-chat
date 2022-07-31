<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="chat pt-5">
        <header class="flex justify-end gap-4 items-center">
            <div class="user text-right">
                <div class="text-lg"> {{ user.displayName }} </div>
                <div class="text-xs"> {{ user.email }} </div>
            </div>
            <div class="user-avatar">
                <img :src="user.photoURL" alt="" class="w-12 h-12 rounded-full" />
            </div>
            <button @click="handleLogout" class="logout-btn group px-4 py-3 bg-black rounded ml-6">
                <div class="span group-hover:-rotate-[4deg] transition-all ease-out">
                    Logout
                </div>
            </button>
        </header>

        <section class="chat-field my-4">
            <!-- messages  -->
            <main class="messages flex flex-col-reverse gap-1 overflow-scroll">
                <div class="no-msg my-auto mx-auto text-center text-2xl text-gray-300" v-if="messages.length === 0">
                    No messages yet!
                    <div class="text-6xl mt-5">:(</div>
                </div>
                <div
                    v-for="msg, index in messages"
                    :key="'msg-' + msg.id"
                    class="message"
                    :class="[msg.userID === user.uid ? 'self' : 'other']"
                >
                    <div class="sender-name font-light text-xs ml-[44px] md:ml-[56px] pb-1 pt-4" v-if="index === messages.length - 1 ? true : msg.userID !== messages[index + 1].userID">
                        {{ msg.displayName }}
                    </div>
                    <div class="flex items-end gap-3 w-full">
                        <img
                            :src="msg.photoURL"
                            v-if="index === messages.length - 1 ? true : msg.userID !== messages[index + 1].userID"
                            class="msg-sender-avatar w-8 h-8 md:w-10 md:h-10 rounded-full transition-all"
                            alt=""
                        />
                        <div v-else class="msg-sender-avatar w-8 h-8 md:w-10 md:h-10"></div>
                        <div class="msg-text text-xs sm:text-sm max-w-[150px] sm:max-w-[250px] lg:max-w-[350px] xl:max-w-[550px] rounded-[5px] px-4 py-2 break-words transition-all">
                            {{ msg.text }}
                        </div>
                    </div>
                </div>
            </main>

            <!-- new message input -->
            <form @submit.prevent="handleSendMsg" class="flex gap-2 mt-10 text-xs md:text-sm transition-all" autocomplete="off">
                <input type="text" name="msg" placeholder="Enter your message" class="bg-gray-300 rounded-full px-4 py-2 outline-none flex-1" />
                <button type="submit" class="bg-white text-black px-4 py-2 rounded-full">Send</button>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user;
        },
        messages() {
            return this.$store.state.messages;
        },
    },
    methods: {
        async handleLogout() {
            await this.$store.dispatch("setLoading", true);
            await this.$store.dispatch("logout");
            await this.$store.dispatch("setLoading", false);
        },
        async handleSendMsg(e) {
            const msgInfo = {
                userID: this.user.uid,
                displayName: this.user.displayName,
                photoURL: this.user.photoURL,
                text: e.target.elements.msg.value,
                createdAt: Date.now(),
            };
            await this.$store.dispatch("sendMsg", msgInfo);
            e.target.elements.msg.value = "";
        },
    },
};
</script>

<style lang="less" scoped>
main{
    height: calc(100vh - 20px - 200px);
}

.message.self  {
    margin-left: auto;
    flex-direction: row-reverse;
    .msg-text {
        background: #3B82F6;
    }
    .msg-sender-avatar, .sender-name {
        display: none;
    }
}
.message.other .msg-text {
    background: green;
}

</style>