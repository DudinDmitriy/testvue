
<template>
  <vHeader
   nameUser=Usr1
   sumGoods=5
   sumOrder=676.342
  />
  <p>-----------------------</p>
  <vCatalog/>  
</template>

<script>
import vHeader from './components/v-header.vue'
import vCatalog from './components/v-catalog.vue'

export default {

components:{
    vHeader,
    vCatalog
}
}
</script>

<style>

</style>
