<script setup>
const invaildMessage = 'red';
const italicText = 'italic';

</script>
 
<template>
<input type="text"/>
<p :style="{color: invaildMessage, 'font-style':italicText}">Chayada</p>

</template>
 
<style>

</style>