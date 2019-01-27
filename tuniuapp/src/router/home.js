export default {
    path: '/home',
    component: () => import('../pages/home'),
    children:[
        {
            path:'saoma',
            component:()=>import('../components/homeCom/headerCom/saoyisao')
        },
        {
            path:'search',
            component:()=>import('../components/homeCom/headerCom/search.vue')
        }
    
    ]
}