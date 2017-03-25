<style scoped>
  .header .header-main {
    position:relative;
    z-index:110;
    overflow:hidden;
    background:#68cb78;
  }
  .header .logo-box{
    height:50px;
    line-height:50px;
  }
  .header .logo-search-icon {
    float:right;
    color: #ffffff;
    font-size: 0.4rem
  }
  .header .logo-title{
    float:left;
    padding-left:10px;
    font-size: .8rem;
    font-weight:600;
    color: #ffffff;
  }
  .header .header-search {
    position: relative;
    height: 30px;
    margin:20px 30px;
    padding: 0 20px;
    border: 1px solid #fff;
    border-radius: 30px;
  }
  .header .header-search input{
    width: 100%;
    line-height: 30px;
    border: none;
    color: #fff;
    background-color: transparent;
    font-size: .5rem;
  }
  .header .header-search span{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    display: block;
    line-height: 30px;
    padding: 0 15px;
    color: #fff;
    font-size: .5rem;
  }
  .header-mask {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }

</style>
<template>
  <div class="header">
    <div class="header-main">
      <!-- logo -->
      <div class="logo-box" v-show="!isSearch">
        <div class="logo-title">{{title}}</div>
        <div class="logo-search-icon" @click="showSearchInput">@search</div>
      </div>
      <!-- search -->
      <div class="header-search" v-show="isSearch">
        <input type="text" v-model="searchVal">
        <span @click="searchBtn">@search</span>
      </div>
    </div>
    <!-- 遮罩 -->
    <div class="header-mask" v-show="isSearch" @click="hideSearchInput"></div>
  </div>
</template>

<script>
  export default {
      data() {
          return {
            title:'豆瓣集市',
            isSearch: false,
            searchVal:''
          }
      },
      methods: {
        searchBtn: function () {
          console.log(this.searchVal)
        },
        showSearchInput: function() {
          this.isSearch = !this.isSearch;
        },
        hideSearchInput: function() {
          this.showSearchInput();
          this.searchVal = '';
        }
      }
  }
</script>


