<template>
    <div class="px-[5%] lg:px-0" style="margin-top: 10%;">
    <div class="text-left lg:text-center mb-6 md:mb-8">
      <div class="flex justify-start lg:justify-center mb-2">
        <div
          class="inline-flex items-center space-x-2 px-4 py-2 rounded-full"
          style="
            background: #FFFFFFE5;
            box-shadow: 0px 0.5px 0.5px 0px #07011308,
              0px 1px 1px -0.5px #07011308,
              0px 2px 2px -1px #07011308,
              0px 3px 3px -1.5px #07011308;
          "
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
      class="bg-white mx-auto lg:mx-auto px-4 py-12 md:py-16 bg-white text-left"
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
      <div class="flex flex-col sm:flex-row items-start lg:items-center justify-start gap-4">
        <button
          onclick="console.log('Get Started button clicked')"
          class="px-6 md:px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium w-[40%] lg:w-auto"
        >
          Get Started
        </button>
        <div class="text-left lg:text-center sm:text-right">
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
