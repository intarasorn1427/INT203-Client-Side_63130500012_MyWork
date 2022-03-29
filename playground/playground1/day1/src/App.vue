<script setup>
import { ref } from "@vue/reactivity"


const multiplication = (num)=> {
  var num = new num;
  var result = ""

  for(let i = 1; i <=12; i++){
    result = result + num + " x " + i + " = " + (num * i) 
    

  }
}


const num = ref(1)
const result = ref()





// const numtomultiplication =[1,2,3,4,5,6,7,8,9,10,11,12]
// const multiplication = (num)=> {
//   valueofmulti.value = ''
//   for(let i = 1; i <=12; i++){
//     valueofmulti += num.value * i ;
//     print(valueofmulti.value);

//   }
//   console.log(multiplication)
// }

// const valueofmulti = ref()


// const numtomultiplication =[1,2,3,4,5,6,7,8,9,10,11,12]
// function multiplication(num){
//   var num = new num
//   var result = 0
//   for(var i = 1; i < 12; i++){
//     result = num * i
//     console.log(result)
//   }
 
// }


</script>
 
<template>
<!-- <input type="number" v-model="num">
<botton @click="multiplication">multiplication</botton>
{{ valueofmulti }} -->

<input type="number" />
<button @click="multiplication">multiplication</button> {{ valueofmulti }}
<div>
  <ul>
    <li></li>
  </ul>
</div>



</template>
 
<style>

</style>