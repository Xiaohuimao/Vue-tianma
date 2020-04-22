<template>
  <div class="indexprocess wow fadeInDown animated">
    <img src="~assets/img/index/title3.png" alt="">
    <index-hover-show-process></index-hover-show-process>
  </div>
</template>

<script>
import IndexHoverShowProcess from 'components/content/indexhovershow/IndexHoverShowProcess'
export default {
  name: 'IndexProcess',
  components: {
    IndexHoverShowProcess,
  }
}
</script>

<style scoped>
  .indexprocess {
    text-align: center;
  }
  .indexprocess img {
    margin-bottom: 40px;
    width: 450px;
    height: 67px;
    /* padding: 10px; */
    margin-top: 100px ;
  }
</style>