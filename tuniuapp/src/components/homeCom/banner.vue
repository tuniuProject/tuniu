<template>
   <div class="banner-wrap">
       <van-swipe indicator-color="white" :autoplay="3000">
      <van-swipe-item class="banner" v-for="item in bannerData" :key="item.id">
        <img :src="item.img" @click="bannerSendAction(item.id,item.name)">
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
      bannerData: ""
    };
  },
  methods: {
    bannerSendAction(id, name) {
      console.log(id, name);
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
}
.van-swipe {
  height: 100%;
}
img {
  width: 100% !important;
  height: 1.8rem !important;
}
</style>
