<template>
<div class="flex flex-col justify-center opacity-90">
	<div class="flex group [perspective:1000px]">
		<div
			class="relative flex flex-col md:flex-row  space-y-3 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
			<div class="w-full md:w-1/3 bg-white grid place-items-center">
				<img src="@/assets/EP.png" alt="airline logo" class="rounded-xl" />
		</div>
				<div class="w-full bg-white flex flex-col space-y-2 p-3">
					<div class="flex gap-2 item-center">
						<div v-for="item in labels" class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
							{{item}}</div>
							<!-- <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
							Economy</div>
						<div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
							737</div> -->
					</div>
					<h3 class="font-black text-gray-700 md:text-xl text-lg">Test Airline</h3>
					<div class="flex md:flex-row flex-col">
						<p class="font-black md:text-xl text-gray-800 md:pr-1">5:30</p>
						<p class="md:text-lg text-gray-600 ">Mashhad</p>
						<div class="flex text-gray-500">
							<font-awesome-icon v-if="type=='flight'" icon="fa-solid fa-plane" class="pt-2 pl-2 pr-0.5" />
							<font-awesome-icon v-if="type=='train'" icon="fa-solid fa-train-subway" class="pt-2 pl-2 pr-0.5" />
							<p>........................</p>
							<font-awesome-icon icon="fa-solid fa-genderless" class="pt-2 pr-1" />
						</div>
						<p class="font-black md:text-xl text-gray-800 space-x-3 md:pr-1 ">7:30</p>
						<p class="md:text-lg text-gray-600 ">Tehran</p>
					</div>
					<div class="flex md:flex-row flex-col md:gap-44">
					<p class="text-xl font-black text-blue-900">
						price:
					</p>
					<p class="text-xl font-black text-blue-900">
						$110
					</p>
			</div>

				</div>
			
				<div class="absolute rounded-xl inset-0 h-full w-full  bg-white  text-center  [transform:rotateY(180deg)] [backface-visibility:hidden]">
			<div class="flex min-h-full flex-col items-center justify-center">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
				<button  class="bg-green-500 text-white active:bg-green-700 hover:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				@click="vm.emit('update:selected', id)"
				>
				select
			</button>  
			</div>
		</div>
			</div>
		
	</div>
</div>
</template>
<script setup>
import { ref,watch,getCurrentInstance } from 'vue'
const props= defineProps({
    id: {
      type: Number,
      required: true
    },
	labels: {
      type: Array
    },
    selected: {
      type: Number,
      required: true
    },
	type: {
      type: String,
      required: true
    },
})
const select=ref(-1);
/*update value in parent */
const vm = getCurrentInstance()
// watch(select,(newVal, oldVal) => vm.emit('update:selected', newVal))
</script>

<script>
export default {
    components:{
},
    data: () => ({
    }),
    methods:{
        
    }
}

</script>