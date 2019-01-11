Vue.use(VueMaterial.default)

new Vue({
	el: '#app',
	data: {
		title: 'Hello World!'
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		}
	}
});

export default {
    name: 'RegularButtons'
}