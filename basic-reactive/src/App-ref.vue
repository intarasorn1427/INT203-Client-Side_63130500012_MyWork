<script setup>
import { ref } from 'vue';
console.clear;
const msg = ref("Hello");
const counter = ref(1);
const isEmpty = ref(false);

const course = ref({ couseId: "INT210",cridit: 3});
console.log(course.value) //all value
console.log(course.value.cridit) //undefinded

const productNames = ref(['Pepsi', 'Coke', 'Fanta'])
console.log(productNames.value)
console.log(productNames.value[0])

</script>
 
<template>
<p>counter: {{ counter }}</p>
<p>Msg: {{ msg }}</p>
<p>Empty: {{ isEmpty }}</p>

<p>Course :{{ course }}</p>
  <p>Course credit:{{ course.credit }}</p>
  <ul>
    <li v-for="(productName,index) in productNames" :key="index">{{ productName }}</li>
    <!-- <li v-for="productName in productNames">{{ productName }}</li> -->
  </ul>
  <p>Product Name: {{ productNames[0] }}</p>
</template>
 
<style>

</style>