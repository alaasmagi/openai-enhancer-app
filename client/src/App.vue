<script setup lang="ts">
import InitialForm from './components/InitialForm.vue'
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <img src="./assets/add.png" class="logo" alt="Vue logo" />
    <a href="https://platform.openai.com/" target="_blank">
      <img src="https://platform.openai.com/favicon-platform.svg" class="logo openai" alt="OpenAI logo" />
    </a>
  </div>
  <InitialForm/>
</template>

<style scoped>
.logo {
  height: 4em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo.openai:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
