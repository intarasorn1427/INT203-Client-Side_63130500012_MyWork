<script setup>
defineEmits(['confirm']) //2.1 ประกาศ emit


defineProps({
    items: {
        type : [Array,Object],
        require: true
    }
})

</script>
 
<template>
<div>
    <ul>
        <li v-for="(item , index) in items" :key="index">
            {{ item }}
        
        </li>
    </ul>
</div>

<div>
    <button @click="$emit('confirm' , 'USER_CONFIRM')">Confirm</button>
</div>

</template>
 
<style>

</style>