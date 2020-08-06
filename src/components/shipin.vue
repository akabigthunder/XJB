<template>
  <div class="app2">
      <div>
          <div class="ba">巴西23名内阁部长中8人确诊新冠肺炎</div>
          <div><img width="100%" src="img/a1.png"/></div>
          <div class="jin">#动新闻</div>
          <div class="bottom1"></div>
          <div class="fen">
              <div><van-icon name="browsing-history-o" /><span>分享</span></div>
              <div><van-icon name="other-pay" /><span>评论</span></div>
              <div style="margin-left:0px;">
                  <div v-show="!post"><van-icon @click="mypost()" name="good-job-o" /></div>
                  <div v-show="post"><van-icon @click="mypost1()" color="#b00" name="good-job-o" /></div>
              </div>
              <div style="margin-left:0px;">{{text}}</div>
          </div>
      </div>
      <div class="bo"></div>
      <div>
          <div class="ba">国际 | CNN巴黎嫩记者站被炸得门窗全碎记者废墟中播新闻</div>
          <div><img width="100%" src="img/a2.png"/></div>
          <div class="jin">#世面</div>
          <div class="bottom1"></div>
          <div class="fen">
              <div><van-icon name="browsing-history-o" /><span>分享</span></div>
              <div><van-icon name="other-pay" /><span>评论</span></div>
              <div><van-icon name="good-job-o" /><span>赞</span></div>
          </div>
      </div>
      <div class="bo"></div>
      <div>
          <div class="ba">国际 | 1分钟看巴黎嫩爆炸“罪魁祸首”是什么</div>
          <div><img width="100%" src="img/a3.png"/></div>
          <div class="jin">#世面</div>
          <div class="bottom1"></div>
          <div class="fen">
              <div><van-icon name="browsing-history-o" /><span>分享</span></div>
              <div><van-icon name="other-pay" /><span>评论</span></div>
              <div><van-icon name="good-job-o" /><span>赞</span></div>
          </div>
      </div>
      <div class="bo"></div>
      <div>
          <div class="ba">可可爱爱！消防员凌晨站岗为提神开始跳舞</div>
          <div><img width="100%" src="img/a4.png"/></div>
          <div class="jin">#我们视频</div>
          <div class="bottom1"></div>
          <div class="fen">
              <div><van-icon name="browsing-history-o" /><span>分享</span></div>
              <div><van-icon name="other-pay" /><span>评论</span></div>
              <div><van-icon name="good-job-o" /><span>赞</span></div>
          </div>
      </div>
      <div style="height:70px;"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            post:false,
            text:90,
        }
    },
    methods:{
        mypost(){
            this.post=true;
            this.text++
        },
        mypost1(){
            this.post=false;
             this.text--
        }
    }
}
</script>

<style>
    .app2{
        width:375px;
    }
    .ba{
        margin:20px;
    }
    .jin{
        width: 75px;
        height: 30px;
        background: #ededed;
        border-radius: 20px;
        text-align: center;
        line-height: 30px;
        margin: 15px;
    }
    .bottom1{
        border-bottom:0.5px solid #bebdbd;
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