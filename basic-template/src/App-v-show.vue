<script setup>
const isPresent = true;

const msg = '';
</script>
 
<template>
    <div>
        <p v-show="isPresent">Chayada</p>
        <p v-show="!isPresent">Sarinya</p>

    </div>

    <p>Your Message : {{ msg }}</p>
    <!-- ได้ทั้งสองตัว -->
    <p v-show="msg.length==0" style="color:red">Please insert your data!!</p>
    <p v-show="!msg" style="color:red">Please insert your data!!</p>

</template>
 

<style>

</style>