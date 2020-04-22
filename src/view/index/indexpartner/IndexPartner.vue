<template>
  <div class="indexpartner">
    <img src="~assets/img/index/title3.png" alt="" class="wow fadeInDown animated">
    <p>天马工场拥有强有力的合作伙伴，在共创、共享的基础上，天马合作伙伴可帮助您找到适合其业务的最佳解决方案。</p>
    <div class="imgbox wow fadeInUp animated">
      <div class="imgItem">
        <img src="~assets/img/index/imgItem1.png" alt="">
      </div>
      <div class="imgItem">
        <img src="~assets/img/index/imgItem2.png" alt="">
      </div>
      <div class="imgItem">
        <img src="~assets/img/index/imgItem3.png" alt="">
      </div>
      <div class="imgItem">
        <img src="~assets/img/index/imgItem4.png" alt="">
      </div>
      <div class="imgItem">
        <img src="~assets/img/index/imgItem5.png" alt="">
      </div>
      <div class="imgItem">
        <img src="~assets/img/index/imgItem6.png" alt="">
      </div>
      <div class="imgItem">
        <img src="~assets/img/index/imgItem7.png" alt="">
      </div>
      <div class="imgItem">
        <img src="~assets/img/index/imgItem8.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPartner'
}
</script>

<style scoped>
  .indexpartner {
    text-align: center;
  }
  .indexpartner>img {
    margin-bottom: 40px;
    width: 450px;
    height: 67px;
    /* padding: 10px; */
    margin-top: 100px ;
  }
  .imgbox {
    width: 1140px;
    display: flex;
    flex-wrap: wrap;
    margin: 35px auto;
  }
  .imgItem > img {
    width: 274px;
  }
</style>