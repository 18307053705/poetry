//我的页面
export default  [
    {
        path:'/mine',
        component:()=>import('../pages/mine'),
        children:[
            //home页面
            {
                path:'',
                component:()=>import('../pages/mine/home'),
            },
            //我的收藏
            {
                path:'collect',
                component:()=>import('../pages/mine/collect'),
            },
            //我的下载
            {
                path:'download',
                component:()=>import('../pages/mine/download'),
            },
            //我的消息
            {
                path:'message',
                component:()=>import('../pages/mine/message'),
            },
            //我的话题
            {
                path:'topic',
                component:()=>import('../pages/mine/topic'),
            },
            //我的小舍
            {
                path:'hutch',
                component:()=>import('../pages/mine/hutch'),
            },
            //我的诗集
            {
                path:'poems',
                component:()=>import('../pages/mine/poems'),
            },
            //系统设置
            {
                path:'settings',
                component:()=>import('../pages/mine/settings'),
            },
            //夜间模式
            {
                path:'nighttime',
                component:()=>import('../pages/mine/nighttime'),
            },
            
        ]
    }
]