<script setup>
import { RouterLink } from 'vue-router';

  defineProps({
    to: {
        type: String,
        required: true
    }
  })
</script>
<template>
  <RouterLink 
    :to="{ name: to }"
    class="block md:inline-block rounded bg-primaryColor text-white py-2 px-3 text-sm shadow tracking-wide hover:bg-primaryColorHover"
  >
    <slot></slot>
  </RouterLink>
</template>
