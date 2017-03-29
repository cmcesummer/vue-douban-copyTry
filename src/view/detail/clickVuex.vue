<template>
  <div>
    <button @click="add">{{num}}</button>
  </div>
</template>

<script>
  //import {mapState,mapMutations} from 'vuex';

  export default {
      computed: {
        inputVal(){
          return this.$store.state.inputVal;
        },
        clickBtn() {
            return  this.$store.state.clickBtn
        }
      },
      /*computed: {
        ...mapState(['inputVal','clickBtn'])
      },*/
      data() {
          return {
              num:0
          }
      },
      methods: {
        /*...mapMutations('addClick'),*/
        add() {
            this.$store.commit('addClick',this.inputVal);
            this.num++;
        }
      }
  }
</script>
