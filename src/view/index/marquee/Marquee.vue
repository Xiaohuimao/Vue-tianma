<template>
  <div class="marquee">
    <div class="marquee-content" @mouseover="clearTimer" @mouseout='startTimer'>
      <div class="img-item" v-for="(item,index) in imglists" :key="index">
        <img :src="item" alt="">
        <span>视频点播</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Marquee",
  components: {
  },
  data() {
    return {
      imglists: [],
      timer: ''
    };
  },
  created() {
    for (var i = 1; i < 18; i++) {
      this.imglists.push('http://www.360tianma.com/application/cms/static/images/component'+i+'.png')
    }
    this.imglists.push('http://www.360tianma.com/application/cms/static/images/component1.png')
    // console.log(this.imglists)
  },
  mounted() {
     this.startTimer();
  },
  methods: {
    clearTimer() {
      clearInterval(this.timer)
    },
    startTimer() {
      var content = document.querySelector('.marquee-content');
      this.timer = setInterval(() => {
      var oldleftstr = getComputedStyle(content,null).left
      var oldleft = parseInt(oldleftstr);
      content.style.left = oldleft-1 + 'px'
      if (oldleft <= -2925) {
        content.style.left = 0
      }
    }, 10);
    }
  }
  
};
</script>

<style scoped>
  .marquee {
    width: 1140px;
    height: 80px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    margin-top: 100px;
    padding: 15px;
  }
  .marquee-content {
    width: 4050px;
    position: absolute;
    left: 0;
  }

  .img-item {
    width: 225px;
    height: 80px;
    line-height: 80px;
    float: left;
    text-align: center;
  }
  img {
    width: 50px;
    height: 50px;
  }
</style>