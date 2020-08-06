<template>
  <div>
      <div class="add4">
          <div class="tou"></div>
          <div>登录之后，获取更多优质内容</div>
      </div>
      <div class="zan1">
          <div class="zan">
              <van-icon name="like-o" />
              <div>点赞</div>
          </div>
          <div class="zan">
              <van-icon name="chat-o" />
              <div>推送</div>
          </div>
          <div class="zan">
              <van-icon name="bookmark-o" />
              <div>订阅</div>
          </div>
          <div class="zan">
              <van-icon name="gold-coin-o" />
              <div>收益</div>
          </div>
      </div>
      <div class="bo"></div>
      <div class="shou">
          <div><van-icon name="manager-o" /></div>
          <div>手机权限</div>
          <div><van-icon name="arrow" /></div>
      </div>
      <div class="shou">
          <div><van-icon name="delete" /></div>
          <div>清除缓存</div>
          <div style="margin-left:50%;">0.00MB</div>
      </div>
      <div class="shou">
          <div><van-icon name="edit" /></div>
          <div>系统字体</div>
          <div style="margin-left:49%;margin-top:8px;">
            <van-switch v-model="checked" size="24px" active-color="#c50000" inactive-color="#fff" />
          </div>
      </div>
      <div class="shou">
          <div><van-icon name="star-o" /></div>
          <div>关于新京报</div>
          <div style="margin-left:58%;"><van-icon name="arrow" /></div>
      </div>
      <div class="shou">
          <div><van-icon name="description" /></div>
          <div>意见反馈</div>
          <div><van-icon name="arrow" /></div>
      </div>
      <div class="shou">
          <div><van-icon name="cluster-o" /></div>
          <div>推荐分享</div>
          <div><van-icon name="arrow" /></div>
      </div>
      <div class="shou">
          <div><van-icon name="warning-o" /></div>
          <div>版本信息</div>
          <div><van-icon name="arrow" /></div>
      </div>
      <bottoms></bottoms>
  </div>
</template>

<script>
import bottoms from '@/components/bottoms'
export default {
    components:{
        bottoms
    },
    data() {
    return {
      checked: true,
    };
  },
}
</script>

<style>
    .add4{
        width:100%;
        height:150px;
        background: #d50000;
        color:#fff;
        display: flex;
    }
    .tou{
        width:80px;
        height:80px;
        border-radius: 100%;
        background: #fff;
        margin:35px 0px 0px 30px;
    }
    .add4 div:nth-child(2){
        margin:65px 0px 0px 15px;
    }
    .zan1{
        display: flex;
        margin-top:20px;
    }
    .zan{
        flex: 1;
        margin-left: 40px;
    }
    .zan div{
        margin-left: -7px;
    }
    .zan .van-icon{
        font-size: 20px;
    }
    .shou{
        display: flex;
        border-bottom:0.5px solid #c5c3c3;
        height:40px;
        line-height: 40px;
    }
    .shou div:nth-child(1){
        margin-left: 15px;
    }
    .shou div:nth-child(2){
        margin-top: -2px;
        margin-left: 15px;
    }
    .shou div:nth-child(3){
        margin-left: 62%;
    }
    .van-switch__node{
        margin-left: 0px !important;
    }
</style>