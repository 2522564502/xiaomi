<template>
  <div class="fl">
    <div class="div-top">
      <router-link to="classify/tj" tag="span">
        <img src="../../assets/lxy/icon_arrow.png" alt="" />
      </router-link>
      <p>智能家庭</p>
      <router-link to="/ss" tag="span">
        <img src="../../assets/lxy/icon_search.png" alt="" />
      </router-link>
    </div>
    <!--  -->
    <div class="div-conter">
      <router-link to="" tag="li" v-for="item in data" :key="item.index">
        <span>
          <img :src="item.img" alt="" class="span" />
        </span>
        <p>{{ item.name }}</p>
      </router-link>
    </div>
    <!--  -->
    <div class="div-zh">
      <li v-for="item in zh" :key="item.index">{{ item.name }}</li>
    </div>
    <!--  -->
    <div class="div-goods">
      <li v-for="item in goods" :key="item.index">
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
    </div>
    <!--  -->
  </div>
</template>
<script>
const zh = [
  {
    name: "综合",
  },
  {
    name: "新品",
  },
  {
    name: "价格",
  },
  {
    name: "销量",
  },
  {
    name: "筛选",
  },
];
import data from "../../staic/index.json";
import goods from "../../staic/xiaoai.json";
export default {
  data() {
    return {
      data: data.data,
      zh,
      goods: goods.goods,
    };
  },
};
</script>
<style scoped lang='scss'>
.fl {
  width: 3.75rem;
  .div-top {
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    align-items: center;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
  }
  //
  .div-conter {
    width: 3.75rem;
    display: flex;
    overflow-x: scroll;
    li {
      float: left;
      float: left;
      width: 20%;
      flex-shrink: 0;
      text-align: center;
      font-size: 13px;
      .router-link-active {
        border-bottom: solid 0.02rem black;
      }
      .span {
        width: 0.55rem;
        height: 0.55rem;
        background: rgb(243, 244, 245);
        border-radius: 0.1rem;
      }
    }
  }
  .div-conter::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
  //
  .div-zh {
    display: flex;
    justify-content: space-around;
    margin: 0.2rem 0;
    li {
      font-size: 0.16rem;
    }
  }
  //
  .div-goods {
    li {
      display: flex;
      justify-content: space-around;
    }
    img {
      width: 1.45rem;
      height: 1.45rem;
    }
    .div-span {
      background: rgb(255, 103, 1);
      margin-right: 0.02rem;
      color: white;
      font-size: 0.12rem;
      padding: 0 0.02rem;
    }

    .div-right {
        margin-bottom: 0.3rem;
        width: 50%;
        font-size: 0.12rem;
        .div-img{
            margin-top: 0.1rem;
            img{
                width: 0.52rem;
                height: 0.16rem;
                margin-right: 0.1rem;
            }
        }
      .div-li {
        margin-top: 0.3rem;
        margin-bottom: 0.1rem;
        display: flex;
        justify-content: space-around;
        li {
          display: flex;
          flex-direction: column;
          font-size: 0.16rem;
          p:nth-child(1) {
            font-size: 0.14rem;
            margin-bottom: 0.05rem;
          }
          p:nth-child(2) {
            font-size: 0.12rem;
            color: rgb(136, 136, 136);
          }
        }
        li:nth-child(2) {
          display: flex;
          flex-direction: column;
          font-size: 0.16rem;
          border-right: solid 0.01rem rgb(217, 217, 217);
          border-left: solid 0.01rem rgb(217, 217, 217);
          padding: 0 0.1rem;
        }
      }

      .div-red {
        font-size: 0.14rem;
        color: red;

        em {
          font-size: 0.12rem;
        }
      }

      .div-pl {
        color: #888888;
        display: flex;
        font-size: 0.1rem;
        justify-content: start;
        .div-border {
          border-right: solid 1px;
          margin: 0 0.1rem;
        }
      }
    }
  }
  //
}
</style>