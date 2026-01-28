<script setup lang="ts">
defineProps<{
  code: string;
}>();
</script>

<template>
  <div
    class="border border-[#D0D0D8] text-[#73737F] text-[13px] md:text-[1rem] rounded-[20px] px-[24px] py-[20px] mt-2 overflow-x-auto"
  >
    <pre class="whitespace-pre"><code>{{ code }}</code></pre>
  </div>
</template>

<style scoped>
pre,
code {
  font-family: inter;
}

pre {
  font-size: 0.875rem; /* text-sm */
}

@media (min-width: 768px) {
  pre {
    font-size: 1rem; /* text-base */
  }
}
</style>
