<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(skuImage,index) in skuImageList"
        :key="skuImage.id"
      >
        <img :src="skuImage.imgUrl" @click="updateCurrentIndex(index)"/>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
//1.先引入swiper的两个文件
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
//使用这两个插件，因为swiper6默认书没有其他的分页器之类的文件
Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: "ImageList",
  //props声明接受父组件传到的数据
  props: {
    skuImageList: Array,
    updateCurrentIndex:Function
  },
  watch: {
    skuImageList() {
      // 一旦触发，说明值发生了变化，此时就有数据
      // 等数据回来，渲染完成DOM元素
      this.$nextTick(() => {
        new Swiper(this.$refs.swiper, {
          slidesPerView: 5, // 每页显示轮播图的数量
          spaceBetween:10, // 轮播图间距
          slidesPerGroup: 5, // 切换时切换轮播图的数量
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>