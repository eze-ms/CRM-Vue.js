<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-backGround">
    <div class="mx-auto max-w-6xl py-10">
      <h1 class="text-2xl font-semibold text-white uppercase tracking-wide">Customer Manager</h1>
    </div>
  </header>
  <main class="max-w-6xl mx-auto mt-10">
    <RouterView />
  </main>
</template>
