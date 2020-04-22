<template>
  <swiper :options="swiperOption">
    <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index"
    :style="item.icon">
      <!-- <img :src="item.url"> -->
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <!-- 分页 -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- 箭头左 -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- 箭头右 -->
  </swiper>
</template>

<script>
export default {
  name: "IndexSwiper",
  data() {
    return {
      slide: [
        {
          icon: {
            backgroundImage: "url("+require("assets/img/index/swiper1.jpg")+")",
            backgroundSize: "cover",
            backgroundposition: "center",
            backgroundRepeat: "no-repeat",
          }
        },
        {
          icon: {
            backgroundImage: "url("+require("assets/img/index/swiper2.jpg")+")",
            backgroundSize: "cover",
            backgroundposition: "center",
            backgroundRepeat: "no-repeat",
          }
        },
        {
          icon: {
            backgroundImage: "url("+require("assets/img/index/swiper3.jpg")+")",
            backgroundSize: "cover",
            backgroundposition: "center",
            backgroundRepeat: "no-repeat",
          }
        }
        ],
      //设置属性
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        //设置点击箭头
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // },
        //自动轮播
        autoplay: {
          delay: 2500,
          // 设置鼠标滑动后依旧自动轮播
          disableOnInteraction: false,
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        // mousewheel: true,
        // 渐变效果
        effect: 'fade'
      }
    };
  }
};
</script>

<style scoped>
.swiper-slide{
  width: 100vh;
  height: 800px;
}
/* .swiper-slid img{
  width: 100%;
  height: 100%;
} */
</style>