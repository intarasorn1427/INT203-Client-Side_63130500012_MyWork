<script setup>
const isItalic = true;
const greenText = 'color:green';
const italicText = 'font-style:italic'

</script>
 
<template>
<!-- 2 propoty style -->
<!-- color greenเเน่ๆ เพราะเราตั้งเอาไว้ color:green เเต่มาเช็ค isItalic เป็น trueไหม ซึ่งเราตั้งไว้ว่าtrue ดังนั้น italicทำงาน -->
<p :style="[greenText,isItalic ? italicText : '' ]">
19 เม.ย. 2559 — BTS (방탄소년단) is a South Korean boy 
group that consists of 7 members: RM, Jin, Suga, J-Hope, Jimin, V 
and Jungkook. They are under Big Hit ...
</p>

</template>
 
<style>

</style>