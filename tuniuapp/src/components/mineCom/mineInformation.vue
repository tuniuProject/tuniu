<template>
    <div id="mine-info">
        <ul>
            <li>
                <span>头像</span>
                <div>
                    <img src="/icon/daifukuan.svg" alt="">
                </div>
                <p>></p>
            </li>
            <li>
                <span>姓名</span>
                <div class="dname">杜sir</div>
            </li>
            <li>
                <span>手机号码</span>
                <div>13665665598</div>
                <p>></p>
            </li>
            <li>
                <span>昵称</span>
                <div>xxx</div>
                <p>></p>
            </li>
            <li>
                <span>交易密码</span>
                <p>></p>
            </li>
            <li>
                <span>身份信息</span>
                <p>></p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#mine-info {
  z-index: 1;
  width: 100%;
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 0;
  background: white;
  ul {
    li {
      width: 100%;
      height: 0.4rem;
      display: flex;
      font-size: 0.12rem;
      color: gray;
      span {
        padding: 0 0.1rem;
      }
      p {
        position: absolute;
        right: 0;
        padding: 0 0.1rem;
      }
      div {
        position: absolute;
        right: 0;
        padding: 0 0.5rem;
        img {
          border-radius: 50%;
        }
      }
      .dname {
        position: absolute;
        right: 0;
        padding: 0 0.1rem;
      }
    }
  }
}
</style>

