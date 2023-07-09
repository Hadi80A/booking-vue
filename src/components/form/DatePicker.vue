<template>
  <VDatePicker v-model.string="date" :popover="false" :enable-time-picker="false" :masks="masks">
    <template #default="{ togglePopover, inputValue, inputEvents }">
      <div 
        class="flex rounded-lg overflow-hidden"
        :class="customClass, shadow"

      >
      <button type="button"  v-if="!optional" @click="isClicked=true; togglePopover()"
          class="flex  justify-center items-center px-2 bg-accent-100 hover:bg-accent-200 text-accent-700  border-gray-300 dark:bg-gray-700 dark:text-accent-300 dark:border-gray-600 dark:hover:bg-gray-600"
          :class="{customClass:true,'border-r':customClass==='bg-white'}">
          <font-awesome-icon icon="fa-regular fa-calendar" class="w-5 h-5" />
        </button>
        <button type="button"  v-if="optional"
          class="flex bg-gray-200 justify-center items-center px-2 bg-accent-100 hover:bg-accent-200 text-accent-700 border-r border-gray-300 dark:bg-gray-700 dark:text-accent-300 dark:border-gray-600 dark:hover:bg-gray-600"
          >
          <font-awesome-icon v-if="disabled && !isClicked" @click="disabled=false" icon="fa-regular fa-calendar-plus" class="w-5 h-5" />
          <font-awesome-icon v-if="!disabled || isClicked" @click="disabled=true;isClicked=false" icon="fa-regular fa-calendar-minus" class="w-5 h-5" />
        </button>
        <input :class="customClass"
          class="flex-grow px-1 py-1 w-28  disabled:bg-gray-200 focus:outline-none"
          :placeholder="placeholder"
          :value="isClicked? inputValue:''"
          @click="isClicked=true; togglePopover()"
          :disabled="disabled && !isClicked"
        />
      </div>
    </template>
  </VDatePicker>
</template>

<script setup>
import { ref,watch,getCurrentInstance } from 'vue';

const date = ref(new Date());
const isClicked=ref(false);
const props= defineProps({
    value: {
      // type: Date,
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
    customClass: {
      type: String,
      default: 'bg-white'
    },
    shadow: {
      type: String,
      default: ''
    },
  })
  const masks = ref({
  modelValue: 'YYYY-MM-DD',
});
/*update value in parent */
const vm = getCurrentInstance()
watch(date,(newVal, oldVal) => {vm.emit('update:value', newVal)})
</script>
