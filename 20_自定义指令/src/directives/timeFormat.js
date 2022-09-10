import dayjs from 'dayjs'

export default function (app) {
	app.directive('time-format', {
		created(el, bindings) {
			if (!bindings.value) {
				bindings.value = 'YYYY-MM-DD HH:mm:ss'
			}
		},
		mounted(el, bindings) {
			const time = parseInt(el.textContent)
			el.textContent = dayjs(time).format(bindings.value)
		}
	})
}
