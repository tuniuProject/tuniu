<template>
  <div class="home">

    <Header/>
    <Banner/>
  </div>
</template>

<script>
import Header from '../components/homeCom/header'
import Banner from '../components/homeCom/banner';
export default {
  components:{
    Header,
    Banner
  }
};
</script>

<style>
.home{
  width: 100%;
  height: 100%;
}
</style>
