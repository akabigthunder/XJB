<template>
  <div class="add6">
      <div style="display:flex;">
          <div style="width:69%;">
            <van-cell-group>
                <van-field v-model="value2"  clearable  left-icon="search" placeholder="大家都在搜：视觉中国"/>
            </van-cell-group>
         </div>
         <div class="va"><router-link tag="span" to="/">取消</router-link></div>
      </div>
      <div class="re">热门搜索</div>
      <div class="jue">视觉中国</div>
      <div class="jue">政事儿</div>
      <div class="jue">凉山</div>
      <div class="jue">有理数</div>
      <div class="jue">早读</div>
      <div class="jue">剥洋葱</div>
      <div class="jue">政事儿</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
         value1: '',
         value2: '',
        };
    },
}
</script>

<style>
    .van-cell{
        background: #f3f3f3 !important;
        width:116% !important;
            margin: 15px 0px 0px 15px;
    }
    .van-field__left-icon .van-icon, .van-field__right-icon .van-icon{
        font-size: 20px !important;
        color:#b00;
    }
    .va{
        color: #b00;
        margin: 25px 0px 0px 70px;
    }
    .re{
        width: 100%;
        height: 40px;
        background: #ebe9e9;
        text-indent: 20px;
        line-height: 40px;
        font-weight: bold;
        margin-top: 20px;
    }
    .jue{
        height:40px;
        line-height: 40px;
        text-indent: 20px;
        border-bottom:0.5px solid #ccc;
    }
</style>