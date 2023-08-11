import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueViewer from 'v-viewer'
import VueHighlightJS from 'vue3-highlightjs'
import { MotionPlugin } from '@vueuse/motion'
import AOS from 'aos'
import Vue3Lottie from 'vue3-lottie'
import ScrollAnimation from './directives/scrollAnimation'

import 'highlight.js/styles/default.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "devicon/devicon.min.css"
import "bootstrap"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'viewerjs/dist/viewer.css'

const app = createApp(App)
app.use(VueHighlightJS)
app.use(router)
app.use(MotionPlugin)
app.use(AOS)
app.use(VueViewer)
app.use(Vue3Lottie)
app.directive('scrollanimation', ScrollAnimation)
app.mount('#app')