<script setup>
import { reactive } from 'vue';
// object
const course = reactive({ couseId: "INT210",cridit: 3});
console.log(course.cridit);
// array
const productNames = ['Pepsi', 'Coke', 'Fanta']
console.log(productNames[0])
</script>
 
<template>

</template>
 
<style>

</style>