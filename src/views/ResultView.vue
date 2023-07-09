<script setup>
import SearchItem from "../components/cards/SearchItem.vue";
import Flight from "../components/search/Flight.vue";
import Train from "../components/search/Train.vue";
import Hotel from "../components/search/Hotel.vue";
import TicketForm from "../components/TicketForm.vue";

</script>

<script>
import { ref} from 'vue'
import axios from 'axios';
import { createToast } from 'mosha-vue-toastify'; 
axios.defaults.baseURL = 'https://bookingmastermind.pythonanywhere.com'
export default {
    components:{
    },
    data: () => ({
      count: ref(2),
      selected: ref(-1),
      type:ref(''),
      labels:['System','Economy','737'],
      data:ref([])
        
    }),
    mounted() {
      this.type=this.$route.query.t;
      this.from=this.capitalizeFirstLetter(this.$route.query.from);
      this.to=this.capitalizeFirstLetter(this.$route.query.to);
      this.dDate=this.$route.query.dDate;
      this.passengers=this.$route.query.passengers;
      this.rDate=this.$route.query.rDate;
      console.log(this.rDate)
      let param,url;
      if(this.type==='hotel'){
        param={
          'city':this.from,
          'capacity__gt': this.passengers
        };
        url= '/hotels/';
    }else{
      param={
          'departure_city':this.from,
          'arrival_city':this.to,
          'departure_date': this.dDate,
          'capacity__gt': this.passengers
        };
        if(this.type==='flight')
          url= '/plane-tickets/';
        else
        url= '/train-tickets/';

        if(this.rDate!=undefined && this.rDate!==''){
          param['arrival_date']= this.rDate;
    }
    }
    
      axios.get(url,{
        params: param
      })
              .then((response) => {
                  console.log(response);
                  this.data = response.data;
                  console.log(this.data)

                  
              })
              .catch((err) => {
                  this.error('not found');
              });
    },

    methods:{
      error(msg){
            createToast(msg,{position:'bottom-right',type:'danger',showIcon:true,timeout:10000})
          },
      capitalizeFirstLetter(str) {
        if(str!==undefined)
          return str.charAt(0).toUpperCase() + str.slice(1);
        },
    }
}

</script>

<template>
  <div class="flex flex-col gap-5">
    <Flight v-if="type=='flight'"></Flight>
    <Train v-if="type=='train'"></Train>
    <Hotel v-if="type=='hotel'"></Hotel>
    <!-- <SearchItem v-for="i in count " :id="i" :type="type" :labels="labels" v-model:selected="selected"></SearchItem> -->
    <SearchItem v-for=" item in data" :data="item" :id="item.id" :type="type" :labels="labels" v-model:selected="selected"></SearchItem>
    
</div>
<TicketForm v-if="selected > -1" :count="count" class="absolute top-0" v-model:selected="selected"></TicketForm>

</template>