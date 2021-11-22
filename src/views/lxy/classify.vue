<template>
  <div class="classify">
    <div class="classify-span">
      <span class="classify-span-one">
        <p>分类</p>
        <router-link to="/ss" tag="div" class="div-img">
          <img src="../../assets/lxy/icon_search_darkblack.png" alt="" />
        </router-link>
        <router-view name="ss"></router-view>
      </span>
    </div>
    <!--  -->
    <div class="display">
      <div class="div-left">
        <router-link to="tj" tag="li" slot="title" router-link-active>有品推荐</router-link>
        <router-link to="sm" tag="li" slot="title">手机数码</router-link>
        <router-link to="yl" tag="li" slot="title">小米电视</router-link>
        <router-link to="ys" tag="li" slot="title">影视娱乐</router-link>
        <router-link to="jd" tag="li" slot="title">大家电</router-link>
      </div>
      <!--  -->
      <div class="div-right">
        <router-view></router-view>
      </div>
    </div>
    <!--  -->
    <Footer/>
  </div>
</template>
<script>
import Footer from '@/components/footer/footer.vue'
export default {
  components:{
    Footer
  },
  created() {
    if (this.$router.path !== "/classify/tj"){
      this.$router.replace("/classify/tj");
    }
  },
};
</script>
<style scoped>
.classify {
  width: 3.75rem;
  height: 100%;
  background-color: rgb(246, 246, 246);
}
.classify-span {
  width: 100%;
  height: 0.45rem;
  background: white;
}
.classify-span-one {
  width: 80%;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.classify img {
  width: 0.3rem;
  height: 0.3rem;
}
.display {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.div-left {
  width: 0.93rem;
  background: white;
}
.div-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
}
.router-link-active {
  background: linear-gradient(to right, rgb(230, 170, 92), rgb(208, 139, 48));
  border-radius: 0.12rem;
  color: white;
}
.div-left li {
  align-items: center;

  height: 0.24rem;
  justify-content: center;
  display: flex;
  width: 0.74rem;
  margin-top: 0.2rem;
}
/*  */
.div-right {
  width: 2.62rem;
  margin: auto;
  height: 6.97rem;
}
</style>
