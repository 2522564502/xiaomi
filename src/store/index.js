import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  list:[
    {
        "img":"https://img.youpin.mi-img.com/800_pic/3786cb47c67c19b7d11a9e8e8cf77037.png@base@tag=imgscale&F=webp",
        "name":"女士连体两穿泳衣",
        "price":3099,
        "sales":"低至2.4折",
        "type":1,
        "id":1
    },
    {
        "img":"https://img.youpin.mi-img.com/shopmain/8c233fa4adf806f48fc1730a0014542a.png?w=800&h=800@base@tag=imgscale&F=webp",
        "name":"耐克挤压水壶",
        "price":89,
        "sales":"低至2.4折",
        "type":1,
        "id":2
     },
    {
        "img":"https://img.youpin.mi-img.com/shopmain/e257d89a69e4eb21b7489e98bd6a2934.png?w=800&h=800@base@tag=imgscale&F=webp",
        "name":"ANNE KLEIN 潮流经典美式轻奢",
        "price":585,
        "sales":"低至2.4折",
        "type":1,
        "id":3
    },
    {
        "img":"https://img.youpin.mi-img.com/shopmain/45da63742d7eb6337201221b2d4975e1.png?w=800&h=800@base@tag=imgscale&F=webp",
        "name":"全球购 路易威登（Louis Vuitton）新款女士LV印花手袋 M41112",
        "price":10967,
        "sales":"低至2.4折",
        "type":2,
        "id":4
    },
    {
        "img":"https://img.youpin.mi-img.com/shopmain/bf4eb77af176ef7a128d9acb6d7a0816.png?w=800&h=800@base@tag=imgscale&F=webp",
        "name":"DELSEY 男士双肩背包",
        "price":269,
        "sales":"低至2.4折",
        "type":3,
        "id":5
    },
    {
        "img":"http://img.alicdn.com/imgextra/i3/TB16avCQXXXXXcsXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q60s30.jpg_.webp",
        "name":"正品FENDI/芬迪女包钱包女长款 百搭真皮钱夹 女士小怪兽手拿包",
        "price":3590,
        "sales":"低至2.4折",
        "type":3,
        "id":6
    },
    {
        "img":"https://img.youpin.mi-img.com/shopmain/544194eca4d8873890f32a3cc75ce9be.png?w=800&h=800@base@tag=imgscale&F=webp",
        "name":"雀巢（Nestle）高钙成人奶粉",
        "price":60,
        "sales":"低至2.4折",
        "type":4,
        "id":7
    },
    {
        "img":"https://img.youpin.mi-img.com/shopmain/ecce64360843dc619e9b53e63f23170f.png@base@tag=imgScale&h=214&m=1&q=80&w=214",
        "name":"【全球购】越南acecook河粉牛肉河粉特产 速食即食方便面粉丝 牛肉河粉米粉65克*5袋",
        "price":19.9,
        "sales":"低至2.4折",
        "type":4,
        "id":8
    },
    {
        "img":"https://img.youpin.mi-img.com/shopmain/972ade98e6289130605ac85d48a19740.jpg@base@tag=imgscale&h=216&m=1&q=80&w=216",
        "name":"Beats EP头戴式耳机",
        "price":558,
        "sales":"低至2.4折",
        "type":5,
        "id":9
    },
    {
        "img":"https://img.youpin.mi-img.com/shopmain/08beed3c7c1566b8495797a0364beb3e.png?w=800&h=800@base@tag=imgscale&F=webp",
        "name":"Kindle Paperwhite3 黑色经典版电纸书",
        "price":805,
        "sales":"低至2.4折",
        "type":5,
        "id":10
    },
    {
        "img":"http://gw.alicdn.com/tps/TB19OfQRXXXXXbmXXXXL6TaGpXX_760x760q90s150.jpg_.webp",
        "name":"煎炒烹炸一锅多用",
        "price":216,
        "sales":"低至2.4折",
        "type":5,
        "id":11
    },
],
tab:[
 {
        id:0,
        name:'首页',
        type:0
    },
    {
        id:1,
        name:'运动出行',
        type:1
    },
    {
        id:2,
        name:'家具家装',
        type:2
    },
    {
        id:3,
        name:'海购',
        type:3
    },
    {
        id:4,
        name:'智能数码',
        type:4
    },
    {
        id:5,
        name:'家访餐厨',
        type:5
    },
],
 cartData:[],
