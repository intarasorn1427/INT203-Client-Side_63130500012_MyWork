<script setup>
// v-text
const msg = 'Hello , Vue.js';
const counter = 1;
const test2 = 'Test again'; 
// v-bind
const headingStyle = 'color: blue';
const paraStyle = 'text-decoration:underline';
// img เมื่อยังไม่รู้ว่ารูปคืออะไร
const imagePath = '../public/images/WIN_20210208_09_35_55_Pro.jpg'; 
//v-html
const decoratext = '<i>Banana fish</i>';
</script>
 

<template>
<!-- v-text -->
<h1>{{ msg.toLowerCase() }}</h1>
<p>{{ (counter += 10) }}</p>
<p>{{ test2.toUpperCase() }}</p>

<!-- v-bind -->
<!-- <h1 style="color:brown">INT203 Web Client</h1> -->
<p :style="headingStyle">INT203 Web Client</p>
<p :style="paraStyle">Chayada Intarasorn</p>

<!-- image -->
<img src="./assets/logo.png"> 
<img :src="imagePath">

<!-- v-html -->
<!-- <p><i>Banan fish</i></p> -->
<p v-html="decoratext"></p>
</template>
 
<style>

</style>