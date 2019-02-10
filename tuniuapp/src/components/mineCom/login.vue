<template>
    <section class="login">
        <div class="block" v-if="isShow">
        </div>
         <div class="yanzhengma" v-if="isShow" >
            <img src="/icon/guanbitwo.svg" @click="offAction" />
            <h2>获取验证码提示</h2>
            <h3>{{text}}</h3>
            <button type="button" @click="offAction">确认</button>
        </div>
        <header><span>登录/注册会员</span><img src="/icon/guanbitwo.svg" @click="backAction"/></header>
        <form>
            <label>
                <img src="/icon/shouji.svg"  class="img1"/><span @click="sendAction">发送验证码</span>
                <input type="number" maxlength="11" class="inp1" placeholder="请输入手机号" ref="in" /></label>
            <label><img src="/icon/yanzhengma.svg" class="img2"/> <input type="number" maxlength="4" class="inp2" ref="in2" placeholder="请输入验证码"/></label>
        </form>
        <button class="continue" @click="continueAction">下一步</button>
    </section>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      text: "验证码已发送到您的手机请注意查收",
      num: null
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    sendAction() {
      let phone = this.$refs.in.value;
      let reg = /^1[34578]\d{9}$/;
      if (reg.test(phone)) {
        //可以发送验证码
        let num =
          "" +
          Math.floor(Math.random() * 10) +
          Math.floor(Math.random() * 10) +
          Math.floor(Math.random() * 10) +
          Math.floor(Math.random() * 10);
        this.num = num;
        console.log(this.num);
        this.$refs.in.disabled = true;
        this.text = "验证码已发送到您的手机请注意查收";
        this.isShow = true;
      } else {
        this.text = "请输入正确的手机号";
        this.isShow = true;
      }
    },
    offAction() {
      this.isShow = false;
    },
    continueAction() {
      if (this.$refs.in2.value == this.num) {
        console.log("可以进行下一步");
        localStorage.setItem("phone", this.$refs.in.value);
        console.log("获取手机号：" + localStorage.getItem("phone"));
        this.$router.push({
          path: "mine/information"
        });
      } else {
        if (this.$refs.in2.value == "") {
          this.text = "请输入验证码";
          this.isShow = true;
        } else {
          this.text = "验证码不正确";
          this.isShow = true;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .continue {
    width: 3.43rem;
    height: 0.44rem;
    display: block;
    border: 0;
    margin: auto;
    border-radius: 0.03rem;
    background-color: #dfdfdf;
    font-size: 0.12rem;
    color: #a6a6a6;
    margin-top: 0.4rem;
  }
  .block {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #000;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .yanzhengma {
    width: 2.31rem;
    height: 1.61rem;
    border-radius: 0.035rem;
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;
    top: 2.25rem;
    background-color: #ffffff;
    padding: 0.21rem 0.16rem 0.2rem;
    box-sizing: border-box;
    z-index: 11;
    img {
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
    }
    h2 {
      text-align: center;
      font-size: 0.16rem;
      color: #717171;
      margin-bottom: 0.15rem;
    }
    h3 {
      width: 1.5rem;
      margin: auto;
      font-size: 0.12rem;
      color: #c2c2c2;
      text-align: center;
    }
    button {
      width: 1rem;
      height: 0.24rem;
      display: block;
      background-color: #e95957;
      font-size: 0.12rem;
      color: #fff;
      border: 0;
      margin: auto;
      margin-top: 0.25rem;
      border-radius: 0.02rem;
    }
  }
  header {
    width: 100%;
    height: 0.435rem;
    display: flex;
    align-items: center;
    // justify-content: right;
    span {
      font-size: 0.15rem;
      color: #231815;
      margin-right: 1.1rem;
      margin-left: 1.3rem;
    }
  }
  form {
    width: 3.44rem;
    height: 1.18rem;
    margin: 0.3rem auto;
    label {
      width: 100%;
      display: block;
      height: 0.57rem;
      position: relative;
      border: 0;
      input {
        width: 100%;
        height: 100%;
        border: 0;
        border-bottom: 0.02rem solid #979797;
      }
    }
    label {
      width: 100%;
      display: block;
      height: 0.57rem;
      position: relative;
      border-bottom: 0.01rem solid #979797;
      .inp1 {
        width: 100%;
        height: 100%;
        border: 0;
        text-indent: 0.45rem;
        font-size: 0.12rem;
        color: #404040;
        line-height: 0.57rem;
      }
      .inp2 {
        width: 100%;
        height: 100%;
        border: 0;
        text-indent: 0.45rem;
        font-size: 0.12rem;
        color: #404040;
        line-height: 0.57rem;
      }
      .img1 {
        position: absolute;
        top: 0.18rem;
        left: 0.16rem;
      }
      .img2 {
        position: absolute;
        top: 0.18rem;
        left: 0.16rem;
      }
      span {
        position: absolute;
        right: 0.21rem;
        font-size: 0.1rem;
        color: #e95957;
        text-decoration: underline;
        line-height: 0.59rem;
      }
    }
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
</style>
