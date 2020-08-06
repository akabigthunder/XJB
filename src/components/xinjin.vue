<template>
  <div>
      <div class="xin">@新京报</div>
      <div style="height:50px"></div>
      <img width="375px;" src="img/b1.png"/>
      <div class="bao">
          <div>拍者</div>
          <div>报料</div>
      </div>
      <div class="bo"></div>
      <div class="xuan">精彩内容</div>
      <div class="app-4" style="margin-left:10px;">
          <div><img src="img/b2.png"/></div>
          <div style="margin-left:10px;">
              <div>紧急！客车行至河坝被冲车轮悬空 消防员找村民用挖掘机挡住救下</div>
              <div class="span"><span>有料</span><span>5018阅读</span></div>
          </div>
      </div>
      <div class="bottom" style="margin-top:10px;margin-left:10px;"></div>
      <div class="app-4" style="margin-left:10px;">
          <div><img src="img/b3.png"/></div>
          <div style="margin-left:10px;">
              <div>93秒高燃混剪致敬建军93周年！高原碧海天维护国家权益</div>
              <div class="span"><span>我们视频</span><span>2.9亿阅读</span></div>
          </div>
      </div>
      <div class="bottom" style="margin-top:10px;margin-left:10px;"></div>
      <div class="app-4" style="margin-left:10px;">
          <div><img src="img/b4.png"/></div>
          <div style="margin-left:10px;">
              <div>爱情的模样：98岁爷爷害怕抽血 100岁奶奶赶忙捂住他的眼睛</div>
              <div class="span"><span>我们视频</span><span>1.6亿阅读</span></div>
          </div>
      </div>
      <div class="bottom" style="margin-top:10px;margin-left:10px;"></div>
      <div class="app-4" style="margin-left:10px;">
          <div><img src="img/b5.png"/></div>
          <div style="margin-left:10px;">
              <div>60岁老警站完最后一班岗对着监控敬礼 监控另一端的反应感动</div>
              <div class="span"><span>我们视频</span><span>5185亿阅读</span></div>
          </div>
      </div>
      <div style="height:70px;"></div>
      <bottoms></bottoms>
  </div>
</template>

<script>
import bottoms from '@/components/bottoms'
export default {
    components:{
        bottoms
    }
}
</script>

<style>
    .xin{
        text-align: center;
        margin-top:10px;
        margin-bottom: 10px;
        position: fixed;
        background: #fff;
        width: 100%;
        height:40px;
        top:-10px;
        line-height: 40px;
    }
    .bao{
        display: flex;
        margin-top:15px;
    }
    .bao div:nth-child(1){
        width:170px;
        height:50px;
        text-align: center;
        color:#fff;
        line-height:50px;
        background: red;
        margin-left: 12px;
    }
    .bao div:nth-child(2){
        width:170px;
        height:50px;
        text-align: center;
        line-height:50px;
        border:1px solid #d6d6d6;
        margin-left: 10px;
    }
    .xuan{
        margin-top: 20px;
        margin-left: 10px;
        font-size: 18px;
    }
</style>