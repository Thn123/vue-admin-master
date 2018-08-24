import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// import $ from 'jquery'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.min.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'
//import './assets/theme/theme-green/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import routes from './routes.js'
import Mock from './mock/index.js'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

//导航守卫
router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)//render函数是渲染一个视图，然后提供给el挂载，如果你没有加那么就等于没有视图给el挂载，自然什么都没有了。
}).$mount('#app')

