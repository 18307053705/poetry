
//题诗页面
export default  [
    {
        path:'/poem',
        component:()=>import('../pages/poem'),
        children:[
            {
                path:'',
                component:()=>import('../pages/poem/showList'),
            },
            {
                path:'details',
                component:()=>import('../pages/poem/details'),
            },
        ]
    }
]