<template>
  <div class="detail">
    <go-back></go-back>
    this is {{id}}
    <num-input></num-input>
  </div>
</template>

<script>
  import GoBack from '@/components/back'
  import NumInput from '@/view/detail/numInput'
  export default {
      data() {
          return {
              id: this.$route.params.id
          }
      },
      components:{
          GoBack,
          NumInput
      }
  }
</script>
