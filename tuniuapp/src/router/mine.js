export default {
    path: '/mine',
    component: () => import('../pages/mine'),
    children: [{
        path: 'information',
        component: () => import('../components/mineCom/mineHome'),
    }, {
        path: 'mineinfo',
        component: () => import('../components/mineCom/mineInformation'),
    }, {
        path: 'pay',
        component: () => import('../components/mineCom/pay'),
    }, {
        path: 'card',
        // component: () => import('../components/mineCom/cardTab'),
        component: () => import('../components/mineCom/identity'),
    }, {
        path: 'cardList',
        component: () => import('../components/mineCom/cardList'),
    }, {
        path: 'order',
        component: () => import('../components/mineCom/detailOrder'),
    }, {
        path: 'fukuan',
        component: () => import('../components/mineCom/mineOrder'),
    }]
}