import { ref } from 'vue'

export default function () {
	const mouseX = ref(0)
	const mouseY = ref(0)

	document.addEventListener('mousemove', e => {
		mouseX.value = e.pageX
		mouseY.value = e.pageY
	})

	return {
		mouseX,
		mouseY
	}
}
