<style lang="scss">
  .hot-product{
    padding:5px;
    ul{
      li{
        float:left;
        width:50%;
        padding: 0 5px;
        margin-bottom: 10px;
        box-sizing: border-box;
        img{
          width:100%;

        }
        .msg {
          padding: 0 5px;
          box-sizing: border-box;
          h3{
            padding: 5px 0;
            color: #ccc;
            font-size:14px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="hot-product">
    <ul>
      <li v-for="item in hotProductList">
        <router-link :to="item.url + '/' + item.id">
          <img :src="item.src" alt="img">
        </router-link>
        <div class="msg">
          <h3>{{item.title}}</h3>
          <p>
            <span>{{item.newPrice }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
      props:['hotProductList']
  }
</script>
