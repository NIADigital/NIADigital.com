import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

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
