<template>
  <div class="home">
    <header-bar></header-bar>
    <nav-bar :thisRoute="routeName"></nav-bar>
    <hot-product :hotProductList="hotProductList"></hot-product>
    home
  </div>
</template>

<script>
  import HeaderBar from '@/components/header'
  import NavBar from '@/components/nav'
  import HotProduct from './hot_product'
  import axios from 'axios';
  export default {
      components: {
        HeaderBar,
        NavBar,
        HotProduct
      },
      data() {
          return{
            routeName:'',
            hotProductList:''
          }
      },
      mounted() {
          this.routeName = this.$route.name;
          let _this = this;
          axios.get('/static/json/products/products.json').then(response => {
            _this.hotProductList = response.data.list.slice(0,8);
          }).catch(err => {
            console.log(err)
          })
      }

  }
</script>
