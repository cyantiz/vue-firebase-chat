import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import config from '../firebase/config'

firebase.initializeApp(config)
Vue.use(Vuex)

const state = {
	user: firebase.auth().currentUser,
	loading: true,
	messages: [],
}


export default new Vuex.Store({
	state,

	getters: {
	},

	mutations: {
		SET_USER(state, payload) {
			state.user = payload;
		},
		SET_LOADING(state, payload) {
			state.loading = payload;
		},
		SET_MESSAGES(state, payload) {
			state.messages = payload;
		}
	},


	actions: {
		async login(context) {
			const provider = new firebase.auth.GoogleAuthProvider();
			const res = await firebase.auth().signInWithPopup(provider);
			if (res) {
				context.commit('SET_USER', res.user)
			} else {
				throw new Error("couldn't login")
			}
		},
		async logout() {
			await firebase.auth().signOut();
		},
		async updateUser(context, payload) {
			context.commit('SET_USER', payload);
		},
		async setLoading(context, payload) {
			context.commit('SET_LOADING', payload);
		},
		async sendMsg(context, msgInfo) {
			firebase.firestore().collection('messages').add(msgInfo)
		},
		async updateMessages(context, messages) {
			context.commit('SET_MESSAGES', messages);
		}
	},

	modules: {}
})