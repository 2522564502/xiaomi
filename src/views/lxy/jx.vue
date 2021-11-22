<template>
  <div class="jx">
    <!--  -->
    <div class="header" id="na">
      <router-link tag="em" to="/">
        <img src="../../assets/lxy/下载.png" alt="" />
      </router-link>
      <span id="span">上新精选</span>
      <em></em>
    </div>
    <!--  -->
    <el-carousel height="3.2rem" class="carousel">
      <el-carousel-item>
        <img
          src="../../assets/lxy/77ebf5f8_b97d_4cd5_8e05_3b0832052e0c.jpeg"
          alt=""
        />
      </el-carousel-item>
      <el-carousel-item>
        <img
          src="../../assets/lxy/10537f1d_a37d_4912_b309_623673dfb6b3.jpeg"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
    <!--  -->
    <div class="div-ul">
      <li>上新精选</li>
      <li>精选新品</li>
      <li>闭眼放心买</li>
    </div>
    <!--  -->
    <div class="div-div">
      <li v-for="item in 20" :key="item.index">
        <div class="div-img">
          <img
            src="../../assets/lxy/1595c09ca5289ab2c876e12a062046da.png"
            alt=""
          />
        </div>
        <div class="div-p">
          <p>小米曲面钢化膜</p>
          <p>加厚全铜，结实耐用</p>
          <p><em>100%</em>好评率</p>
          <span class="span">小米自营</span>

          <div class="div-span">
            <span>￥99</span>
          </div>
        </div>
      </li>
    </div>
    <!--  -->
    <div class="div-top">
      <li>精选</li>
      <li>家用电器</li>
      <li>居家生活</li>
      <li>服饰运动</li>
      <li>智能数码</li>
      <li>个护健康</li>
      <li>日用文创</li>
      <li>食品婴宠</li>
      <li>珠宝首饰</li>
    </div>
    <!--  -->
    <div class="div-center">
      <div class="div-li" v-for="item in 20" :key="item.index">
        <li>
          <div class="div-img">
            <img
              src="../../assets/lxy/0116a00e37dfd983ddd655fc4c693513.jpg"
              alt=""
            />
          </div>

          <div class="div-span">
            <p>小米曲面钢化膜</p>
            <span class="span">小米自营</span>
            <p>
              <em>￥</em>
              <span>99</span>
            </p>
          </div>
        </li>

        <li>
          <div class="div-img">
            <img
              src="../../assets/lxy/0116a00e37dfd983ddd655fc4c693513.jpg"
              alt=""
            />
          </div>

          <div class="div-span">
            <p>小米曲面钢化膜</p>
            <span class="span">小米自营</span>
            <p>
              <em>￥</em>
              <span>99</span>
            </p>
          </div>
        </li>
      </div>
    </div>
    <!--  -->
    <div class="nav">
      <li>
        <div class="nav-img-one">
          <img
            src="../../assets/lxy/66e7133e_e2db_4bc2_b5a1_d44e0ae66325.png"
            alt=""
          />
        </div>
        <div>
          <p>上新精选</p>
        </div>
      </li>
      <li>
        <div class="nav-img">
          <img
            src="../../assets/lxy/1959300e_4110_4c5b_83f1_a7efc11f1d6e.png"
            alt=""
          />
        </div>
        <div class="div-p">
          <p>独家首发</p>
        </div>
      </li>
    </div>
    <!--  -->
    <div class="navv">
      <p></p>
      <p>更多好物 尽请期待</p>
      <p></p>
    </div>
    <!--  -->
  </div>
