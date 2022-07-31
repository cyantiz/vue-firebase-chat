import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import config from '../firebase/config'

firebase.initializeApp(config)
Vue.use(Vuex)

const state = {
	db: firebase.firestore(),
	user: firebase.auth().currentUser,
	loading: true,
}
export default new Vuex.Store({
	state,
	mutations: {
		SET_USER(state, payload) {
			state.user = payload;
			console.log("user changed: ", state.user);
		},
		SET_LOADING(state, payload) {
			state.loading = payload;
		}
	},
	actions: {
		async login(context) {
			const provider = new firebase.auth.GoogleAuthProvider();
			const res = await firebase.auth().signInWithPopup(provider); 
			console.log('res ', res);
			if (res) {
				context.commit('SET_USER', res.user)
			}
			else {
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
		}


	},
	modules: {}
})