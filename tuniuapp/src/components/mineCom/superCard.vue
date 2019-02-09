<template>
    <div id="card">
        <img src="/img/supercard.png" alt="">
        <button>立即购买</button>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#card {
  position: absolute;
  background: white;
  text-align: center;
  img {
    width: 100%;
  }
  button {
    width: 90%;
    height: 0.4rem;
    border: none;
    background: orangered;
    border-radius: 0.2rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    color: white;
  }
}
</style>

