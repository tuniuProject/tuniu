<template>
    <div id="detail">
        <ul>
            <li class="first">
                <span>日期</span>
                <p>2017/10/30</p>
                <h1>已取消</h1>
            </li>
            <li>
                <span>几何Time年度尊享会员卡</span>
            </li>
            <li class="last">
                <span>总价</span>
                <p>￥188</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#detail {
  width: 90%;
  height: 1.33rem;
  position: absolute;
  left: 0;
  top: 0;
  background: white;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.12rem;
    li {
      flex: 1;
      display: flex;
      border-bottom: 1px solid gray;
      align-items: center;
      h1 {
        font-size: 0.12rem;
      }
    }
    .last {
      border-bottom: none;
    }
    .first {
      h1 {
        position: absolute;
        right: 0.2rem;
      }
    }
  }
}
</style>

