import App from '../App'

export default [
  {
    path: '/',
    component: App, //顶层路由，对应index.html
      //地址为空时跳转home页面
  },
  {
    path: '',
    redirect: '/hello'
  },
  {
    path: '/hello',
    component: () => import('@/pages/Hello')
  },
]
