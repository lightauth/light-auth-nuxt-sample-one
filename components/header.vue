<script setup lang="ts">
import { NuxtImg } from "#components";


</script>

<template>
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <div class="inline-flex gap-3 items-center">
      <a
        href="https://lightauth.github.io"
        target="_blank"
        class="text-xl font-bold text-gray-800 inline-flex gap-2"
      >
        <NuxtImg src="light-auth.svg" class="w-5 h-5" />
      </a>
      <a href="/" class="text-xl font-bold text-gray-800 inline-flex gap-2">
        Light Auth Nuxt Sample App
      </a>
    </div>

    <HeaderMenu />
  </div>
</template>
