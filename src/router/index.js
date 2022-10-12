import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import SkillsView from "../views/SkillsView.vue";
import ProfileView from "../views/ProfileView.vue";
import GalleryView from "../views/GalleryView.vue";

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
