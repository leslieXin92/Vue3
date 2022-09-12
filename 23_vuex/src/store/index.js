import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			name: 'leslie',
			age: 24,
			counter: 0,
			books: [
				{ name: 'Vue', price: 100, count: 30 },
				{ name: 'node', price: 200, count: 30 },
				{ name: 'webpack', price: 150, count: 20 },
				{ name: 'vite', price: 150, count: 15 }
			],
			discount: 0.75
		}
	},
	actions: {
		incrementFn(context) {
			context.commit('increment')
		},
		decrementFn(context) {
			context.commit('decrement')
		}
	},
	mutations: {
		increment(state) {
			state.counter++
		},
		decrement(state) {
			state.counter--
		},
		incrementN(state, payload) {
			state.counter += payload
		},
		decrementN(state, payload) {
			state.counter -= payload
		}
	},
	getters: {
		curDiscount(state) {
			return state.discount * 0.9
		},
		totalPrice(state, getters) {
			return state.books.map(item => item.price * item.count).reduce((pre, cur) => pre + cur, 0) * getters.curDiscount
		},
		gettersName(state) {
			return `${state.name}!`
		},
		gettersAge(state) {
			return state.age + 1
		}
	}
})

export default store
