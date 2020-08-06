<template>
  <div class="add">
      <van-tabbar v-model="active" active-color="#cf0000" inactive-color="#676767">
        <van-tabbar-item icon="home-o"><router-link tag="span" to="/">首页</router-link></van-tabbar-item>
        <van-tabbar-item icon="video-o"><router-link  tag="span" to="/shi">视频</router-link></van-tabbar-item>
        <van-tabbar-item icon="more-o"><router-link  tag="span" to="/xinjin">@新京报</router-link></van-tabbar-item>
        <van-tabbar-item icon="user-o"><router-link  tag="span" to="/wode">我的</router-link></van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
     
    };
  },
};
</script>

<style>

</style>