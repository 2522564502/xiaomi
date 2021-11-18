<template>
  <div id="app">
    
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Footer from '@/components/footer/footer.vue'
export default {
  components:{
    Footer
  }
}
</script>
<style lang="scss">

</style>
