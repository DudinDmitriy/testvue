<template>
 <div v-for="good in allGoods" :key="good.id">  
    <h1> {{good.name}} price: {{ good.price}}</h1> 
    <p></p> 
 </div> 

</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: mapGetters(["AllGoods"]),
  async mounted() {
     this.$store.dispatch("LoadGoods")
  }

}

</script>

<style>

</style>
