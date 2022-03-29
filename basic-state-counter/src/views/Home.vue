<script setup>
import { useCounter } from '../stores/conter';

const myCounter = useCounter() //เพื่อใช้งาน
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <p>Counter (Home.vue):  {{ myCounter.count }}</p>
    <button @click="myCounter.addCounter()">Add counter +1</button>
  </div>
</template>

<style></style>
