<template>
  <router-link :to="info.path" class="tab" ref="tab">
    <img :src="style">
    <span>{{info.name}}</span>
  </router-link>
</template>

<script>
export default {
  name: "tab-item",
  props: {
    info: Object
  },
  created() {
    console.log();
  },
  computed: {
    style() {
      if (this.info.path === this.$route.path) {
        return this.info.svg2;
      }
      return this.info.svg;
    }
  }
};
</script>

<style lang="scss" scoped>
.tab {
  span {
    font-size: 0.1rem;
  }
}
.router-link-active {
  color: red;
}
</style>
