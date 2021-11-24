<template>
  <div class="box">
    <div class="header">
      <img
        src="https://img.youpin.mi-img.com/jianyu/88313610_3455_4aaa_8895_1fa05a19e7a6.png@base@tag=imgScale&F=webp&h=204&m=1&q=80&w=640"
        alt=""
      />
    </div>
    <div class="block">
      <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
      <el-carousel indicator-position="outside" height="150px">
        <el-carousel-item v-for="item in 1" :key="item.index">
          <h3 class="small">
            <img
              src="https://img.youpin.mi-img.com/jianyu/b80858e7_3a95_4ca2_9fab_bb78ba3a1cf5.png@base@tag=imgScale&h=293&m=1&q=80&w=702"
              alt=""
            />
          </h3>
        </el-carousel-item>
        <el-carousel-item v-for="item in 1" :key="item.index">
          <h3 class="small">
            <img
              src="https://img.youpin.mi-img.com/jianyu/52ecc7d7_2e02_4e96_8e9e_23c8a2273bc2.jpeg@base@tag=imgScale&h=293&m=1&q=80&w=702"
              alt=""
            />
          </h3>
        </el-carousel-item>
        <el-carousel-item v-for="item in 1" :key="item.index">
          <h3 class="small">
            <img
              src="https://img.youpin.mi-img.com/jianyu/874e590a_8a2c_4d35_a859_40d1a56b7450.jpeg@base@tag=imgScale&h=293&m=1&q=80&w=702"
              alt=""
            />
          </h3>
        </el-carousel-item>
        <el-carousel-item v-for="item in 1" :key="item.index">
          <h3 class="small">
            <img
              src="https://img.youpin.mi-img.com/jianyu/5027f616_8629_49c7_a16e_366b02409dd0.jpeg@base@tag=imgScale&h=293&m=1&q=80&w=702
