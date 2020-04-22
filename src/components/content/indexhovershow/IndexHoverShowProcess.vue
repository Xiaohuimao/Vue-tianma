<template>
  <div class="indexhovershowprocess wow fadeInUp animated">
    <hovershow class="item">
      <img slot="imgshow" src="~assets/img/index/icon5.png" alt="" class="imgshow">
      <p slot="title" class="title">挑选组件</p>
      <p slot="content" class="content">从天马工场应用市场选择组件， 组件包括APP、微信和网站等。</p>
    </hovershow>
    <hovershow class="item">
      <img slot="imgshow" src="~assets/img/index/icon6.png" alt="" class="imgshow">
      <p slot="title" class="title">配置购买</p>
      <p slot="content" class="content">将已经选择的组件配置进入您的应用， 完成购买后，可在线打包应用</p>
    </hovershow>
    <hovershow class="item">
      <img slot="imgshow" src="~assets/img/index/icon7.png" alt="" class="imgshow">
      <p slot="title" class="title">打包上线</p>
      <p slot="content" class="content">下载打包完成后的前后端程序，在I0S 、Android 或微信平台上架和在服务端完成部署</p>
    </hovershow>
  </div>
</template>

<script>
import Hovershow from 'components/common/Hovershow'
export default {
  name: 'indexHoverShowProcess',
  components: {
    Hovershow
  }
}
</script>

<style scoped>
  .indexhovershowprocess {
    width: 1140px;
    height: 339px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }
  .item {
    text-align: center;
    width: 350px;
    height: 350px;
  } 
  .imgshow {
    width: 117px;
    height: 117px;
    margin-top: 20px;
  }
  .title {
    font-size: 25px;
    /* font-weight: 600; */
    margin-top: 25px;
    color: #333;
  }
  .content {
    font-size: 15px;
    color: #939393;
    margin-bottom: 5px;
  }
</style>