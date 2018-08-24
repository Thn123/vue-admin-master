import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'

import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Main from './views/nav1/Main.vue'
import custDetail from './views/nav1/custDetail.vue'
import custGroup_detail from './views/nav1/custGroup_detail.vue'
import custGroup_edit from './views/nav1/custGroup_edit.vue'
import custGroup_label from './views/nav1/custGroup_label.vue'
import custLabel_detail from './views/nav1/custLabel_detail.vue'
import _custLabel_detail from './views/nav1/_custLabel_detail.vue'


import rankRule from './views/nav2/membership/rankRule.vue'
import rm from './views/nav2/membership/rm.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import integral from './views/nav2/integral .vue'
import store from './views/nav2/store.vue'
import index from './views/nav2/index.vue'
import index2 from './views/nav2/index.vue'
import  rankRuleEdit from './views/nav2/rankRuleEdit.vue'
import  setLevel  from './views/nav2/setLevel.vue'
import  AddIntegral  from './views/nav2/AddIntegral.vue'
import  addVipCard  from './views/nav2/addVipCard.vue'
import vipList from  './views/nav2/vipList.vue'

import couponIssue from './views/nav3/couponIssue.vue'
import couponTmp from './views/nav3/couponTmp.vue'
import addCoupon from './views/nav3/addCoupon.vue'

import activity from './views/nav4/activity.vue'
import calendar from './views/nav4/calendar.vue'
import KPI from './views/nav4/KPI'
import MOT from './views/nav4/MOT.vue'
import Template from './views/nav4/Template.vue'
import newActivity from './views/nav4/newActivity.vue'

import fans from './views/nav5/fans.vue'
import QRcode from './views/nav5/QRcode.vue'
import wxauto from './views/nav5/wxauto.vue'
import wxintr from './views/nav5/wxintr.vue'
import wxmenu from './views/nav5/wxmenu.vue'


import echarts from './views/charts/echarts.vue'

let routes=[
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path:'/',
        component:Home,
        name:'Dashboard',
        iconCls:'fa fa-address-card',
        leaf:true,
        children:[
            { path:'/echarts',component: echarts,name:'Dashboard'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '顾客管理',
        iconCls: 'fa fa-id-card-o',//图标样式class
        children: [
            { path: '/table', component: Table, name: '顾客列表' },
            { path: '/form', component: Form, name: '顾客扩展信息维护'},
            { path: '/user', component: user, name: '顾客群组' },
            { path: '/main', component: Main, name: '顾客标签' },
            { path: '/custDetail/:id', component:custDetail,hidden:true, name: '顾客360视图'},
            { path: '/custGroup_detail/:id', component:custGroup_detail,hidden:true, name: '查看'},
            { path: '/custGroup_edit/:id', component:custGroup_edit,hidden:true, name: '编辑'},
            { path: '/custGroup_label/:id', component:custGroup_label,hidden:true, name: '打标签'},
            { path: '/custLabel_detail/:id', component:custLabel_detail,hidden:true, name: '顾客标签查看'},
            { path: '/_custLabel_detail/:id', component:_custLabel_detail,hidden:true, name: '顾客标签查看'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '忠诚度管理',
        iconCls: 'fa fa-id-card-o',
        children:[
            { path: '/page4', component: Page4, name: '关键指标' },
            //必须重新定义内容插槽router-view,
            { path: '/', component:index, name: '会员等级管理' ,
                 children:[
                     { path: '/rankRule', component: rankRule, name:'等级规则'},
                     { path: '/rm', component:rm, name: '等级管理'}
                 ]
            },
            { path: '/rankRuleEdit', component:rankRuleEdit, hidden:true,name:' 等级规则'},
            { path: '/setLevel', component:setLevel,hidden:true,name:'设置等级'},
            { path: '/AddIntegral', component: AddIntegral,hidden:true,name:'新增积分规则'},
            { path: '/integral', component:integral, name: '积分管理'},
            { path: '/', component:index,name:'会员卡管理',
                  children:[
                      {path:'/Page5',component:Page5,name:"规则配置"},
                      {path:'/addVipCard',component:addVipCard,name:"新增会员卡"},
                      {path:'/vipList',component:vipList,name:"会员卡列表"}
                  ]
            },
            {path: '/store', component: store, name: '储值卡管理'}
        ]
    },
    {
        path: '/',
        component:Home,
        name: '卡券管理',
        iconCls: 'fa fa-address-card',
        //leaf: true,//只有一个节点
        children: [
            { path: '/couponTmp', component:couponTmp, name: '券模板监控'},
            { path: '/couponIssue', component: couponIssue, name:'券发行配置'},
            { path: '/addCoupon', component: addCoupon,hidden:true,name:'新建优惠券'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'campaign管理',
        iconCls: 'fa fa-id-card-o',
        children:[
            { path: '/KPI', component:KPI, name: '关键指标'},
            { path: '/activity', component: activity, name: '活动策划'},
            { path: '/MOT', component: MOT, name: 'MOT活动' },
            { path: '/calendar', component:calendar, name: '营销日历' },
            { path: '/Template', component: Template, name: '模板规则' }

        ]
    },
    {
        path:'/',
        component:Home,
        name: '微信platform',
        iconCls: 'fa fa-id-card-o',
        children:[
            { path: '/wxintr', component: wxintr, name: '微信概况' },
            { path: '/wxmenu', component: wxmenu, name: '微信菜单管理' },
            { path: '/wxauto', component: wxauto, name: '自动回复设置' },
            { path: '/QRcode', component: QRcode, name: '二维码管理' },
            { path: '/fans', component: fans, name: '粉丝概览' },
            { path: '/newActivity',component: newActivity, hidden:true,name:'新活动' }


        ]
    },
    {
        path: '*',
        hidden: true,
        redirect:{path:'/404'}
    }
];

export default routes;