</template>
<script >
export default {
  mounted() {
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      console.log(top);
      if (top != 0) {
        document.getElementById("na").style.background = "rgb(34, 36, 41)";
        document.getElementById("span").style.fontSize = "0.18rem";
        document.getElementById("span").style.color = "white";
      } else {
        document.getElementById("na").style.background = "none";
        document.getElementById("span").style.fontSize = "0.22rem";
        document.getElementById("span").style.color = "rgb(202, 189, 166)";
      }
    });
  },
};
</script>
<style scoped lang='scss'>
.jx {
  width: 3.75rem;
  background: rgb(242, 245, 245);
  padding-bottom: 0.5rem;
  .header {
    width: 3.75rem;
    position: fixed;
    z-index: 3;
    display: flex;
    height: 0.4rem;
    align-items: center;
    img {
      width: 0.27rem;
      height: 0.27rem;
    }
    em {
      width: 0.27rem;
      height: 0.27rem;
    }
    span {
      margin: auto;
      font-family: cursive;
      font-size: 0.22rem;
      color: rgb(202, 189, 166);
    }
  }
  .carousel {
    position: relative;
  }
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }
  //
  .div-ul {
    display: flex;
    align-items: center;
    margin: 0.1rem 0.2rem;
    li {
      float: left;
      margin-right: 0.1rem;
      font-size: 0.12rem;
    }
    li:nth-child(1) {
      font-weight: 600;
      font-size: 0.17rem;
    }
  }
  //
  .div-div {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    position: static;
    border-radius: 2.4vw;
    margin-left: 3.2vw;
    margin-right: 3.2vw;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    li {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-content: flex-start;
      flex-shrink: 0;
      position: relative;
      cursor: pointer;
      align-items: flex-end;
      margin-bottom: 0.1rem;
    }
    .div-img {
      margin-left: 0.1rem;
      width: 1.3rem;
      height: 1.3rem;
      background: rgb(244, 247, 247);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .div-p {
      margin-left: 0.2rem;
      .span {
        background: rgb(255, 103, 1);
        color: white;
        font-size: 0.12rem;
        padding: 0.01rem 0.01rem;
      }
      p {
        font-size: 0.12rem;
        color: rgb(119, 119, 119);
      }
      em {
        color: rgb(204, 153, 51);
      }
      p:nth-child(1) {
        font-weight: 600;
        font-size: 0.15rem;
        color: rgb(51, 51, 51);
      }

      .div-span {
        margin-top: 0.1rem;
        em {
          font-size: 0.12rem;
        }
        span {
          font-size: 0.13rem;
        }
      }
    }
  }
  //
  .div-top {
    width: 3.75rem;
    display: flex;
    overflow-x: scroll;
    li {
      float: left;
      float: left;
      width: 20%;
      flex-shrink: 0;
      line-height: 50px;
      text-align: center;
      padding: 0 7px;
      font-size: 13px;
    }
    
  }
  
  //
  .div-center {
    width: 3.75rem;
    margin: auto;
    .div-li {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 0.2rem;
      li {
        width: 1.7rem;
        border-radius: 0.1rem;
        background: white;
        .div-img {
          width: 1.7rem;
          height: 1.45rem;

          img {
            border-top-left-radius: 0.15rem;
            border-top-right-radius: 0.15rem;
            width: 100%;
            height: 100%;
          }
        }
        .div-span {
          margin-top: 0.05rem;
          margin-left: 0.1rem;
          p {
            margin-bottom: 0.05rem;
          }
          .span {
            background: rgb(255, 103, 1);
            color: white;
            font-size: 0.12rem;
            padding: 0.01rem 0.01rem;
            margin-top: 0.1rem;
          }
          p {
            font-size: 0.15rem;
            color: rgb(51, 51, 51);
            font-weight: 600;
            margin-top: 0.1rem;
          }
          em {
            font-size: 0.12rem;
            color: rgb(51, 51, 51);
          }
          p:nth-child(1) {
            font-size: 0.12rem;
            color: rgb(51, 51, 51);
          }
        }
      }
    }
  }
}

.nav {
  width: 3.75rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  position: fixed;
  bottom: 0;
  li {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.12rem;
    .div-p {
      color: rgb(181, 181, 181);
    }

    .nav-img-one {
      width: 0.39rem;
      height: 0.39rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav-img {
      width: 0.28rem;
      height: 0.28rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.navv {
  display: flex;
  margin: 1rem 1rem;
  position: relative;
  justify-content: space-evenly;
  p {
    color: rgb(153, 153, 153);
  }
  p:nth-child(1) {
    border-top: solid 0.02rem #999999;
    position: absolute;
    top: 0.1rem;
    right: 1.7rem;
    width: 0.5rem;
  }
  p:nth-child(3) {
    border-top: solid 0.02rem #999999;
    width: 0.5rem;
    position: absolute;
    top: 0.1rem;
    left: 1.7rem;
  }
}
.el-carousel__indicators--outside {
  position: absolute;
  left: 1.5rem;
}

.div-top::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
</style>