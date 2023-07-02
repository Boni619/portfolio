<template>
 <div class="container-fluid p-0">
<About></About>
<Experience></Experience>
<Education></Education>
<Skills></Skills>
<Interests></Interests>
<Certification></Certification>
 </div>
</template>

<script>
import About from './About.vue'
import Experience from './Experience.vue'
import Education from './Education.vue'
import Skills from './Skills.vue'
import Interests from './Interests.vue'
import Certification from './Certification.vue'
export default {
  name: 'Home',
 components: {
    About,
    Experience,
    Education,
    Skills,
    Interests,
    Certification
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
