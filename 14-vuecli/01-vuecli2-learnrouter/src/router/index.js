//配置路由相关的信息
//导入路由
import VueRouter from 'vue-router';
import Vue from 'vue';

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

/* 懒加载 */
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')

//1.通过vue.use(插件),安装插件
Vue.use(VueRouter);

//2.创建VueRouter对象
const routes= [
  {
    /* 默认首页 */
    path: '',
    /* 重定向*/
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    /* meta元数据(描述数据的数据)*/
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        /* 子路由不需要加/,会在父路由后面自动拼接/ */
        path: 'news',
        component: HomeNews,
        meta: {
          title: '新闻'
        }
      },
      {
        path: 'message',
        component: HomeMessage,
        meta: {
          title: '消息'
        }
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    /* 路由内的前置守卫*/
    beforeEnter: (to,from,next) => {
      //console.log('路由独享守卫');
      next();
    }
  },
  {
    /* 配置成动态路由*/
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

const router = new VueRouter({
  //配置路由和组件之间的映射关系
  routes,
  /* 将默认的hash模式转化为H5的history模式*/
  mode: 'history',
  linkActiveClass: 'active'
})

/* 全局守卫 */
/* 前置守卫(hook) 路由跳转前调用这个回调函数 */
/* 路由导航 to对象里面会带着当前路由里面的信息 */
router.beforeEach((to, from, next) => {
  /* 从一个路由跳转到另一个路由就会执行这个函数 */
  /* 从from路由跳转到to路由 */
  /* document.title = to.meta.title; 如果有嵌套关系的化拿到的数据不准确,需要去matched数组中拿*/
  document.title = to.matched[0].meta.title;
  //console.log('beforeEach');
  //console.log(to)
  next(); //必须调用next
})

/* 后置钩子(hook) 路由跳转完成后调用这个回调函数 */
/* 不需要调用next函数 */
router.afterEach((to, from) => {
  //console.log('afterEach');
})


//3.将router对象挂载到vue实例中
export default router
