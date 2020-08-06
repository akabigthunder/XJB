<template>
  <div id="app">
    <div id="nav">
      <bottoms></bottoms>
    </div>
    <router-view/>
  </div>
</template>
<script>
import bottoms from '@/components/bottoms'
export default {
  components:{
    bottoms
  }
}
</script>
<style lang="scss">
</style>
