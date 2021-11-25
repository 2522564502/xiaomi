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
        <li :class="{ border: type==0 }" @click="zh()" >
          综合
          <div :class="{ div: is==false }">
            <div :class="{ dv: is==true }">
              <div id="div">
              <p :class="{ border: type == 0 }" @click="onzh">综合排序</p>
              <p :class="{ border: type == 6 }" @click="onhp">好评优先</p>
            </div>
            </div>
          </div>
        </li>
        <li :class="{ border: type == 1 }" @click="onSorm">新品</li>
        <li :class="{ border: type == 2 }" @click="onSort">价格</li>
        <li :class="{ border: type == 3 }" @click="onxl">销量</li>
        <li :class="{ border: type == 4 }" @click="onsx">筛选</li>
      </div>
    </div>
    <!--  -->
    <div>
 <div class="div-goods" :class="{ goods: is==false }">
      <router-view></router-view>
    </div>
    </div>
   
    <!--  -->
  </div>
</template>
<script >
import data from "../../../staic/index.json";
import goods from "../../../staic/xiaoai.json";
import gs from "../../../staic/xiaoai.json";
export default {
  data() {
    return {
      data: data.data,
      goods: goods.goods,
      gs: gs.gs,
      clicked: 0,
      type: 0,
      is: false,
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

    onzh() {
      //综合排序
      this.type = 0;
      this.goods.sort((a, b) => {
        return a.id - b.id;
      });
      this.gs.sort((a, b) => {
        return a.id - b.id;
      });
    },
    onhp() {
      //好评优选
      this.type = 6;
      this.goods.sort((a, b) => {
        return b.hp - a.hp;
      });
      this.gs.sort((a, b) => {
        return b.hp - a.hp;
      });
    },

    onxl() {
      //销量排序
      this.type = 3;
      this.goods.sort((a, b) => {
        return b.pl - a.pl;
      });
      this.gs.sort((a, b) => {
        return b.pl - a.pl;
      });
    },

    onSort() {
      //价格排序
      this.type = 2;
      this.goods.sort((a, b) => {
        return b.priceMin - a.priceMin;
      });
      this.gs.sort((a, b) => {
        return a.priceMin - b.priceMin;
      });
    },
    onSorm() {
      //新品排序
      this.type = 1;
      this.goods.sort((a, b) => {
        return b.xp - a.xp;
      });
      this.gs.sort((a, b) => {
        return b.xp - a.xp;
      });
    },

    onsx() {
      //筛选
      this.type = 4;
    },

    zh() {
      if (this.is == true) {
        this.is = false;
      } else {
        this.is = true;
      }
    },
  },
};
</script>
<style scoped lang='scss'>
.div {
  display: none;
}
.dv{
  background: rgba(0, 0, 0, 0.6);
    width: 3.75rem;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    height: 5.68rem;
    margin-left: -0.21rem;
}
#div {
  position: absolute;
  top: 0;
  background: rgb(244, 244, 244);
  width: 3.75rem;
  height: 1rem;
  border-bottom-left-radius:0.1rem;
  border-bottom-right-radius:0.1rem;
  
  p{
    font-size: 0.14rem;
    margin-left: 0.2rem;
    margin-top: 0.1rem;
  }
}
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