import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			name: 'leslie',
			age: 24,
			counter: 0
		}
	},
	mutations: {
		increment(state) {
			state.counter++
		},
		decrement(state) {
			state.counter--
		}
	}
})

export default store
