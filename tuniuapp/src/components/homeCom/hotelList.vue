<template>
    <div class="content">
        <div class="wrap" v-for="item in list" :key="item">
            <div class="box">
                <img src="" alt="">
            </div>
            <p>Time特权</p>
            <p>会员特权</p>
            <b>杭州隐竺别院</b>
            <span>#禅意</span>
            <span>#美食</span>
            <span>#灵隐景区</span>
        </div>            
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  width: 100%;
  top: 1.96rem;
  .wrap {
    width: 100%;
    height: 3.8rem;
    .box {
      width: 100%;
      height: 3rem;
      background: gray;
    }
    p {
      position: absolute;
      left: 0.2rem;
      width: 0.6rem;
      height: 0.18rem;
      background: rgb(27, 206, 27);
      text-align: center;
      line-height: 0.18rem;
      margin-top: 0.1rem;
    }
    p:last-of-type {
      left: 1rem;
      background: burlywood;
    }
    b {
      position: absolute;
      left: 0.2rem;
      font-size: 0.15rem;
      margin-top: 0.33rem;
    }
    span {
      position: absolute;
      left: 0.2rem;
      margin-top: 0.55rem;
      color: gray;
    }
    span:nth-of-type(2) {
      left: 1rem;
    }
    span:nth-of-type(3) {
      left: 1.8rem;
    }
  }
}
</style>