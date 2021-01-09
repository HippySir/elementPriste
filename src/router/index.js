import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

Router.prototype.togo = function (path) {
  this.isleft = true;
  this.isright = false;
  this.push(path);
}
Router.prototype.goRight = function (path) {
  this.isright = true;
  this.isleft = false;
  this.push(path);
}
Router.prototype.goBack = function () {
  this.isright = true;
  this.isleft = false;
  this.go(-1);
}
Router.prototype.togoback = function () {
  this.isright = true;
  this.isright = false;
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld.vue'], resolve)
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/pages/Home.vue'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/pages/Login.vue'], resolve)
    }
  ]
})
