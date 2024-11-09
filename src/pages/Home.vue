<template>
  <div class="home">
    <HomeIntroduction />
    <HomeAbout />
    <HomeProjects />
    <HomeExperiences />
    <HomeContactMe />
    <Footer />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const HomeIntroduction = defineAsyncComponent(() => import('@/components/home/HomeIntroduction.vue'))
const HomeAbout = defineAsyncComponent(() => import('@/components/home/HomeAbout.vue'))
const HomeProjects = defineAsyncComponent(() => import('@/components/home/HomeProjects.vue'))
const HomeExperiences = defineAsyncComponent(() => import('@/components/home/HomeExperiences.vue'))
const HomeContactMe = defineAsyncComponent(() => import('@/components/home/HomeContactMe.vue'))
const Footer = defineAsyncComponent(() => import('@/components/footer/Footer.vue'))
</script>

<style lang="scss" scoped>
</style>