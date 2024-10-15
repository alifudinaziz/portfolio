<template>
  <div>
    <AppHeader />
    <p class="title">Homepage</p>
    <p>{{ formatNumber(1234) }}</p>
    <nuxt-link to="/projects">Project</nuxt-link>
  </div>
</template>

<script setup>
import AppHeader from '~/components/common/AppHeader.vue';
</script>