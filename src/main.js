import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Bmob from "hydrogen-js-sdk";
Vue.use(ElementUI)
Vue.config.productionTip = false
Bmob.initialize('6f6f8c9c5729628b', '123456');
Vue.prototype.Bmob = Bmob;
new Vue({
    render: h => h(App),
    router
}).$mount('#app')