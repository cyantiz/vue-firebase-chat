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
	user: firebase.auth().currentUser
}
export default new Vuex.Store({
	state,
	mutations: {
		setUser(state, payload) {
			state.user = payload;
			console.log("user changed: ", state.user);
		}
	},
	modules: {}
})