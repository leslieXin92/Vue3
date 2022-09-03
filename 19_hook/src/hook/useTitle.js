import { ref, watch } from 'vue'

export default function (title = 'defaultTitle') {
	const titleRef = ref(title)

	watch(
		titleRef,
		newValue => {
			document.title = newValue
		},
		{
			immediate: true
		}
	)

	return titleRef
}
