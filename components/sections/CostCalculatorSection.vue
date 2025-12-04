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
      class="bg-white mx-auto lg:mx-auto px-4 py-6 md:py-8 lg:px-6 lg:py-10 text-left shadow-sm"
      style="border-radius: 20px; background-color: #f7f7f8"
    >
      <!-- Sliders -->
      <UiRegionSlider v-model="bandwidth" />

      <!-- Footer with Get Started and Price -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 md:mt-8 pt-6 border-t border-gray-200">
        <button
          @click="handleGetStarted"
          class="px-6 md:px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm md:text-base"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            min-width: 120px;
          "
        >
          Get Started
        </button>
        <div class="text-left sm:text-right">
          <span
            class="text-lg md:text-xl font-semibold text-gray-900"
            style="font-family: 'Bricolage Grotesque', sans-serif"
          >
            {{ formattedPrice }}/Month
          </span>
        </div>
      </div>
    </div>
    <!-- Have More Questions Section -->
    <HaveMoreQuestionsSection />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import HaveMoreQuestionsSection from "./HaveMoreQuestionsSection.vue";

const bandwidth = ref({
  naEurope: 500,
  asiaOceania: 0,
  africaLatin: 0,
});

// Price calculation based on bandwidth
// Pricing: $0.04 per GB for North America/Europe
// $0.05 per GB for Asia/Oceania
// $0.06 per GB for Africa/Latin America
const calculatePrice = () => {
  const naEuropePrice = bandwidth.value.naEurope * 0.04;
  const asiaOceaniaPrice = bandwidth.value.asiaOceania * 0.05;
  const africaLatinPrice = bandwidth.value.africaLatin * 0.06;
  
  const totalPrice = naEuropePrice + asiaOceaniaPrice + africaLatinPrice;
  
  // Minimum price is $4.00
  return Math.max(totalPrice, 4.0);
};

const monthlyPrice = computed(() => calculatePrice());

const formattedPrice = computed(() => {
  return `$${monthlyPrice.value.toFixed(2)}`;
});

const handleGetStarted = () => {
  console.log("Get Started clicked with bandwidth:", bandwidth.value);
  console.log("Monthly price:", formattedPrice.value);
  // Add navigation or action here
};
</script>
