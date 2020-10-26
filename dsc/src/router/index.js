//定义路由模块
//需要导入  vue模块 和 vue-router
//vue-router 需要下载   cnpm install vue-router --save    保存到生产环境中，以后项目上线要用的
import Vue from "vue";
import VueRouter from "vue-router"

//使用
Vue.use(VueRouter)

//创建组件---新建.vue文件---导入文件(通常组件名称为大写字母开头)
import Home from "../views/Home/Home.vue"
import Category from "../views/Category/Category.vue"
import Search from "../views/Search/Search.vue"
import Cart from "../views/Cart/Cart.vue"
import Mine from "../views/Mine/Mine.vue"

//配置首页的子组件
import Index from "../views/Home/children/Index.vue"
import Ele from "../views/Home/children/Ele.vue"
import Person from "../views/Home/children/Person.vue"
import Box from "../views/Home/children/Box.vue"
import Phone from "../views/Home/children/Phone.vue"
import Computer from "../views/Home/children/Computer.vue"
import House from "../views/Home/children/House.vue"
import Face from "../views/Home/children/Face.vue"
import DemoVuex from "../views/DemoVuex/Demo.vue"

//配置个人中心的子组件
import Login from "../views/Mine/children/Login.vue"
import Register from "../views/Mine/children/Register.vue"
import Message from "../views/Mine/children/LoginMessage.vue"

//列表页面
import ListDetail from "../views/Category/components/ListDetail.vue"
import GoodsDetail from "../views/GoodsDetail/GoodsDetail.vue"
import SearchList from "../views/Search/SearchList.vue"

//配置路由
const routes = [{
    path: "/home",
    name: "home",
    component: Home,
    children: [{
            path: "index",
            component: Index
        },
        {
            path: "ele",
            component: Ele
        },
        {
            path: "person",
            component: Person
        },
        {
            path: "box",
            component: Box
        },
        {
            path: "phone",
            component: Phone
        },
        {
            path: "computer",
            component: Computer
        },
        {
            path: "house",
            component: House
        },
        {
            path: "face",
            component: Face
        }, {
            path: "/home",
            redirect: "/home/index"
        }
    ]
}, {
    path: "/category/:id",
    name: "category",
    component: Category
}, {
    path: "/search",
    name: "search",
    component: Search
}, {
    path: "/cart",
    name: "cart",
    component: Cart
}, {
    path: "/mine",
    name: "mine",
    component: Mine,
    // children: [{
    //         path: "login",
    //         component: Login
    //     },
    //     {
    //         path: "register",
    //         component: register
    //     },
    //     {
    //         path: "message",
    //         component: Message
    //     },
    //     {
    //         path: "/mine",
    //         redirect: "/mine/login"
    //     }
    // ]
}, {
    path: "/demovuex",
    name: "demovuex",
    component: DemoVuex
}, {
    path: "/login",
    name: "login",
    component: Login
}, {
    path: "/register",
    name: "register",
    component: Register
}, {
    path: "/message",
    name: "message",
    component: Message
}, {
    path: "/listdetail",
    name: "listdetail",
    component: ListDetail
}, {
    path: "/goodsdetail",
    name: "goodsdetail",
    component: GoodsDetail
}, {
    path: "/searchlist",
    name: "searchlist",
    component: SearchList
}, {
    path: "/",
    redirect: "/home"
}]

//实例化一个路由对象
const router = new VueRouter({
    routes: routes
})

//暴露
export default router