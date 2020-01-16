<template>
  <div>
      <div @click="prev()"> < </div>
    <div  v-swiper:swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in homeZixun.articles" :key="banner.id">
          <!-- <img class="banner" :src="banner" /> -->
          <ZiXunCard :cardData="banner"></ZiXunCard>
        </div>
      </div>
      <div @click="next()">></div>
    </div>
  </div>
</template>
<script>
import ZiXunCard from "./home/yszixun"
export default {
  
    components:{
ZiXunCard
    },
      props: {
    homeZixun: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
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
      
      }
    };
  },

  methods:{
   next(){
        this.swiper.slideNext();
   },
   prev(){
        this.swiper.slidePrev();
   }
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

.banner {
  width: 100%;
  height: 380px;
}
</style>
