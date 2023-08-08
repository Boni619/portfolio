<template>
    <header class="header_area">
        <div class="main-menu">
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="top-nav-fixed">
              <router-link :to="{name: 'Home' }" class="navbar-brand">
                    <img src="@/assets/img/logo/logo.png" style="width: 44px; object-fit: cover; border-radius: 50%;" alt="logo">
                </router-link>
                <input class="toggle mobile-show" type="checkbox" v-model="toggle"  @click="toggleTheme">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i class="fas fa-stream"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="mr-auto"></div>
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                          <router-link :to="{name: 'Home' }" class="nav-link">Home</router-link>
                            <!-- <a class="nav-link" @click="scroll('home_page')">Home</a> -->
                        </li>
                        <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
                            <a class="nav-link"  @click="scroll('experience')">EXPERIENCE</a>
                        </li>
                        <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
                            <a class="nav-link" @click="scroll('education')">EDUCATION</a>
                        </li>
                        <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
                            <a class="nav-link"   @click="scroll('skills')">SKILLS</a>
                        </li>
                        <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
                            <a class="nav-link" @click="scroll('certificates')">Certificates</a>
                        </li>
                        <li class="nav-item">
                          <router-link :to="{name: 'Blog'}" class="nav-link">Blog</router-link>
                        </li>
                        <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
                            <a class="nav-link" rel="noreferrer" href="https://github.com/boni619"
                                target="_blank">Projects</a>
                        </li>
                        <li class="nav-item">
                            <input class="toggle desktop-show" type="checkbox" v-model="toggle"   @click="toggleTheme">
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: 'NavBar',

  data(){
    return {
        theme: localStorage.getItem("portfolio-theme") ? localStorage.getItem("portfolio-theme") : 'light',
        toggle:true,
    }
  },
 created() {
       this.onLoadTheme()
  },
  methods:{
    toggleBodyClass(addRemoveClass, className) {
    const el = document.body;
    if (addRemoveClass === 'addClass') {
      el.classList.add(className);
    } else {
      el.classList.remove(className);
    }
  },
    toggleTheme(){
      if (this.theme == 'light') {
        this.toggleBodyClass('addClass', 'dark');
          this.theme = 'dark';
         localStorage.setItem("portfolio-theme", 'dark');
          }
        else {
          this.toggleBodyClass('removeClass', 'dark');
            this.theme = 'light';
            localStorage.setItem("portfolio-theme", 'light');
        }
    },
    scroll(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    },
    onLoadTheme(){
      if (this.theme == 'light') {
          this.toggle = true;
        } else {
          this.toggle = false;
        }
        document.addEventListener('DOMContentLoaded', () => {
            if (this.theme == 'light') {
              this.toggleBodyClass('removeClass', 'dark');
            }
            else {
              this.toggleBodyClass('addClass', 'dark');
            }
        });
    },
  }
}
</script>