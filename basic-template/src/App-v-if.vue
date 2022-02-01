<script setup>
const score = 70 ;
const absent = 5 ;
// >=85 Very Good
// >=75 Good
// >=65 Fair but if absent <=2 is Good ทำไม่ได้
// <65 Need Improvement
</script>
 

<template>
    <h1>Your score: {{ score }}</h1>
    <p v-if="score>=85">Very good</p>
    <p v-else-if="score>=75">good</p>
    <p v-else-if="score>=65">Fair<span v-if="absent<=2">Good</span></p>
    <p v-else>Need Improvement</p>

</template>
 
<style>

</style>