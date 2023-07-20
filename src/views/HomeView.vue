<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SearchTabs from '../components/SearchTabs.vue'

</script>

<template>
   <RouterLink v-if="this.$cookies.get('token')==undefined" to="/login" class="fixed top-10 right-10 bg-amber-500 text-white active:bg-amber-700 hover:bg-amber-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-500">
    <font-awesome-icon icon="fa-solid fa-user" class="input-icon"/> Login/Register
  </RouterLink>
  <RouterLink v-if="this.$cookies.get('token')!=undefined" to="/profile" class="fixed top-10 right-10 bg-amber-500 text-white active:bg-amber-700 hover:bg-amber-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-500">
    <font-awesome-icon icon="fa-solid fa-user" class="input-icon"/>
  profile
  </RouterLink>
  <main>
    <SearchTabs />
    <RouterView name="search" />
  </main>
</template>