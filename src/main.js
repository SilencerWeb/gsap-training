import Vue from 'vue';
import { Avatar, Card, Icon } from 'ant-design-vue';

import App from './App.vue';

import 'ant-design-vue/dist/antd.css';


Vue.use(Avatar);
Vue.use(Card);
Vue.use(Icon);


Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');
