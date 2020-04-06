//分类页面
export default  [
    {
        path:'/classify',
        component:()=>import('../pages/classfiy'),
        children:[
            {
                path:'',
                component:()=>import('../pages/classfiy/children/dynasty'),
            },
            {
                path:'author',
                component:()=>import('../pages/classfiy/children/author'),
            },
            {
                path:'genre',
                component:()=>import('../pages/classfiy/children/genre'),
            },
            {
                path:'details',
                component:()=>import('../pages/classfiy/children/details'),
            },
        ]
    }
]