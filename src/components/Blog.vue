<template>
  <div class="home">
    <h1 class="headline center">Boni's Blog</h1>
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <h2 class="center">{{section}}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
           <a> <h3 @click="$router.push({name: entry.id})">
              {{entry.title}}
            </h3>
          </a>
            <span class="subtitle">{{entry.date}}</span>
            <p>{{entry.description}}</p>
          </div>
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


.card {
    border: 1px solid var(--color-three);
    margin-bottom: 20px;
    transition: border 0.1s, transform 0.3s;
}

.card:hover {
    border: 1px solid var(--color-two);
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    cursor: pointer;
}

.card .card-body h2 {
    color: var(--color-two);
}

.card img:hover {
  opacity: 0.6;
}

.card-p {
    color: var(--color-three);
}

.card-p i {
    color: var(--color-two);
    margin-right: 8px;
}
</style>