<script setup>
defineProps(['name'])
</script>
<template>
  <div class="mb-[3px] md:mb-[16px] ">
    <div
      style="
        padding: 4px 12px 4px 8px;
        box-shadow: 0 3px 3px -1.5px #07011308, 0 2px 2px -1px #07011308,
          0 1px 1px -0.5px #07011308, 0 0.5px 0.5px #07011308;
      "
      class="inline-flex bg-white items-center space-x-2 rounded-full text-xs sm:text-sm font-medium"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3 sm:h-4 sm:w-4"
        style="color: #a3a3ae; fill: #a3a3ae"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#A3A3AE"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      <span style="color: #1a1925; font-weight: 500; font-size: 12.06px">{{
        name
      }}</span>
    </div>
  </div>
</template>