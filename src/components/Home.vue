<template>
<About></About>
<Experience></Experience>
<Education></Education>
<Skills></Skills>
<Certification></Certification>
</template>

<script>
import About from './About.vue'
import Experience from './Experience.vue'
import Education from './Education.vue'
import Skills from './Skills.vue'
import Certification from './Certification.vue'
export default {
  name: 'HomeIndex',
 components: {
    About,
    Experience,
    Education,
    Skills,
    Certification,
  },
}
</script>
