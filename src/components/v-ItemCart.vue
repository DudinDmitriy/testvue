<template>
 <div class="ItemCart" 
   v-on:mouseleave="active = false"
   v-on:mouseout="active = true">
  <span v-if='active'> Внимание мышь </span>  
  <div class="NameItem">{{NameItem}}</div>
  <div class="PriceItem">Цена: {{PriceItem}}</div>
  <div>
    <span class="CountItem">Кол: {{CountItem}}</span>
    <button @click="CountItem++">+</button>
    <button @click="CountItem--">-</button>
  </div>
  <button class="AddShopingCart"> Add item </button>
 </div> 
</template>

<script>
export default {
  name:'VItemCart',  
  props:{
     NameItem: String,
     PriceItem: Number
  },
  data() {
    return {
     CountItem: 1,
     active: false
    }
  }
}
</script>

<style>
 .ItemCart{
    width: 100%;
    border: 2px solid darkblue;
    margin: 10px;
    
 }
</style>