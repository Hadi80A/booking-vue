<script>
import InputBox from "../form/InputBox.vue";
import DatePicker from "../form/DatePicker.vue";
import NumberInput from "../form/NumberInput.vue";
import { ref} from 'vue'
export default {
    components:{
    InputBox,
    DatePicker,
    NumberInput
},
    data: () => ({
        src: '',
        dest: '',
        date: ref(new Date()),
        travelers:1,
        cities : [
                    { id: 1, name: 'New York' },
                    { id: 2, name: 'London' },
                    { id: 3, name: 'Tokyo' },
                    { id: 4, name: 'Paris' },
                    { id: 5, name: 'Tabriz'},
                    { id: 6, name: 'Rasht' },
                ]
    }),
    methods:{
       
    }
}
</script>
<template>
    <TransitionRoot
    appear
    show
    enter="transition-all  duration-500 ease-in-out"
    enter-from="opacity-0 top-3 "
    enter-to="opacity-100 top-0 "
    leave="transition-all duration-500"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
        <form action="" class="flex md:flex-row flex-col w-15 flex-wrap gap-2">
            <InputBox id="src" v-model:value="src" v-model:list="cities" placeholder="From"/>
            <InputBox v-model:value="dest" v-model:list="cities" placeholder="To"/>
            <DatePicker id="departing-date" v-model:value="date" placeholder="Departing Date" />
            <DatePicker id="return-date" v-model:value="date" optional disabled placeholder="Return Date"/>
            <NumberInput v-model:value="travelers" placeholder="Travelers"></NumberInput>
            <RouterLink :to="{path: '/search',
                query: {
                't':'train',
                'from':src,
                'to':dest,
                'dDate':date1,
                'rDate':date2,
                }}" 
                class="bg-blue-500 text-white active:bg-blue-700 hover:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
               Search
        </RouterLink >            
        </form>
    </TransitionRoot>
</template>
<script setup>
  import { TransitionRoot } from '@headlessui/vue'
</script>