<template>
  <div class="mine">
    <!-- <header>这里是个人</header> -->
    <Login/>
  </div>
</template>

<script>
import Login from '../components/mineCom/login.vue';
export default {
  components:{
    Login
  }
};
</script>

<style>
.mine{
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
