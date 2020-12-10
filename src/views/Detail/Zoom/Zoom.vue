<template>
  <div class="spec-preview">
    <img :src="imgUrl" />
    <div class="event" @mousemove="move" ref="event"></div>
    <div class="mask" ref="mask"></div>
    <div class="big">
      <img :src="bigImgUrl" ref="bigImg" />
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";
export default {
  name: "Zoom",
  props: {
    imgUrl: String, // 中图的url
    bigImgUrl: String, // 大图的url
  },
  mounted() {
    //计算出蒙板的宽度
    this.maskWidth = this.$refs.event.clientWidth / 2;
  },
  methods: {
    move: throttle(function (event) {
      // console.log(event);
      //1.先获取需要用到的元素
      const maskDiv = this.$refs.mask;
      const bigImgDiv = this.$refs.bigImg;

      //2.计算鼠标移动的定位
      const { offsetX, offsetY } = event;
      //3.计算整个蒙板离中图的距离，可以移动的位置
      let left, top;
      const maskWidth = this.maskWidth;
      left = offsetX - maskWidth / 2;
      top = offsetY - maskWidth / 2;

      //4.判断临界值
      if (left < 0) {
        left = 0;
      } else if (left > maskWidth) {
        left = maskWidth;
      }

      if (top < 0) {
        top = 0;
      } else if (top > maskWidth) {
        top = maskWidth;
      }

      //5.给相应的元素赋值
      maskDiv.style.left = left + "px";
      maskDiv.style.top = top + "px";

      bigImgDiv.style.left = -2 * left + "px";
      bigImgDiv.style.top = -2 * top + "px";
    }, 50),
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(255, 251, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>