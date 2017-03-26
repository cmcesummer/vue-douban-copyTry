<template>
  <div class="home">
    <header-bar></header-bar>
    <nav-bar :thisRoute="routeName"></nav-bar>
    <hot-product></hot-product>
    home
  </div>
</template>

<script>
  import HeaderBar from '@/components/header'
  import NavBar from '@/components/nav'
  import HotProduct from './hot_product'
  export default {
      components: {
        HeaderBar,
        NavBar,
        HotProduct
      },
      data() {
          return{
            routeName:''
          }
      },
      mounted() {
          this.routeName = this.$route.name
      }

  }
</script>
