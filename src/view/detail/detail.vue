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
  </div>
</template>

<script>
  import GoBack from '@/components/back'
  import NumInput from '@/view/detail/numInput'
  import ClickBox from '@/view/detail/clickBox'
  import SameNum from '@/view/detail/sameNum'
  export default {
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
        SameNum
      }
  }
</script>