"
              alt=""
            />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="header-a">
      <div class="header-aa">
        <div class="header-aaa">
          <img
            src="https://img.youpin.mi-img.com/jianyu/6d3639b54669d4d4419682a26c20d8e3.png@base@tag=imgScale&F=webp&h=86&m=1&q=80&w=86"
            alt=""
          />
          <span class="header-text">电视</span>
        </div>
        <div class="header-aaa">
          <img
            src="https://img.youpin.mi-img.com/jianyu/1f73cbf9869ae4478f09c23230a3600e.png@base@tag=imgScale&h=100&m=1&q=80&w=100"
            alt=""
          />
          <span class="header-text">厨房电器</span>
        </div>
        <div class="header-aaa">
          <img
            src="https://img.youpin.mi-img.com/jianyu/f64ba876e8f5b4ccf9cf930ba65f6fc6.png@base@tag=imgScale&h=100&m=1&q=80&w=100"
            alt=""
          />
          <span class="header-text">手机</span>
        </div>
        <div class="header-aaa">
          <img
            src="https://img.youpin.mi-img.com/jianyu/afd17448ea946013158d3cd12a19aec2.png@base@tag=imgScale&h=100&m=1&q=80&w=100"
            alt=""
          />
          <span class="header-text">空调</span>
        </div>
        <div class="header-aaa">
          <img
            src="https://img.youpin.mi-img.com/jianyu/361ab238423ec786029a067ec363b3f9.png@base@tag=imgScale&h=100&m=1&q=80&w=100"
            alt=""
          />
          <span class="header-text">生活电器</span>
        </div>
      </div>

      <div class="header-bb">
        <div class="header-bbb">
          <img
            src="https://img.youpin.mi-img.com/jianyu/7d1909a728dfd7b6f2a9d913c0a2dbd3.png@base@tag=imgScale&h=100&m=1&q=80&w=100"
            alt=""
          />
          <span class="header-text">智能家庭</span>
        </div>
        <div class="header-bbb">
          <img
            src="https://img.youpin.mi-img.com/jianyu/f9fc893a0098babcdfe40354dd15ea74.png@base@tag=imgScale&h=100&m=1&q=80&w=100"
            alt=""
          />
          <span class="header-text">冰洗</span>
        </div>
        <div class="header-bbb">
          <img
            src="https://img.youpin.mi-img.com/jianyu/70696032cdc7eb1ec84e16e2925d8c97.png@base@tag=imgScale&h=100&m=1&q=80&w=100"
            alt=""
          />
          <span class="header-text">电脑办公</span>
        </div>
        <div class="header-bbb">
          <img
            src="https://img.youpin.mi-img.com/jianyu/146cb29c0ee9c2d3d1e38bef627e9380.jpeg@base@tag=imgScale&h=100&m=1&q=80&w=100"
            alt=""
          />
          <span class="header-text">日用潮玩</span>
        </div>
        <div class="header-bbb">
          <img
            src="https://img.youpin.mi-img.com/jianyu/aed36bb29da56f5f8fe2296a8b72c3f4.png@base@tag=imgScale&h=100&m=1&q=80&w=100"
            alt=""
          />
          <span class="header-text">智能穿戴</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <img
        src="https://img.youpin.mi-img.com/jianyu/5cfc4566_65b8_4873_a1b1_bec9e132374c.png@base@tag=imgScale&h=80&m=1&q=80&w=750"
        alt=""
      />
    </div>
    <div class="bottom1">
      <img
        src="https://img.youpin.mi-img.com/ink/4902ebfa_8094_441b_ba8b_bd091f546572.png@base@tag=imgScale&F=webp&h=72&m=1&q=80&w=640"
        alt=""
      />
    </div>
    <div class="bottom2">
      <span class="a1">¥</span>
      <span class="a2">10</span>
      <span class="a3">仅限Note10 Pro/Note9系列</span>
      <span class="a4">立即领取</span>
    </div>
    <div class="rexiao">
      <span>热销爆品</span>
      <span>重磅新品</span>
      <span>暖心应季</span>
      <span>选购指南</span>
    </div>
    <div class="baopin">
      <div class="baopin1">热销爆品</div>
      <div class="baopin2">
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/800_pic/919e6d1fda4c61fedbb35ea7aec3f61f.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">分期免息</span>
            <span class="fenqi1">特价</span>
            <p class="fenqi2">小米九号平衡车</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">2099</span>
            <span class="fenqi5">¥2199</span>
          </div>
        </div>
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/800_pic/5f9ba25a02cd50087ecd9c923a2b783c.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">分期免息</span>
            <span class="fenqi1">特价</span>
            <p class="fenqi2">米家空气净化..</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">149</span>
            <span class="fenqi56">起</span>
          </div>
        </div>
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/812c03c0cfc1e794982f61c98f5d9ed9.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">满件折</span>
            <span class="fenqi1">特价</span>
            <p class="fenqi2">小米4A 电视</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">3499</span>
            <span class="fenqi5">¥3699</span>
          </div>
        </div>
      </div>
      <div class="baopin2">
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/c0e7e30c8251a5ec3331f781b71e9e63.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">特价</span>
            <span class="fenqi12345">小米自营</span>
            <p class="fenqi2">Redmi A55电</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">1899</span>
            <span class="fenqi5">¥2199</span>
          </div>
        </div>
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/7f0a12b4116ea62772cc62b87ea7353f.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">特价</span>
            <span class="fenqi12345">小米自营</span>
            <p class="fenqi2">小米电视EA65</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">2899</span>
            <span class="fenqi5">¥3099</span>
          </div>
        </div>
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/a9fc9b1ea8284fb1c18862fa61c73b79.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">分期免息</span>
            <span class="fenqi1">特价</span>
            <p class="fenqi2">小米净水器H..</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">1999</span>
            <span class="fenqi5">¥2499</span>
          </div>
        </div>
      </div>
      <div class="baopin2">
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/c8372f743071f3509bff931ab3f2334c.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">分期免息</span>
            <span class="fenqi12345">小米自营</span>
            <p class="fenqi2">空气净化4P...</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">1499</span>
            <!-- <span class="fenqi5">¥2199</span> -->
          </div>
        </div>
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/ea92170aebc7b045c638d5080ae1a779.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">分期免息</span>
            <span class="fenqi1">特价</span>
            <p class="fenqi2">米家扫地机器...</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">1599</span>
            <span class="fenqi5">¥1799</span>
          </div>
        </div>
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/5d7bb2d9dbf67c8a1bee3244d7af8ceb.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">分期免息</span>
            <span class="fenqi1">特价</span>
            <p class="fenqi2">小米净水器H...</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">1299</span>
            <span class="fenqi5">¥1699</span>
          </div>
        </div>
      </div>
      <div class="baopin2">
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/41a21324351e6744dbada293432d3799.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">分期免息</span>
            <span class="fenqi12345">小米自营</span>
            <p class="fenqi2">小米11</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">3799</span>
            <span class="fenqi56">¥起</span>
          </div>
        </div>
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/1ccf1fdc57349db4129ef53f996258bf.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">特价</span>
            <span class="fenqi12345">小米自营</span>
            <p class="fenqi2">Redmi K40</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">1999</span>
            <span class="fenqi5">起</span>
          </div>
        </div>
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/0c50473aedcad0615ef1d77d9dedffc8.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi12345">小米自营</span>
            <span class="fenqi123456789">15天价保</span>
            <p class="fenqi2">小米10S</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">2999</span>
            <span class="fenqi5">起</span>
          </div>
        </div>
      </div>
      <div class="baopin2">
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/03ee20537b647af9b6c68a47f56ee9d6.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">特价</span>
            <span class="fenqi12345">小米自营</span>
            <p class="fenqi2">米家空调 睡...</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">2299</span>
            <span class="fenqi5">¥2399</span>
          </div>
        </div>
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/a57241dc6a82565c92f1dc78bbc3a792.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">满件折</span>
            <span class="fenqi1">分期免息</span>
            <p class="fenqi2">米家直驱洗烘机</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">2399</span>
            <span class="fenqi5">起</span>
          </div>
        </div>
        <div class="baopin3">
          <img
            src="https://img.youpin.mi-img.com/shopmain/c46017fc5e1da7bdd3b818586e93e6ad.png@base@tag=imgScale&h=218&m=1&q=80&w=218"
            alt=""
          />
          <div class="baopin3-1">
            <span class="fenqi">分期免息</span>
            <span class="fenqi12345">小米自营</span>
            <p class="fenqi2">集尘扫地机器人</p>
            <span class="fenqi3">¥</span>
            <span class="fenqi4">2999</span>
            <!-- <span class="fenqi5">¥2199</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
