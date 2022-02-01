<script setup>
const subjects =['INT203','INT202','INT205','INT206'];

const product = {
    productId : 111,
    productName : 'Computer',
    productPrice : 500000 

};

</script>
 
<template>
    <ul>
        <!-- <li v-for="subject in subjects" :key="subject">{{ subject }}</li> -->
       <li v-for="(subject, index) in subjects" :key="index">{{ subject }}</li>
    </ul>

    <ul>
        <!-- <li v-for="subject in subjects" :key="subject">{{ subject }}</li> -->
       <li v-for="(value,name,index) in product" :key="value.productId">
           index:{{ index }}-{{ name }}:{{ value }}</li>
    </ul>


</template>
 
<style>

</style>