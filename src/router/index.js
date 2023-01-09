import Vue from "vue";
import VueRouter from "vue-router";
import lis from "@/components/elementlist.vue"
import index from "@/components/myindex.vue"
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        { path: '/lis', component: lis },
        { path: '/index', component: index }
    ]
})
export default router