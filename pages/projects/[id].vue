<template>
  <div>
    <p>Detail Project {{ id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params

if (isNaN(Number(id))) {
  // error handling data
  throw createError({ statusCode: 404, statusMessage: "Berita not found", fatal: true })
}
</script>