<template>
  <div>
    {{type}}:{{num}}
  </div>
</template>

<script>
  import bus from '@/assets/js/bus'
  export default {
    data(){
        return {
            num:0,
          type:'同辈组件'
        }
    },
    mounted() {
        bus.$on('add', (val) => {
            this.num = val
        })
    }

  }
</script>
