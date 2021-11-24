<template>
  <div class="box">
    <div class="header">
      <!-- <img src="../assets/1.png" alt="">
       -->
      <div class="header-bg"></div>
      <div class="header-text">
        <div class="left">
          <div>
            <img src="../assets/2.png" alt="" />
          </div>
          <div>
            <span>请登录</span>
          </div>
        </div>
        <div class="right">
          <img src="../assets/3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="header1">
      <div class="header2">我的订单</div>
      <div class="header3">
        
        <img src="../assets/3.png" alt="" />
      </div>
    </div>

    <div class="bott">
      <div class="bott1">
        <img src="../assets/4.png" alt="">
        <div class="wenben">代付款</div>
      </div>
       <div class="bott1">
        <img src="../assets/5.png" alt="">
        <div class="wenben">待收货</div>
      </div>
       <div class="bott1">
        <img src="../assets/6.png" alt="">
        <div class="wenben1">评价</div>
      </div>
       <div class="bott1">
        <img src="../assets/7.png" alt="">
        <div class="wenben2">退款/售后</div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom1">
        <div class="bottom2">
          <img src="../assets/8.png" alt="">
        </div>
        <div class="bottom4">我的资产</div>
        <div class="bottom5">
          <img src="../assets/3.png" alt="">
        </div>
      </div>
      <div class="bottom1">
        <div class="bottom2">
          <img src="../assets/9.png" alt="">
        </div>
        <div class="bottom4">领优惠券</div>
        <div class="bottom5">
          <img src="../assets/3.png" alt="">
        </div>
      </div>

      <div class="bottom1-1">
        <div class="bottom2">
          <img src="../assets/10.png" alt="">
        </div>
        <div class="bottom4">我的收藏</div>
        <div class="bottom5">
          <img src="../assets/3.png" alt="">
        </div>
      </div>
      
      <div class="bottom1">
        <div class="bottom2">
          <img src="../assets/11.png" alt="">
        </div>
        <div class="bottom4">地址管理</div>
        <div class="bottom5">
          <img src="../assets/3.png" alt="">
        </div>
      </div>
      <div class="bottom1">
        <div class="bottom2">
          <img src="../assets/12.png" alt="">
        </div>
        <div class="bottom4">资质证照</div>
        <div class="bottom5">
          <img src="../assets/3.png" alt="">
        </div>
      </div>
      <div class="bottom1">
        <div class="bottom2">
          <img src="../assets/13.png" alt="">
        </div>
        <div class="bottom4">协议规则</div>
        <div class="bottom5">
          <img src="../assets/3.png" alt="">
        </div>
      </div>
      <div class="bottom1">
        <div class="bottom2">
          <img src="../assets/14.png" alt="">
        </div>
        <div class="bottom4">帮助反馈</div>
        <div class="bottom5">
          <img src="../assets/3.png" alt="">
        </div>
      </div>
      
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from '../components/footer/footer.vue'
export default {
  
  components:{
    Footer
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 3.75rem;
  height: 6rem;
  background-color: rgb(255, 255, 255);
}
.header-bg {
  height: 1rem;
  width: 100%;
  background-image: url(../assets/1.png);
}
.header-text {
  width: 3.75rem;
  height: 1rem;
  padding: 0 0.1rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  box-sizing: border-box;
}
.header {
  width: 3.75rem;
  height: 1rem;
  background-color: chocolate;
  position: relative;
  display: flex;
  justify-content: space-around;
}
.header {
  div {
    img {
      width: 100%;
      height: 100%;
      /* position: absolute; */
    }
  }
}
.left {
  // width: 0.6rem;
  height: 0.6rem;
  // background-color: red;
  margin: 0.2rem;
  div {
    float: left;
  }
  div:nth-child(1) {
    width: 0.6rem;
  }
  div:nth-child(2) {
    line-height: 0.6rem;
    margin-left: 0.11rem;
    color: #ffffff;
  }
}
.left > img {
  width: 100%;
  height: 100%;
}
.right {
  width: 0.18rem;
  height: 0.18rem;
  // background-color: pink;
}
.right > img {
  width: 100%;
  height: 100%;
  margin: 0.35rem 0 0.2rem 0.01rem;
  margin-top: 0.4rem;
}
.header1 {
  width: 3.75rem;
  height: 0.42rem;
  // background-color: red;
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid rgb(229, 229, 229);
}
.header2 {
  color: #333333;
  line-height: 0.42rem;
  margin-left: 0.15rem;
}
.header3 {
  width: 0.2rem;
  height: 0.2rem;
  // background-color: yellow;
  line-height: 0.42rem;
  margin-right: 0.1rem;
}
.header3 > img {
  width: 0.15rem;
  height: 0.15rem;
}
.bott {
  width: 3.75rem;
  height: 0.75rem;
  // background-color: royalblue;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.05rem solid rgb(244, 244, 244);
}
.bott1{
  width: 0.4rem;
  height: 0.4rem;
  // background-color: red;
  margin-top: 0.1rem;

}
.bott1>img{
  width: 100%;
  height: 100%;
  
}
.wenben{
  width: 0.6rem;
  height: 0.18rem;
  font-size: 0.13rem;
  color: #00000099;

}
.wenben1{
  width: 0.4rem;
  height: 0.18rem;
   font-size: 0.13rem;
    color: #00000099;
text-align: center;
}
.wenben2{
width: 0.8rem;
  height: 0.18rem;
  font-size: 0.13rem;
  color: #00000099;
  margin: 0 -0.07rem;
}
.bottom{
  width: 3.75rem;
  height: 3.56rem;
  // background-color: red;
  margin-top: 0.05rem;
}
.bottom1{
  width: 3.75rem;
  height: 0.5rem;
  // background-color: royalblue;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.01rem solid #e5e5e5;
}
.bottom1-1{
  width: 3.75rem;
  height: 0.65rem;
  // background-color: royalblue;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.05rem solid rgb(244, 244, 244);
}
.bottom2{
  width: 0.4rem;
  height: 0.4rem;
  // background-color: powderblue;
  margin: 0.1rem;
}
.bottom2>img{
  width: 100%;
  height: 100%;
  margin: 0.01rem 0 0 -1rem;

}
.bottom5{
  width: 0.18rem;
  height: 0.18rem;
  // background-color: beige;
  margin-top: 0.2rem;
  margin-right: -1rem;
}
.bottom5>img{
  width: 100%;
  height: 100%;

}
.bottom4{
  color: #333333;
  font-size: 0.17rem;
  margin: 0.2rem 1.2rem 0 -2.2rem;
}
</style>
