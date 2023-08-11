<template>
  <div class="blog">
    <router-view></router-view>
    <router-link :to="{name:'Blog'}"  class="back">&laquo; Back</router-link>
  </div>
</template>

<script setup>

setTimeout(function(){
  const elements = document.querySelectorAll('pre');
    console.log(elements);
    elements.forEach((element) => {
  element.setAttribute('v-highlightjs','sourcecode');
    });
},1000)

</script>

<style>
.blog {
	 max-width: 50vw;
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

/* CSS Simple Pre Code */
pre {
    background: #fff;
    white-space: pre;
    word-wrap: break-word;
    overflow: auto;
}

pre.code {
    margin: 20px 25px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.08);
}

pre.code label {
    font-family: sans-serif;
    font-weight: normal;
    font-size: 13px;
    color: #444;
    position: absolute;
    left: 1px;
    top: 16px;
    text-align: center;
    width: 60px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    pointer-events: none;
}

pre.code code {
    font-family: "Inconsolata","Monaco","Consolas","Andale Mono","Bitstream Vera Sans Mono","Courier New",Courier,monospace;
    display: block;
    margin: 0 0 0 60px;
    padding: 15px 16px 14px;
    border-left: 1px solid #d9d9d9;
    overflow-x: auto;
    font-size: 13px;
    line-height: 19px;
    color: #444;
}

pre::after {
    content: "double click to selection";
    padding: 0;
    width: auto;
    height: auto;
    position: absolute;
    right: 18px;
    top: 14px;
    font-size: 12px;
    color: #aaa;
    line-height: 20px;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    transition: all 0.3s ease;
}

pre:hover::after {
    opacity: 0;
    visibility: visible;
}

pre.code-css code {
    color: #0288d1;
}

pre.code-html code {
    color: #558b2f;
}

pre.code-javascript code {
    color: #f57c00;
}

pre.code-jquery code {
    color: #78909c;
}

@media (max-width: 600px) {
  .blog {
	 max-width: 100%;
   margin: auto;
}

}
</style>
