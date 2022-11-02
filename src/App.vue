
<template>
  <vHeader
   nameUser = 'Usr1'
   numberGoods = 'sdfsdf'
   :priceOrder = "priceOrder"
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
},
data(){
  return {
    priceOrder:100
  }
}
}
</script>

<style>

</style>
