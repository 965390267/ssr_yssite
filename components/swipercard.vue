<template>
<div>
     <div class="swiper-test" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
        <slot></slot>  
    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>
   
</template>
<script>
  export default {
    data () {
      return {
        swiperOption: {
           slidesPerView: 3,
          spaceBetween: 60,
          slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
        //   pagination: {
        //     el: '.swiper-pagination'
        //   },
          // some swiper options...
        }
      }
    },
    mounted() {

     // this.mySwiper.slideTo(3, 1000, false)
    }
  }
</script>
<style scoped>
.swiper-test{
    width: 80%;
    margin: 0 auto;
    height: 464px;
}

.swiper-slide{
    width: 200px;
}
img{
    width:100%;
    height: 100%;
}
</style>