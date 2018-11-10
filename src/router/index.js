import App from '../App'

export default [
  {
    path: '/',
    component: App,
    redirect: '/hello'
  },
  {
    path: '',
    redirect: '/hello'
  },
  {
    path: '/hello',
    component: () => import('@/pages/Hello')
  },
  {
    path: '/showtable',
    component:()=>import('@/pages/ShowTable')
  }
]
