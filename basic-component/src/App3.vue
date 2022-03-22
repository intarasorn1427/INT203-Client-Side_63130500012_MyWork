<script setup>
import { ref } from 'vue'
import BaseBotton3 from './components/BaseBotton3.vue'
const bText = ref('Hello')
const bColor = ref('#000000')
</script>

<template>
  <div>
    <div>Your Text: {{ bText }}<input type="text" v-model="bText" /></div>

    <div>Your Color: {{ bColor }} <input type="color" v-model="bColor" /></div>
    <BaseBotton3 :yourText="bText" :yourColor="bColor" />
  </div>
</template>

<style></style>