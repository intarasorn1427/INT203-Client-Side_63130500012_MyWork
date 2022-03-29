<script setup>
//นำเลข1-9มาใส่ช่องได้ผลบวก15ทุกแนว
//https://www.youtube.com/watch?v=wn7OLfD28io
import { ref } from 'vue';

const nums=ref([0,2,0,0,5,0,0,0,0,0,0,0,0,0,0])
const isNotBound =(index)=>index !=3 && index !=7 && index < 11 //funcปิดช่อง

const sumOfDimension=(index,dimemsion) =>{
  var sumValue = 0;
  if(dimemsion==="x"){
  for (var i = index-3; i < index; i++ ){
    sumValue = nums.value[i] + sumValue;
  }
  }else { (dimemsion==="y")
    for (var i = index-12; i < index; i += 4){
      sumValue += nums.value[i]
    }
  }
  sumValue = nums.value[i]
  return sumValue

};
</script>

<template>
  <div class="top-container">
    <h1>นำเลข 1-9 มาใส่ช่องได้ผลบวก ?? ทุกแนว</h1>
    <div class="action-button">
      <input type="text" />
      <button>Check</button>
      <button>Reset</button>
    </div>
    <div class="grid-container">
        <!-- show input -->
      <div v-for="(num , index) in nums" :key="index" >  <!--loop input-->
      {{ index }}
          <!-- ช่องที่สามารถใส่ค่าได้ -->
        <span v-if="isNotBound(index)"> 
          <input class="input-item" type="number" v-model="nums[index]"/> <!--ดึงขอมูลในArrayตามindex-->
        </span>
          <!-- ช่องที่ไม่สามารถเพิ่มค่าได้ -->
        <span v-else>
          <input type="number" disabled class="input-item" style="background-color: yellow" 
          :value="sumOfDimension(index, index > 11 ? 'x':'y')" /> <!--index=[3,7,11,12,13,14]-->
        </span>
      </div>
    </div>
    <div class="complete-message">
     <!-- show message -->
    </div>
  </div>
</template>

<style scoped>
.top-container {
  width: 430px;
}
.action-button {
  padding: 10px;
  display: flex;
  gap: 5px;
}
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 80px 80px 80px 80px;
  column-gap: 5px;
  row-gap: 5px;
  background-color: green;
  padding: 10px;
}
.complete-message {
  height: 40px;
  font-size: 30px;
  color: rgb(43, 20, 246);
}
.input-item {
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 70%;
}
</style>
