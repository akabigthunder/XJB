<template>
  <div class="app2">
      <div>
          <div class="ba">巴黎嫩首都爆炸造成超70人死亡约4000人受伤 直击现场</div>
          <div><img width="100%" src="img/a7 (1).png"/></div>
          <div class="fen">
              <div><van-icon name="browsing-history-o" /><span>分享</span></div>
              <div><van-icon name="other-pay" /><span>评论</span></div>
              <div><van-icon name="good-job-o" /><span>127</span></div>
          </div>
      </div>
      <div class="bo"></div>
      <div>
          <div class="ba">全球经济得复习之路</div>
          <div><img width="100%" src="img/a7 (2).png"/></div>
          <div class="fen">
              <div><van-icon name="browsing-history-o" /><span>分享</span></div>
              <div><van-icon name="other-pay" /><span>评论</span></div>
              <div><van-icon name="good-job-o" /><span>赞</span></div>
          </div>
      </div>
      <div class="bo"></div>
      <div>
          <div class="ba">台风“黑格比”侵袭浙江东阳 直击排捞清理现场</div>
          <div><img width="100%" src="img/a7 (3).png"/></div>
          <div class="fen">
              <div><van-icon name="browsing-history-o" /><span>分享</span></div>
              <div><van-icon name="other-pay" /><span>评论</span></div>
              <div><van-icon name="good-job-o" /><span>赞</span></div>
          </div>
      </div>
      <div class="bo"></div>
      <div>
          <div class="ba">台风“黑格比”今晨登陆浙江 直击台风登陆点附近城区应急清理</div>
          <div><img width="100%" src="img/a7 (4).png"/></div>
          <div class="fen">
              <div><van-icon name="browsing-history-o" /><span>分享</span></div>
              <div><van-icon name="other-pay" /><span>评论</span></div>
              <div><van-icon name="good-job-o" /><span>赞</span></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .app2{
        width:375px;
    }
    .ba{
        margin:20px;
    }
    .fen{
        display: flex;
        margin-top:10px;
    }
    .fen div{
        flex: 1;
        margin-left: 40px;
    }
    .bo{
        width:100%;
        height:8px;
        background: #eaeaea;
        margin-top: 20px;
    }
    .fen van-icon{
        margin-top:4px;
    }
    .fen span{
        position: relative;
        top: -2px;
        left: 6px;
    }
</style>