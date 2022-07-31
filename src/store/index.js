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
	messages: [],
}

/* 
	Vuex store is a singleton object that holds the state of the application 
	and can be accessed by all components of the application via this.$store. 
*/
export default new Vuex.Store({
	// state is the data that is shared between components
	state,

	// getters are functions that return a piece of the state, or a computed value
	getters: {
		db: state => state.db,
	},

	// mutations perform like a data access layer (DAL)
	// components could call mutations directly to change the state, but they should not do that
	// instead, you should call it from actions
	// actions will call mutations to change the state
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

	// actions perform as business logic layer (BLL)
	// actions are called by components to change the state
	// it is a good practice to call mutations from actions
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
			this.getters.db.collection('messages').add(msgInfo)
		},
		async updateMessages(context, messages) {
			context.commit('SET_MESSAGES', messages);
		}
	},

	// modules are used to split the state into smaller parts
	modules: {}
})