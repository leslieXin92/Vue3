import { customRef } from 'vue'

export function useDebouncedRef(value, delay = 1000) {
	let timeout
	return customRef((track, trigger) => {
		// track跟踪收集依赖，trigger视图更新
		return {
			get() {
				track()
				return value
			},
			set(newValue) {
				clearTimeout(timeout)
				timeout = setTimeout(() => {
					value = newValue
					trigger()
				}, delay)
			}
		}
	})
}
