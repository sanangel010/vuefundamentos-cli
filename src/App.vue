<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

 <!-- <CounterVue :start="101" /> -->
<IndecisioncVue />

</template>

<script>
import IndecisioncVue from './components/Indecisionc.vue'
//import CounterVue from './components/Counter.vue'


export default {
  name: 'App',
  components: {
    //CounterVue
    IndecisioncVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
