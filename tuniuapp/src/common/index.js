import Tab from './tab/Tab';
import Tabs from './tab/Tabs'; //tab导航切换
import scroller from './scroll/scroll'; //scroll视图
import {
    Icon
} from 'vant'; // vant icon 
import {
    FetchGet,
    FetchPost
} from './fetch/index'; //ajax封装函数

export default {
    install(Vue) {
        Vue.component(Tab.name, Tab)
        Vue.component(Tabs.name, Tabs)
        Vue.component(scroller.name, scroller); //添家以上全局组件
        Vue.use(Icon); //icon
        Vue.prototype.FetchGet = FetchGet; //添加ajax封装函数
        Vue.prototype.FetchPost = FetchPost;
    }
}