import { ref, watch } from 'vue'

export default function (key, value) {
	const data = ref(value)

	// 传key和value => 存值
	if (value) {
		window.localStorage.setItem(key, JSON.stringify(value))
	}
	// 只传key => 取值
	else {
		data.value = JSON.parse(window.localStorage.getItem(key))
	}

	watch(data, newValue => {
		window.localStorage.setItem(key, JSON.stringify(newValue))
	})

	return data
}
