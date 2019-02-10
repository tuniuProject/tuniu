<template>
    <div id="cardSun">
        <ul>
            <li>
                <img src="/icon/chulizhong.svg" alt="">
                <div>
                    <span>水墨蓉庄度假酒店</span> 
                    <p>￥1080</p>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#cardSun {
  position: absolute;
  top: 0.44rem;
  left: 0;
  bottom: 0;
  width: 100%;
  background: white;
  ul {
    width: 100%;
    height: 100%;
    li {
      padding: 0 0.2rem;
      height: 1.25rem;
      display: flex;
      position: absolute;
      img {
        flex: 1;
        width: 1.72rem;
        height: 1.25rem;
      }
      div {
        flex: 1;
        height: 100%;
        text-align: right;
        span {
          font-size: 0.16rem;
        }
        p {
          position: absolute;
          right: 0;
          bottom: 0;
          color: red;
          font-size: 0.16rem;
        }
      }
    }
  }
}
</style>

