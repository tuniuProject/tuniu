<template>
    <div id="mine-home">
        <div class="mine">
            <div class="xinxi">
                <div>
                    <h1>杜sir</h1>
                    <img src="/icon/huiyuanka.svg" alt="">
                </div> 
                <span>ID:111111</span>
                <p>编辑个人信息 ></p>
            </div>
            <div class="tupian">
                <img src="/icon/yijiedan.svg" alt="">
            </div>
        </div>
        <div class="center">
            <span>加入time卡会员 全场预定5折起</span>
            <a href="">查看特权 ></a>
            <div class="box">
                <div class="box1">
                    <p>0</p>
                    <span>卡券</span>
                </div>
                <div class="box2">
                    <p>0</p>
                    <span>收藏</span>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="main-top">
                <span>我的订单</span>
                <p class="dingdan">查看全部订单</p>
            </div>
            <ul>
                <li>
                    <img src="/icon/daifukuan.svg" alt="">
                    <span>待付款</span>
                </li>
                <li>
                    <img src="/icon/chulizhong.svg" alt="">
                    <span>处理中</span>
                </li>
                <li>
                    <img src="/icon/yijiedan.svg" alt="">
                    <span>已接单</span>
                </li>
                <li>
                    <img src="/icon/yiwancheng.svg" alt="">
                    <span>已完成</span>
                </li>
            </ul>
            <div class="more">
                <img src="/icon/shezhi.svg" alt="">
                <span>更多</span>
                <img src="/icon/xiangyoufanhui.svg" alt="" class="fanhui">
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#mine-home {
  z-index: 1;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.49rem;
  width: 100%;
  .mine {
    width: 100%;
    height: 2.32rem;
    background: gray;
    display: flex;
    color: white;
    .xinxi {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-top: 0.5rem;
      padding-left: 0.2rem;
      div {
        display: flex;
        img {
          padding-left: 0.2rem;
        }
      }
      span {
        margin-top: 0.1rem;
      }
      p {
        width: 1rem;
        height: 0.2rem;
        background: black;
        border-radius: 0.1rem;
        text-align: center;
        line-height: 0.2rem;
        margin-top: 0.1rem;
      }
    }
    .tupian {
      flex: 1;
      display: flex;
      padding-top: 0.5rem;
      padding-right: 0.2rem;
      justify-content: flex-end;
      align-items: flex-start;
      img {
        border-radius: 50%;
        background: white;
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
  .center {
    position: absolute;
    left: 0;
    top: 1.55rem;
    height: 1.22rem;
    width: 90%;
    background: darkcyan;
    border-radius: 0.05rem;
    left: 0.2rem;
    span {
      color: goldenrod;
      display: inline-block;
      margin: 0.05rem;
    }
    a {
      color: white;
      float: right;
      margin: 0.05rem;
    }
    .box {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 0.88rem;
      width: 100%;
      background: white;
      display: flex;
      border: 1px solid rgb(192, 190, 190);
      border-radius: 0.05rem;
      .box1 {
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        p {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        span {
          flex: 1;
        }
      }
      .box2 {
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        p {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        span {
          flex: 1;
        }
      }
    }
  }
  .main {
    width: 100%;
    height: 100%;
    .main-top {
      margin: 0 0.15rem;
      height: 1.1rem;
      border-bottom: 2px solid #fafafa;
      display: flex;
      span {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 0.1rem;
      }
      .dingdan {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 0.1rem;
      }
    }
    ul {
      margin: 0 0.15rem;
      display: flex;
      height: 1rem;
      border-bottom: 2px solid #fafafa;
      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        display: flex;
        img {
          flex: 1;
          padding: 0.2rem;
        }
        span {
          flex: 1;
          text-align: center;
        }
      }
    }
    .more {
      margin: 0 0.15rem;
      position: relative;
      span {
        position: absolute;
        left: 0.5rem;
        top: 0.18rem;
      }
      img {
        margin-top: 0.15rem;
      }
      .fanhui {
        float: right;
      }
    }
  }
}
</style>

