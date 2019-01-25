<template>
  <nav class="tabs">
    <slot/>
  </nav>
</template>

<script>
export default {
  name: "tab-bar"
};
</script>

<style lang="scss">
.tabs {
  width: 100%;
  height: 49px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  .tab {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
