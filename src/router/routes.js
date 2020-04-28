
const routes = [
  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
      
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') }
      
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') }
      
    ]
  },
  {
    path: '/posts',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: "", component: () => import("pages/posts/index.vue")},
      { path: "create", component: () => import("pages/posts/create.vue")},
      { path: ":id", component: () => import("pages/posts/view.vue")},
      { path: "edit/:id", component: () => import("pages/posts/edit.vue")},
    ]
  },
  {
    path: '/category',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: "", component: () => import("pages/category/index.vue")},
      { path: "create", component: () => import("pages/category/create.vue")},
      { path: ":id", component: () => import("pages/category/view.vue")},
      { path: "edit/:id", component: () => import("pages/category/edit.vue")},
    ]
  },
  {
    path: '/comments',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: "", component: () => import("pages/comments/index.vue")},
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
