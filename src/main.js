// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store/';

import plugins from './plugins';

Vue.config.productionTip = false;

plugins.forEach((plugin) => {
  store.dispatch('addPlugin', { plugin });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
