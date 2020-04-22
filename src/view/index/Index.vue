<template>
  <div class="home">
    <navbar class="indexnavbar"></navbar>
    <swiper class="indexswiper"></swiper>
    <div class="bk">
      <advantage></advantage>
      <index-hover-show></index-hover-show>
      <index-details></index-details>
      <introduce></introduce>
      <marquee></marquee>
      <index-process></index-process>
      <index-partner></index-partner>
    </div>
    <index-bottom></index-bottom>
    <back-top></back-top>
  </div>
</template>

<script>
import Navbar from './navbar/Navbar'
import Swiper from './indexSwiper/IndexSwiper'
import Advantage from './myadvantage/Advantage'
import IndexHoverShow from 'components/content/indexhovershow/IndexHoverShow'
import IndexDetails from './indexdetails/IndexDetails'
import Introduce from './introduce/Introduce'
import Marquee from './marquee/Marquee'
import IndexProcess from './indexprocess/IndexProcess'
import IndexPartner from './indexpartner/IndexPartner'
import IndexBottom from './indexBottom/IndexBottom'
import BackTop from './backTop/BackTop'

import 'animate.css'
import {WOW} from 'wowjs'


export default {
  name: 'Index',
  components: {
    Navbar,
    Swiper,
    Advantage,
    IndexHoverShow,
    IndexDetails,
    Introduce,
    Marquee,
    IndexProcess,
    IndexPartner,
    IndexBottom,
    BackTop
  },
  mounted() {
    const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false
  })
  wow.init()
  }
}
</script>

<style>
  .indexnavbar {
    position: relative;
    top: 0;
    right: 0;
    z-index: 1000;
  }
  .indexswiper {
    position: relative;
    z-index: 1;
    top: -80px;
  }
  .bk {
    background-image: url('~assets/img/index/bg08.png');
    background-size: 100%;
  }
</style>