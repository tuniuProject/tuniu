<template>
  <div class="home">
    <Header/>
    <Content/>
  </div>
</template>

<script>
import Header from "../components/homeCom/header";
import Content from "../components/homeCom/homeContent";
export default {
  components: {
    Header,
    Content
  }
};
</script>

<style>
.home {
  width: 100%;
  height: 100%;
}
</style>
