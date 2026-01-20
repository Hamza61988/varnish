<template>
  <section id="faq" class="mx-auto" >
    <div class="">
      <!-- FAQ Header -->
      <commonTitle 
        upername="FAQ" 
        title="Common Pricing Questions" 
        subtitle="You've Got Questions, We've got answers" 
        mobileAlignment="center"
      />

      <!-- FAQ Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-8">
        <!-- Left Column -->
        <div class="space-y-[10px]">
          <div
            v-for="(item, index) in leftColumnFAQs"
            :key="index"
            class="bg-white shadow-sm border border-gray-200 faq-item overflow-hidden"
            style="border-radius: 20px"
          >
            <button
              type="button"
              @click="toggleFAQ(index)"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-[0.875rem] md:text-[1rem]">
                {{ item.question }}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-300"
                :class="{ 'rotate-90': openFAQIndex === index }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div
              class="px-4 md:px-6 text-[#51515E] text-[0.875rem] md:text-[1rem] faq-content"
              :class="[
                openFAQIndex === index ? 'faq-content-expanded' : 'faq-content-collapsed',
                { 'border-t border-gray-100': openFAQIndex === index }
              ]"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-[10px]">
          <div
            v-for="(item, index) in rightColumnFAQs"
            :key="index + leftColumnFAQs.length"
            class="bg-white shadow-sm border border-gray-200 faq-item overflow-hidden"
            style="border-radius: 20px"
          >
            <button
              type="button"
              @click="toggleFAQ(index + leftColumnFAQs.length)"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-[0.875rem] md:text-[1rem]">
                {{ item.question }}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-300"
                :class="{ 'rotate-90': openFAQIndex === (index + leftColumnFAQs.length) }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div
              class="px-4 md:px-6 text-[#51515E] text-[0.875rem] md:text-[1rem] faq-content"
              :class="[
                openFAQIndex === (index + leftColumnFAQs.length) ? 'faq-content-expanded' : 'faq-content-collapsed',
                { 'border-t border-gray-100': openFAQIndex === (index + leftColumnFAQs.length) }
              ]"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionsTitle from "~/components/common/Title.vue";
import SectionsUpername from "~/components/common/Upername.vue";
import { ref, computed } from "vue";

const faqData = [
  {
    question: "Is there a minimum usage?",
    answer: "Yes, the minimum usage is $4 per month."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, PayPal, and wire transfers."
  },
  {
    question: "How is storage billed?",
    answer: "Storage is billed based on the average amount of data stored throughout the month, measured in GB."
  },
  {
    question: "Is there a minimum payment?",
    answer: "Yes, there is a minimum payment of $4 per month regardless of usage."
  },
  {
    question: "How is traffic calculated?",
    answer: "Traffic is calculated based on the total amount of data transferred from our CDN to end users, measured in GB."
  },
  {
    question: "How much does a TLS certificate cost?",
    answer: "TLS certificates are provided free of charge for all zones."
  }
];

const leftColumnFAQs = computed(() => faqData.slice(0, Math.ceil(faqData.length / 2)));
const rightColumnFAQs = computed(() => faqData.slice(Math.ceil(faqData.length / 2)));

const openFAQIndex = ref<number | null>(null);

const toggleFAQ = (index: number) => {
  openFAQIndex.value = openFAQIndex.value === index ? null : index;
};
</script>

<style scoped>
.faq-content {
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-content-collapsed {
  max-height: 0;
  opacity: 0;
  padding-bottom: 0;
}

.faq-content-expanded {
  max-height: 500px;
  opacity: 1;
  padding-top: 1rem;
  padding-bottom: 1.25rem;
}
</style>
