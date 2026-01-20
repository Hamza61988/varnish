<template>
  <button
    type="button"
    class="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-white hover:border-b pb-0.5 hover:border-dotted"
    @click="goBack"
  >
    <span class="flex w-6 h-6 items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3.5 w-3.5">
        <path fill-rule="evenodd" d="M11.78 4.22a.75.75 0 0 1 0 1.06L8.06 9h8.19a.75.75 0 0 1 0 1.5H8.06l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
      </svg>
    </span>
    <span class="-ml-1 pr-3">Back</span>
  </button>
</template>

<script setup lang="ts">
const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push("/")
  }
}
</script>


