import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import "./api/mock"
import Router from 'vue-router'
import  Cookie from 'js-cookie'
//如果路由地址跳转相同,且没有捕获到错误，控制台始终会出现如图所示的警告
//解决方案如下
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) { 
   
  return originalPush.call(this, location).catch(err => err)
}
Vue.config.productionTip = false
Vue.use(ElementUI)
//添加全局前置导航守卫
router.beforeEach((to,from,next)=>{
  const token=Cookie.get('token')
  //token不存在说明用户未登陆，应跳转至登陆页面
  if(!token&& to.name!=='login'){
    next({name:'login'})
  }else if(token &&to.name=== 'login'){//token存在说明用户登陆 此时跳转至首页 
    next({name:'home'})
  }else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
