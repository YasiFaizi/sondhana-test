import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LoadingFirst from '../views/LoadingFirst.vue'
import LoadingSecond from '../views/LoadingSecond.vue'
import ProfileDropdown from '../views/ProfileDropdown.vue'
import HalfReport from '../views/HalfReport'
import ContentCreator from "../views/ContentCreator"
import ContentCreator2 from "../views/ContentCreator2"
import LoadingThird from '../views/LoadingThird.vue'
import HalfReportNav from '../views/HalfReportNav.vue'
//import LandingPage from '../components/LandingPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/LoadingFirst',
    name: 'LoadingFirst',
    component: LoadingFirst
  },
  {
    path: '/LoadingSecond',
    name: 'LoadingSecond',
    component: LoadingSecond
  },
  {
    path: '/ProfileDropdown',
    name: 'ProfileDropdown',
    component: ProfileDropdown
  },
  {
    path: '/HalfReport',
    name: 'HalfReport',
    component: HalfReport
  },
  {
    path: '/ContentCreator',
    name: 'ContentCreator',
    component: ContentCreator
  },
  {
    path: '/ContentCreator2',
    name: 'ContentCreator2',
    component: ContentCreator2
  },
  {
    path: '/LoadingThird',
    name: 'LoadingThird',
    component: LoadingThird
  },
  {
    path: '/HalfReportNav',
    name: 'HalfReportNav',
    component: HalfReportNav
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
