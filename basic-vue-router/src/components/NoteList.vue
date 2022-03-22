<script setup>
import{ ref } from 'vue' 


const notes = ref([
    {
        noteId:1 ,
        noteDetail: " watch TV "
    },
        {
        noteId:2 ,
        noteDetail: " Bye "
    },    {
        noteId:3 ,
        noteDetail: " run "
    }
])
</script>
 
<template>
<div>
    <ul>
         <li v-for="(note, index) in notes" :key="index">
        <router-link :to="{ name: 'NoteItem', params: { noteId: note.noteId } }"> Note Id: {{ note.noteId }} </router-link>,
         Note Detail: {{ note.noteDetail }}
      </li>
    </ul>
</div>

</template>
 
<style>

</style>