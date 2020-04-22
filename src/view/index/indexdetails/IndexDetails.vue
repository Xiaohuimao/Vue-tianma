<template>
  <div class="indexdetails">
    <div class="details-item wow fadeInUp animated">
      <div class="details-text">
        <p class="title">快速引爆用户新增和转化</p>
        <p class="subtitle">颠覆传统玩法，高效率拉新、提升留存</p>
        <p class="text">如何让更多用户知道你的产品？如何使更多潜在用户成为注册用户？ 一直是用户运营的一大痛点，天马通过大量实战经验，总结沉淀了 许多能撬动用户的活动玩法和运营技巧，避免踩坑。 能够快速帮助企业结合热点打造爆款活动，实现快速、 低成本的触达新用户并召回沉默客户。</p>
      </div>
      <div class="img-show">
        <img src="~assets/img/index/intro1.png" alt="">
      </div>
    </div>

    <!--  -->
    <div class="details-item wow fadeInUp animated">
      <div class="img-show-left">
        <img src="~assets/img/index/intro2.png" alt="">
      </div>
      <div class="details-text">
        <p class="title">日常运营推广服务</p>
        <p class="subtitle">个性化玩法提升留存，促进自传播</p>
        <p class="text">天马工场为企业提供丰富的运营填充内容，完善的变现服务能力以及优质的积分兑换服务，帮助打造APP的运营乐园，从而达到新用户向老用户，老用户自发传播的一系列链路转变。天马工场通过游戏化运营思路，吸引用户高频参与，促进活跃，提升留存。</p>
      </div>
    </div>
    <!--  -->
    <div class="details-item wow fadeInUp animated">
      <div class="details-text">
        <p class="title">无忧用户变现服务</p>
        <p class="subtitle">完善的软件模块，专业的服务团队，让你无忧变现</p>
        <p class="text">天马工场为企业提供包括商品特卖、电商引流优惠券、本地生活服务商品等多种变现服务软件和售前售后服务。嵌入该模块即可快速进行引流变现，企业无需投入额外的人力进行维护。我们会根据企业用户特性，为您推荐最优的变现商品。</p>
      </div>
      <div class="img-show">
        <img src="~assets/img/index/intro3.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: "IndexDetails",
}
</script>

<style scoped>
  .details-item {
    width: 1140px;
    height: 450px;
    margin: 80px auto;
    display: flex;
    padding-top: 70px;
  }
  .details-text {
    width: 520px;
    height: 237px;
    margin-top: 80px;
  }
  .details-text:before {
    display: block;
    content: '';
    width: 64px;
    height: 8px;
    background: #62A1F8;
    border-radius: 3px;
    margin-bottom: 25px;
  }
  .title {
    font-weight: bold;
    font-size: 33px;
  }
  .subtitle {
    font-size: 20px;
    margin-top: 20px;
  }
  .text {
    font-size: 15px;
    color: #979797;
    margin-top: 40px;
  }
  .img-show {
    /* width: 570px;
    height: 370px; */
    margin-left: 40px;
  }
  .img-show img {
    width: 570px;
    height: 450px;
  }
  .img-show-left {
    margin-right: 40px;
  }
  .img-show-left img {
    width: 520px;
    height: 410px;
  }
</style>