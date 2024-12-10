import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import weixiuyuan from '@/views/modules/weixiuyuan/list'
    import chongdianzhuang from '@/views/modules/chongdianzhuang/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chongdianzhuangbaoxiu from '@/views/modules/chongdianzhuangbaoxiu/list'
    import dianzhuangleibie from '@/views/modules/dianzhuangleibie/list'
    import config from '@/views/modules/config/list'
    import weixiuhuifu from '@/views/modules/weixiuhuifu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '充电常识',
        component: news
      }
      ,{
	path: '/weixiuyuan',
        name: '维修员',
        component: weixiuyuan
      }
      ,{
	path: '/chongdianzhuang',
        name: '充电桩',
        component: chongdianzhuang
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/chongdianzhuangbaoxiu',
        name: '充电桩报修',
        component: chongdianzhuangbaoxiu
      }
      ,{
	path: '/dianzhuangleibie',
        name: '电桩类别',
        component: dianzhuangleibie
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/weixiuhuifu',
        name: '维修回复',
        component: weixiuhuifu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
