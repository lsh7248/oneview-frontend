import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
  {
    path: "/map",
    name: "map",
    component: () =>
      import(/* webpackChunkName: "map" */ "@/views/MapAnalysisView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/DashBoardView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach(function (to, from, next) {
//   console.log("라우딩 대기");

//   if (
//     to.matched.some(function (routeInfo) {
//       return routeInfo.meta.authRequired;
//     })
//   ) {
//     // 인증이 필요한 페이지일 경우 인증 체크
//     if (isAuth) {
//       next(); // 페이지 전환
//     } else {
//       alert("로그인 필요");
//     }
//   } else {
//     next(); // 페이지 전환
//   }
// });

Vue.use(VueRouter);

export default router;
