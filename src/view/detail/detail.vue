<template>
  <div class="detail">
    <go-back></go-back>
    this is {{id}}
    <num-input></num-input>
    <hr>
    <div style="padding:20px">
      父子组件通讯：v-on $emit <br>
      父组件：{{clickNum}}
       <click-box v-on:add="addThis"></click-box>
    </div>
    <hr>
    <div style="padding:20px">
      非父子  $on $emit
      <click-box :type="'noFather'"></click-box>
      <same-num></same-num>
    </div>
    <hr>
    <div style="padding:20px">
      以上不使用vuex 一下使用
    </div>
    <hr>
    <div style="padding:20px">
      <click-vuex></click-vuex>
      <input-vuex></input-vuex>
      store.clickBtn = click(clickBtn) + input({{inputVal}}) = {{clickBtn}}
    </div>
  </div>
</template>

<script>
  import GoBack from '@/components/back'
  import NumInput from '@/view/detail/numInput'
  import ClickBox from '@/view/detail/clickBox'
  import SameNum from '@/view/detail/sameNum'
  import ClickVuex from '@/view/detail/clickVuex'
  import InputVuex from '@/view/detail/inputVuex'
  export default {
      computed:{
        clickBtn() {
            return this.$store.state.clickBtn
        },
        inputVal() {
            return this.$store.state.inputVal
        }
      },
      data() {
          return {
              id: this.$route.params.id,
              clickNum:0
          }
      },
      methods:{
        addThis() {
            this.clickNum = arguments[0];
        }
      },
      components:{
          GoBack,
          NumInput,
          ClickBox,
          SameNum,
          ClickVuex,
          InputVuex
      }
  }
</script>
