<script setup>
import { ref,watch,getCurrentInstance } from 'vue'
const props= defineProps({
    selected: {
      type: Number,
      required: true
    },
    count: {
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
import { createToast } from 'mosha-vue-toastify'; 
export default {
    components:{
    DatePicker,
},
    data: () => ({
       
        id: ref([]),
        firstName: ref([]),
        lastName: ref([]),
        gender: ref([]),
        date: ref([]),
    }),
    methods:{
        removeDiv(n) {
           const div= document.getElementById('form-'+n);
           div.remove();
           delete this.date[n];
           delete this.id[n];
           delete this.lastName[n];
           delete this.firstName[n];
           delete this.gender[n];
        },
        error(msg){
            createToast(msg,{position:'bottom-right',type:'danger',showIcon:true,timeout:10000})
          },
        submit(){
            this.check();
            console.log(this.date)
        },
        check(){
            for (var i = 0; i < this.count; i++) {
                
                if(this.date[i]===new Date()){
                    this.error('oaskpoksdmo')
                }
            }
        },
        add(){
            count++;
            this.date.push(new Date());
            this.id.push('');
            this.firstName.push('');
            this.lastName.push('');
            this.gender.push('');
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
            <div :id="'form-'+i" v-for="i in count" class="flex flex-wrap md:gap-7" >
                <input :id="'first-name-'+i" v-model="firstName[i]" placeholder="First Name" class="px-2 w-28 h-8 bg-gray-200 rounded-lg shadow-md"/>
                <input :id="'last-name-'+i" v-model="lastName[i]" placeholder="Last Name" class="px-2 w-28 h-8 bg-gray-200 rounded-lg shadow-md"/>
                <input :id="'national-code-'+i" v-model="id[i]" type="number" placeholder="National Code" class="px-2 no-spinner w-32 h-8 bg-gray-200 rounded-lg shadow-md"/>
                <select :id="'gender-'+i" v-model="gender[i]" class="w-20 h-8 bg-gray-200 rounded-lg shadow-md">
                    <option name="man">Man</option>
                    <option name="woman">Woman</option>
                </select>
                <DatePicker :id="'Birthday-'+i" v-model:value="date[i]" placeholder="Birthday" :custom-class="'bg-gray-200'" :shadow="'shadow-md'" />
                <button class="bg-red-500 text-white active:bg-red-700 hover:bg-red-600 font-bold uppercase text-xs px-2 rounded shadow-md hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" v-if="i!=1" @click="removeDiv(i)">
                    <font-awesome-icon icon="fa-solid fa-user-minus"/>
                </button>
                
            </div>
            <div class="flex w-full">
                <button @click="add()" class="bg-green-500 text-white active:bg-green-700 hover:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow-lg hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    <font-awesome-icon icon="fa-solid fa-user-plus" /> Add
                </button>
                <button @click="submit()" class="bg-blue-500 text-white active:bg-blue-700 hover:bg-blue-600 font-bold uppercase text-xs px-4 rounded shadow-lg hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >
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