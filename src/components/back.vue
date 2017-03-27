<style lang="scss">
  .goBack {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 100000;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #ccc;
    font-size: 14px;
    background-color: rgba(255,255,255,.5);
    border-radius: 100%;
    span {
      font-weight:600;
      font-size:25px;
      -webkit-font-smoothing: antialiased
    }
  }
</style>

<template>
  <div class="goBack" @click="goBack">
      <span> < </span>
  </div>
</template>

<script>
  export default {
      methods: {
        goBack() {
            this.$router.go(-1)
        }
      }
  }
</script>


