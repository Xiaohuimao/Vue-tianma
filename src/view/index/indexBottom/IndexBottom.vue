<template>
  <footer class="indexbottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 title">商务合作</div>
        <div class="call col-lg-4" >
          <ul class="col-lg-7">
            <li>
              <img src="http://www.360tianma.com/application/cms/static/images/icon8.png" alt="">
              <span>孙海玉</span>
            </li>
            <li>
              <img src="http://www.360tianma.com/application/cms/static/images/icon9.png" alt="">
              <span>15228916452</span>
            </li>
            <li>
              <img src="http://www.360tianma.com/application/cms/static/images/icon10.png" alt="">
              <span>261052080</span>
            </li>
            <li>
              <img src="http://www.360tianma.com/application/cms/static/images/icon11.png" alt="">
              <span>sunhaiyu@360tianma.com</span>
            </li>
          </ul>
          <div class="erw col-lg-5">
            <img src="http://www.360tianma.com/application/cms/static/images/sunhaiyu.png" alt="">
          </div>
        </div>
         <div class="call col-lg-4" >
          <ul class="col-lg-7">
            <li>
              <img src="http://www.360tianma.com/application/cms/static/images/icon8.png" alt="">
              <span>孙海玉</span>
            </li>
            <li>
              <img src="http://www.360tianma.com/application/cms/static/images/icon9.png" alt="">
              <span>15228916452</span>
            </li>
            <li>
              <img src="http://www.360tianma.com/application/cms/static/images/icon10.png" alt="">
              <span>261052080</span>
            </li>
            <li>
              <img src="http://www.360tianma.com/application/cms/static/images/icon11.png" alt="">
              <span>sunhaiyu@360tianma.com</span>
            </li>
          </ul>
          <div class="erw col-lg-5">
            <img src="http://www.360tianma.com/application/cms/static/images/sunhaiyu.png" alt="">
          </div>
        </div>
        <div class="col-lg-4 rw">
          <div class="rw1"><img src="http://www.360tianma.com/application/cms/static/images/tmwechat.png" alt=""></div>
          <div><img src="http://www.360tianma.com/application/cms/static/images/tmapp.png" alt=""></div>
        </div>
      </div>
    </div>
    <div class="copyright">

    </div>
  </footer>
</template>

<script>
export default {
  name: 'IndexBottom'
}
</script>

<style scoped>
  .indexbottom {
    background: #797979;
  }
  .container {
    width: 1140px;
    margin: 0 auto;
  }
  .call {
    padding-left: 0;
    display: flex;
  }
  .call> ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  li > img {
    width: 20px;
    height: 20px;
  }
  li > span {
    font-size: 14px;
    color: #fff;
    margin-left: 5px;
  }
  .erw {
    float: left;
    padding-left: 0;
  }
  .erw > img {
    width: 105px;
    height: 105px;
    border-radius: 10px;
  }
  .title {
    font-size: 20px;
    color: #fff;
    padding: 0;
  }
  .rw {
    display: flex;
  }
  .rw img{
    width: 120px;
    height: 120px;
    border-radius: 10px;
  }
  .rw1 {
    padding: 0 64px;
    border-left: 1.5px solid #999;
  }
</style>