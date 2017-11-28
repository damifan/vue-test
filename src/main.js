// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../theme/index.css'
import ElementUI from 'element-ui'

// 引用API文件
import api from './api/index'
import utils from './utils/index'
// 配置百度编辑器
import '../static/ue/ueditor.config.js'
import '../static/ue/ueditor.all.min.js'
import '../static/ue/lang/zh-cn/zh-cn.js'
import '../static/ue/ueditor.parse.min.js'
import '../static/js/jquery-3.2.1.min'

// 将API方法绑定到全局
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$utils = utils

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
