<template>
  <div class="indexhovershow wow fadeInUp animated">
    <hovershow class="item">
      <img slot="imgshow" src="~assets/img/index/icon1.png" alt="" class="imgshow">
      <p slot="title" class="title">快速上线</p>
      <p slot="content" class="content">核心技术缩短APP开发周期，开发快、组装快、发布快</p>
    </hovershow>
    <hovershow class="item">
      <img slot="imgshow" src="~assets/img/index/icon2.png" alt="" class="imgshow">
      <p slot="title" class="title">低成本拉新</p>
      <p slot="content" class="content">玩法多样，裂变传播，获客成本低</p>
    </hovershow>
    <hovershow class="item">
      <img slot="imgshow" src="~assets/img/index/icon3.png" alt="" class="imgshow">
      <p slot="title" class="title">用户促活</p>
      <p slot="content" class="content">结合每一个企业的产品特点，通过多种多样的运营手段，促进用户活跃</p>
    </hovershow>
    <hovershow class="item">
      <img slot="imgshow" src="~assets/img/index/icon4.png" alt="" class="imgshow">
      <p slot="title" class="title">变现赋能</p>
      <p slot="content" class="content">完善的变现系统和运营模式、赋能变现模式</p>
    </hovershow>
  </div>
</template>

<script>
import Hovershow from 'components/common/Hovershow'
export default {
  name: 'IndexHoverShow',
  components: {
    Hovershow
  },
}
</script>

<style scoped>
  .indexhovershow {
    width: 1140px;
    height: 339px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }
  .item {
    text-align: center;
  } 
  .imgshow {
    width: 117px;
    height: 117px;
    margin-top: 20px;
  }
  .title {
    font-weight: 600;
    margin-top: 25px;
  }
  .content {
    font-size: 13px;
    color: #666;
    margin-bottom: 5px;
  }
</style>