<script>
import InputBox from "../form/InputBox.vue";
import DatePicker from "../form/DatePicker.vue"
import { ref } from "vue";
import NumberInput from "../form/NumberInput.vue";

export default {
    components:{
        InputBox,
        DatePicker,
        NumberInput
    },
    data: () => ({
        src: '',
        dest: '',
        date1: ref(new Date()),
        date2: ref(new Date()),
        count: 1,
        cities : [
                    { id: 1, name: 'Mashhad' },
                    { id: 2, name: 'Tehran' },
                    { id: 3, name: 'Isfahan' },
                    { id: 4, name: 'Shiraz' },
                    { id: 5, name: 'Tabriz'},
                    { id: 6, name: 'Rasht' },
                ],
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
            <InputBox id="src" v-model:value="src" v-model:list="cities" placeholder="City"/>
            <DatePicker id="in-date" v-model:value="date1" placeholder="Check-in Date" />
            <DatePicker id="out-date" v-model:value="date2" placeholder="Check-out Date"/>
            <NumberInput v-model:value="count" placeholder="count"></NumberInput>

            <RouterLink :to="{path: '/search',
                query: {
                't':'hotel',
                'from':src,
                'dDate':date1,
                'rDate':date2,
                'passengers':count
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