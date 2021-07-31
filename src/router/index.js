import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";

Vue.use(Router);

export default new Router({
  routes: [
    {
      //配置进入页面默认展示的页面,谁在前面就是谁
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      //配置进入页面默认展示的页面
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/user",
      component: User
    },
    {
      //路由url动态获取组件信息
      path: "/user/:userId",
      component: User
    }
  ],
  //修改url变换的方式为history方法
  mode: "history"
  // linkActiveClass: "active"
});
