
<template>
  <div class="box">
    <div class="header">
      <v-header>

      </v-header> 
    </div>
    <div class="catalog">
      <v-catalog>

      </v-catalog >
    </div> 
  </div>
</template>

<script lang="ts">

import VCatalog from './components/v-catalog.vue'
import VHeader from './components/v-header.vue'

export default {
  data(){
    return {
      count: 5
    }
  },
  components: {VCatalog,VHeader},
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

<style>
  box{
    display: grid;
    grid-area: auto;
  }
</style>
