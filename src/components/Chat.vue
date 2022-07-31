<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="Chat">
        <header class="flex justify-end gap-2 items-center">
            <div class="user-email">
                {{ user.email }}
            </div>
            <button
                class="logout-btn group px-4 py-2 bg-black rounded"
                @click="handleLogout"
            >
                <div
                    class="
                        span
                        group-hover:-rotate-[6deg]
                        transition-all
                        ease-out
                    "
                >
                    Logout
                </div>
            </button>
        </header>
        <section>
            <main>
                <!-- messages go here -->
            </main>

            <form>
                <!-- new message input go here -->
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
    },
    methods: {
        handleLogout() {
            this.$store.dispatch("setLoading", true);
            this.$store.dispatch("logout");
            this.$store.dispatch("setLoading", false);
        },
    },
};
</script>