<template>

  <div id="page-list" class="device" >
    
    <header>
    <div class="one">
        <img
          class="lei"
          src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/back.png"
          alt=""
        />
        <p class="cen">
          <img
            src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/secbuy_logo.png"
            alt=""
          />
        </p>
        <img
          class="lei"
          src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/icon_32_question.png"
          alt=""
        />
      </div>
    </header>
    <div class="page">
   <div class="tab-wrap">
        <ul class="cate-tab">
            <li class="cate" v-for="item in tab" :class="{'tab-active': type==item.type}" :key="item.id" @click="qh(item.id)">{{item.name}}</li>
          <!--<li class="cate">母婴</li>
          <li class="cate">鞋包饰品</li>
          <li class="cate">食品</li>
          <li class="cate">数码家电</li>
          <li class="cate">居家百货</li> -->
        </ul>
        </div>
      </div>
       <ul class="filter-bar">
         <li class="filter-opt price-up" :class="{'filter-active':status=='all'}" @click="status='all'">综合排序</li>
        <li class="filter-opt price-up"  :class="{'filter-active':status=='sales'}"  @click="status='sales'">销量优先</li>
        <li class="filter-opt filter-price price-up" :class="{'filter-active':status=='priceMax'||status=='priceMin'}"   @click="changePrice">价格</li>
      </ul>
     <ul class="goods-list">
         <li class="goods-item" v-for="item in show" :key="item.id">
          <div class="goods-img">
            <img :src="item.img" alt="item.name">
            
          </div>
           <div class="goods-info">
            <p class="goods-title">{{item.name}}</p>
            
            <span class="des">{{item.sales}}</span> 
            <div class="goods-price" style=" position: relative;">
                <img style="width:1.51rem; height:.38rem;" src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/secbuy/double_card_btn.png" alt="">
              <span>¥<b>{{item.price}}</b></span>
            </div>
            <span class="save" @click="setCartHandle(item,'PLUS')">+</span>
          </div>
        </li>
       
      </ul>

     <div class="dibu">
        <div>
            <router-link to="/miao">  
                <img src="https://img.youpin.mi-img.com/ferriswheel/lpipg73aghg_22025647641626083298208.png?w=72&h=72" alt="">
            <p>单品秒杀</p>
            </router-link>
        </div>
        <div>
            <router-link to="/shou">
                <img src="https://img.youpin.mi-img.com/ferriswheel/5ed9aafb_fdf3_421b_abd5_ca305513dcc4.gif?w=72&h=72" alt="">
                <p>品类秒杀</p>
            </router-link>
        </div>
        <div>
            <router-link to="/shipping">
                <img src="https://img.youpin.mi-img.com/ferriswheel/1lak3eart48_22025647641626083298186.png?w=72&h=72" alt="">
            <p>购物车</p>
            </router-link>
        </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {mapState,mapMutations} from "vuex"
import dibu from "@/components/di.vue"
let boo=true;
export default {
  name: 'shou',
  components:{
  dibu
  },
  data(){
      return {
          type:0,
          status:"all"
      }
  },
  components: {
//  HelloWorld
  },
  computed:{
  	...mapState(['list',"tab"]),
      show(){
          let data=null;
          if(this.type==0){
//            return data=this.list
           data=this.list.map(item=>item);
          }else{
//            return data=this.list.filter(item =>  
//               this.type==item.type
//            )
           data=this.list.filter(item=>item.type==this.type);
          }
          console.log(data);
         switch(this.status){
                case "all":
                    return data;
                case "sales":
                    console.log(123);
                    return data.sort((a,b)=>{
                        return b.sales-a.sales
                    });
                case "priceMax":
                    return data.sort((a,b)=>b.price-a.price);
                case "priceMin":
                    return data.sort((a,b)=>a.price-b.price);

            }
      }
  },
 
  methods:{
  	...mapMutations(["dk"]),
      qh(s){
          this.type=s
        // console.log(s)
      },
      changePrice(){
      	if(boo){
      		this.status="priceMax";
      		boo=false;
      	}else{
      		this.status="priceMin";
      		boo=true;
      	}
      
      },
       setCartHandle(item,_type){
            this.$store.dispatch('setCart',{
                id:item.id,
                img:item.img,
                name:item.name,
                price:item.price,
                stock:item.stock,
                _type
            })
        }
  }
}
</script>
<style lang='scss' scoped>
.er img{
    width: 1.71rem;
    height: 1.71rem;
   

}
    .one {
  display: flex;
  justify-content: space-between;
  height: 0.44rem;
  align-items: center;
}
header{
    background: red;
}

