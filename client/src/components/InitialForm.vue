<script setup lang="ts">
import { ref } from 'vue'

const initialPrompt = ref('')
const improvementPrompt = ref('')
const iterations = ref(1)
const model = ref('gpt-3.5-turbo')
const result = ref('')
const loading = ref(false)

const enhancePrompt = async () => {
  loading.value = true
  const response = await fetch('http://localhost:3001/api/enhance', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      initial_prompt: initialPrompt.value,
      improvement_prompt: improvementPrompt.value,
      iterations: iterations.value,
      model: model.value
    })
  })

  const data = await response.json()
  result.value = data.final_prompt
  loading.value = false
}
</script>

<template>
  <div class="prompt-form">
    <h2>OpenAI Prompt Enhancer</h2>
    <label>Initial Prompt:</label>
    <textarea v-model="initialPrompt" rows="3" />
    <label>Improvement Prompt:</label>
    <textarea v-model="improvementPrompt" rows="2" />
    <label>Iterations:</label>
    <input type="number" v-model="iterations" min="1" />
    <label>Model:</label>
    <select v-model="model">
      <option>gpt-3.5-turbo</option>
      <option>gpt-4</option>
    </select>
    <button @click="enhancePrompt" :disabled="loading">
      {{ loading ? 'Enhancing...' : 'Enhance Prompt' }}
    </button>

    <div v-if="result">
      <h3>Final Prompt:</h3>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<style scoped>
.prompt-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
textarea,
input,
select {
  width: 100%;
}
button {
  padding: 0.5rem 1rem;
}
pre {
  background: #f4f4f4;
  padding: 1rem;
  white-space: pre-wrap;
}
</style>