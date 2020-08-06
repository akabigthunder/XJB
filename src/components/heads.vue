<template>
  <div class="add">
      <div class="add-1">新京报</div>
      <div>
          <van-tabs>
            <van-tab :title="'推荐'" >
               <tui></tui>
           </van-tab>
           <van-tab :title="'抗肺炎 '" >
               <kang></kang>
           </van-tab>
           <van-tab :title="'视频 ' " >
               <ship></ship>
           </van-tab>
           <van-tab :title="'深读 '" >
               深读
           </van-tab>
           <van-tab :title="'时事 '" >
               时事
           </van-tab>
           <van-tab :title="'订阅 '" >
               订阅
           </van-tab>
           <van-tab :title="'北京 '" >
               北京
           </van-tab>
           <van-tab :title="'新京报 '" >
               新京报
           </van-tab>
           <van-tab :title="'观点 '" >
               观点
           </van-tab>
           <van-tab :title="'财经 '" >
               财经
           </van-tab>
           <van-tab :title="'产经 '" >
               产经
           </van-tab>
           <van-tab :title="'娱乐 '" >
               娱乐
           </van-tab>
           <van-tab :title="'文化 '" >
               文化
           </van-tab>
           <van-tab :title="'体育 '" >
               体育
           </van-tab>
        </van-tabs>
      </div>
      <div style="height:30px;">
        <router-link tag="span" to="/sous"><van-icon id="biao" name="search" /></router-link>
      </div>
      <bottoms></bottoms>
  </div>
</template>

<script>
import bottoms from '@/components/bottoms.vue'
import tui from '@/components/tui.vue'
import kang from '@/components/kang.vue'
import ship from '@/components/ship.vue'
export default {
  components:{
    bottoms,
    tui,
    kang,
    ship
  }
}
</script>

<style>
  .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
        border-width:0px !important;
  }
  .add{
    display: flex;
  }
  .add-1{
    width: 90px;
    margin-top: 3.5%;
    background: #cf0000;
    color: #fff;
    height: 25px;
    line-height: 25px;
    text-align: center;
    margin-left: 5px;
  }
  #biao{
    width: 35px;
    font-size: 22px;
    margin-top: 11px;
    text-align: center;
  }
  .van-tabs{
    width:270px;
  }
</style>