<template>
  <div>
    <AppHeader />
    <p class="ff-source-code-pro font-bold">Homepage</p>
    <p class="ff-poppins">{{ formatNumber(1234) }}</p>
    <NuxtImg height="40" width="40" quality="80" densities="x1 x2" format="webp" src="/vue.png" alt="Vue Logo" />
    <img src="~/assets/images/vue.png" alt="Vue" />
    <Icon name="uil:github" />
    <nuxt-link to="/projects">Project</nuxt-link>
  </div>
</template>

<script setup>
import AppHeader from '~/components/common/AppHeader.vue';
</script>