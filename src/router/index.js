import Vue from "vue"
import Router from "vue-router";

Vue.use(Router);

import Home from "../views/home" // importing component way 1

export default new Router({
    mode: 'history',
    routes: [
        {
            name:"",
            path:"/",
            component:Home
        },
        {
            name:"About",
            path:"/about",
            component:() => import("@/views/about")  // importing component way 2
        }
     ]
})