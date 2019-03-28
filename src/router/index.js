import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/views/admin'
import lazydiv from '@/views/lazydiv'
// 二级路由
import personnel_Management from '@/views/user/personnel_Management'
import user_Management from '@/views/user/user_Management'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/admin/',
      name: 'admin',
      component: admin,
      children:[
        {
          path: 'personnel_Management',
          name: 'personnel_Management',
          component: personnel_Management,
          beforeEnter: (to, from, next) => {
            console.log('哈哈你即将到了'+to)
            next()
          }
        },
        {
          path: 'user_Management',
          name: 'user_Management',
          component: user_Management
        }
      ]
    },
    {
      path: '/lazydiv',
      name: 'lazydiv',
      component:resolve => require(['@/views/lazydiv'], resolve),//懒加载
    }

  ]
})
