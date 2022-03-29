<script setup>
import { useCounter } from '../stores/conter';

const myCounter = useCounter()
</script>

<template>
  <div>
    <h1>Show Counter Page</h1>
    <p>Counter (showCounter.vue) : {{ myCounter.count }}</p>                <!--(view)-->
    <p>Double Counter (showCounter.vue) :{{ myCounter.count}} x 2 = 
      <span style="color:red">{{ myCounter.doubleCouter }}</span>           <!--computed (view)-->
    </p>  
    <button @click="myCounter.removeCounter">remove counter -1</button>     <!--func (action)-->
  </div> 
</template>

<style></style>
