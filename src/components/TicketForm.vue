<script setup>
import { ref,watch,getCurrentInstance } from 'vue'
const props= defineProps({
    selected: {
      type: Number,
      required: true
    },
})
const select=ref(-2);
/*update value in parent */
const vm = getCurrentInstance()
</script>

<script>
import DatePicker from "./form/DatePicker.vue";
export default {
    components:{
    DatePicker,
},
    data: () => ({
       
        date: ref(new Date()),
        count: ref(3)
    }),
    methods:{
        removeDiv(n) {
           const div= document.getElementById('form-'+n);
           div.remove();
        }
    }
}

</script>

<template>
    <div class="flex flex-col gap-2 p-10 rounded-2xl shadow-2xl shadow-blue-600 bg-white bg-opacity-90  h-full">
    <button class="absolute -top-3 -right-3 text-4xl text-red-700 hover:text-red-600 transition-all" @click="vm.emit('update:selected', -1)">
        <font-awesome-icon icon="fa-solid fa-circle-xmark" class=" bg-white rounded-full"></font-awesome-icon>
    </button>
        
        <h1 class="text-2xl text-center pb-2">Travelers Info</h1>
        <div :id="'form-'+i" v-for="i in count" class="flex gap-10" >
            <input id="first-name" placeholder="First Name" class="px-2 w-28 h-8 bg-gray-200 rounded-lg shadow-md"/>
            <input id="last-name" placeholder="Last Name" class="px-2 w-28 h-8 bg-gray-200 rounded-lg shadow-md"/>
            <input id="national-code" type="number" placeholder="National Code" class="px-2 no-spinner w-32 h-8 bg-gray-200 rounded-lg shadow-md"/>
            <select class="w-20 h-8 bg-gray-200 rounded-lg shadow-md">
                <option name="man">Man</option>
                <option name="woman">Woman</option>
            </select>
            <DatePicker id="Birthday" v-model:value="date" placeholder="Birthday" :custom-class="'bg-gray-200'" :shadow="'shadow-md'" />
            <button class="bg-red-500 text-white active:bg-red-700 hover:bg-red-600 font-bold uppercase text-xs px-2 rounded shadow-md hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" v-if="i!=1" @click="removeDiv(i)">
                <font-awesome-icon icon="fa-solid fa-user-minus"/>
            </button>
            
        </div>
        <div class="flex  w-full">
            <button  class="bg-green-500 text-white active:bg-green-700 hover:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow-lg hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" @click="count++">
                <font-awesome-icon icon="fa-solid fa-user-plus" /> Add
            </button>
            <button class="bg-blue-500 text-white active:bg-blue-700 hover:bg-blue-600 font-bold uppercase text-xs px-4 rounded shadow-lg hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >
                submit
            </button>
        </div>
    </div>
</template>

<style scoped>
input[type=number].no-spinner::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
     margin: 0; 
}
</style>