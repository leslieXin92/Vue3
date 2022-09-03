const demoMixin = {
	data() {
		return {
			msg: 'demoMixin'
		}
	},
	created() {
		this.logMsg()
	},
	methods: {
		logMsg() {
			console.log(this.msg)
		}
	}
}

export default demoMixin
