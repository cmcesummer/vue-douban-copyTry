<template>
  <div class="nav" :class="{isFlex:thisFlex}">
    <ul>
      <li v-for="item in itemList" >
        <router-link :to="item.url" :class="{active: thisRoute === item.name}">
          {{item.text}}
        </router-link>
      </li>
    </ul>
    <div class="nav-top" :class="{isHaveTop:thisTop}" @click="toTop">
      ↑
    </div>
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
              thisFlex:'',
              thisTop:false
          }
      },
      mounted() {
        this.routeName = this.$route.name;
        let start = 0,
            end;
        window.addEventListener('scroll', () => {
            end = window.scrollY;
            start < end ? this.thisTop = true : this.thisTop = false;
            setTimeout(() => {
                start = end
            }, 0);
          window.scrollY > 50 ? this.thisFlex = true : this.thisFlex = false;
        },false)
      },
    methods: {
      toTop() {
        let height = window.scrollY,
            move = height / 10;
        let top = setInterval(() => {
          window.scroll(0, height = height - move);
          height < height / 10 && clearInterval(top);
        },100)
      }
    }
  }
</script>

<style lang="scss">
  .nav-top {
    position: fixed;
    bottom:30px;
    right:30px;
    background: rgba(39,40,34,0.8);
    color: #ffffff;
    height:20px;
    width:20px;
    border-radius:10px;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
    &.isHaveTop{
      display: none;
    }
  }
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
