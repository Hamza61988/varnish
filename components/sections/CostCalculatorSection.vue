<template>
    <div class="px-[57.5px] pt-[6.25rem] md:pt-[5rem]  lg:px-0" style="margin-top: 10%;">
    <div class="text-left lg:text-center mb-6 md:mb-8">
      <div class="flex justify-center mb-2">
<SectionsUpername name="Calculator" />
      </div>
      <h2 
       class="text-[32px] md:text-[48px] text-center  font-semibold text-[#1A1925] mb-2">
        Calculate Your Costs
      </h2>
      <p class="text-sm text-center md:text-base text-gray-500">
        Enter your monthly outbound bandwidth for a pricing estimation.
      </p>
    </div>
    <div
      class="bg-white mx-auto lg:mx-auto px-4 py-6 md:py-8 lg:px-6 lg:py-10 text-left shadow-sm"
      style="border-radius: 20px;"
    >
      <!-- Sliders -->
      <UiRegionSlider v-model="bandwidth" />

      <!-- Footer with Get Started and Price -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 md:mt-8 pt-6 border-t border-gray-200">
        <button
         
          class="px-6 md:px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-[1.3125rem]"
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
            {{ formattedPrice }}<span class="text-[#A3A3AE]">/Month</span>
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

</script>
