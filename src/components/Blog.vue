<template>
  <div  v-for="(section, index) in Object.keys(entries)" :key="index">
  <div class="blog-container"  v-for="entry in entries[section]" :key="entry.id" >
    <div class="blog-square">
      <h3 class="blog-title">{{entry.title}}</h3>
      <p class="blog-description">{{entry.description}}</p>
      <div class="button-box">
                <a @click="$router.push({name: entry.id})" target="_" class="blog-button">Read More</a>
            </div>
     </div>
   </div>
  </div>
</template>

<script>
import BLOGENTRIES from '../static/data/blogs.json'

export default {
  computed: {
    entries() {
      return BLOGENTRIES
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans');

.blog-container{
  display: flex;
  justify-content: center;
  padding-top: 20px
}


.blog-title{
  text-align: left;
  padding-left: 30px;
  font-family: 'Merriweather', serif;
  font-size: 24px;
}
.blog-description{
 text-align: justify;
 padding-left: 30px;
 padding-right: 30px;
 font-family: 'Open Sans', sans-serif;
 font-size: 12px;
 color: #6c757d;
 line-height: 18px;
 max-width: 35rem;
}
.button-box{
  margin: 5px;
  float: right;
}
.blog-button {
    background-color: #3EDD84;
    color: white;
    width: 10vw;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    cursor: pointer;
    font-family: 'merriweather';
}

@media (max-width: 600px) {
  .blog-container {
    padding: 0;
    padding-top: 10px;
  }

}

</style>