import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueClipboard from 'vue-clipboard2'
import VueSweetalert2 from 'vue-sweetalert2';
 
import 'sweetalert2/dist/sweetalert2.min.css';
import routes from "./routes";

Vue.use(VueSweetalert2);
Vue.use(VueRouter);
Vue.use(VueClipboard)

const router = new VueRouter({
	mode: 'hash',
	routes,
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
