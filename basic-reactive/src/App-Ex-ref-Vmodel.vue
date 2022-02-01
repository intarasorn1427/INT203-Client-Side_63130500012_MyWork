<script setup>
import { ref } from 'vue';
import { computed } from 'vue';


// ex1 ref
const base = ref(4);
const height = ref(2);
const computerArea = ()=> {
    result.value = (1/2) * base.value * height.value
    console.log(computerArea);
}
const result = ref(0);

const addBase = () => {
    base.value = base.value + 1
}
const addHeight = () => {
    height.value=height.value + 1
}


// ex2 computed

const item1 = ref(0);
const item2 = ref(0);


// const addCountItem1 = ()=> {
//     item1.value = item1.value + 1
// }

// const addCountItem2 = ()=> {
//     item2.value = item2.value + 1
// }

const totalAll = ()=> {
    totalAll.value = item1.value + item2.value
}

</script>
 
<template>
<div>
    <p>Base : {{ base }}</p>
    <button @click="addBase">Add Base</button>


    <p>Height : {{ height }}</p>
    <button @click="addHeight">Add Height</button>
    

    <p>Result : {{ result }}</p>
    <button @click="computerArea">Computer Area</button>
    
</div>

<!-- ex2 -->
<div>
    Price Base<input type="number" v-model="item1">
    Price Height<input type="number" v-model="item2">
    

   <p>Total : {{ total }}</p>

</div>

</template>
 
<style>

</style>