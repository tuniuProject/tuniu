<template>
    <div>
        <header class="header" v-if="isShow">
        <div class="head-left" @click="saoyisaoAction">
            <img src="/icon/saoyisao@1x.svg"/>
            <span>扫一扫</span>
        </div>
        <p @click="searchAction">
            <img src="/icon/fangdajing.svg"  />
            <span>搜索目的地或酒店</span>
        </p>
        
    </header>
    <router-view/>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            isShow:true
        }
    },
    methods:{
        saoyisaoAction(){
            this.$router.push({
                path:'home/saoma'
            })

        },
        searchAction(){
            this.$router.push({
                path:'home/search'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    position: absolute;
        width: 3.435rem;
        height: 0.3rem;
        left: 0;
        right: 0;
        top: 0;
        margin: auto;
        padding-bottom: 0.07rem;
        padding-top: 0.09rem;
        border-bottom: 0.012rem solid #E5E5E5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .head-left{
            width: auto;
            height: 0.3rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            img{
                width: 0.16rem;
                height: 0.16rem;
                color: red;
            }
            span{
               font-size: 0.085rem;
                color: #999;
            }
        }
        p{
            width: 2.97rem;
            height: 0.3rem;
            background-color: #F2F3F7;
            position: relative;
            border-radius: 0.03rem;
            img{
                width: 0.12rem;
                height: 0.12rem;
                position: absolute;
                top: 0.092rem;
                left: 0.12rem;
            }
            span{
                position: absolute;
                left: 0.33rem;
                line-height: 0.3rem;
                font-size: 0.11rem;
                color: #999;
            }
        }
    }
    

</style>