totalMount:0,
totalPrice:0,
totalSelect:false,
deleteShow:true
  },
  mutations: {
  	//删除
  	SET(state,boo){
  		state.deleteShow=boo;
  	},
  	//删除
  	sc(state){
		state.cartData=state.cartData.filter(item=>item.select!=true)
		state.totalMount=0
		localStorage.setItem('totalMount',JSON.stringify(state.totalMount));
//	console.log(state)
  	},
  	dk(state,s){
  	console.log(s)
  	},
  	 SET_CARTDATA(state,data){
      
      const {cartData,totalMount,totalPrice}=data;
      state.cartData=cartData;
      state.totalMount=totalMount;
      state.totalPrice=totalPrice;
    },
  SET_CART(state,data){
      const {id,img,name,price,stock,_type}=data;
      const index = state.cartData.findIndex(item=>item.id==id);

      if(index==-1){
        state.cartData.push({
          id,img,name,price,stock,_type,
          mount:1,
          tPrice:price
        })
      }else{
        let item=state.cartData[index];
        if(_type=='PLUS'){

          item.mount+=1;
          item.tPrice+=price;
        }else if(_type=='REDUCE'){
          // item.mount-=1;
          // item.tPrice-=price;

          if(item.mount>1){
            item.mount-=1;
            item.tPrice-=price;
          }else{
            alert("数量不能再减少了")
          }

          // item.mount-=1;
          // item.tPrice-=price;

          // if(!item.mount){
          //   state.cartData.splice(index,1);
          //   // state.cartData=state.cartData.filter(item=>item.id!=id)
          // }

        }
      }

      localStorage.setItem('cartData',JSON.stringify(state.cartData));
    },
     SET_TOTAL(state,data){
      const {select,mount,tPrice}=data;
      if(select){
        state.totalMount+=mount;
        state.totalPrice+=tPrice;
      }else{
        state.totalMount-=mount;
        state.totalPrice-=tPrice;
      }

      
      localStorage.setItem('totalMount',JSON.stringify(state.totalMount));
      localStorage.setItem('totalPrice',JSON.stringify(state.totalPrice));

    },
    // 修改选中的状态
    SET_SELECT(state,id){
      // state.cartData.map(item=>{
      //   if(item.id==id){
      //     item.select=!item.select
      //   }
      // })

      const index=state.cartData.findIndex(item=>item.id==id);
      state.cartData[index].select=!state.cartData[index].select

      localStorage.setItem('cartData',JSON.stringify(state.cartData));
    },

    //修改全选的状态
    SET_TOTAL_SELECT(state,boo){
      state.totalSelect=boo;
      if(boo){
        state.totalMount=0;
        state.totalPrice=0;
        state.cartData.map(item=>{
          item.select=true;
          state.totalMount+=item.mount;
          state.totalPrice+=item.tPrice;
        })
      }else{
        state.cartData.map(item=>{
          item.select=false;
          state.totalMount=0;
          state.totalPrice=0;
        })
      }

      localStorage.setItem('cartData',JSON.stringify(state.cartData));
      localStorage.setItem('totalMount',JSON.stringify(state.totalMount));
      localStorage.setItem('totalPrice',JSON.stringify(state.totalPrice));
      localStorage.setItem('totalSelect',JSON.stringify(state.totalSelect));

    }
  },
  actions: {
  	setData({commit}){
      // console.log(context);
      // context.commit('SET_DATA')
      // const goodsData=localStorage.getItem('goods')?JSON.parse(localStorage.getItem('goods')):[];
      const goodsData=JSON.parse(localStorage.getItem('goods'))||[];
     
      commit('SET_DATA',{
        goodsData
      })
    },
    setCartData({commit}){
      const cartData=JSON.parse(localStorage.getItem('cartData'))||[];
      const totalMount=JSON.parse(localStorage.getItem('totalMount'))||0;
      const totalPrice=JSON.parse(localStorage.getItem('totalPrice'))||0;
      commit('SET_CARTDATA',{
        cartData,
        totalMount,
        totalPrice
      })
    },
    setCart({commit},data){
      commit('SET_CART',data)
    },
    setTotal({commit},data){
      commit('SET_TOTAL',data);
    },
    setSelect({commit},id){
      commit('SET_SELECT',id);
    },
    setTotalSelect({commit},boo){
      commit('SET_TOTAL_SELECT',boo);
    }
  },
  modules: {
  }
})
