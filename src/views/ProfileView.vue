<template>
    <div class="flex flex-col gap-2 p-10 rounded-2xl shadow-2xl shadow-blue-600 hover:shadow-blue-700 bg-white bg-opacity-90  h-full transition-all">
        <div class="row">
            <font-awesome-icon icon="fa-solid fa-font" class="icon"></font-awesome-icon>
            <input v-model="first_name" class="input" placeholder="First Name" />
        </div>
        <div class="row">
            <font-awesome-icon icon="fa-solid fa-signature" class="icon"></font-awesome-icon>
            <input v-model="last_name" class="input" placeholder="Last Name" />
        </div>
        <div class="row">
            <font-awesome-icon icon="fa-solid fa-phone" class="icon"></font-awesome-icon>
            <input v-model="phone" class="input" placeholder="Phone Number"/>
        </div>
        <div class="row">
            <font-awesome-icon icon="fa-solid fa-at" class="icon"></font-awesome-icon>
            <input v-model="email" class="input" placeholder="Email"/>
        </div>
        <div class="row">
            <DatePicker id="Birthday" v-model:value="birthdate" placeholder="Birthday" :custom-class="'bg-gray-200 px-2 w-32 h-10 '" />

        </div>
        <div class="row">
            <font-awesome-icon icon="fa-solid fa-map-location-dot" class="icon"></font-awesome-icon>
            <input v-model="address" class="input" placeholder="Address"/>
        </div>

        <div class="flex  py-1">
            <button class="button_submit" @click="submit()">
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
import axios from 'axios';
axios.defaults.baseURL = 'https://bookingmastermind.pythonanywhere.com'; 

export default {
        components:{
        DatePicker,
    },
    data: () => ({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '', 
        birthdate: ''
    }),
    mounted() {
        this.refresh_token();
        this.token=this.$cookies.get('token');

        axios.get('/users/', {
                },{
                headers: {
                 'Authorization': 'Bearer ' +this.token,
                 }
                },
                )
                .then((response) => {
                  console.log(response)
                })
                .catch((err) => {
                  console.log(err)
                });
    },
    methods:{
       submit(){
        this.token=this.$cookies.get('token');
        if(this.token==null){
            this.refresh_token()
            this.token=this.$cookies.get('token');
            //this.$router.push('/login');
        }
        axios.put('/edit-profile/'+this.phone+'/', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone,
            address: this.address, 
            birthdate: this.birthdate
                },{
                headers: {
                 Authorization: 'Bearer ' +this.token,
                 }
                },
                )
                .then((response) => {
                  this.success('successful');
                })
                .catch((err) => {
                  this.error('error');
                });
       },
       refresh_token(){
        axios.post('/token/refresh/', {
            refresh: this.$cookies.get('refresh'),
                },
                )
                .then((response) => {
                    this.$cookies.set('token', response.data.access, { expires: '5m' });
                })
                .catch((err) => {
                  console.log(err)
                });
       }
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
