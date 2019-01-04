import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/styles/reset.css'

// 引入 axios
import axios from 'axios';
Vue.prototype.$http = axios;

// 引入 Vant UI
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

// 设置全局 rem
window.onresize = function () {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + "px";
}
onresize();

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})