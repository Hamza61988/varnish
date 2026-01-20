<template>
    <div class="">
      <SectionsTitle 
        upername="Calculator" 
        title="Calculate Your Costs" 
        subtitle="Enter your monthly outbound bandwidth for a pricing estimation." 
        mobileAlignment="start"
        pcAlignment="center"
      />
    <div
      class="bg-white mx-auto lg:mx-auto px-4 py-6 md:py-8 lg:px-6 lg:py-10 text-left shadow-sm"
      style="border-radius: 20px;"
    >
      <!-- Sliders -->
      <UiRegionSlider v-model="bandwidth" />

      <!-- Footer with Get Started and Price -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 md:mt-8 pt-6 border-t border-gray-200">
        <button
         
          class="px-[6px] py-[10px] bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-[17px]"
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
            class="text-[21px] font-medium text-gray-900"
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
import SectionsTitle from "~/components/common/Title.vue";
import SectionsUpername from "~/components/common/Upername.vue";
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
