import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../components/Blog.vue'
import Home from '../components/Home.vue'
import BlogEntries from '../static/data/blogs.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    meta: { hideLink: true },
    component: () => import('../components/BlogDescription.vue'),
    children
  }
})

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blog', name: 'Blog', component: Blog, meta: { hideLink: true } },
  ...blogRoutes
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
