//诗词页面
export default  [
    {
        path:'/poetry',
        component:()=>import('../pages/poetry'),
        children:[
            {
                path:'',
                component:()=>import('../pages/poetry/cup'),
            },
            {
                path:'sake',
                component:()=>import('../pages/poetry/sake'),
            },
            {
                path:'gentlemen',
                component:()=>import('../pages/poetry/gentlemen'),
            },
        ]
    }
]