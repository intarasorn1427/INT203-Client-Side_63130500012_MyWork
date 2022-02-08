<script setup>
console.clear()
import { ref } from 'vue'
const suggestion = ref('')
const favorColor = ref('')
const redColor = false
const agree = ref(false)
const jobs = ref([])
const food = ref('')
const activities = ref([])
</script>

<template>
  <div>
    <div>
      <h1>Suggestion</h1>
      <textarea
        v-model="suggestion"
        cols="30"
        rows="10"
        placeholder="type your suggestion here"
      ></textarea>
      <p>{{ suggestion }}</p>
    </div>

   <div>
       <h1>Radio</h1>
      <input type="radio" value="RED" v-model="favorColor"  />
      <label>Red</label>
      <input type="radio" value="GREEN" v-model="favorColor" />
      <label>Green</label>
      <p>{{ favorColor }}</p>
    </div>

      <div>
        <h1>Checkbox</h1>
      <input type="checkbox" v-model="agree" />
      <label>I agree</label>
      <p>{{ agree }}</p>
    </div>

    <div>
        <h1>Checkbox</h1>
        <h4>multiple</h4>
      <input type="checkbox" value="FRONTEND" v-model="jobs" />
      <label>frontend</label>
      <input type="checkbox" value="BACKEND" v-model="jobs" />
      <label>backend</label>
      <input type="checkbox" value="DEVOPS" v-model="jobs" />
      <label>devops</label>
      <p>{{ jobs }}</p>
    </div>

    <div>
        <h1>Select</h1>
      <select v-model="food">
        <option value="PIZZA">Pizza</option>
        <option value="SOUP">Soup</option>
        <option value="PASTA">Pasta</option>
      </select>
      <p>{{ food }}</p>
    </div>

    <div>
        <h1>Select</h1>
        <h4>multiple value</h4>
      <select v-model="activities" multiple>
        <option value="SLEEP">Sleep</option>
        <option value="READING BOOK">Reading Book</option>
        <option value="WATCH MOVIES">Watch Movies</option>
      </select>
      <p>{{ activities }}</p>
    </div>
  </div> 
</template>

<style></style>