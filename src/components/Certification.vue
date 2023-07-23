<template>
   <section class="project-area" id="certificates">
            <div class="container">
                <div class="project-title pb-5">
                    <h3 class="text-uppercase title-text" style="font-size: 35px;text-align: center;">Certificates &
                        Awards</h3>
                </div>

                <div class="row grid">
                    <div class="col-lg-4 col-md-6 col-sm-12 element-item globant">
                        <div class="our-project">
                            <div class="img">
                                <a class="test-popup-link" @click="show('src/assets/img/certificates/javascript1.png')">
                                    <img src="@/assets/img/certificates/javascript1.png" alt="certificates-4" class="img-fluid" v-scrollanimation>
                                </a>
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">JavaScript(Basic)</h4>
                                <span class="text-secondary">Hackerrank</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 element-item globant">
                        <div class="our-project">
                            <div class="img">
                                <a class="test-popup-link" @click="show('src/assets/img/certificates/javascript2.png')">
                                    <img src="@/assets/img/certificates/javascript2.png" alt="certificates-2" class="img-fluid" v-scrollanimation>
                                </a>
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">JavaScript(Intermediate)</h4>
                                <span class="text-secondary">Hackerrank</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 element-item globant">
                        <div class="our-project">
                            <div class="img">
                                <a class="test-popup-link" @click="show('src/assets/img/certificates/freecodecamp.jpg')">
                                    <img src="@/assets/img/certificates/freecodecamp.jpg" alt="certificates-2" class="img-fluid" v-scrollanimation>
                                </a>
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">JavaScript Algorithms and Data Structures</h4>
                                <span class="text-secondary">FreeCodeCamp</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 element-item globant">
                        <div class="our-project">
                            <div class="img">
                                <a class="test-popup-link" @click="show('src/assets/img/certificates/html.jpg')">
                                    <img src="@/assets/img/certificates/html.jpg" alt="certificates-2" class="img-fluid" v-scrollanimation>
                                </a>
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">HTML5</h4>
                                <span class="text-secondary">NIIT</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
</template>
<style>
.before-enter {
   opacity: 0;
   transform: scale(.5) rotateZ(-25deg);
   transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}
</style>
<script>
export default {
  name: 'MyCertification',
  methods:{
    show(img) {
      console.log(img)
        this.$viewerApi({
          images: img.split(),
        })
      },
  }
}
</script>