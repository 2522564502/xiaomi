<template>
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
</template>
<script>

</script>
<style scoped>
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
