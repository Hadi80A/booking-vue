<template>
    <div class="flex flex-col gap-2 p-10 rounded-2xl shadow-2xl shadow-blue-600 hover:shadow-blue-700 bg-white bg-opacity-90  h-full transition-all">
        <div class="row">
            <font-awesome-icon icon="fa-solid fa-font" class="icon"></font-awesome-icon>
            <!-- <font-awesome-icon icon="fa-regular fa-address-card" flip="horizontal" class="icon"></font-awesome-icon> -->
            <input class="input" placeholder="First Name" />
        </div>
        <div class="row">
            <font-awesome-icon icon="fa-solid fa-signature" class="icon"></font-awesome-icon>
            <!-- <font-awesome-icon icon="fa-regular fa-address-card" class="icon"></font-awesome-icon> -->
            <input class="input" placeholder="Last Name" />
        </div>
        <div class="row">
            <font-awesome-icon icon="fa-solid fa-phone" class="icon"></font-awesome-icon>
            <input class="input" placeholder="Phone Number" type="number" value=""/>
        </div>
        <div class="row">
            <font-awesome-icon icon="fa-solid fa-at" class="icon"></font-awesome-icon>
            <input class="input" placeholder="Email"/>
        </div>
        <div class="row">
            <DatePicker id="Birthday" v-model:value="date" placeholder="Birthday" :custom-class="'bg-gray-200 px-2 w-32 h-10 '" />

        </div>
        <div class="row">
            <font-awesome-icon icon="fa-solid fa-map-location-dot" class="icon"></font-awesome-icon>
            <input class="input" placeholder="Address"/>
        </div>

        <div class="flex  py-1">
            <button class="button_submit" @click="">
                <font-awesome-icon icon="fa-regular fa-paper-plane" /> Submit
            </button>
            <button class="button_cancel" @click="this.$router.go(-1)">
                <font-awesome-icon icon="fa-solid fa-xmark" /> Cancel
            </button>
        </div>
        
        
    </div>

</template>

<script>
import DatePicker from "../components/form/DatePicker.vue";
export default {
        components:{
        DatePicker,
    },
    data: () => ({
        date: new Date(),
    }),
    methods:{
       
    }
}
</script>

<style scoped>
.icon{
    @apply h-10 w-5 flex justify-center items-center px-3 rounded-full border bg-transparent
}
.row{
   @apply  flex gap-1 bg-gray-200 hover:text-blue-600 rounded-lg shadow-md hover:shadow-xl hover:ring-2 hover:ring-opacity-10 transition-all;

}
.input{
    @apply px-2 w-32 h-10 bg-inherit rounded-lg ;
    @apply focus:outline-none text-black hover:text-blue-900;
}
.input::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
     margin: 0; 
}

.button_submit{
    @apply bg-green-500 text-white active:bg-green-700 ;
    @apply hover:bg-green-600 hover:ring-2 hover:ring-green-800 ;
    @apply font-bold uppercase text-xs px-4 py-2 ;
    @apply rounded-lg shadow-md hover:shadow-xl outline-none focus:outline-none ;
    @apply mr-1 mb-1 ease-linear transition-all duration-150
}

.button_cancel{
    @apply bg-red-500 text-white active:bg-red-700 ;
    @apply hover:bg-red-600 hover:ring-2 hover:ring-red-800 ;
    @apply font-bold uppercase text-xs px-4 py-2 ;
    @apply rounded-lg shadow-md hover:shadow-xl outline-none focus:outline-none ;
    @apply mr-1 mb-1 ease-linear transition-all duration-150
}



</style>