.cen img {
  width: 0.91rem;
}
.lei {
  width: 0.32rem;
  height: 0.32rem;
}
.he{
    width: 1.71rem;
    height: 2.69rem;
    background: white;
}

// 
.device {
    position: relative;
    float: left;
    width: 100%;
    height: 6.67rem;
    background-color: #eee;
    border-radius: .04rem;
    overflow: hidden;
}


.header-title {
    font-size: .16rem;
    text-align: center;
}

.header-edit {
    float: right;
    padding: 0 .1rem;
    cursor: pointer;
}
.cart{
  float: left;
}

.tab-wrap {
    width: 100%;
    height: .6rem;
    background: red;
    overflow: hidden;
}

.cate-tab {
    white-space: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  background: linear-gradient(to right, rgb(255, 51, 102), rgb(255, 51, 18));
}

.cate {
    display: inline-block;
    width: .8rem;
    height: .7rem;
    color: #fff;
    line-height: .6rem;
    text-align: center;
}

.tab-active {
    background-color: rgb(255, 255, 255);
    border-radius: 1.5px;
    height: 3px;
}

.filter-bar {
    display: flex;
    height: .4rem;
    background-color: #fff;
    border-bottom: 1px solid #E5E5E5;
    line-height: .4rem;
}

.filter-opt {
    position: relative;
    width: 33.3%;
    color: #5F646E;
    text-align: center;
}

.filter-active {
    // color: #7B57C5;
    color: red;
}

.filter-price:after {
    position: absolute;
    top: .13rem;
    margin-left: .04rem;
    content: '';
    display: inline-block;
    width: .08rem;
    height: .14rem;
    background: url('http://ov52d8mm7.bkt.clouddn.com/arrow-default.png') no-repeat;
    background-size: .08rem .14rem;
}

.filter-active.price-up:after {
    background: url('http://ov52d8mm7.bkt.clouddn.com/arrow-down.png') no-repeat;
    background-size: .08rem .14rem;
}

.filter-active.price-down:after {
    background: url('http://ov52d8mm7.bkt.clouddn.com/arrow-up.png') no-repeat;
     background-size: .08rem .14rem;
}

.goods-list {
    padding-top: 0.08rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 5.13rem;
    overflow-y: scroll;
    
}

.cart-list {
    height: 5.60rem;
}

.goods-item {
    margin-bottom: .08rem;
    padding: .1rem .06rem;
    min-height: .62rem;
    background: #fff;
    box-sizing: border-box;
    width: 1.71rem;
    height: 2.69rem;
   
}

.goods-img {
    position: relative;
   width: 1.65rem;
   height: 1.65rem;
    display: block;
   
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
     width: 1.71rem;
    
    color: #363636;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}

.goods-price {
    margin-top: .06rem;
    line-height: 1;
    
}

.goods-price span {
    font-size: 0.15rem;
    color: white;
    position: absolute;
    top: 14px;
    left: 16px;
}

.des {
    font-size: .12rem;
    width: .59rem;
    color: red;
    border-color: rgb(255, 156, 139);
    border: 1px solid rgb(255, 156, 139);
    border-radius: 2px;
    border-width: 1px;
    height: .14rem;
    padding-right: 3px;
    padding-left: 3px;
}

.save {
    position: absolute;
    right: .1rem;
    bottom: .1rem;
    width: .32rem;
    height: .22rem;
background: linear-gradient(to right, rgb(240, 206, 123), rgb(221, 177, 81));
    font-size: .16rem;
    line-height: .19rem;
    text-align: center;
    color: #fff;
    border-radius: .12rem;
    overflow: hidden;
}


.dibu{
    width: 3.75rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    height: .58rem;
    background: white;
    align-items: center;
}
.dibu img{
   width: .24rem;
   height: .24rem;
   padding: 0 .10rem 0 .10rem;
   margin-top: .10rem;
}
.dibu p{
    color: rgba(0, 0, 0, 0.8);
    font-size: .11rem;
    height: .29rem;
    line-height: .27rem;
    text-align: center;
}



</style>
