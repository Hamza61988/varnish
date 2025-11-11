<template>
  <section id="faq" class="container mx-auto px-4 pb-12 md:pb-16">
    <div class="max-w-6xl mx-auto">
      <!-- FAQ Header -->
      <div class="text-center mb-8 md:mb-12">
        <div class="flex justify-center mb-2">
          <div
            class="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-500 fill-[#A3A3AE]"
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
            <span class="text-sm font-medium text-gray-700 uppercase">FAQ</span>
          </div>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Common Pricing Questions
        </h2>
        <p class="text-gray-600">You've Got Questions, We've got answers</p>
      </div>

      <!-- FAQ Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-8">
        <!-- Left Column -->
        <div class="space-y-4">
          <!-- FAQ Item 1 -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              type="button"
              @click="toggleFAQ(0)"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-sm md:text-base"
                >Is there a minimum usage?</span
              >
              <!-- Right Arrow when collapsed -->
              <svg
                v-if="!openFAQs[0]"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <!-- Down Arrow when expanded -->
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq">
              <div
                v-if="openFAQs[0]"
                class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base"
              >
                Yes, the minimum usage is $4 per month.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 2 -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              type="button"
              @click="toggleFAQ(1)"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-sm md:text-base"
                >What payment methods are accepted?</span
              >
              <svg
                v-if="!openFAQs[1]"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq">
              <div
                v-if="openFAQs[1]"
                class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base"
              >
                We accept all major credit cards, PayPal, and wire transfers.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 3 -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              type="button"
              @click="toggleFAQ(2)"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-sm md:text-base"
                >How is storage billed?</span
              >
              <svg
                v-if="!openFAQs[2]"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq">
              <div
                v-if="openFAQs[2]"
                class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base"
              >
                Storage is billed based on the average amount of data stored
                throughout the month, measured in GB.
              </div>
            </transition>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-4">
          <!-- FAQ Item 4 -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              type="button"
              @click="toggleFAQ(3)"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-sm md:text-base"
                >Is there a minimum payment?</span
              >
              <svg
                v-if="!openFAQs[3]"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq">
              <div
                v-if="openFAQs[3]"
                class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base"
              >
                Yes, there is a minimum payment of $4 per month regardless of
                usage.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 5 -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              type="button"
              @click="toggleFAQ(4)"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-sm md:text-base"
                >How is traffic calculated?</span
              >
              <svg
                v-if="!openFAQs[4]"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq">
              <div
                v-if="openFAQs[4]"
                class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base"
              >
                Traffic is calculated based on the total amount of data
                transferred from our CDN to end users, measured in GB.
              </div>
            </transition>
          </div>

          <!-- FAQ Item 6 -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              type="button"
              @click="toggleFAQ(5)"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-sm md:text-base"
                >How much does a TLS certificate cost?</span
              >
              <svg
                v-if="!openFAQs[5]"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="faq">
              <div
                v-if="openFAQs[5]"
                class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base"
              >
                TLS certificates are provided free of charge for all zones.
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Have More Questions Section (Repeated) -->
      <HaveMoreQuestionsSection />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import HaveMoreQuestionsSection from "./HaveMoreQuestionsSection.vue";

interface Props {
  openFAQs?: boolean[];
}

const props = withDefaults(defineProps<Props>(), {
  openFAQs: undefined,
});

const emit = defineEmits<{
  "toggle-faq": [index: number];
}>();

// Internal state (use props if provided, otherwise use internal state)
const internalOpenFAQs = ref([false, false, false, false, false, false]);

// Watch for prop changes
watch(
  () => props.openFAQs,
  (newVal) => {
    if (newVal) {
      internalOpenFAQs.value = [...newVal];
    }
  },
  { deep: true }
);

// Use props openFAQs or internal
const openFAQs = computed(() => props.openFAQs || internalOpenFAQs.value);

const toggleFAQ = (index: number) => {
  if (props.openFAQs) {
    // If using props, emit event to parent
    emit("toggle-faq", index);
  } else {
    // Otherwise, update internal state
    internalOpenFAQs.value[index] = !internalOpenFAQs.value[index];
  }
};
</script>

<style scoped>
/* FAQ Transition Styles */
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.faq-enter-to,
.faq-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
