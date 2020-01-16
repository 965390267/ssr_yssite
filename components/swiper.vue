<template>
  <div>
    <div  v-swiper:swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners" :key="banner">
          <img class="banner"  v-lazy="banner"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banners: [
        "http://img.zangzhihong.com/background1.jpg",
        "http://img.zangzhihong.com/background1.jpg",
        "http://img.zangzhihong.com/background1.jpg",
        "http://img.zangzhihong.com/background1.jpg",
        "http://img.zangzhihong.com/background1.jpg"
      ],
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  mounted() {
   // this.mySwiper.slideTo(3, 1000, false);
  }
};
</script>
<style scoped>
.swiper-wrapper {
  height: 380px;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 10px;
  left: 45%;
  width: auto;
  height: 15px;
  line-height: 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
}
.swiper-pagination-bullet-active {
  background: rgba(123, 199, 255, 1);
}

.banner {
  width: 100%;
  height: 380px;
}
</style>
