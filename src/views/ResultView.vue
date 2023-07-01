<script setup>
import SearchItem from "../components/cards/SearchItem.vue";
import Flight from "../components/search/Flight.vue";
import Train from "../components/search/Train.vue";
import Hotel from "../components/search/Hotel.vue";
import TicketForm from "../components/TicketForm.vue";
</script>

<script>
import { ref} from 'vue'
export default {
    components:{
    },
    data: () => ({
      count: ref(2),
      selected: ref(-1),
      type:ref(''),
      labels:['System','Economy','737']
        
    }),
    mounted() {
      this.type=this.$route.query.t;
    },

    methods:{
        
    }
}

</script>

<template>
  <div class="flex flex-col gap-5">
    <Flight v-if="type=='flight'"></Flight>
    <Train v-if="type=='train'"></Train>
    <Hotel v-if="type=='hotel'"></Hotel>
    <SearchItem v-for="i in count " :id="i" :type="type" :labels="labels" v-model:selected="selected"></SearchItem>
    
    <button type="button" @click="console.log(t)" >get query</button>
</div>
<TicketForm v-if="selected > -1" class="absolute top-0" v-model:selected="selected"></TicketForm>

</template>