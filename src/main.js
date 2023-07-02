import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "devicon/devicon.min.css"
window.$ = window.jQuery = require('jquery');
import "bootstrap"
require('@/assets/css/resume.min.css')
require('@/assets/js/resume.js')

createApp(App).mount('#app')
