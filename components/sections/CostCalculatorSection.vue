<template>
  <div class=" mx-auto" style="padding: 5% 0% 5% 0%;">
     <div class="text-center mb-6 md:mb-8">
        <div class="flex justify-center mb-2">
          <div
            class="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span class="text-sm text-gray-700 font-medium">Calculator</span>
          </div>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Calculate Your Costs
        </h2>
        <p class="text-sm md:text-base text-gray-500">
          Enter your monthly outbound bandwidth for a pricing estimation.
        </p>
      </div>
  <div
    class="bg-white rounded-lg shadow-lg p-6 md:p-8 bg-white w-[60%] mx-auto"
    style="border-radius: 20px"
  >
   
      <!-- Sliders -->
      <UiRegionSlider
        label="North America/Europe"
        v-model="bandwidth.naEurope"
        :min="0"
        :max="2000"
        :step="1"
      />

      <!-- Footer with Get Started and Price -->
      <div class="flex flex-col sm:flex-row items-center justify-start gap-4">
        <button
          onclick="console.log('Get Started button clicked')"
          class="px-6 md:px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium w-full sm:w-auto"
        >
          Get Started
        </button>
        <div class="text-center sm:text-right">
          <span class="text-lg md:text-xl text-gray-500">$20.00/Month</span>
        </div>
      </div>
    </div>
  <!-- Have More Questions Section -->
  <HaveMoreQuestionsSection />
</div>

</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import HaveMoreQuestionsSection from "./HaveMoreQuestionsSection.vue";
const bandwidth = ref({
  naEurope: 500,
  asiaOceania: 0,
  africaLatin: 0,
});

// Debug: Watch for changes
watch(
  () => bandwidth.value,
  (newVal: typeof bandwidth.value) => {
    console.log("Bandwidth changed:", newVal);
  },
  { deep: true }
);
</script>
