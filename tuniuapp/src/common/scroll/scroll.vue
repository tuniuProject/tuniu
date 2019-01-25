<template>
  <div class="scroller-wrap" ref="scroll" :style="wrapStyle">
    <div class="scroller-content">
      <div class="pull-down" v-if="flag"></div>
      <slot/>
      <div class="pull-up" v-if="next"></div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroller",
  props: {
    width: Number,
    height: Number,
    top: Number,
    bottom: Number,
    forword: Function,
    next: Function
  },
  methods: {
    scrollTo(y, time) {
      this.scroll.scrollTo(0, y, time);
    }
  },
  computed: {
    flag() {
      if (this.forword) {
        return true;
      } else {
        return false;
      }
    },
    wrapStyle() {
      //定位的滚动视图
      if (this.top && this.bottom) {
        return {
          position: "absolute",
          top: this.top + "px",
          bottom: this.bottom + "px"
        };
      } else {
        //普通调用滚动视图
        return {
          width: this.width + "px",
          height: this.height + "px"
        };
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true,
      // scrollbars: true,
      // fadeScrollbars: true,
      // freeScroll: true,
      startY: this.forword ? -50 : 0,
      probeType: 2
    });

    this.scroll.on("beforeScrollStart", () => {
      this.scroll.refresh();
    });
    var _this = this;
    if (this.forword) {
      var _this = this;
      this.scroll.on("scrollEnd", function() {
        let y = this.y;
        console.log(y);
        if (y >= 0) {
          console.log("条件满足了");
          _this.forword();
        }
        if (y > -50) {
          this.scrollTo(0, -50, 100);
        }
      });
    }
    if (this.next) {
      var _this = this;
      this.scroll.on("scrollEnd", function() {
        let y = this.y;
        let maxY = this.maxScrollY;
        console.log(y);
        console.log(maxY);
        if (y < maxY + 50 && y > maxY) {
          this.scrollTo(0, maxY + 50, 100);
        }
        if (y <= maxY) {
          _this.next();
          _this.scroll.refresh();
        }
      });
    }
  }
};
</script>

<style  lang="scss" scoped>
.scroller-wrap {
  overflow: hidden;
  width: 100%;
  left: 0;
}
.pull-down {
  width: 100%;
  height: 50px;
}
.pull-up {
  width: 100%;
  height: 50px;
  background: transparent;
}
</style>

