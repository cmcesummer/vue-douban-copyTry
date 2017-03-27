<template>
  <div class="nav" :class="{isFlex:thisFlex}">
    <ul>
      <li v-for="item in itemList" >
        <router-link :to="item.url" :class="{active: thisRoute === item.name}">
          {{item.text}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import scroll from '@/assets/js/scroll'
  export default {
      props:{
        thisRoute: String
      },
      data() {
          return {
              itemList:[
                {text:"首页",url:"/",name:'Home'},
                {text:"分类",url:"/category",name:'Category'},
                {text:"购物车",url:"/cart",name:'Cart'},
                {text:"我的",url:"/my",name:'My'}
              ],
              routeName:'',
              thisFlex:''
          }
      },
      mounted() {
        this.routeName = this.$route.name;
        window.addEventListener('scroll', () => {
          window.scrollY > 50 ? this.thisFlex = true : this.thisFlex = false;
        },false)
      }
  }
</script>

<style lang="scss">
  .nav{
    height:43px;
    line-height:43px;
    border-bottom:2px solid #3ba94d;
    background-color: #ffffff;
    &.isFlex {
      position: fixed;
      top:0;
      right:0;
      left:0;
    }
    ul{
      display: flex;
      width: 100%;
      li{
        display:inline-block;
        flex: 1;
        vertical-align: middle;
        text-align: center;
        a {
          color: #4a4a4a;
          font-size: 15px;
          &:active{
            color:#3ba94d;
          }
        }
      }
      .active {
        color:#3ba94d;
      }
    }
  }
</style>
