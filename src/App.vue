<template>
  <div class="app">
    <!-- <header class="app__header"> -->
      <navbar />
    <!-- </header> -->
    <router-view
      class="app__content"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const Navbar = defineAsyncComponent(() => import('@/components/navbar/Navbar.vue'))
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
  }

  .container-1 {
    width: 60%;
    background-color: #0A2463;
  }
  
  .container-2 {
    width: 40%;
    background-color: #E54C38;
  }
</style>
