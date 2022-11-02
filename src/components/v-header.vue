<template>
    <div>
        <p class='user_header'> User: {{nameUser}} , number of good: {{numberGoods}} price: {{priceOrder}} </p>
    </div>
 </template>

<script>
export default {
 name: 'vHeader',
 props: {
    nameUser: {
        type: String,
        default() {
            return ''
        }

    },
    numberGoods: {
        type: String,
        default(){
            return ' 0th '
        }

    },
    priceOrder: {
        type: Number,
        default(){
            return 0
        }
    }
    }
}
</script>

<style>
  .user_header{
     width: 50%;
  }
</style>