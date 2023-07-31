<template>
  <NavBar/>
  <main class="site-main" id="home_page">
  <router-view></router-view>
  </main>
  <Footer/>
  <button @click="scrollToTop" id="scroll-btn" title="Go to top"><i class="fas fa-arrow-up"></i></button>
</template>
<style>
 @import './assets/css/style.css';
</style>
<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }, data() {
      return {
        scTimer: 0,
        scY: 0,
      }
   },
   created(){
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scroll-btn").style.display = "block";
      }
      else {
      document.getElementById("scroll-btn").style.display = "none";
      }
    }
   },
   mounted() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
    },
    methods: {
      handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      scrollToTop() {
       document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox and Opera
   }
    },
}
</script>
