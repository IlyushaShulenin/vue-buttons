import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import Button8thPage from '@/components/pages/Button8thPage.vue'
import NinthButtonPage from "@/components/pages/NinthButtonPage.vue";
import SecondButtonPage from "@/components/pages/SecondButtonPage.vue";
import FirstButtonPage from "@/components/pages/FirstButtonPage.vue";
import TenthButtonPage from "@/components/pages/TenthButtonPage.vue"
import ButtonSixthPage from "@/components/pages/SixthButtonPage.vue"
import FourthButtonPage from "@/components/pages/FourthButtonPage.vue";
import TwelfthButtonPage from '../components/pages/TwelfthButtonPage.vue'
import FourteenthButtonPage from '../components/pages/FourteenthButtonPage.vue'
import { RouteNames } from './routes'
import ThirdButtonPage from '../components/pages/ThirdButtonPage.vue'
import FifthButtonPage from "@/components/pages/FifthButtonPage.vue";
import SeventhButtonPage from '@/components/pages/SeventhButtonPage.vue';
import ThirteenButtons from "@/components/pages/ThirteenButtons.vue";
import EleventhPage from "@/components/pages/EleventhPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/second_button',
    name: RouteNames.SECOND_BUTTON,
    component: SecondButtonPage
  },
  {
    path: '/button_8',
    name: RouteNames.BUTTON_8,
    component: Button8thPage
  },
  {
    path: '/ninth_button',
    name: RouteNames.NINTH_BUTTON,
    component: NinthButtonPage
  },
  {
    path: '/thirteenth_button',
    name: RouteNames.THIRTEENTH_BUTTON,
    component: ThirteenButtons
  },
  {
    path: '/button_1',
    name: RouteNames.BUTTON_1,
    component: FirstButtonPage
  },
  {
    path: '/tenth_button',
    name: RouteNames.TENTH_BUTTON,
    component: TenthButtonPage
  },
  {
    path: '/eleventh-button',
    name: RouteNames.ELEVENTH_BUTTON,
    component: EleventhPage
  },
  {
    path: '/fourth_button',
    name: RouteNames.FOURTH_BUTTON,
    component: FourthButtonPage
  },
  {
    path: '/sixth_button',
    name: RouteNames.SIXTH_BUTTON,
    component: ButtonSixthPage
  },
  {
    path: '/twelfth_button',
    name: RouteNames.TWELFTH_BUTTON,
    component: TwelfthButtonPage
  },
  {
    path: '/fourteenth_button',
    name: RouteNames.FOURTEENTH_BUTTON,
    component: FourteenthButtonPage
  },
  {
    path: '/third_button',
    name: RouteNames.THIRD_BUTTON,
    component: ThirdButtonPage
  },
  {
    path: '/fifth_button',
    name: RouteNames.FIFTH_BUTTON,
    component: FifthButtonPage
  },
  {
    path: '/seventh_button',
    name: RouteNames.SEVENTH_BUTTON,
    component: SeventhButtonPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
