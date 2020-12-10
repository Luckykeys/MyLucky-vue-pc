<template>
  <div class="swiper-container" refs="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div
        class="swiper-slide"
        v-for="(carousel,index) in carouselList"
        :key="carousel.id"
      >
        <img v-if="index === 0 || index === carouselList.length - 1" :src="carousel.imgUrl" alt="">
        <img v-else v-lazy="carousel.imgUrl" alt="" />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
//1.先引入swiper的两个文件
import Swiper, { Navigation ,Pagination,Autoplay } from "swiper";
//使用这两个插件，因为swiper6默认书没有其他的分页器之类的文件
Swiper.use([Navigation,Pagination,Autoplay]);
export default {
  name: "Carousel",
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    carouselList() {
      if (this.swiper) return;
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 5000, //轮播间隔时间
          disableOnInteraction: false, //当用户点击下一页时，仍会开启自动轮播
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  mounted() {
    //先判断是否有数据
    if (!this.carouselList.length) return;
    this.initSwiper();
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-wrapper{
  height:100%;
}
.swiper-slide {
  img {
    width: 100%;
  }
}
</style>
