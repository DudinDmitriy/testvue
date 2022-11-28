<template>
<div class="CatalogItems">
<v-item-cart v-for="good in this.$store.state.Goods" 
  :key="good.id"
  :NameItem="good.name"
  :PriceItem="good.price" 
  />
</div>
</template>

<script>
import vItemCart from './v-ItemCart.vue'

export default {
  components: { vItemCart },

}

</script>

<style>
 .CatalogItems{
   display: flex;
   flex-wrap: wrap;
 }
</style>
