<template>
    <div class="search">
        <header class="header">
            <form>
                <img src="/icon/fangdajing.svg" class="left-img"/>
                <input type="search" ref="in"  id="keyword"/>
                <img src="/icon/guanbi.svg" class="right-img" @click="spaceAction" />
            </form>
            <span @click="backAction">返回</span>
        </header>
        <div class="change">
            <section class="left" :class="{active:store}" @click=changeAction1>商户</section>
            <section class="right"  :class="{active:city}" @click=changeAction2>地区</section>
        </div>
        <div class="taken-notes">
            <p>历史记录</p>
            <h4 @click="emtypAction">全部删除</h4>
        </div>
        <ul>
            <li v-for="item in str" :key="item" @click="sendAction(item)">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            store:true,
            city:false,
            str:''
        }
    },
    methods:{
        backAction(){
            this.$router.back()
        },
        changeAction1(){
            this.store=true;
            this.city=false;
        },
        changeAction2(){
            this.store=false;
            this.city=true;
        },
        spaceAction(){
            this.$refs.in.value=''
        },
        sendAction(item){
            console.log(item,'以此字符串向后台发送数据')
        },
        emtypAction(){
            this.str='';
           localStorage.setItem('taken','[]');
        }
    },
    created(){
       this.str=JSON.parse(localStorage.getItem('taken'))
    },
    mounted(){
        const _this=this;
        if(!this.str){
 localStorage.setItem('taken','[]');
        }
       $("#keyword").on('keypress',function(e) {
                var keycode = e.keyCode;
                var searchName = $(this).val();
                if(keycode=='13') {
                    e.preventDefault(); 
                    if(_this.$refs.in.value=='') return;
                    //请求搜索接口
                    _this.str=JSON.parse(localStorage.getItem('taken'))
                    _this.str.push(_this.$refs.in.value);
                    _this.str=[...new Set(_this.str)]
                      localStorage.setItem('taken',JSON.stringify(_this.str))
                }
         });
    }

}
</script>

<style lang="scss" scoped>
.search{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #ffffff;
    z-index:3;
    padding: 0.11rem 0.13rem;
    padding-bottom: 0;
    box-sizing: border-box;
    .header{
        height: 0.28rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            color: #9b9b9b;
        }
        form{
            width: 2.95rem;
            height: 0.28rem;
            position: relative;
        .left-img{
            position: absolute;
            left: 0.1rem;
            top: 0.07rem;
            z-index: 3;
            width: 0.13rem;
            height:0.13rem;
        }
         .right-img{
            position: absolute;
            right: 0.1rem;
            top:0.08rem;
        }
            input{
                border: 0;
                position: absolute;
                color: #9b9b9b;
                line-height: 0.28rem;
                padding-left: 0.3rem;
                padding-right: 0.3rem;
                left: 0;
                top: 0;
                 width: 2.95rem;
                height: 0.28rem;
                box-sizing: border-box;
                background-color: #f0f0f0;
                border-radius: 0.04rem;
            }
        }
    }
    .change{
        height:0.41rem;
        margin-top: 0.1rem; 
        display: flex;
        justify-content: space-between;
        font-size: 0.13rem;
        color: #9b9b9b;
        .left{
            margin-left: 0.5rem;
            height: 0.27rem;
            box-sizing: border-box;
            
        }
        .right{
            margin-right: 0.5rem;
            height: 0.27rem;
        }
        .active{
            color: #333;
            border-bottom: 1px solid #e95957;
        }
    }
    .taken-notes{
        height: 0.35rem;
        line-height: 0.35rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000011;
        box-sizing: border-box;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        font-size: 0.12rem;
        h4{
            font-weight: normal;
        }
    }
    ul li{
         height: 0.3rem;
        line-height: 0.3rem;
        text-indent: 0.2rem;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 0.13rem;
        color: #999;
         overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
    }
    }
    input[type=search] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    font-family: inherit;
    font-size: 100%;
    }
    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button {
    display: none;
    }
</style>
