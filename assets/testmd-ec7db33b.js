import{n as t,p as o,I as n}from"./@vue-ba56d1e4.js";const a={class:"markdown-body"},i=n(`<h1>Creating a Simple Blog Using Vue with Markdown</h1><h4>March 18, 2019</h4><p>I’m not a ‘natural’ frontend developer, learning vue and re-learning Javascript with my Java knowledge came as a challenge. Not to mention all those bundlers, builders, like webpack, gulp, grunt and other weird noises that adds to the overall complexitiy of learning modern web frameworks. But if there’s one thing that helped me in learning new technologies that is, to just jump right in and build little projects. Teaching is also a widely accepted technique that will greatly help you in learning. It doesn’t mean that you have to gather a huge audience that will listen to you teach something. Sometimes, the audience you need is just yourself. Write what you’ve learn with the intention of teaching it to your old (or future) stupid self. It’s kinda weird and paradoxical I know but just roll with me on this.</p><p>With that mind, exactly a year ago, I decided to add a blog section on my personal website just for fun. I just ported my previous portfolio to Vue and I was wondering what’s the most simplest way to add blogging functionality to it. I know, some people will probably frown at the idea of using a frontend framework to develop a measly portfolio website in the first place. But if your goal is to really just getting yourself up and running with a framework, I’d argue that using it to build your portfolio website is a good start. It’s a simple project that will really familiarize you with the basics and will give you enough motivation to complete it.</p><p>So that’s what I did. This post tells the story of how I set on adding a blog functionality on my Vue portfolio website. My thought-process, decisions, approach and what-nots.</p><p>I know from the start that I want it to be really simple. I know ButterCMS is good and all but as much as possible I don’t want to introduce that much complexity, it’s just a simple personal website after all. What I really want is as straightforward as hard-coding and commiting a new webpage everytime I write a new post but still simple enough that I wouldn’t worry about writing in an HTML markup. That’s where markdown comes in. Markdown is a really popular lightweight markup language that just fits the bill.</p><p>It’s decided then. At the center of it all, what I want to accomplish is just two things:</p><ul><li>Be able to write my blogs in markdown</li><li>Vue must be able to display these markdows as a regular html page</li></ul><p>Essentially, to accomplish both, I just have to figure out how Vue can interpret markdown. Now, I’m not an expert with webpack, heck when I built my website years ago, I don’t even know how to configure webpack myself, I was putting that off in favor of learning whatever framework I was learning at the moment. But being exposed with it for some time, I was able to pick up some concepts and context of what it does. In this case, I know that what I need is a webpack loader that can interpret markdown. Much like how <code>.vue</code> files comes out fine after passing through webpack because of <code>vue-loader</code>.</p><h3>Vue-Markdown-Loader</h3><p>Literally the first thing I did after that realization was to google <em>“vue markdown loader”</em>. And <a href="https://github.com/QingWei-Li">QingWei-Li</a>’s <a href="https://github.com/QingWei-Li/vue-markdown-loader">vue-markdown-loader repo</a> comes back as the first result. The documentation is pretty straightforward, I added this code over at my <code>vue.config.js</code>:</p><pre><code class="language-javascript">module.exports = {
  chainWebpack(config){
    config.module.rule(&#39;md&#39;)
      .test(/\\.md/)
      .use(&#39;vue-loader&#39;)
      .loader(&#39;vue-loader&#39;)
      .end()
      .use(&#39;vue-markdown-loader&#39;)
      .loader(&#39;vue-markdown-loader/lib/markdown-compiler&#39;)
      .options({
        raw: true
      })
  }
}
</code></pre><p>Like how <code>vue-loader</code> makes <code>.vue</code> files possible, <code>vue-markdown-loader</code> makes <code>.md</code> work within Vue. In essence, markdowns can now be interpreted as a Vue component. To test this, within my <code>components/</code> directory, I created the following <code>foo.md</code>:</p><pre><code class="language-markdown"># This is a test
## Heading 2
_lorem ipsum_ dolor __amet__
</code></pre><p>Imported it as a component on <code>App.vue</code> and used it within the template.</p><pre><code>&lt;template&gt;
  &lt;div id=&quot;app&quot;&gt;
    &lt;foo /&gt;
    ...
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import Foo from &#39;@/components/foo.md&#39;
  export default {
    components: { Foo },
    ...
  }
&lt;/script&gt;
</code></pre><p>Doing a quick <code>yarn serve</code> and visiting <code>localhost</code>, viola! It works!</p><p><img src="https://www.josephharveyangeles.com/statics/images/blogs/2019/vue-markdown-blog/foo.png" alt="foo"></p><p>At this point, we’ve verified that our Vue project can now understand and render markdown. We can now write our blogs in <code>.md</code> and just reference them wherever we like. And since it’s a component there’s nothing stopping us from using it as a route component, say in our <code>router.js</code>:</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;
import Router from &#39;vue-router&#39;
import Home from &#39;./views/Home.vue&#39;
import Foo from &#39;./components/foo.md&#39;

Vue.use(Router)

export default new Router({
  mode: &#39;history&#39;,
  base: ({}).BASE_URL,
  routes: [
    { path: &#39;/&#39;, name: &#39;home&#39;, component: Home },
    { path: &#39;/foo&#39;, name: &#39;foo&#39;, component: Foo }
  ]
})
</code></pre><p>Now everytime we visit <code>/foo</code> it will render the markdown contents of our <code>foo.md</code>. Pretty neat, right? This works but wouldn’t it be better if we could simplify the process of adding a new post a bit? We could create a separate file and put all blog entries in there, and that’s the file that we update whenever we have a new blog post — good ol’ indirection.</p><pre><code class="language-json">[
  &quot;foo&quot;,
  &quot;another-post&quot;,
]
</code></pre><p>We’ll have to change the way we register our route components a bit. We’ll have to build those routes programmatically and make use of <a href="https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components">dynamic component registration</a> using dynamic imports:</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;
import Router from &#39;vue-router&#39;
import Home from &#39;./views/Home.vue&#39;
import Blogs from &#39;./statics/blogs.json&#39;

Vue.use(Router)

export default new Router({
  mode: &#39;history&#39;,
  base: ({}).BASE_URL,
  routes: [
    { path: &#39;/&#39;, name: &#39;home&#39;, component: Home },
    ...Blogs.map(entry =&gt; ({
      path: \`/\${entry}\`,
      name: entry,
      component: () =&gt; import(\`./markdowns/\${entry}.md\`)
    }))
  ]
})
</code></pre><p>Notice in the above code, we are assigning the markdown filename to both <code>path</code> and <code>name</code>. And for better structure, we’re placing all our markdowns inside it’s own directory. In this setup, we’ll never have to mess with <code>router.js</code> again whenever we add a new blog post. Now, the only thing left to do is to create actual links that will point to them.</p><h3>Putting it all together</h3><p>Using what we’ve learned, I’ve put things together and created a working demo on this <a href="https://vue-markdown-blog.netlify.com">link</a>. You can also check out the code in this <a href="https://github.com/josephharveyangeles/vue-markdown-blog">repository</a>. There our some minor changes compared to our previous experiments.</p><p>First, let’s look at the directory structure:</p><p><img src="https://www.josephharveyangeles.com/statics/images/blogs/2019/vue-markdown-blog/filestruc.png" alt="file structure"></p><p>Notice that I’ve created subdirectories <code>2019</code> and <code>stories</code> which refers to different sections of the blog. This changes how we structure our routes a little but will greatly improve our overall UI.</p><p>Looking at <code>statics/data/blogs.json</code>:</p><pre><code class="language-json">{
  &quot;2019&quot;: [
    {
      &quot;id&quot;: &quot;vue-markdown-blog&quot;,
      &quot;date&quot;: &quot;March 10, 2019&quot;,
      &quot;title&quot;: &quot;Creating a Simple Blog using Vue + Markdown&quot;,
      &quot;description&quot;: &quot;Simple and neat way to add a blogging feature to add on your website.&quot;
    }
  ],
  &quot;stories&quot;: [
    {
      &quot;id&quot;: &quot;maud-sparrow&quot;,
      &quot;date&quot;: &quot;April 21, 2018&quot;,
      &quot;title&quot;: &quot;Maud Sparrow and the Four Wicked Horses&quot;,
      &quot;description&quot;: &quot;Once upon a time there was a generous girl called Maud Sparrow. She was on the way to see her Albert Connor, when she decided to take a short cut through Spittleton Woods...&quot;
    },
    {
      &quot;id&quot;: &quot;nico-borbaki&quot;,
      &quot;date&quot;: &quot;May 5, 2018&quot;,
      &quot;title&quot;: &quot;Nefarious Nico Borbaki&quot;,
      &quot;description&quot;: &quot;Nico Borbaki looked at the enchanted newspaper in his hands and felt conflicted...&quot;
    },
    {
      &quot;id&quot;: &quot;jack-butterscotch&quot;,
      &quot;date&quot;: &quot;June 10, 2018&quot;,
      &quot;title&quot;: &quot;Jack Butterscotch | The Dragon&quot;,
      &quot;description&quot;: &quot;In a hole there lived a tender, silver dragon named Jack Butterscotch. Not an enchanted red, stripy hole, filled with flamingos and a cold smell, nor yet a short, hairy, skinny hole with nothing in it to sit down on or to eat: it was a dragon-hole, and that means happiness...&quot;
    },
    {
      &quot;id&quot;: &quot;tiny-arrow-wars&quot;,
      &quot;date&quot;: &quot;July 27, 2018&quot;,
      &quot;title&quot;: &quot;Galactic Tiny Arrow Wars&quot;,
      &quot;description&quot;: &quot;A long, long time ago in a tiny, tiny galaxy...&quot;
    },
    {
      &quot;id&quot;: &quot;gargoyle-club&quot;,
      &quot;date&quot;: &quot;August 7, 2018&quot;,
      &quot;title&quot;: &quot;Club of Gargoyle&quot;,
      &quot;description&quot;: &quot;Molly Thornhill suspected something was a little off when her creepy daddy tried to club her when she was just six years old. Nevertheless, she lived a relatively normal life among other humans.&quot;
    },
    {
      &quot;id&quot;: &quot;simon-plumb&quot;,
      &quot;date&quot;: &quot;September 20, 2018&quot;,
      &quot;title&quot;: &quot;Simon Plumb and the Two Kind Gerbils&quot;,
      &quot;description&quot;: &quot;Once upon a time there was a virtuous boy called Simon Plumb. He was on the way to see his Annie Superhalk, when he decided to take a short cut through Thetford Forest...&quot;
    }
  ]
}
</code></pre><p>Instead of an array of strings, I’ve converted it to an object. Each key refers to the blog section which also matches its subdirectory. The object array under each key refers to the actual blog entry. There are bunch of additional properties like <code>date</code> that we’ll use in the UI but the important bit is the <code>id</code> which refers to the actual markdown component.</p><p>(Also, you can put everything in a <code>js</code> file instead of <code>json</code>. It’s a matter of personal preference. Putting it in a <code>js</code> file will probably make your production build much smaller after webpack does it thing. But saving it in a <code>json</code> file under <code>statics</code> will act as a simple REST endpoint where I can issue <code>GET</code> requests from, which is useful if I end up integrating it to some other UI in the future.)</p><p>I’ve implemented all those additional changes to be able to display a UI like this:</p><p><img src="https://www.josephharveyangeles.com/statics/images/blogs/2019/vue-markdown-blog/home.png" alt="home"></p><p>The last thing we need to do is to adjust <code>router.js</code>. What it does is basically just map those blog sections into route objects. Entries under each section becomes the child of their respective route object. Basically, we’ll be able to visit our blog entries using paths in this format: <code>\${section}/\${blog entry}</code>, eg: <code>2019/vue-markdown-blog</code>.</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;
import Router from &#39;vue-router&#39;
import Home from &#39;./views/Home.vue&#39;

Vue.use(Router)

import BlogEntries from &#39;./statics/data/blogs.json&#39;;

const blogRoutes = Object.keys(BlogEntries).map(section =&gt; {
  const children = BlogEntries[section].map(child =&gt; ({
    path: child.id,
    name: child.id,
    component: () =&gt; import(\`./markdowns/\${section}/\${child.id}.md\`)
  }))
  return {
    path: \`/\${section}\`,
    name: section,
    component: () =&gt; import(&#39;./views/Blog.vue&#39;),
    children
  }
})

export default new Router({
  mode: &#39;history&#39;,
  base: ({}).BASE_URL,
  routes: [
    {
      path: &#39;/&#39;,
      name: &#39;home&#39;,
      component: Home
    },
    ...blogRoutes
  ]
})
</code></pre><p>This setup introduces another key improvement to our blog: messing with the styling. Notice that <code>Blog.vue</code> acts as a wrapper layout component of our blog entries. It contains the following code:</p><pre><code class="language-javascript">&lt;template&gt;
  &lt;div class=&quot;blog&quot;&gt;
    &lt;router-view /&gt;
    &lt;router-link to=&quot;/&quot; tag=&quot;a&quot; class=&quot;back&quot;&gt;&amp;laquo; Back&lt;/router-link&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><h4>Styling</h4><p>We now have the opportunity to style the rendered markdown however we like. The key here is to target what will eventually be displayed inside <code>&lt;router-view /&gt;</code> using a <code>/deep/</code> selector. See the following:</p><pre><code class="language-javascript">&lt;template&gt;
  &lt;div class=&quot;blog&quot;&gt;
    &lt;router-view /&gt;
    &lt;router-link to=&quot;/&quot; tag=&quot;a&quot; class=&quot;back&quot;&gt;&amp;laquo; Back&lt;/router-link&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;style lang=&quot;scss&quot; scoped&gt;
.blog {
  max-width: 50vw;
  margin: 10rem auto;
  /deep/ {
    h1 {
      font-size: 3rem;
      margin-bottom: .2rem;
      color: #42b883;
    }
    h4 {
      margin-bottom: 3rem;
      color: #35495e;
    }
  }
}
&lt;/style&gt;
</code></pre><p>Check out <a href="http://markedstyle.com/styles">markedstyle.com</a> for more markdown styling ideas. You can even import an external markdown style just don’t forget to wrap it properly within a <code>.blog /deep/</code> selector. ie:</p><pre><code class="language-scss">/** external style **/
.blog /deep/ {
 /** paste external markdown style here **/
}
</code></pre><p>Bit of a warning though, as much as possible one should avoid using <code>/deep/</code> because it somehow defeats the purpose of <code>scoped</code> and it’s been deprecated by Chrome. Vue-loader just still supports it, that’s why it works. But I’d argue that this is one those cases where it’s useful. We don’t want to pollute the global css scope so we’d like to contain styling within <code>Blog.vue</code>’s <em>children</em> so we use <code>scoped</code> and <code>/deep/</code> together. (Although, if someone more knowledgeable has a better solution for this I’ll gladly take it.)</p><p>And that’s it! A simple blogging feature for your website without using any other 3rd-party service. Just plain and simple vue.</p><h3>Further Improvements</h3><p>If you want to take it a step further, you can add page metas using all those additional fields inside blog entries, <code>date</code>, <code>title</code>, <code>description</code>, etc. This would play nicely if you’ve implemented some sort of social sharing as well. You can check out my website to see this in action: <a href="https://www.josephharveyangeles.com">www.josephharveyangeles.com</a></p><h3>Useful Links</h3><ul><li><a href="https://vue-markdown-blog.netlify.com">Demo</a></li><li><a href="https://github.com/josephharveyangeles/vue-markdown-blog">Project Repository</a></li><li><a href="https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components">Dynamic Components</a></li><li><a href="https://cli.vuejs.org/guide/webpack.html#simple-configuration">vue-cli webpack guide</a></li><li><a href="https://github.com/QingWei-Li/vue-markdown-loader">vue-markdown-loader</a></li><li><a href="https://cli.vuejs.org/guide/css.html#postcss">Working with CSS Modules</a></li><li><a href="http://markedstyle.com/styles">Markdown styles</a></li></ul>`,51),s=[i],h={__name:"testmd",setup(r,{expose:e}){return e({frontmatter:{}}),(u,d)=>(t(),o("div",a,s))}};export{h as default};
