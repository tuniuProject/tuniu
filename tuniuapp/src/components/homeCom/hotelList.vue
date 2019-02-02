<template>
    <div class="content" :style="Top">
        <div class="wrap" v-for="item in data" :key="item.id">
            <div class="box">
                <img :src="item.img" alt="">
                <div class="block">¥{{item.picle}}</div>
            </div>
            <p v-for="list in item.tag" :key="list">{{list}}</p>
            <b>{{item.name}}</b>
            <span v-for="tit in item.title" :key="tit.titleName">{{tit.titleName}}</span>
        </div>            
    </div>
</template>

<script>
export default {
  props:['data','top','pos'],
  data() {
    return {
    };
  },
  computed:{
    Top(){
      if(this.pos){
       return {'position':'absolute','top':this.top+'rem'}
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  .wrap {
    width: 100%;
    height: 3.8rem;
    .box {
      width: 100%;
      height: 3rem;
      background: gray;
      position: relative;
      .block{
        position: absolute;;
        left: 0;
        bottom: 0.18rem;
        width: 0.62rem;
        height: 0.35rem;
        background-color: #000;
        opacity: 0.7;
        font-size: 0.14rem;
        color: #fff;
        text-align: center;
        line-height: 0.35rem;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    p {
      position: absolute;
      left: 0.2rem;
      width:auto;
      background-color: #85b9a0;
      text-align: center;
      line-height: 0.18rem;
      margin-top: 0.1rem;
      font-size: 0.08rem;
      color: #fff;
      font-weight: normal;
      padding: 0.015rem 0.04rem;
      border-radius: 0.02rem;
      margin-bottom: 0.06rem;
    }
    p:last-of-type {
      left: 0.9rem;
      background: burlywood;
    }
    b {
      position: absolute;
      left: 0.2rem;
      font-size: 0.15rem;
      margin-top: 0.33rem;
      color: #333333;
      font-weight: normal;
    }
    span {
      position: absolute;
      left: 0.2rem;
      margin-top: 0.57rem;
      color: gray;
      font-size: 0.08rem;
    }
    span:nth-of-type(2) {
      left: 1rem;
    }
    span:nth-of-type(3) {
      left: 1.8rem;
    }
  }
}
</style>