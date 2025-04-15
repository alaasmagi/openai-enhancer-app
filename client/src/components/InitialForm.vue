<script setup lang="ts">
import { ref } from 'vue'

const initialPrompt = ref<string | null>(null);
const improvementPrompt = ref<string | null>(null);
const iterations = ref<number>(1)
const model = ref<string>('gpt-3.5-turbo')
const result = ref<string | null>(null);
const error = ref<string | null>(null);
const loading = ref<boolean>(false)

const enhancePrompt = async () => {
  loading.value = true
  const response = await fetch(`http://localhost:${import.meta.env.VITE_SERVER_PORT ?? 3001}/api/enhance`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      initial_prompt: initialPrompt.value,
      improvement_prompt: improvementPrompt.value,
      iterations: iterations.value,
      model: model.value
    })
  })

  const data = await response.json();
  if (data.error) {
    error.value = data.error;
    result.value = null;
  } else {
    error.value = null;
    result.value = data;  
  }
  loading.value = false
}
</script>

<template>
  <div class="prompt-form">
    <h2>OpenAI Prompt Enhancer</h2>
    <label>Initial Prompt:</label>
    <textarea v-model="initialPrompt" rows="3"/>
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
    <div v-if="error">
      <label class="error">{{ error }}</label>
    </div>
  </div>
</template>

<style scoped>
.prompt-form {
  width: 400px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
button {
  padding: 1rem 2rem;
  background-color: #0e1118;
  font-size: 18px;
  font-weight: 700;
}
pre {
  background: #f4f4f4;
  padding: 1rem;
  white-space: pre-wrap;
}
label {
  align-self: self-start;
}
pre {
  background-color: inherit;
}
.error {
  color:red;
  font-size: 18;
}
</style>