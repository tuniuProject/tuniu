<template>
<div id="order">
    <ul>
        <li v-for="item in tabList" class="tab" :class="{active:pageName==item.comName}" @click="tabAction(item.comName)" :key="item.id">{{item.title}}</li>
    </ul>
</div>   
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        { id: 0, title: "全部", comName: "All" },
        { id: 1, title: "待付款", comName: "Pay" },
        { id: 2, title: "处理中", comName: "Ing" },
        { id: 3, title: "已接单", comName: "Already" },
        { id: 4, title: "已完成", comName: "Finlish" }
      ],
      pageName: "All"
    };
  },
  methods: {
    tabAction(name) {
      this.pageName = name;
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  height: 0.44rem;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  li {
    flex: 1;
    text-align: center;
    line-height: 0.44rem;
  }
  .active {
    color: red;
    border-bottom: 1px solid red;
  }
}
</style>

