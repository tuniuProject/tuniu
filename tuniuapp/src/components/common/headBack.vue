<template>
    <section class="headback">
        <img src="/icon/zuofanhui.svg"  @click="back"/>
        <span>{{data}}</span>
    </section>
</template>

<script>
export default {
    props:['data','action'],
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>

<style lang="scss" scoped>
    .headback{
        width: 100%;
        height: 0.44rem;
        display: flex;
        align-items: center;
        img{
            width: 0.20rem;
            height: 0.16rem;
            margin-left: 0.08rem;
        }
        span{
            width: 100%;
            text-align: center;
            margin-right: 0.1rem;
            font-size: 0.16rem;
            color: #343434;
            font-weight: 300;
        }
    }
</style>
