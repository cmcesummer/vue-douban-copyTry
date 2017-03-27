<template>
  <div>
    <button @click="add">{{num}}</button>
  </div>
</template>

<script>
  import bus from '@/assets/js/bus'
  export default {
      props:['type'],
      data() {
          return {
              num:0
          }
      },
      methods: {
          add() {
              this.num ++;
              this.type ? bus.$emit('add', this.num) : this.$emit('add',this.num);
          }
      }
  }
</script>
