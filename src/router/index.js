import Vue from 'vue'
import VueRouter from 'vue-router'
const home=()=>import('../views/Home')
const user=()=>import('../views/User')
const mall=()=>import('../views/Mall')
const pageOne=()=>import('../views/PageOne')
const pageTwo=()=>import('../views/PageTwo')
const main=()=>import('../views/Main')
const login=()=>import('../views/Login')
Vue.use(VueRouter)

//1.创建路由组件
//2.将路由与组件进行映射
//3.创建router实例
const routes=[
    //主路由
    {
        path:'/',
        component:main,
        redirect:'home',//重定向到home
        children:[
            {
                path:'home',component:home
            },
            {
                path:'user',component:user
            },
            {
                path:'mall',component:mall
            },
            {
                path:'page1',component:pageOne
            },
            {
                path:'page2',component:pageTwo
            },
        ]
    },
    {
        path:'/login',
        name:'login',
        component:login
    }
    
    
]
 const router=new VueRouter({
    routes//缩写 相当于routes:routes
 })
 

 export default router