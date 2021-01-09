// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import '../static/flexible'
import FastClick from 'fastclick'
// 点击事件右300ms的延迟的问题的解决
FastClick.attach(document.body)

Vue.use(Vant);

Vue.config.productionTip = false;
window.addEventListener('popstate', function () {
  router.togoback();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
