<template>
        <div
          class="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden w-30"
        >
            <font-awesome-icon icon="fa-solid fa-users" class="h-10 w-5 flex bg-white justify-center items-center px-2 bg-accent-100 hover:bg-accent-200 text-accent-700 border-r border-gray-300 dark:bg-gray-700 dark:text-accent-300 dark:border-gray-600 dark:hover:bg-gray-600" />

            <button type="button" @click="n=Math.max(1,n-1)"
                class="flex bg-white justify-center items-center px-1 bg-accent-100 hover:bg-accent-200 text-accent-700 dark:bg-gray-700 dark:text-accent-300 dark:border-gray-600 dark:hover:bg-gray-600"
                >
                <font-awesome-icon icon="fa-solid fa-minus"/>
            </button>
            
            <input id="input" class="flex-grow py-1 text-center bg-white dark:bg-gray-700 w-10"
                :placeholder="placeholder" :value="n==0?'':value"
                disabled/>

            <button type="button" @click="n++"
            class="flex bg-white justify-center items-center px-1 bg-accent-100 hover:bg-accent-200 text-accent-700  dark:bg-gray-700 dark:text-accent-300 dark:border-gray-600 dark:hover:bg-gray-600"
            >
            <font-awesome-icon icon="fa-solid fa-plus" />
          </button>
          
        </div>
  </template>
  
  <script setup>
  import { ref,watch,getCurrentInstance } from 'vue';

  const isClicked=ref(false);
  const n=ref(1);
  const props= defineProps({
      value: {
        type: Number,
        required: true
      },
      placeholder: {
        type: String,
        required: false
      },
      optional: {
        type: Boolean,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
    })
  
  /*update value in parent */
  const vm = getCurrentInstance()
  watch(n,(newVal, oldVal) => vm.emit('update:value', newVal))
  </script>
  