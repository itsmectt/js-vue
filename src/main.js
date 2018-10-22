// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.filter("fomatMoney",(val)=>{
  return "¥ "+ val.toFixed(2);
});
Vue.filter("money",(val,type)=>{
  return "¥ "+ val.toFixed(2)+type;
});
new Vue({
  el: '#app',
  router,
  components:{ App },
  render:h => h( App ),
})

