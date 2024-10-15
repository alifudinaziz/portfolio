<template>
  <div>
    <p>Project</p>
    <ol>
      <li v-for="index in 4" :key="index">
        <nuxt-link :to="`/projects/${index}`">Project {{ index }}</nuxt-link>
      </li>
    </ol>
  </div>
</template>