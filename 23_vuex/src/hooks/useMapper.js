import { computed } from 'vue'
import { useStore } from 'vuex'

export function useMapper(mapper, mapFn) {
	// 拿到store对象
	const store = useStore()

	// 获取对象对象的function
	const storeStateFn = mapFn(mapper)

	// 数据进行转换
	const storeState = {}
	Object.keys(storeStateFn).forEach(fnKey => {
		const fn = storeStateFn[fnKey].bind({ $store: store })
		storeState[fnKey] = computed(fn)
	})

	return storeState
}
