import { defineStore } from "pinia";
import { acceptHMRUpdate } from "pinia";

import { ref , computed } from "vue";

export const useCounter = defineStore('couter', ()=>{
    const count=ref(1)       //data(state)
    const addCounter = ()=> (count.value +=1)  //func(action)
    const removeCounter = ()=> (count.value -=1)  //func(action)
    const doubleCouter = computed(()=> count.value*2)  //view
    return { count , addCounter, removeCounter , doubleCouter }  //return เป็น obj(เพื่อเอาไปใช้ได้เมื่อเรียกใช้ func)  ******สำคัญมากก!!!!
})
if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useCounter,import.meta.hot))
}
