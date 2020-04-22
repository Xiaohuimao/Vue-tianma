<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="nav">
    <b-navbar-brand href="#" class="col-lg-2 col-md-2 col-sm-2 col-xs-2 logo">
      <img src="~assets/img/index/logo1.png" alt="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
      <b-navbar-nav class="col-lg-8 col-md-8 col-sm-8 col-xs-8" :fill=isCenter>
        <b-nav-item href="#">首页</b-nav-item>
        <b-nav-item href="#">商城</b-nav-item>
        <b-nav-item href="#">开发者中心</b-nav-item>
        <b-nav-item href="#">优秀案例</b-nav-item>
        <b-nav-item href="#">高端定制案例</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="col-lg-4 col-md-4 col-sm-4 col-xs-4" align="center">
        <b-nav-item href="#">登录</b-nav-item>
        <b-nav-item href="#" class="loginset">注册</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isCenter: true
    }
  }
}
</script>

<style>
  .nav {
    padding: 0 100px;
    /* background: rgba(255, 255, 255, 0.0); */
    height: 80px;
  }
  .logo {
    text-align: center;
  }
  .logo img {
    max-width: 150px;
    max-height: 80px;
  }
  .loginset {
    margin-left: 20px;
  }
</style>