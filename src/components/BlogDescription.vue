<template>
  <div class="blog">
    <router-view></router-view>
    <router-link :to="{name:'Blog'}"  class="back">&laquo; Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogDescription',
}
</script>

<style>
.blog {
	 max-width: 50vw;
   margin-top: 6em;
   margin-left: auto;
   margin-right: auto;
}
 .back {
	 background-color: #42b883;
	 color: white;
	 margin-top: 5rem;
	 text-decoration: none;
	 padding: 10px 15px;
	 border: 1px solid currentColor;
	 border-radius: 0.5rem;
	 display: inline-block;
	 transition: all 0.3s ease;
}
 .back:hover {
	 background-color: transparent;
	 color: #42b883;
}
 h1 {
	 font-size: 3rem;
	 margin-bottom: 0.2rem;
	 color: #42b883;
}


 img {
	 max-width: 100%;
}
</style>
