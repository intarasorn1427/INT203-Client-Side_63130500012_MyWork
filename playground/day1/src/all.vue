<script setup>
import { ref } from "@vue/reactivity"
import { computed } from "@vue/runtime-core"

const number1 = ref(0)
const number2 = ref(0)


const claculate = ()=>{
  sum.value = number1.value + number2.value
}

const sum = ref()

// computed
const claculate2 = computed(()=> sum.value = number1.value + number2.value)

// Arry
const nums = [1,2,3,4,5,6,7,8,9]
const subjects = ['int206','int207','int208']


</script>
 
<template>
<div>
  <h2>Ref</h2>
  <input type="number" v-model="number1"> <br>
  <input type="number" v-model="number2"> <br>
  <button @click="claculate">claculate</button> <br>
  <!-- <span v-show="sum !==0"> {{ sum }}</span> -->
  <p v-if="sum == 0 || sum == ' ' " style="color: red">pleass input number</p>
  <p v-else>{{ sum }}</p>


  <h2>Computed</h2>
  <input type="number" v-model="number1"> <br>
  <input type="number" v-model="number2"> <br>
  {{ claculate2 }}
  
</div>

<div>
  <ul>
    <li v-for="(number,index) in nums" :key="index">index:{{ index }} = {{ number }}</li>
    
  </ul>
  <ul>
    <li v-for="(subject,index) in subjects" :key="index">{{ subject }}</li>
  </ul>
</div>


</template>
 
<style scoped>

</style>