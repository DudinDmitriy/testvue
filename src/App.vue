
<template>
  <p>-----------------------</p>
  <div>
   {{this.$store.state.totalcount}}
  </div>  
  <v-catalog />
  
  

</template>

<script>

import VCatalog from './components/v-catalog'
export default {
  data(){
    return {
      count: 5
    }
  },
  components: {VCatalog},
  mounted() {
    this.$store.state.Goods = [
      {name: 'Good1',
       price: 100,
       id:1},
      {name: 'Good2',
       price: 57,
       id:2},
      {name: 'Good3',
      price: 76,
       id:3},
      {name: 'Good4',
      price: 86,
       id:4},
      {name: 'Good5',
      price:98,
       id:5}
    ]
  }
    
}
</script>

