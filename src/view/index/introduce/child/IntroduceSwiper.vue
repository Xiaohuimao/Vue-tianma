<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="mySwiper">
    <swiper-slide class="video-item" style="width:816px">
      <swiper-video></swiper-video>
    </swiper-slide>
    <swiper-slide class="video-item">
      <swiper-video></swiper-video>
    </swiper-slide>
    <swiper-slide class="video-item">
      <swiper-video></swiper-video>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import SwiperVideo from "./SwiperVideo";
export default {
  name: "carrousel",
  components: {
    SwiperVideo
  },
  data() {
    return {
      swiperOptions: {
        // pagination: {
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        slidesPerView : 1.5,
        // spaceBetween : 150
        centeredSlides : true,
        initialSlide : 1,
        
        // slidesOffsetAfter : -1600,
      }
    };
  }
};
</script>

<style scoped>
  .mySwiper {
    height: 459px;
  }
</style>