.header-text{
    font-size: 0.12rem;
    color: #000000;
    font-display: "微软雅黑";
}
.small{
    width: 3.75rem;
    height: 1.76rem;
}
.small>img{
    width: 100%;
    height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 3.75rem;
  /* height: 10rem; */
  background-color: rgb(244, 244, 244);
  margin: auto;
}
.header {
  width: 3.75rem;
  height: 1.2rem;
  background-color: blueviolet;
}
.header > img {
  width: 100%;
  height: 100%;
}
.header-a {
  width: 3.75rem;
  height: 1.9rem;
  background-color: rgb(244, 244, 244);
}
.header-aa {
  width: 3.75rem;
  height: 0.8rem;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.1rem;
}
.header-aaa {
  width: 0.5rem;
  height: 0.5rem;
  /* background-color: chartreuse; */
}
.header-aaa > img {
  width: 100%;
  height: 100%;
}
.header-bb {
  width: 3.75rem;
  height: 0.8rem;
  /* background-color: red; */
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(255, 255, 255);
  padding-top: 0.1rem;
}
.header-bbb {
  width: 0.5rem;
  height: 0.5rem;
  /* background-color: chartreuse; */
}
.header-bbb > img {
  width: 100%;
  height: 100%;
}
.bottom {
  width: 3.75rem;
  height: 0.41rem;
  background-color: rgb(244, 244, 244);
}
.bottom > img {
  width: 100%;
  height: 100%;
}
.bottom1 {
  width: 3.75rem;
  height: 0.43rem;
  padding-top: 0.1rem;
}
.bottom1 > img {
  width: 100%;
  height: 100%;
}
.bottom2 {
  width: 3.52rem;
  height: 0.64rem;
  background-color: rgb(255, 255, 255);
  margin-top: 0.08rem;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  margin: auto;
}
.bottom2 > span {
  line-height: 0.64rem;
}
.a1 {
  color: rgb(255, 106, 0);
  font-size: 0.2rem;
  font-weight: 600;
  margin-top: 0.05rem;
}
.a2 {
  color: rgb(255, 106, 0);
  font-weight: 500;
  font-size: 0.36rem;
  margin: 0 0 0 -0.23rem;
}
.a3 {
  color: rgb(255, 106, 0);
  font-size: 0.1rem;
}
.a4 {
  border-radius: 0.13rem;
  color: rgb(255, 106, 0);
  font-size: 0.14rem;
  height: 0.25rem;
}
.rexiao {
  width: 3.65rem;
  height: 0.44rem;
  line-height: 0.44rem;
  color: rgb(102, 102, 102);
  background-color: rgb(255, 255, 255);
  margin-top: 0.1rem;
  border-radius: 0.08rem;
  margin: 0.05rem;
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-evenly;
}
.rexiao > span {
  font-size: 0.15rem;
}
.baopin {
  width: 3.56rem;
  height: 9.01rem;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  border-radius: 0.1rem;
  position: relative;
}
.baopin1 {
  width: 3.35rem;
  height: 0.45rem;
  background-color: rgb(255, 255, 255);
  line-height: 0.45rem;
  display: flex;
  font-weight: 600;
  font-size: 0.18rem;
  margin: auto;
  position: relative;
  margin: 0 0 0 0.15rem;
}
.baopin2 {
  width: 3.55rem;
  height: 1.58rem;
  /* background-color: royalblue; */
  position: relative;
  display: flex;
  justify-content: space-evenly;
}
.baopin3 {
  width: 1.09rem;
  height: 1.09rem;
  background-color: rgb(248, 248, 248);
  position: relative;
}
.baopin3 > img {
  width: 100%;
  height: 100%;
  /* position: relative; */
  border-radius: 0.1rem;
}
.baopin3-1 {
  width: 1.09rem;
  height: 0.16rem;
  background-color: rgb(248, 248, 248);

  position: absolute;
  top: 0.93rem;
  line-height: 0.15rem;
}
.fenqi {
  width: 0.56rem;
  height: 0.16rem;
  background-color: rgb(217, 107, 108);
  font-size: 0.12rem;
  color: rgb(244, 244, 244);
  font-weight: 500;
    
}
.fenqi1 {
  width: 0.24rem;
  height: 0.16rem;
  background-color: rgb(217, 107, 108);
  font-size: 0.12rem;
  color: rgb(244, 244, 244);
  margin: 0 0 0 0.05rem;
  font-weight: 500;

}
.fenqi2 {
  font-size: 0.13rem;
  color: #333333;
  font-weight: 500;

  margin: 0.08rem;
}
.fenqi3 {
  font-weight: 500;

  font-size: 0.12rem;
}
.fenqi4 {
  font-size: 0.18rem;
  color: red;
  font-weight: 500;

}
.fenqi5 {
  font-size: 0.12rem;
  color: #999999;
  font-weight: 500;

  text-decoration: line-through;
}
.fenqi56{
  font-size: 0.12rem;
  color: red;
  font-weight: 500;


}
.fenqi12345 {
  width: 0.56rem;
  height: 0.16rem;
  background-color: #ff6701;
  font-size: 0.12rem;
  color: rgb(244, 244, 244);
  margin-left: 0.05rem;
 font-weight: 500;


}
.fenqi123456789{
    width: 0.56rem;
  height: 0.16rem;
  background-color: rgb(255, 78, 49);
  font-size: 0.12rem;
  color: rgb(244, 244, 244);
  margin-left: 0.05rem;
  font-weight: 500;
}
</style>