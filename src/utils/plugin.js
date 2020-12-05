import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dayjs from 'dayjs'
Vue.use(ElementUI)

Vue.filter('dateFormat', function ( value, formatStr ) {
  
  return dayjs(value).format(formatStr)
})