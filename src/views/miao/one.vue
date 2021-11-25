<template>
  <div class="Mao">
    <div class="heard">
      <div class="one">
        <img
          class="lei"
          src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/back.png"
          alt=""
        />
        <p class="cen">
          <img
            src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/secbuy_logo.png"
            alt=""
          />
        </p>
        <img
          class="lei"
          src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/icon_32_question.png"
          alt=""
        />
      </div>
        <!--tab导航strt-->
        <div class="two">
                <van-tabs v-model="activeName">
                     <van-tab
                             v-for="item in tabList"
                              :title="item.title"
                             :key="item.path"
                             :name="item.path"
                     >
                     </van-tab>
                </van-tabs>
        </div>
        <!--tab导航end  -->
      <!--  -->
      <div class="there">
        <img
          src="https://res.youpin.mi-img.com/youpinoper/08cf83d4_b7e7_4051_ba52_4fb04fdddaa3.png"
          alt=""
        />
        <img
          src="https://res.youpin.mi-img.com/youpinoper/add42d0b_09a9_4b63_b229_6f39f089a2ec.png"
          alt=""
        />
      </div>
      <!--  -->
      <div  style="height: 0.49rem" class="box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}">
        <div class="dip" style="float:left;">
          <p>官方精选</p>
          <p class="te">实时热抢</p>
        </div>
        <div class="rtu" style="float:left;">
          <p>09:00</p>
          <p style="font-size:.11rem;">抢购中</p>
        </div>
        <div class="rtu" style="float:left;">
          <p>12:00</p>
          <p style="font-size:.11rem;">抢购中</p>
        </div>
        <div class="rtu" style="float:left;">
          <p>16:00</p>
          <p style="font-size:.11rem;">抢购中</p>
        </div>
        <div class="rtu" style="float:left;">
          <p>20:00</p>
          <p style="font-size:.11rem;">抢购中</p>
        </div>
        <div class="rtu" style="float:left;">
          <p>00:00</p>
          <p style="font-size:.11rem;">抢购中</p>
        </div>
      </div>
      <!--  -->
      <div class="center">
        <div class="cont">
          <p class="shi">距离结束00:43:26</p>
          <p class="Im">
            <img
              src="https://img.youpin.mi-img.com/shopmain/084c37bd661adbd54bcb96cfa47e1e02.jpg@base@tag=imgscale&h=240&m=1&q=80&w=240" alt=""/>
          </p>
         <div class="right">
           <div class="ceo">
             <span>限量</span>
             <p>高性价比厚床垫</p>
           </div>
           <div class="cet">
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
             <div class="cez">
               <button>￥899起</button>
               <p>直降899</p>
             </div>
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
           </div>
           <div class="di">
             <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/btn_half_red.png" alt="">
             <span class="ot">仅剩332件</span>
             <span class="otr">立即抢</span>
           </div>
         </div>
         
        </div>
        <div class="cont">
          <p class="shi">距离结束00:43:26</p>
          <p class="Im">
            <img
              src="https://img.youpin.mi-img.com/shopmain/084c37bd661adbd54bcb96cfa47e1e02.jpg@base@tag=imgscale&h=240&m=1&q=80&w=240" alt=""/>
          </p>
         <div class="right">
           <div class="ceo">
             <span>限量</span>
             <p>高性价比厚床垫</p>
           </div>
           <div class="cet">
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
             <div class="cez">
               <button>￥899起</button>
               <p>直降899</p>
             </div>
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
           </div>
           <div class="di">
             <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/btn_half_red.png" alt="">
             <span class="ot">仅剩332件</span>
             <span class="otr">立即抢</span>
           </div>
         </div>
         
        </div>
        <div class="cont">
          <p class="shi">距离结束00:43:26</p>
          <p class="Im">
            <img
              src="https://img.youpin.mi-img.com/shopmain/084c37bd661adbd54bcb96cfa47e1e02.jpg@base@tag=imgscale&h=240&m=1&q=80&w=240" alt=""/>
          </p>
         <div class="right">
           <div class="ceo">
             <span>限量</span>
             <p>高性价比厚床垫</p>
           </div>
           <div class="cet">
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
             <div class="cez">
               <button>￥899起</button>
               <p>直降899</p>
             </div>
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
           </div>
           <div class="di">
             <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/btn_half_red.png" alt="">
             <span class="ot">仅剩332件</span>
             <span class="otr">立即抢</span>
           </div>
         </div>
         
        </div>
        <div class="cont">
          <p class="shi">距离结束00:43:26</p>
          <p class="Im">
            <img
              src="https://img.youpin.mi-img.com/shopmain/084c37bd661adbd54bcb96cfa47e1e02.jpg@base@tag=imgscale&h=240&m=1&q=80&w=240" alt=""/>
          </p>
         <div class="right">
           <div class="ceo">
             <span>限量</span>
             <p>高性价比厚床垫</p>
           </div>
           <div class="cet">
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
             <div class="cez">
               <button>￥899起</button>
               <p>直降899</p>
             </div>
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
           </div>
           <div class="di">
             <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/btn_half_red.png" alt="">
             <span class="ot">仅剩332件</span>
             <span class="otr">立即抢</span>
           </div>
         </div>
         
        </div>

        <div class="cont">
          <p class="shi">距离结束00:43:26</p>
          <p class="Im">
            <img
              src="https://img.youpin.mi-img.com/shopmain/084c37bd661adbd54bcb96cfa47e1e02.jpg@base@tag=imgscale&h=240&m=1&q=80&w=240" alt=""/>
          </p>
         <div class="right">
           <div class="ceo">
             <span>限量</span>
             <p>高性价比厚床垫</p>
           </div>
           <div class="cet">
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
             <div class="cez">
               <button>￥899起</button>
               <p>直降899</p>
             </div>
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
           </div>
           <div class="di">
             <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/btn_half_red.png" alt="">
             <span class="ot">仅剩332件</span>
             <span class="otr">立即抢</span>
           </div>
         </div>
         
        </div>

        <div class="cont">
          <p class="shi">距离结束00:43:26</p>
          <p class="Im">
            <img
              src="https://img.youpin.mi-img.com/shopmain/084c37bd661adbd54bcb96cfa47e1e02.jpg@base@tag=imgscale&h=240&m=1&q=80&w=240" alt=""/>
          </p>
         <div class="right">
           <div class="ceo">
             <span>限量</span>
             <p>高性价比厚床垫</p>
           </div>
           <div class="cet">
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
             <div class="cez">
               <button>￥899起</button>
               <p>直降899</p>
             </div>
             <div class="xiao">
               <p>常销价</p>
               <s>￥1798</s>
             </div>
           </div>
           <div class="di">
             <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/btn_half_red.png" alt="">
             <span class="ot">仅剩332件</span>
             <span class="otr">立即抢</span>
           </div>
         </div>
         
        </div>
      </div>
      <!--  -->
     <div class="mb">
     <img src="https://img.youpin.mi-img.com/shopmain/29de757cbb61873258c53d4c8bba8ea0.png@base@tag=imgScale&h=216&m=1&q=80&w=216" alt="">
     <div class="zhont">
       <p class="yj">aigo多功能插线板</p>
       <p class="sj">低至3折</p>
       <p class="wj"><span>￥149</span><s>￥499</s></p>
     </div>
     <div class="bai">
      <div class="xan">
        <p></p>
      </div>
      <span class="hou">74%</span>
      <p class="qiang">立即抢</p>
     </div>
     </div>
      <div class="mb">
     <img src="https://img.youpin.mi-img.com/shopmain/29de757cbb61873258c53d4c8bba8ea0.png@base@tag=imgScale&h=216&m=1&q=80&w=216" alt="">
     <div class="zhont">
       <p class="yj">aigo多功能插线板</p>
       <p class="sj">低至3折</p>
       <p class="wj"><span>￥149</span><s>￥499</s></p>
     </div>
     <div class="bai">
      <div class="xan">
        <p></p>
      </div>
      <span class="hou">74%</span>
      <p class="qiang">立即抢</p>
     </div>
     </div>

      <div class="mb">
     <img src="https://img.youpin.mi-img.com/shopmain/29de757cbb61873258c53d4c8bba8ea0.png@base@tag=imgScale&h=216&m=1&q=80&w=216" alt="">
     <div class="zhont">
       <p class="yj">aigo多功能插线板</p>
       <p class="sj">低至3折</p>
       <p class="wj"><span>￥149</span><s>￥499</s></p>
     </div>
     <div class="bai">
      <div class="xan">
        <p></p>
      </div>
      <span class="hou">74%</span>
      <p class="qiang">立即抢</p>
     </div>
     </div>
      <div class="mb">
     <img src="https://img.youpin.mi-img.com/shopmain/29de757cbb61873258c53d4c8bba8ea0.png@base@tag=imgScale&h=216&m=1&q=80&w=216" alt="">
     <div class="zhont">
       <p class="yj">aigo多功能插线板</p>
       <p class="sj">低至3折</p>
       <p class="wj"><span>￥149</span><s>￥499</s></p>
     </div>
     <div class="bai">
      <div class="xan">
        <p></p>
      </div>
      <span class="hou">74%</span>
      <p class="qiang">立即抢</p>
     </div>
     </div>
      <div class="mb">
     <img src="https://img.youpin.mi-img.com/shopmain/29de757cbb61873258c53d4c8bba8ea0.png@base@tag=imgScale&h=216&m=1&q=80&w=216" alt="">
     <div class="zhont">
       <p class="yj">aigo多功能插线板</p>
       <p class="sj">低至3折</p>
       <p class="wj"><span>￥149</span><s>￥499</s></p>
     </div>
     <div class="bai">
      <div class="xan">
        <p></p>
      </div>
      <span class="hou">74%</span>
      <p class="qiang">立即抢</p>
     </div>
     </div>
      <div class="mb">
     <img src="https://img.youpin.mi-img.com/shopmain/29de757cbb61873258c53d4c8bba8ea0.png@base@tag=imgScale&h=216&m=1&q=80&w=216" alt="">
     <div class="zhont">
       <p class="yj">aigo多功能插线板</p>
       <p class="sj">低至3折</p>
       <p class="wj"><span>￥149</span><s>￥499</s></p>
     </div>
     <div class="bai">
      <div class="xan">
        <p></p>
      </div>
      <span class="hou">74%</span>
      <p class="qiang">立即抢</p>
     </div>
     </div>
      <div class="mb">
     <img src="https://img.youpin.mi-img.com/shopmain/29de757cbb61873258c53d4c8bba8ea0.png@base@tag=imgScale&h=216&m=1&q=80&w=216" alt="">
     <div class="zhont">
       <p class="yj">aigo多功能插线板</p>
       <p class="sj">低至3折</p>
       <p class="wj"><span>￥149</span><s>￥499</s></p>
     </div>
     <div class="bai">
      <div class="xan">
        <p></p>
      </div>
      <span class="hou">74%</span>
      <p class="qiang">立即抢</p>
     </div>
     </div>

    </div>
    <!--  -->
    <dibu/>
  </div>
