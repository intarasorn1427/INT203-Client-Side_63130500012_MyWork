<script setup>
//นำเลข1-9มาใส่ช่องได้ผลบวก15ทุกแนว
//https://www.youtube.com/watch?v=wn7OLfD28io


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
      <div>
        <input class="input-item" />
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
