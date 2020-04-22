<template>
  <div class="introduce wow fadeInDown animated">
    <img src="~assets/img/index/title9.png" alt="">
    <introduce-swiper></introduce-swiper>
  </div>
</template>

<script>
import IntroduceSwiper from './child/IntroduceSwiper'
export default {
  name: 'Introduce',
  components: {
    IntroduceSwiper,
  }
}
</script>

<style scoped>
  .introduce {
    text-align: center;
  }
  .introduce img {
    margin-bottom: 40px;
  }
</style>