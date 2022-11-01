<template>
    <p> User: {{nameUser}} , number of good: {{sumGoods}} price: {{sumOrder}} </p>
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
    sumGoods: {
        type: Number,
        default(){
            return 0
        }

    },
    sumOrder: {
        type: Number,
        default(){
            return 0
        }
    }
    }
}
</script>

<style>

</style>