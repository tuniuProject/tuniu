<template>
    <div class="bannerContent">
        <Back :data="name"  />
         <scroller :top="0.44" :bottom="0.0000000001" >
        <section class="banner">
            <img :src="$route.params.img" />
        </section>
        <ul class="list">
            <li v-for="item in bannerList" :key="item.id" class="item">
                <div class="top">
                     <p class="people">{{item.people}}</p>
                    <img :src="item.img" />
                    <ul>
                        <li v-for="list in item.location" :key="list.cityName">
                            {{list.cityName}}
                        </li>
                    </ul>
                </div>
                <div class="bottom">
                    <span v-for="title in item.title" :key="title.titleName">{{ title.titleName }}</span>
                </div>
                <p class="go">GO »</p>
            </li>
        </ul>
        </scroller>
    </div>
</template>

<script>
import Back from '../../common/headBack.vue';
import {getBannerContent} from '../../../services/homeServices.js'
export default {
    components:{
        Back
    },
    data(){
        return{
            name:'',
            bannerList:[]
        }
    },
    created(){
        this.name= this.$route.params.name;
        console.log(this.name,this.$route.params);
        getBannerContent(this.$route.params.id).then(data=>{
            this.bannerList=data.num2
        })
    },
    methods:{
       
    }

}
</script>

<style scoped lang="scss">
.bannerContent{
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
    .banner{
        img{
            width: 100%;
            height: 1.8rem;
        }
    }
    .list{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0.15rem;
        box-sizing: border-box;
        .item{
            width: 1.63rem;
            height: 1.87rem;
            position: relative;
            box-shadow:0.003rem 0.003rem #333333;
            margin-top: 0.15rem;
            .top{
                 width: 100%;
                height: 1.18rem;
               border-top-left-radius: 0.04rem;
                    border-top-right-radius: 0.04rem;
                img{
                width: 100%;
                height: 1.18rem;
                  border-top-left-radius: 0.04rem;
                    border-top-right-radius: 0.04rem;
            }
            .people{
                position: absolute;
                left: 0;
                top: 0;
                padding: 0.05rem 0.12rem 0.05rem ;
                background-color: #f9d080;
                border-top-right-radius: 50%;
                 border-top-left-radius: 0.04rem;
            }
            ul{
                width: 100%;
                height: 1.18rem;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                align-items: center;
                padding: 0.15rem;
                box-sizing: border-box;
                li{
                    width: 50%;
                    font-size: 0.152rem;
                    color: #ffffff;
                    text-align: center;
                     overflow:hidden;
                     text-overflow:ellipsis;
                   white-space:nowrap;
                    align-items: center;
                }
            }
            }
            .bottom{
                height: 0.42rem;
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .go{
                width: 100%;
                height: 0.27rem;
                background-color: #7989e8;
                text-align: center;
                line-height: 0.27rem;
                color: #ffffff;
            }
        }
    }
}
</style>
