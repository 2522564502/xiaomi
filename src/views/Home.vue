<template>
  <div class="home">
   <div class="one">
     <div class="oleft">
       <img src="https://img.youpin.mi-img.com/static/weex_images/v1/m/navi_title_v6.png" alt="">
     </div>
     <div class="oright">
       <img src="https://img.youpin.mi-img.com/static/weex_images/v1/m/navi_search_v5.png" alt="">
       <span class="sou">搜一搜</span>

     </div>
   </div>
   <!--  -->
   <div class="swiper mySwiper" id="baner">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="https://img.youpin.mi-img.com/ecpm/5639c67f_eec2_4709_bc4d_5659edcd439a.jpeg@base@tag=imgScale&h=320&w=750" alt=""></div>
        <div class="swiper-slide"><img src="https://img.youpin.mi-img.com/ecpm/c096a6c0_ae4e_4883_b84b_0f1dc5a4ddbe.jpeg@base@tag=imgScale&h=320&w=750" alt=""></div>
        <div class="swiper-slide"><img src="https://img.youpin.mi-img.com/ecpm/1a50cb0a_2a9b_4c3f_a4a1_5f841ee44181.jpeg@base@tag=imgScale&h=320&w=750" alt=""></div>
        <div class="swiper-slide"><img src="https://img.youpin.mi-img.com/ecpm/731da67e_68bf_48ad_8aba_ce4376e9b632.jpeg@base@tag=imgScale&h=320&w=750" alt=""></div>
         <div class="swiper-slide"><img src="https://img.youpin.mi-img.com/ecpm/5639c67f_eec2_4709_bc4d_5659edcd439a.jpeg@base@tag=imgScale&h=320&w=750" alt=""></div>
        <div class="swiper-slide"><img src="https://img.youpin.mi-img.com/ecpm/c096a6c0_ae4e_4883_b84b_0f1dc5a4ddbe.jpeg@base@tag=imgScale&h=320&w=750" alt=""></div>
        <div class="swiper-slide"><img src="https://img.youpin.mi-img.com/ecpm/1a50cb0a_2a9b_4c3f_a4a1_5f841ee44181.jpeg@base@tag=imgScale&h=320&w=750" alt=""></div>
        <div class="swiper-slide"><img src="https://img.youpin.mi-img.com/ecpm/731da67e_68bf_48ad_8aba_ce4376e9b632.jpeg@base@tag=imgScale&h=320&w=750" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

   <!--  -->
   <ul class="there">
     <li>
       <img src="https://img.youpin.mi-img.com/jianyu/3b9f8b4e5a1639cafbb3be08cba9963a.png@base@tag=imgScale&h=100&m=1&q=80&w=100" alt="">
       <p>上新精选</p>
     </li>
     <li>
       <img src="https://img.youpin.mi-img.com/jianyu/531253430ba83f5b88e4ae92cb5a197c.png@base@tag=imgScale&h=100&m=1&q=80&w=100" alt="">
       <p>小米众筹</p>
     </li>
     <li>
       <img src="https://img.youpin.mi-img.com/jianyu/7a255e71670b9ef4a90723223265b5c5.png@base@tag=imgScale&h=100&m=1&q=80&w=100" alt="">
       <p>优品秒杀</p>
     </li>
     <li>
       <img src="https://img.youpin.mi-img.com/jianyu/d5bb5c4a30f22e6d141d191bae80c70b.png@base@tag=imgScale&h=100&m=1&q=80&w=100" alt="">
       <p>有品生活+</p>
     </li>
     <li>
       <img src="https://img.youpin.mi-img.com/jianyu/52ec26cccb4d945aa4bacac4ec7c4622.png@base@tag=imgScale&h=100&m=1&q=80&w=100" alt="">
       <p>小米自营</p>
     </li>
   </ul>
   <!--  -->
   <div class="foru">
     <img src="https://img.youpin.mi-img.com/ink/8714c753_8290_4aea_912f_1c74fd4e7fb8.png@base@tag=imgScale&h=242&w=171" alt="">
     <img src="https://img.youpin.mi-img.com/ink/d615fb31_f5e8_401d_87a3_692e206a249f.png@base@tag=imgScale&h=242&w=171" alt="">
     <img src="https://img.youpin.mi-img.com/ink/feeac91a_b63c_4a5b_9228_76854b0e70df.png@base@tag=imgScale&h=242&w=171" alt="">
     <img src="https://img.youpin.mi-img.com/ink/516cc4ba_feb6_4276_ae08_55a76445e55f.png@base@tag=imgScale&h=242&w=171" alt="">
   </div>
   <!--  -->
   <div class="five">
      <div class="brg">
        <img src="https://img.youpin.mi-img.com/jianyu/efaf252fb1ef07bb22395bc3649a127d.png?w=1053&h=180" alt="">
        <div class="fne">
          <h2>小米有品众筹</h2>
          <p>更多></p>
        </div>
        <div class="cen">
          <div class="cl">
            <p class="biao">睿米真全能扫拖机</p>
            <p class="liu">60天只倒一次灰，自动回洗拖布，LDS激光雷达，接入米家生态</p>
            <p class="qian">¥3699</p>
          </div>
          <div class="cr">
            <img src="https://img.youpin.mi-img.com/shopmain/d076d2cd183509e3a4f5090d816fc82b.png@base@tag=imgScale&h=264&w=264" alt="">
          </div>
        </div>
        </div>
        
   </div>
   <!--  -->
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: 'Home',
  components: {
   
  },
  mounted(){
     var swiper = new Swiper("#baner", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
  }
}
</script>
<style scoped>
.home{
  width: 3.75rem;
  background-color:rgb(244, 244, 244);
}
.one{
  border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    height: .56rem;
    -webkit-box-orient: vertical;
    width: 3.75rem;
    background-color: rgb(132, 93, 50);
    padding:.14rem 0 .14rem 0;
}
.oleft{
   margin-left: .12rem;
   float: left;
}
.oleft img{
    width: .36rem;
    height: .28rem;
}
.oright{
  border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    margin-left: .11rem;
    align-items: center;
    height: .32rem;
    background-color: rgb(240, 240, 240);
    border-radius: .16rem;
    float: left;
    width: 3.04rem;

}
.oright img{
  width: .20rem;
  height: .20rem;
  padding: .05rem .10rem 0 .10rem;
  float: left;
}
.sou{
  font-size: .14rem;
    height: .20rem;
    color: rgb(51, 51, 51);
    display: block;
    float: left;
  line-height: .33rem;
}
#baner{
    position: relative;
    width: 3.75rem;
    height: 1.60rem;
    overflow: hidden;
}
#baner img{
  width: 3.75rem;
  height: 1.60rem;
}
.there{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: .14rem;
}
.there li{
  width: .65rem;
  height: .72rem;
}
.there img{
  width: .50rem;
  height: .50rem;
}
.there p{
  font-size: .12rem;
    margin-top: 。05rem;
    color: rgb(0, 0, 0);
    height: .17rem;
    line-height: .17rem;
}
.foru{
  display: flex;
  justify-content: space-around;
  margin-top: .15rem;
}
.foru img{
  width: .85rem;
    height: 1.20rem;
    border-radius: .04rem;
}
.five{
  width: 3.51rem;
  margin: 0 auto;
  margin-top: .10rem;
  
}
.brg{
  position: relative;
  border-radius:.05rem ;
  height: 500px;
  background: white;
}
.brg img{
      width: 3.51rem;
    height: .60rem;
}
.fne{
  position: absolute;
  top: .10rem;
  padding: .08rem .15rem 0 .15rem;
  width: 3.30rem;
}
.fne h2{
font-size: .18rem;
float: left;
}
.fne p{
    font-size: .12rem;
    float: right;
}
.cl{
  float: left;
  width: 2.00rem;
    height: 1.08rem;
}
.cr{
  float: right;
}

.cr img{
      width: 1.32rem;
    height: 1.32rem;
}
.cen{
  width: 3.50rem;
  padding: 0 .09rem 0 .09rem;
}
.biao{
      font-size: .15rem;
}
.liu{
  white-space: nowrap;
    border: 0.5px solid rgb(245, 235, 209);
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: .11rem;
    color: rgb(125, 68, 2);
    text-overflow: ellipsis;
    padding-left: .04rem;
    padding-right: .04rem;
    margin-top: .05rem;
    background-color: rgb(255, 249, 227);
    max-width: 2.05rem;
    align-self: flex-start;
    border-radius: .02rem;
    overflow: hidden;
}
.qian{
  font-size: .14rem;
    color: rgb(254, 31, 29);
    font-weight: bold;
}
</style>
