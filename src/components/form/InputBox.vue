<template>
    <div class="md:w-40">
      <Combobox v-model="selected" >
        <div class="relative mt-1">
          <div
            class="relative w-full cursor-default overflow-hidden rounded-lg bg-white shadow-md focus:outline-none sm:text-sm"
          >
            <ComboboxInput
              class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none"
              @change="query = $event.target.value;  $emit('update:value', query) "
              :display-value="(person) => person.name" :placeholder="placeholder"
            />
            <ComboboxButton
              class="absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronUpDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </ComboboxButton>
          </div>
          <TransitionRoot
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            @after-leave="query = ''"
          >
            <ComboboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <div
                v-if="filteredList.length === 0 && query !== ''"
                class="relative cursor-default select-none py-2 px-4 text-gray-700"
              >
                Nothing found.
              </div>
  
              <ComboboxOption
                v-for="person in filteredList"
                as="template"
                :key="person.id"
                :value="person"
                v-slot="{ selected, active }"
              >
                <li
                  class="relative cursor-default select-none py-2 pl-10 pr-4"
                  :class="{
                    'bg-teal-600 text-white': active,
                    'text-gray-900': !active,
                  }"
                >
                  <span
                    class="block truncate"
                    :class="{ 'font-medium': selected, 'font-normal': !selected }"
                  >
                    {{ person.name }}
                  </span>
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                    :class="{ 'text-white': active, 'text-teal-600': !active }"
                  >
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ComboboxOption>
            </ComboboxOptions>
          </TransitionRoot>
        </div>
      </Combobox>
    </div>
  </template>
  
  <script setup>

  import { ref, computed ,watch,getCurrentInstance} from 'vue'
  import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
  } from '@headlessui/vue'
  import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

  const props= defineProps({
    value: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    list: {
      type: Array,
      required: true
    }
  })
  

  /* const list = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
  ] */
  
  const list = props.list
  
  //let selected = ref(list[0])
  let selected = ref(undefined)
  let query = ref('')

  /*update value in parent */
  const vm = getCurrentInstance()
  watch(selected,(newVal, oldVal) => vm.emit('update:value', newVal.name))

  let filteredList = computed(() =>
    query.value === ''
      ? list
      : list.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
  )

  
  </script>
  