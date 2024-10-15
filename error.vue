<script setup>
defineProps(['error'])

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <p>{{ error.message }}</p>
    <button @click="handleError">Back to Home</button>
  </div>
</template>
