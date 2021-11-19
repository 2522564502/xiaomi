<template>
  <div class="ss">
    <div class="ss-top">
      <router-link to="classify/tj">
        <em>
            <img src="../../assets/lxy/icon_arrow_left_darkblack.png" alt="">
        </em>
      </router-link>
      <div class="ss-center">
        <img src="../../assets/lxy/icon_search_new_black.png" alt="" />
        <div class="ss-center-el">
          <el-carousel height="0.15rem" direction="vertical" :autoplay="true" indicator-position='none'>
            <el-carousel-item>
              <h3 class="medium">植物培养</h3>
            </el-carousel-item>
            <el-carousel-item>
              <h3 class="medium">智能发热围巾</h3>
            </el-carousel-item>
            <el-carousel-item>
              <h3 class="medium">告别小红鼻</h3>
            </el-carousel-item>
          </el-carousel>
        </div>

        <input type="text" />
        
      </div>
      <span>搜索</span>
    </div>
    <!--  -->
    <div class="ss-search">
      <p>搜索发现</p>
      <div class="ss-search-one">
        <div class="ss-search-center">
          <li>跑步机</li>
          <li>65英寸电视</li>
          <li>厨房神器</li>
        </div>
        <div class="ss-search-center">
          <li style="color: red">抢众筹 全能扫拖机</li>
          <li style="color: red">秋冬送暖 好物钜惠</li>
        </div>
        <div class="ss-search-center">
          <li>取暖器</li>
          <li>被子</li>
          <li>智能门锁</li>
          <li>空气净化器滤芯</li>
        </div>
        <div class="ss-search-center">
          <li>儿童学习桌椅</li>
        </div>
        <img
          src="../../assets/lxy/a125f18a_ba0c_4083_8dc0_8b7563519438.jpeg"
          alt=""
        />
      </div>
    </div>
    <!--  -->
  </div>
</template>
<style scoped>
.ss-top {
  width: 3.75rem;
  height: 0.48rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.ss-top em img{
    width: 0.32rem;
    height: 0.32rem;
    margin-top: 0.1rem;
}
.ss-center img {
  width: 0.25rem;
  height: 0.25rem;
  position: absolute;
  margin-top: 0.05rem;
}
.ss-center input {
  height: 0.36rem;
  width: 2.68rem;
  border-radius: 0.15rem;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  position: relative;
}
.ss-center-el {
    width: 0.5rem;
    position: absolute;
    font-size: 0.1rem;
    margin-top: 0.1rem;
    margin-left: 0.4rem;
    color: rgb(136, 136, 136);
    
}
.el-carousel__indicators--vertical{
    display: none;
}
.ss-top span {
  color: white;
  border-radius: 0.15rem;
  padding: 0.05rem 0.1rem;
  background: linear-gradient(to right, rgb(205, 140, 57), rgb(205, 140, 57));
}
/*  */
.ss-search p {
  color: rgb(51, 51, 51);
  font-size: 0.16rem;
  font-weight: bold;
}
.ss-search {
  width: 3.5rem;
  margin: auto;
  margin-top: 0.3rem;
}
.ss-search-one {
  width: 100%;
  margin-top: 0.1rem;
}
.ss-search-center {
  display: flex;
  margin-left: 0.05rem;
  margin-top: 0.1rem;
}
.ss-search-center li {
  background-color: rgb(244, 244, 244);
  border-radius: 0.15rem;
  text-align: center;
  padding: 0.03rem 0.1rem;
  color: rgb(51, 51, 51);
  font-size: 0.13rem;
  line-height: 32px;
  margin-right: 3px;
}
.ss-search-one img {
  height: 0.71rem;
  width: 100%;
  border-radius: 0.15rem;
  margin-top: 0.15rem;
}
</style>