</template>
<script>
import dibu from "@/components/di.vue"
 export default {
   components:{
  dibu,
   },
    data(){
      return {
        isFixed: false,
        offsetTop:0,
          tabList:[
              {title:'首页',path:'home'},
              {title:'运动出行',path:'exercise'},
              {title:'家居家装',path:'household'},
              {title:'海购',path:'kaola'},
              {title:'智能数码',path:'intelligent'},
              {title:'家纺餐厨',path:'textiles '},
              {title:'婴宠',path:'baby'},
          ],
          activeName:'baby'
      }
    },
    mounted(){
      window.addEventListener('scroll',this.initHeight);
      this.$nextTick( () => {
        this.offsetTop = document.querySelector('#boxFixed').offsetTop;
      })
    },
    methods:{
      initHeight () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isFixed = scrollTop > this.offsetTop ? true : false;
      },
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
</script>
<style scoped>
    .two{
        margin-left: 0.1rem;
        margin-right: 0.1rem;
        margin-bottom: 0.1rem;
    }
    ::v-deep .van-tab__text{
        color: white;
    }
    ::v-deep .van-tabs--line .van-tabs__wrap{
        height: 0.41rem;
    }
    ::v-deep .van-tab{
        line-height: 0.41rem;
    }
    ::v-deep .van-tabs__line{
        background-color:white ;
    }
    ::v-deep .van-tabs__nav {
        background-color:transparent ;
    }
.Mao {
  width: 3.75rem;
}
body{
  background: rgb(230, 230, 230);
}
.te{
  width: .56rem;
  height: .18rem;
  color: rgb(255, 48, 72);
    font-family: PingFangSC-Medium;
    font-size: .11rem;
    font-weight: 500;
    line-height: .19rem;
    opacity: 1;
    text-align: center;
    background: white;
    border-radius: .08rem;
    margin-top: .05rem;

}
.heard {
  background: linear-gradient(to right, rgb(255, 51, 102), rgb(255, 51, 18));
  height: 4.58rem;
  padding: 0.1rem;
}
.one {
  display: flex;
  justify-content: space-between;
  height: 0.44rem;
  align-items: center;
}

.cen img {
  width: 0.91rem;
}
.lei {
  width: 0.32rem;
  height: 0.32rem;
}
.there {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.15rem;
}
.there img {
  width: 1.71rem;
  height: 0.57rem;
}
.di {
  width: 0.56rem;
  height: 0.24rem;
  color: rgb(255, 255, 255);
  font-family: PingFangSC-Regular;
  font-size: 0.14rem;
  line-height: 0.25rem;
  position: sticky;
  top: 0;
}
  .is_fixed{
    position: fixed;
    top: 0;
    left: 50%;
    margin-left: -250px;
    z-index: 999;
  }
.box_fixed{
  width: 3.55rem;
  height: .49rem;
  background: linear-gradient(to right, rgb(255, 51, 102), rgb(255, 51, 18));
      background: linear-gradient(to right, rgb(255, 51, 102), rgb(255, 51, 18));
    position: sticky;
    z-index: 10;
    top: 0;
}
.center {
  width: 3.41rem;
  margin: 0 auto;
  background-color: rgb(204, 0, 0);
  border-radius: 0.09rem;
  margin-bottom: 9px;
  padding: 0.01rem 0.09rem 0.09rem 0.09rem;
}
.cont {
  background-color: rgb(255, 255, 255);
  border-radius: 0.06rem;
  height: 1.44rem;
  margin-top: 0.09rem;
  position: relative;
  padding: 0 0.1rem 0 0.1rem;
  width: 3.2rem;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  position: relative;
}
.shi {
  background: linear-gradient(to right, rgb(255, 51, 18), rgb(248, 36, 0))
    rgb(248, 36, 0);
  border-bottom-right-radius: 0.06rem;
  height: 0.16rem;
  padding-right: 0.04rem;
  padding-left: 0.04rem;
  width: 0.97rem;
  font-size: 0.1rem;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
}
.Im{
  float: left;
}
.Im img {
  width: 1.2rem;
  height: 1.2rem;
}
.ceo span{
  color: rgb(255, 255, 255);
    font-size: .10rem;
    line-height: .17rem;
    text-align: center;
    display: block;
    width: .26rem;
    height: .16rem;
    background-color: red;
    float: left;
}
.ceo p{
  float: left;
  font-size: .16rem;
    font-weight: 500;
    line-height: .16rem;
}
.cet{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1.95rem;
}
.xiao{
  color: rgb(102, 102, 102);
    font-size: .10rem;
    margin-bottom: .05rem;
}
.cez button{
  color: rgb(255, 255, 255);
    font-size: .12rem;
    line-height: .21rem;
    padding-right: .06rem;
    padding-left: .06rem;
    background: red;
    border: none;
        border-radius: .09rem;
        width: .58rem;
        height: .22rem;
}
.cez p{
      color: rgb(255, 51, 18);
    font-size: .11rem;
    height: .14rem;
    line-height: .17rem;
    margin-top: .21rem;
    text-align: center;
}
.di{
  margin-top: .10rem;
  position: relative;
}
.di img{
  width: 1.86rem;
  height: .33rem;
  
}
.right{
  width: 1.85rem;
  float: right;
  padding: .15rem .07rem 0 .07rem;
}
.ot{
  position: absolute;
  top: .03rem;
    left: .14rem;
    width: .79rem;
  
}
.otr{
  position: absolute;
  right: -1.16rem;
  top: .03rem;
}
.mb{
  width: 3.31rem;
  height: 1.10rem;
  padding: .10rem;
  background: white;
  border-radius: .10rem;
}
.yj{
color: rgb(0, 0, 0);
    font-size: .16rem;
    font-weight: 500;
    height: .22rem;
    letter-spacing: -0.32px;
    line-height: .25rem
}
.tj{
  color: rgba(0, 0, 0, 0.8);
    font-size: .12rem;
    font-weight: 400;
    height: .20rem;
    letter-spacing: -0.24px;
    line-height: .23rem;
}
.dip{
  color: white;
}
.rtu{
  width: .56rem;
  height: .44rem;
}
.rtu p{
  color: rgb(255, 255, 255);
    font-family: PingFangSC-Regular;
    font-size: .18rem;
    line-height: .25rem;
    opacity: 0.7;
    text-align: center;
}
.sj{
    border: 1px solid;
    border-color: rgb(255, 156, 139);
    border-radius: .02rem;
    border-width: 1px;
    padding-right: .03rem;
    padding-left: .03rem;
    color: rgb(250, 64, 11);
    font-size: .10rem;
    font-weight: 400;
    width: .47rem;
    margin-top: .43rem;
}
.wj span{
color: rgb(248, 36, 0);
    font-family: PingFangSC-Regular;
    font-size: .18rem;
    font-weight: 500;
}
.wj s{
  color: rgba(0, 0, 0, 0.6);
    font-size: .11rem;
    font-weight: 400;
    letter-spacing: 0px;
    margin-left: .02rem;
    text-decoration-line: line-through;
}
.mb{
  display: flex;
  justify-content: space-around;
  margin-top: .10rem;
}
.mb img{
  width: 1.08rem;
  height: 1.08rem;
}
.bai{
  width: .75rem;
  height: .38rem;
  background: red;
  border-radius: .06rem;
  margin-top: .70rem;
  padding: .05rem;
 
}
.xan{
  background-color: rgba(255, 255, 255, 0.329);
    height: .05rem;
    width: .45rem;
     float: left;
}
.xan p{
  background-color: rgb(255, 255, 255);
    border-radius: .03rem;
    height: .04rem;
    width: 74%;
}
.hou{
  color: rgb(255, 255, 255);
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    float: right;
    line-height: .10rem;
}
.qiang{
  color: rgb(255, 255, 255);
    font-size: .12rem;
    font-weight: 500;
    letter-spacing: -0.28px;
    line-height: .20rem;
    text-align: center;
   margin-top: .15rem;
}
</style>
