<template>
<scroller class="scroll" :top="0.44" :bottom="0.49" ref="content">
    <div class="box" :style="{height:height+'rem'}">
      <Banner/>
      <HotelList :data="content" :top="1.96" :pos='true'/>
    </div>
</scroller>   
</template>

<script>
import Banner from "./banner";
import HotelList from "./hotelList";
import {getHtoalContent} from '../../services/homeServices';
import BScroll from "better-scroll";
export default {
  components: {
    Banner,
    HotelList,
  },
  data() {
    return {
      content:[],
      height:999
    };
  },
 created(){
   getHtoalContent().then(data=>{
     console.log(data.num5)
     this.content=data.num5;
      this.$nextTick(()=>{
        this.height=1.96 + 3.8 *this.content.length;
      })
   })
 },
//  computed:{
//    height(){
//      return  1.96 + 3.8 *this.content.length
//    }
//  }
};
</script>

<style lang="scss" scoped>
  .box {
    width: 100%;
    height: auto;
  }
  .box2{
    position: absolute;

  }
</style>

