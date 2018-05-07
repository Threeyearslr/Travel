// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue';
import fastclick from 'fastclick';
import App from './App';
import router from './router';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';

Vue.config.productionTip = false;
fastclick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router:router,
  router,
  //   第一个App是名字，第二个是类型,如果是一样的就省略一个
  components: { App },
  template: '<App/>',
});
// 路由就是根据网址的不同返回不同的内容给用户
