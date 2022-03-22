<script setup>

</script>
 
<template>
<div>
  <router-link :to="{ name: 'About' }">About Us</router-link> <br/>
  <router-link :to="{ name: 'Home'}">Home</router-link>
</div>
<div>
  <router-view> </router-view>
</div>


</template>
 
<style>
a {
  color:red;
}
router-link-active {
  color:green
}

</style>