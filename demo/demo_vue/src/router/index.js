import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestPage from '@/components/TestPage'
import tree from '@/components/tree/tree'
import text1 from '@/components/tree/text1'
import form from '@/components/tree/form'
import tableTest from '@/components/tree/tableTest' 
//@表示默认从SRC的目录下面去查找


Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testPage',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/tree/text1',
      name: 'text1',
      component: text1
    },
    {
      path: '/tree/form',
      name: 'form',
      component: form
    },
    {
      path: '/tree/tableTest',
      name: 'tableTest',
      component: tableTest
    }
  ]
})
