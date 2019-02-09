<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    
    <tab-bar>
      <tab-item v-for="item in tabList" :key="item.name" :info="item" ref="tab-item"></tab-item>
    </tab-bar>
    <!-- <login/> -->
  </div>
</template>
<script>
// import login from "./components/mineCom/login";
export default {
  components: {
    // login
  },
  data() {
    return {
      tabList: [
        {
          name: "精选",
          path: "/home",
          svg: "/icon/jingxuanweixuanzhong.svg",
          svg2: "/icon/jingxuan.svg"
        },
        {
          name: "我的",
          path: "/mine",
          svg: "/icon/wode weixuanzhong.svg",
          svg2: "/icon/wodeweixuanzhong.svg"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
// #app {
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   left: 0;
//   top: 0;
// }
</style>
