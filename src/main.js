import Vue from 'vue'
import wrap from "@vue/web-component-wrapper"
import App from './App.vue'

const wrappedElement = wrap(Vue, App);

window.customElements.define("v-simple-timeago", wrappedElement);

/* Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app') */
