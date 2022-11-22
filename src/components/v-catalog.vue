<template>
 <div v-for="good in allGoods" :key="good.id">  
    <h1> {{good.name}} price: {{ good.price}}</h1> 
    <p></p> 
 </div> 

</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: mapGetters(["allGoods"]),
  async mounted() {
     this.$store.dispatch("loadGoods")
  }

}

</script>

<style>

</style>
