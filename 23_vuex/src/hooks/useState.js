import { computed } from 'vue'
import { useStore, mapState } from 'vuex'

export function useState(mapper) {
	// 拿到store对象
	const store = useStore()

	// 获取对象对象的function
	const storeStateFn = mapState(mapper)

	// 数据进行转换
	const storeState = {}
	Object.keys(storeStateFn).forEach(fnKey => {
		const fn = storeStateFn[fnKey].bind({ $store: store })
		storeState[fnKey] = computed(fn)
	})

	return storeState
}
