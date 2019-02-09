<template>
<div id="login">
    <div class="login-header">
        <span>登录/注册会员</span>
        <p>X</p>
    </div>
    <div id="phone">
        <input type="text" placeholder="请输入手机号">
        <a href="">发送验证码</a>
    </div>
    <div id="yzm">
        <input type="text" placeholder="输入验证码">
    </div>
    <button>下一步</button>
</div>   
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#login {
  z-index: 1;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  .login-header {
    height: 0.44rem;
    width: 100%;
    display: flex;
    span {
      font-size: 0.2rem;
      margin: auto;
    }
    p {
      font-size: 0.2rem;
      line-height: 0.44rem;
      padding-right: 0.2rem;
    }
  }
  #phone {
    width: 100%;
    margin-top: 0.5rem;
    width: 80%;
    height: 0.3rem;
    border-bottom: 1px solid gray;
    margin-left: 0.38rem;
    input {
      border: none;
      width: 80%;
    }
    a {
      color: red;
    }
  }
  #yzm {
    width: 100%;
    margin-top: 0.05rem;
    input {
      width: 80%;
      height: 0.3rem;
      border: none;
      border-bottom: 1px solid gray;
    }
  }
  button {
    width: 90%;
    height: 0.4rem;
    border: none;
    border-radius: 0.05rem;
    margin-top: 0.5rem;
  }
}
</style>

