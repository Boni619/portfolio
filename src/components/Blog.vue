<template>
<!--   <div class="home">
    <h1 class="headline center">Boni's Blog</h1>
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <h2 class="center">{{section}}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({name: entry.id})">
              {{entry.title}}
              <span class="subtitle">{{entry.date}}</span>
            </h3>
            <p>{{entry.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <section class="project-area">

<div class="container">

<div class="page-header">
  <h2>2019</h2>
</div>
<div class="row mx-auto">
  <div class="col-md-8">
    <article class="mt-5">
      <header>
        <h4>
          Blog title</h4>
      </header>
      <div class="entry-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid fuga dolorum est ab fugit, eveniet quam minus reiciendis harum accusamus a velit, vero impedit, dolor. Sapiente architecto non quo.</p>
        <a href="#" class="btn btn-primary">Read More <span class="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a>
      </div>
    </article>

    <article  class="mt-5">
      <header>
        <h4>
          Blog title</h4>
      </header>
      <div class="entry-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid fuga dolorum est ab fugit, eveniet quam minus reiciendis harum accusamus a velit, vero impedit, dolor. Sapiente architecto non quo.</p>
        <a href="#" class="btn btn-primary">Read More <span class="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a>
      </div>
    </article>

  <!--   <nav>
      <ul class="pagination">
        <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
        <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
      </ul>
    </nav>
 -->

  </div>
  <aside class="col-md-4 mt-4">

    <div class="card mb-3">
      <h3 class="card-header mb-3">Join our Newsletter</h3>
      <form class="form-horizontal">
        <div class="form-group">
          <div class="col-sm-12">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-12">
            <button type="submit" class="btn btn-primary">Join Us</button>
          </div>

        </div>
      </form>

    </div>

    <h3>Recent Posts</h3>
    <div class="list-group  mb-3">
      <a href="#" class="list-group-item active">
        <h4 class="list-group-item-heading">List group item heading</h4>
        <p class="list-group-item-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio eum &hellip;
        </p>
      </a>
      <a href="#" class="list-group-item">
        <h4 class="list-group-item-heading">List group item heading</h4>
        <p class="list-group-item-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio eum &hellip;
        </p>
      </a>
      <a href="#" class="list-group-item">
        <h4 class="list-group-item-heading">List group item heading</h4>
        <p class="list-group-item-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio eum &hellip;
        </p>
      </a>
      <a href="#" class="list-group-item">
        <h4 class="list-group-item-heading">List group item heading</h4>
        <p class="list-group-item-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio eum &hellip;
        </p>
      </a>
    </div>






<div class="container">
<h3>Follow Us</h3>
<div class="social">
<a href=""><i class="fa fa-3x fa-facebook-square"></i></a>
<a href=""><i class="fa fa-3x fa-twitter-square"></i></a>
<a href=""><i class="fa fa-3x fa-linkedin-square"></i></a>
<a href=""><i class="fa fa-3x fa-google-plus-square"></i></a>
</div>

</div>



  </aside>
</div>
</div>
        </section>
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