<template>
  <div class="num">
    <label class="num-title">数量</label>
    <div class="num-option">
      <label>
        <span class="minus" :class="{active:number>1}" @click="minus">-</span>
        <input type="number" name="number" class="number" v-model="number">
        <span class="addition" :class="{active:number>-1}" @click="addition">+</span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        number:0
      }
    },
    watch: {
      number: function(val,oldVal) {
        val < 0 ? this.number = 0 : this.number = parseInt(val);
      }
    },
    methods: {
      minus() {
        this.number -= 1
      },
      addition() {
          this.number += 1
      }
    }
  }
</script>

<style lang="scss">
  .num{
    display: -webkit-box;
    display: -webkit-flex;
    height: 25px;
    line-height: 25px;
    padding: 15px;
    border-bottom: 1px solid #f0f0f0;
    .num-title{
      display: inline-block;
      width: 50px;
      color: #9b9b9b;
      font-size: 16px;
    }
    .num-option{
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      font-size: 0;
      margin-left: 5px;
      .active{
        background-color: #68cb78!important;
      }
      .number{
        display: inline-block;
        width: 70px;
        height: 25px;
        line-height: 25px;
        color: #333;
        font-size: 16px;
        text-align: center;
        margin: 0 10px;
        border: none;
        vertical-align: top;
        background-color: #ccc;
        border-radius: 50px;
      }
      .minus, .addition {
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        background-color: #ccc;
        border-radius: 25px;
      }
    }
  }


</style>
