<script setup lang="ts">

const apiKey = process.env.OPENAI_KEY;

let prompt = ''
let generatedText = ''
let errorMessage = ''
async function generateText() {
try {
    const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt,
      max_tokens: 50,
      n: 1,
      stop: '\n',
      temperature: 0.7
    })
  })
  const data = await response.json()
  generatedText = data.choices[0].text
  errorMessage = ''
} catch (error) {
    if (error instanceof Error) errorMessage = error.message
    else errorMessage = String(error)
  }
}
</script>

<template>
    <div>
      <h1>ChatGPT</h1>
      <form @submit.prevent="generateText">
        <label for="prompt">Prompt:</label>
        <input type="text" id="prompt" v-model="prompt">
        <button type="submit">Generate</button>
      </form>
      <p v-if="generatedText">{{ generatedText }}</p>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>

<style lang="scss">
</style>