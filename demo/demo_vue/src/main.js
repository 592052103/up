// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'




Vue.prototype.axios = axios
//axios.defaults.baseURL= '/api'

//添加请求拦截器
// axios.interceptors.request.use(function(config){
//   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//   if(config.method === 'post'){
//     config.data = qs.stringify({
//       ...config.data //后台数据接收这块需要以表单形式提交数据，而axios中post默认的提交是json数据,所以这里选用qs模块来处理数据，也有其他处理方式，但个人觉得这个方式最简单好用
//     })
//   }
//   return config;
// },function(error){
//   loadinginstance.close()
//   return Promise.reject(error);
// })

//添加响应拦截器
// axios.interceptors.response.use(function(response){
//   return response;
// },function(error){
//   return Promise.reject(error)
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})

