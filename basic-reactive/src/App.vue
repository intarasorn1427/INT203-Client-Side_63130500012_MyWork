<script setup>
import { computed, ref } from 'vue';

//เเสดงitem 2อัน 
//เเต่ละitemจะเเสดง count เเละ price โดยที่ price จะเพิ่มตามจำนวนสินค้า (item1 250 item2 200)
//มีปุ้มเพิ่มสินค้า
//มีปุ่มลบลบสินค้า
// เเสดงราคาสินค้าทั้งหมดในตะกร้า (จากการคำนวน)


const countOfitem1 = ref(0);
const countOfitem2 = ref(0);


 //one param ไม่ต้องใส่ ปีกกา ต่อจาก =>

// ปุ่มเพิ่มจำนวนItem1เเละ2
const addCountItem1 = ()=> countOfitem1.value = countOfitem1.value + 1  
const addCountItem2 = ()=> countOfitem2.value = countOfitem2.value + 1 

// ปุ่มลบจำนวนItem1
// const delectCountItem1 = () => countOfitem1.value = countOfitem1.value - 1
const delectCountItem1 = () => {
    if(countOfitem1.value > 0){
        return countOfitem1.value -= 1
    }else{
        return countOfitem1.value = 0
    }
}
// ปุ่มลบจำนวนItem2
// const delectCountItem2 = () => countOfitem2.value = countOfitem2.value - 1
const delectCountItem2 = () => {
    if(countOfitem2.value > 0){
        return countOfitem2.value -= 1
    }else{
        return countOfitem2.value = 0
    }
}


//เเสดงราคาสินค้ารวมของเเต่ละitem อัตโนมัติ
// const totalprices1 = ()=> priceItem1.value = countOfitem1.value * (priceItem1.value * 250)
// const totalprices1 = computed(() => priceItem1.value = countOfitem1.value * (priceItem1.value * 250))
const totalPrices1 = computed(() => countOfitem1.value * 250)
const totalPrices2 = computed(() => countOfitem2.value * 200)

//เเสดงราคาitemรวม อัตโนมัติ
// const totalprices2 = ()=> priceItem2.value = countOfitem2.value * (priceItem2.value * 200)
// const totalAll = computed(() => (countOfitem1.value * totalPrices1.value) + (countOfitem2.value * totalPrices2.value))
const totalAll = computed(() => totalPrices1.value + totalPrices2.value)


</script>
 
<template>

<div>
<div>
    <h2>Item 1</h2>
    <p >Count : {{ countOfitem1 }}</p>
    <p>Price : {{ totalPrices1 }}</p>
    <button class="btn btn-success" @click="addCountItem1(); totalPrices1();">Add count of Item</button> <!-- ทำ 2 function -->
    <button class="btn btn-danger" @click="delectCountItem1(); totalPrices1();">Delect count of Item</button>
</div>
<p>------------------------------------</p>
<div>
    <h2>Item 2</h2>
    <p>Count : {{ countOfitem2 }}</p>
    <p>Price : {{ totalPrices2 }}</p>
    <button class="btn btn-success" @click="addCountItem2(); totalPrices2();" >Add count of Item</button>
    <button class="btn btn-danger" @click="delectCountItem2(); totalPrices2();">Delect count of Item</button>
</div>  
<br>
   <h3>Total : {{ totalAll }}</h3>

</div>


</template>
 
<style>

</style>