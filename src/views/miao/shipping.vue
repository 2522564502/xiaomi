<template>
  <div id="page-cart" class="device">
    <header>
      <router-link class="back" to="/shou">返回</router-link>
      <span class="header-title">购物清单</span>
     <span class="header-edit">
     	<span v-show="deleteShow" @click="SET(false)">编辑</span> 
     	<span v-show="!deleteShow" @click="SET(true)" >完成</span>
     </span>
    </header>
    <div class="page">
      <!-- <div class="empty-states"><span>这里是空的，快去逛逛吧</span></div> -->
      <ul class="goods-list cart-list">
        <li class="goods-item" v-for="item in cartData" :key="item.id">
          <div class="item-selector">
            <div class="icon-selector"  :class="{'selector-active':item.select}">
              <input type="checkbox" @change="setSelectHandle(item)">
            </div>
          </div>
          <div class="goods-img">
            <img
              :src="item.img"
              :alt="item.name"
            />
          </div>
          <div class="goods-info">
            <p class="goods-title">{{item.name}}</p>
            <div class="goods-price">
              <span>¥<b>{{item.price}}</b></span>
            </div>
            <span class="des">库存{{item.stock}}件</span>
            <div class="goods-num">
              <div class="num-btn" @click="handle(item.id,item.price,'PLUS')">+</div>
              <div class="show-num">{{item.mount}}</div>
              <div class="num-btn"  @click="handle(item.id,item.price,'REDUCE')">-</div>
            </div>
          </div>
        </li>
       
      </ul>
    </div>
    <div class="action-bar">
      <div class="g-selector">
        <div class="item-selector">
          <div class="icon-selector" :class="{'selector-active':tSelect}">
            <input type="checkbox" v-model="tSelect">
          </div>
        </div>
        <span>全选</span>
      </div>
      <div class="action-btn buy-btn" v-show="deleteShow">去结算({{totalMount}})</div>
      <div class="action-btn del-btn" v-show="!deleteShow" @click="sc">删除({{totalMount}})</div>
      <div class="total" v-show="deleteShow">
        合计：<span>¥<b>{{totalPrice}}</b></span>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations,mapState} from "vuex"
export default {
  computed:{
    ...mapState(['totalMount','totalPrice','totalSelect','deleteShow']),
    cartData(){
      return this.$store.state.cartData;
    },
     tSelect:{
      get(){
        // let num=this.cartData.filter(item=>item.select).length;
        
        // localStorage.setItem('totalSelect',this.cartData.length==num);

        // return this.cartData.length==num;

        const boo=this.cartData.every(item=>item.select);
         localStorage.setItem('totalSelect',boo);
        return boo;
      },
      set(value){
        console.log(value);
        this.$store.dispatch('setTotalSelect',value)
      }
    },
  },
  created(){
      // console.log(this.$store);
    this.$store.dispatch('setCartData')
  },
 
  methods:{
	...mapMutations(['SET','sc']),
    handle(id,price,_type){
      this.$store.dispatch('setCart',{
        id,
        price,
        _type
      })
    },
    setSelectHandle(item){
      this.$store.dispatch('setSelect',item.id);

      this.$store.dispatch('setTotal',{
        select:item.select,
        tPrice:item.tPrice,
        mount:item.mount
      })

      // this.$forceUpdate();
    }
  }
}
</script>
<style lang="scss" scoped>
.device {
  position: relative;
  float: left;
  width: 100%;
  height: 6.67rem;
  background-color: #eee;
  border-radius: .04rem;
  overflow: hidden;
}

header {
    padding: 0 4%;
    position: relative;
    height: .44rem;
    line-height: .44rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    text-align: center;
}

.header-title {
    font-size: .16rem;
}

.header-edit {
    float: right;
    padding: 0 .1rem;
    cursor: pointer;
}
.back{
  float: left;
}

.empty-states {
  padding-top: .6rem;
  font-size: .18rem;
  color: #aeb0b7;
  text-align: center;
}

.cart-list .goods-info {
  width: 68%;
}

.item-selector {
  width: 12%;
}

.icon-selector {
  position: relative;
  margin: .16rem auto 0 auto;
  width: .16rem;
  height: .16rem;
  border-radius: 50%;
  border: .02rem solid #ccc;
  cursor: pointer;
  input{
    width: .16rem;
    height: .16rem;
    opacity: 0;
  }
}
.selector-active{
  background-color: red;
  border-color: red;
}



.selector-active .icon {
  position: absolute;
  top: .02rem;
  left: .02rem;
}

.goods-num {
  position: absolute;
  right: 10px;
  top: 4px;
  width: .302rem;
  color: #999;
  text-align: center;
}

.show-num {
  line-height: 28px;
}

.num-btn {
  width: 100%;
  height: 24px;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
}

.action-bar {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .52rem;
  font-size: 15px;
  background-color: #fff;
  border-top: 1px solid #ddd;
}

.g-selector {
  float: left;
  width: 70px;
  margin-left: 4%;
  height: 5.02rem;
  cursor: pointer;
}

.g-selector .item-selector {
  position: relative;
  display: inline-block;
}

.g-selector span {
  position: absolute;
  margin-left: 20px;
  color: #5f646e;
  top: 15px;
}

.total {
  float: right;
  color: #363636;
  font-size: 14px;
  line-height: 50px;
  margin-right: 20px;
}

.total span {
  color: red;
}

.total b {
  font-size: 17px;
  margin-left: 4px;
}

.action-btn {
  float: right;
  width: 120px;
  
  height: 100%;
  color: #fff;
  text-align: center;
  font-weight: 300;
  line-height: .52rem;
  cursor: pointer;
}

.buy-btn {
  background-color: red;
}

.del-btn {
  background-color: #ff4069;
}

.del-box .total {
  display: none;
}

.del-box .buy-btn {
  display: none;
}

.del-box .del-btn {
  display: block;
}


.goods-list {
    padding-top: .08rem;
    height: 5.13rem;
    overflow-y: scroll;
}

.cart-list {
    height: 5.60rem;
}

.goods-item {
    display: flex;
    margin-bottom: .08rem;
    padding: .1rem .06rem;
    min-height: .62rem;
    background: #fff;
}

.goods-img {
    position: relative;
    margin-right: 4%;
    display: block;
    width: 16%;
}

.goods-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.goods-item .flag {
    position: absolute;
    top: 0;
    left: 0;
    width: .2rem;
    height: .2rem;
    font-size: .12rem;
    color: #fff;
    text-align: center;
    line-height: .2rem;
    background-color: #FC5951;
    border-radius: 50%;
}

.goods-info {
    position: relative;
    width: 80%;
    text-align: left;
}

.goods-title {
    width: 80%;
    // height: .38rem;
    min-height: .3rem;
    color: #363636;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.goods-price {
    margin-top: .06rem;
    line-height: 1;
}

.goods-price span {
    font-size: .15rem;
    color:red;
    /*   background: linear-gradient(90deg, #03D2B3 0, #2181FB 80%, #2181FB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}

.des {
    font-size: .12rem;
    color: #888;
}

.save {
    position: absolute;
    right: .1rem;
    bottom: .02rem;
    width: .32rem;
    height: .22rem;
    background-color: #7a45e5;
    font-size: .16rem;
    line-height: .19rem;
    text-align: center;
    color: #fff;
    border-radius: .12rem;
    overflow: hidden;
}
</style>