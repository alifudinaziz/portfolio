<template>
  <div>
    <AppHeader />
    <p class="ff-source-code-pro font-bold">Homepage</p>
    <p class="ff-poppins">{{ formatNumber(1234) }}</p>
    <NuxtPicture format="webp" src="/vue.png" alt="Vue Logo" />
    <Icon name="uil:github" />
    <nuxt-link to="/projects">Project</nuxt-link>
  </div>
</template>

<script setup>
import AppHeader from '~/components/common/AppHeader.vue';
</script>