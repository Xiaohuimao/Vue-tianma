<template>
  <div class="backtop">
    <div class="gotop" v-show="gotop" @click="toTop">Top</div>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data() {
    return {
      gotop: false
    };
  },
  mounted() {
　　// 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
       let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      //  console.log(scrolltop)
      scrolltop > 200 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 70;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  }
}
</script>

<style scoped>
  .backtop .gotop {
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 30px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background: #797979;
  color: #fff;
}
</style>