import { computed } from 'vue'
import { useStore, mapGetters } from 'vuex'

export function useGetters(mapper) {
	// 拿到store对象
	const store = useStore()

	// 获取对象对象的function
	const storeStateFn = mapGetters(mapper)

	// 数据进行转换
	const storeGetters = {}
	Object.keys(storeStateFn).forEach(fnKey => {
		const fn = storeStateFn[fnKey].bind({ $store: store })
		storeGetters[fnKey] = computed(fn)
	})

	return storeGetters
}
