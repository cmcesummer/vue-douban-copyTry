<template>
  <div>
    <label>数字
      <input type="text" v-model="val" v-on:keyup="isBlur">
    </label>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex';

  export default {
      computed: {
        inputVal() {
            return this.$store.state.inputVal
        }
      },
     /* computed:{
        ...mapState(['inputVal'])
      },*/
      data() {
          return {
              val: 1
          }
      },
      mounted() {
          this.val = this.inputVal;
      },
      methods: {
        //...mapMutations('changeInput'),
        isBlur() {
            let isNum = /\d/;
            if(this.val !== '' && isNum.test(Number(this.val))) {
              this.$store.commit('changeInput',this.val);
            } else {
              alert('no');
              this.val = this.inputVal
            }
        }
      }
  }
</script>
