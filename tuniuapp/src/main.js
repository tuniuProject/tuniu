import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import common from './common/index';
import "mint-ui/lib/style.css"
import 'vant/lib/index.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(common);
Vue.prototype.$ELEMENT = { size:'small', zIndex: 3000 };
Vue.config.productionTip = false;
import { DatePicker ,TimePicker} from 'element-ui';
Vue.component(TimePicker.name, TimePicker)
Vue.component(DatePicker.name,DatePicker)
import {
  Lazyload
} from "mint-ui";
Vue.use(Lazyload); //懒加载插件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
