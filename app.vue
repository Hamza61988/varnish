<template>
  <div
    class="flex flex-col min-h-screen"
    style="
      font-family: 'Bricolage Grotesque', sans-serif;
      border-radius: 6px;
      background-color: #f7f7f8;
    "
  >
    <CookieBanner v-if="!isAuthPage" />
    <Header v-if="!isAuthPage" />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <Footer v-if="!isAuthPage" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const isAuthPage = computed(() => route.path === '/login' || route.path === '/signup')
</script>
