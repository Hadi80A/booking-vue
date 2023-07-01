<script setup>
import { RouterLink} from 'vue-router';
import { TransitionRoot } from '@headlessui/vue'
</script>

<template>
  <div class="wrapper">
    <TransitionRoot
      appear
      show
      enter="transition-all  duration-500 ease-in-out"
      enter-from="scale-0 "
      enter-to="scale-100 "
    >
    <p class="title animate-bounce">Travel</p>
    </TransitionRoot>
    <TransitionRoot
      appear
      show
      enter="transition-all  duration-500 ease-in-out"
      enter-from="opacity-0 -top-5 "
      enter-to="opacity-100 top-0 "
      leave="transition-all duration-500"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
    <nav class="tabs">
        <div class="selector"></div>
        <RouterLink to="/hotel" @click="click($event)" :class="{ active: ($route.path === '/hotel' || $route.path === '/') }">
          <font-awesome-icon icon="fas fa-hotel" class="icon"/><!-- <span class="md:inline hidden"> -->Hotel<!-- </span> --></RouterLink>
        <RouterLink to="/flight-ticket" @click="click($event)" :class="{ active: $route.path === '/flight-ticket' }">
          <font-awesome-icon icon="fas fa-plane" class="icon"/><!-- <span class="md:inline hidden "> -->Flight<!-- </span> --></RouterLink>
        <RouterLink to="/train-ticket" @click="click($event)" :class="{ active: $route.path === '/train-ticket' }">
          <font-awesome-icon icon="fas fa-train" class="icon"/><!-- <span class="md:inline hidden "> -->Train<!-- </span> --></RouterLink>
    </nav>
  </TransitionRoot>
    </div>
</template>

<script>
export default{
  methods:{ 
    click(e){
        e.preventDefault();
        var tabs = document.querySelectorAll('.tabs a');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");

        }
        e.target.classList.add('active');
        var activeWidth = e.target.offsetWidth;
        var itemPos = e.target.offsetLeft;
        document.querySelector(".selector").style.left = itemPos + "px";
        document.querySelector(".selector").style.width = activeWidth + "px";
        if(itemPos == undefined){
          console.log("error")
        var x=document.querySelector('.tabs').getBoundingClientRect();
        const activeElement = document.querySelector('.active');
        const rect = activeElement.getBoundingClientRect();
        document.querySelector(".selector").style.left = (rect.left - x.left-20) + "px";
        }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

body{
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-family: 'Roboto', sans-serif;
}

h2{
  margin:0px;
  text-transform: uppercase;
}

h6{
  margin:0px;
  color:#777;
}

.wrapper{
  text-align:center;
  margin:50px auto;
}

.tabs{
  margin-top:50px;
  font-size:15px;
  padding:0px;
  list-style:none;
  background:#fff;
  box-shadow:0px 5px 20px rgba(0,0,0,0.1);
  display:inline-block;
  border-radius:50px;
  position:relative;
}

.tabs a{
  text-decoration:none;
  color: #777;
  text-transform:uppercase;
  padding:10px 20px;
  display:inline-block;
  position:relative;
  z-index:1;
  transition-duration:0.6s;
}

.tabs a.active{
  color:#fff;
}

.tabs a:hover{
  color:#2003a3;
}

.tabs .icon{
  margin-right:5px;
}

.tabs .selector{
  height:100%;
  display:inline-block;
  position:absolute;
  left: 0;
  width: 100px;
  top:0px;
  z-index:1;
  border-radius:50px;
  transition-duration:0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  background: #05abe0;
  background: -moz-linear-gradient(45deg, #05abe0 0%, #8200f4 100%);
  background: -webkit-linear-gradient(45deg, #05abe0 0%,#8200f4 100%);
  background: linear-gradient(45deg, #05abe0 0%,#8200f4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05abe0', endColorstr='#8200f4',GradientType=1 );
}

p {
  font-size: 8vw;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
}

.title {
  @supports (background-clip: text) or (-webkit-background-clip: text) {
    background-image: 
      url("data:image/svg+xml,%3Csvg width='2250' height='900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='%2300A080' d='M0 0h2255v899H0z'/%3E%3Ccircle cx='366' cy='207' r='366' fill='%2300FDCF'/%3E%3Ccircle cx='1777.5' cy='318.5' r='477.5' fill='%2300FDCF'/%3E%3Ccircle cx='1215' cy='737' r='366' fill='%23008060'/%3E%3C/g%3E%3C/svg%3E%0A");
    background-size: 110% auto;
    background-position: center;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-family: 'Work Sans', sans-serif;
  font-weight: 900;
  }
}

</style>


