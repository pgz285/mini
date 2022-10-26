import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		Color: {
			// themeColor: '#a37574',
			themeColor: '#ce3c45',
			buttonColor: '#C92D41'
		}
	},
	mutations: {
		SETTHEME(state, color) {
			state.Color.themeColor = color.themeColor
			state.Color.buttonColor = color.buttonColor
		}
	},
	actions: {},
	modules: {}
})

export default store
