<template>
  <div class="hovershow">
    <slot name="imgshow" class="imgshow"></slot>
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'Hovershow'
}
</script>

<style scoped>
  .hovershow {
    background-image: url('~assets/img/index/bg07.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 260px;
    height: 339px;
    padding: 40px;
    border-radius: 5px 5px 0 0;

    -webkit-transform: scale(1,1);
    -ms-transform: scale(1,1);
    transform: scale(1,1);
    -webkit-transition: all .5s;
    transition: all .5s;
  }
  .hovershow:hover {
    -webkit-transform: scale(1.05,1.05);
    -ms-transform: scale(1.05,1.05);
    transform: scale(1.05,1.05);
    -webkit-box-shadow: 0 0 6px #007aff;
    box-shadow: 0 0 6px #007aff;
    -webkit-transition: all .5s;
    transition: all .5s;
  }
</style>