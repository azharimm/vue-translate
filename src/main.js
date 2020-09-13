import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Toast from "vue-toastification";

import routes from "./routes";

Vue.use(VueRouter);
Vue.use(Toast);

const router = new VueRouter({
	mode: 'history',
	routes,
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
