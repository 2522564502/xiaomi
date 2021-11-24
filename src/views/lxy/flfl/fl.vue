<template>
  <div class="fl">
    <div class="div-fl">
      <div class="div-top">
        <router-link to="/classify/tj" tag="span">
          <img src="../../../assets/lxy/icon_arrow.png" alt="" />
        </router-link>
        <p>智能家庭</p>
        <router-link to="/ss" tag="span">
          <img src="../../../assets/lxy/icon_search.png" alt="" />
        </router-link>
      </div>
      <!--  -->
      <div class="div-conter">
        <router-link to="" tag="li" v-for="(item, index) in data" :key="index">
          <span @click="router(item.id)">
            <img
              :src="item.img"
              alt=""
              id="span"
              :class="{ span: clicked == index }"
              @click="changeTab(index)"
            />
          </span>
          <p :class="{ p: clicked == index }">{{ item.name }}</p>
        </router-link>
      </div>
      <!--  -->
      <div class="div-zh">
        <li
          v-for="(item, index) in zh"
          :key="index"
          :class="{ border: type == index }"
          @click="changeBorder(index)"
        >
          {{ item.name }}
        </li>
      </div>
    </div>
    <!--  -->
    <div class="div-goods">
      <router-view></router-view>
    </div>
    <!--  -->
  </div>
</template>
<script >
const zh = [
  {
    name: "综合",
    type:0
  },
  {
    name: "新品",
    type:1
  },
  {
    name: "价格",
    type:2
  },
  {
    name: "销量",
    type:3
  },
  {
    name: "筛选",
    type:4
  },
];
import data from "../../../staic/index.json";
import goods from "../../../staic/xiaoai.json";
export default {
  data() {
    return {
      data: data.data,
      zh,
      goods: goods.goods,
      clicked: 0,
      type: 0,
    };
  },
  created() {
    if (this.$router.path !== "/fl/one") {
      this.$router.replace("/fl/one");
    }
  },
  methods: {
    router(id) {
      if (id == 1) {
        this.$router.push("one");
      } else if (id == 2) {
        this.$router.push("two");
      } else if (id == 3) {
        this.$router.push("three");
      } else if (id == 4) {
        this.$router.push("flyx");
      } else if (id == 5) {
        this.$router.push("five");
      } else if (id == 6) {
        this.$router.push("six");
      } else if (id == 7) {
        this.$router.push("seven");
      } else if (id == 8) {
        this.$router.push("eight");
      } else if (id == 9) {
        this.$router.push("ning");
      } else if (id == 10) {
        this.$router.push("ten");
      }
    },

    changeTab(index) {
      this.clicked = index;
    },
    changeBorder(index) {
      this.type = index;
      },

  },
};
</script>
<style scoped lang='scss'>
.p {
  color: rgb(180, 115, 31);
}
.span {
  border: solid 1px rgb(180, 115, 31);
}
.border {
  color: rgb(180, 115, 31);
}
.fl {
  width: 3.75rem;
  .div-fl {
    position: fixed;
    top: 0;
    background: white;
  }
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
      flex-shrink: 0;
      text-align: center;
      font-size: 12px;
      margin-left: 0.17rem;
      .router-link-active {
        border-bottom: solid 0.02rem black;
      }
      #span {
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
      font-weight: 600;
    }
  }
  //
  .div-goods {
    margin-top: 2rem;
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
      .div-img {
        margin-top: 0.1rem;
        img {
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