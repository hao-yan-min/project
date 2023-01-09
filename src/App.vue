<template>
  <div>
    <router-view></router-view>
  <br>
  <a href="#/lis">change</a> &nbsp;
  <a href="#/index">index</a>
  </div>
  
</template>

<script>
import index from '@/components/myindex.vue'
import lis from '@/components/elementlist.vue'
export default {
  components:{
    index,
    lis
  }
}
</script>

<style>

</style>