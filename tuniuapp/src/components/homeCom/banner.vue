<template>
   <div class="banner-wrap">
       <van-swipe indicator-color="white" :autoplay="3000" @change="onChange">
      <van-swipe-item class="banner" v-for="item in bannerData" :key="item.id">
              <img :src="item.img"  class="image" @click="bannerSendAction(item.id,item.name,item.img,$event)">
              <span class="title">{{item.name}}</span>
      </van-swipe-item>
    </van-swipe>
   </div>

</template>

<script>
import { getHomeBanner } from "../../services/homeServices.js";
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      bannerData: "",
      selectIndex: 0
    };
  },
  methods: {
    bannerSendAction(id, name, img, event) {
      if (!event._constructed) {
        return;
      }
      this.$router.push({
        name: "bannerContent",
        query: {
          id,
          name,
          img
        }
      });
    },
    onChange(index) {
      // console.log(index)
      this.selectIndex = index;
    }
  },
  created() {
    getHomeBanner().then(data => {
      console.log(data);
      this.bannerData = data.num1;
    });
  }
};
</script>

<style lang="scss" scoped>
.banner-wrap {
  position: absolute;
  top: 0.08rem;
  left: 0;
  width: 100%;
  height: 1.8rem;
  padding-left: 0.17rem;
  padding-right: 0.17rem;
  box-sizing: border-box;
}
.van-swipe {
  height: 100%;
}
.image {
  width: 100% !important;
  height: 1.8rem !important;
}
.title {
  position: absolute;
  top: 0.2rem;
  display: block;
  width: 100%;
  text-align: center;
  margin: auto;
  font-size: 0.14rem;
  color: #ffffff;
}
</style>
