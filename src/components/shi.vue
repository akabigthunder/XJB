<template>
  <div class="add1">
      <div class="add1-1">
        <div>
          <van-tabs v-model="active">
            <van-tab title="视频"><shipin></shipin></van-tab>
            <van-tab title="快讯"><kuai></kuai></van-tab>
            <van-tab title="小视频"><xiaoshi></xiaoshi></van-tab>
            <van-tab title="直播"><zhibo></zhibo></van-tab>
          </van-tabs>
        </div>
        <div style="height:30px;">
            <van-icon id="biao1" name="search" />
        </div>
      </div>
      <bottoms></bottoms>
  </div>
</template>

<script>

import shipin from '@/components/shipin'
import kuai from '@/components/kuai'
import xiaoshi from '@/components/xiaoshi'
import zhibo from '@/components/zhibo'
export default {
    components:{
        shipin,
        kuai,
        xiaoshi,
        zhibo
    }
}
</script>

<style>
    .add1-1{
        display: flex
    }
    #biao1{
    width: 35px;
    font-size: 22px;
    margin-top: 11px;
    text-align: center;
    margin-left: 68px;
  }
</style>