<template>
<scroller class="scroll">
    <div class="box" :style="{height:height+'rem'}">
      <Banner/>
      <HotelList/>
    </div> 
</scroller>   
</template>

<script>
import scroller from "../../common/scroll/scroll";
import Banner from "./banner";
import HotelList from "./hotelList";
export default {
  components: {
    Banner,
    HotelList,
    scroller
  },
  data() {
    return {
      height: 1.96 + 3.8 * 5
    };
  }
};
</script>

<style lang="scss" scoped>
.scroll {
  position: absolute;
  top: 0.44rem;
  left: 0rem;
  bottom: 0.49rem;
  width: 100%;
  .box {
    width: 100%;
  }
}
</style>

