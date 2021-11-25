<template>
    <!--  -->
    <div>
      <li v-for="item in gs" :key="item.index">
        <span>
          <img :src="item.imgSquare" alt="" />
        </span>
        <div class="div-right">
          <p>
            <span class="div-span">{{ item.xm }}</span>
            <span>{{ item.name }}</span>
          </p>
          <div class="div-li">
            <li v-for="item in item.points" :key="item.index">
              <p>{{ item.value }}</p>
              <p>{{ item.name }}</p>
            </li>
          </div>

          <span class="div-red"><em>￥</em>{{ item.priceMin }}</span>

          <p class="div-img">
              <img :src="item.img1||item.img2" alt="">
          </p>

          <li class="div-pl">
             {{ item.pl }}条评论
             <span class="div-border"></span>
            {{ item.hp }}%好评
          </li>
        </div>
      </li>
      <!--  -->
    <div class="navv">
      <p></p>
      <p>更多好物 尽请期待</p>
      <p></p>
    </div>
    <!--  -->
    </div>
</template>
<script>
import gs from "../../../staic/xiaoai.json";
export default {
  data() {
    return {
      gs: gs.gs,
    };
  },
  methods: {
  
  },
}
</script>