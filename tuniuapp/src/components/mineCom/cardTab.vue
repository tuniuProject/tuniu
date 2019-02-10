<template>
    <div id="card-list">
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
        { id: 0, title: "礼券", comName: "Gift" },
        { id: 1, title: "会员卡", comName: "Member" },
        { id: 2, title: "套餐卡", comName: "Setmeal" },
        { id: 3, title: "历史", comName: "History" }
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
  background: white;
  li {
    flex: 1;
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.14rem;
  }
  .active {
    color: red;
    border-bottom: 1px solid red;
  }
}
</style>

