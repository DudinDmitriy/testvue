
<template>
  <vHeader
   nameUser = 'Usr1'
   numberGoods = 'sdfsdf'
   :priceOrder = priceOrder
  />
  <p>-----------------------</p>
  <vCatalog/>  
  
  <input 
  type = "number"
  v-model="priceOrder" />
  
  <button
    v-on:click = "checkType">
    check type
  </button>
  <div>{{priceOrder}}</div>
  <div>
    <table class = "ahead">
      <th class="ahead_category">
        Category 
      </th>
      <th class="ahead_user">
        User   
      </th>
      <th class = "ahead_card">
        Card
      </th>
    </table>
  </div>


</template>

<script>
import vHeader from './components/v-header.vue';
import vCatalog from './components/v-catalog.vue';

export default {
  components:{
    vHeader,
    vCatalog
  },
  data(){
  return {
    priceOrder:100
    }
  },
  
    
  methods:{
    checkType(){
      console.log(typeof(this.priceOrder))
    }
  }
}
</script>

<style>
  .ahead{
    border: 2px solid black;
    width: 100%;
  }
  .ahead.ahead_category{
    width: 66%;
  }

  .ahead.ahead_user{
    width: 66%;
  }
  .ahead_card{
    width: 66%;
  }
</style>
