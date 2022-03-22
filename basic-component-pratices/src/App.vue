<script setup>
import { ref } from "vue";
import ListItem from "./components/ListItem.vue";
const students=[
  { id: '101' , name : 'Num'},
  { id: '102' , name : 'Nim'},
  { id: '103' , name : 'Jen'},
  { id: '104' , name : 'V'},
]

const currentStatus =ref( 'NONE' )
const chageStatus = (updateStatus) => (currentStatus.value = updateStatus)

</script>
 
<template>
<div>
  <ListItem  :items="students" @confirm="chageStatus"/>
  Current Status : {{ currentStatus }}
</div>

</template>
 
<style>

</style>