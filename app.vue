<template>
  <div
    class="flex flex-col min-h-screen"
    :style="isAuthPage ? 'font-family: Bricolage Grotesque, sans-serif; background-color: #FFFFFF;' : 'font-family: Bricolage Grotesque, sans-serif; background-color: #ffffff;'"
  >
    <!-- <CookieBanner v-if="!isAuthPage" /> -->
    <Header v-if="!isAuthPage" />
    <main class="flex-1" :style="isAuthPage ? 'margin-top: 0; padding-top: 0;' : 'margin-top: 80px; padding-top: 0;'">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <Footer v-if="!isAuthPage" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isAuthPage = computed(() => route.path === '/login' || route.path === '/signup')
</script>
