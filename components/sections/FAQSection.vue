<template>
  <section id="faq" class="mx-auto" style="margin: 15% 0%">
    <div class="px-[57.5px]  lg:px-0">
      <!-- FAQ Header -->
      <div class="text-center mb-8 md:mb-12">
        <div class="flex justify-center mb-2">
<SectionsUpername name="FAQ" />
        </div>
        <h2 class="text-[2rem] md:text-[3rem] font-bold text-gray-900 mb-2">
          Common Pricing Questions
        </h2>
        <p class= "text-[0.875rem] md:text-[1rem] text-gray-600">You've Got Questions, We've got answers</p>
      </div>

      <!-- FAQ Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-8">
        <!-- Left Column -->
        <div class="space-y-4">
          <!-- FAQ Item 1 -->
          <div
            class="bg-white shadow-sm border border-gray-200 faq-item"
            style="border-radius: 20px"
            data-faq-index="0"
          >
            <button
              type="button"
              @click="toggleFAQ(0)"
              onclick="var allFAQs=document.querySelectorAll('.faq-item');var clickedFAQ=this.closest('.faq-item');var clickedContent=clickedFAQ?clickedFAQ.querySelector('.faq-content'):null;var wasOpen=clickedContent?clickedContent.classList.contains('faq-content-expanded'):false;allFAQs.forEach(function(faq){var content=faq.querySelector('.faq-content');if(content){content.classList.remove('faq-content-expanded');content.classList.add('faq-content-collapsed');}});if(clickedContent&&!wasOpen){clickedContent.classList.remove('faq-content-collapsed');clickedContent.classList.add('faq-content-expanded');}return false;"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-[0.875rem] md:text-[1rem]"
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
            <div
              class="px-4 md:px-6 pb-4 text-[#51515E] text-[0.875rem] md:text-[1rem] faq-content faq-content-collapsed"
            >
              Yes, the minimum usage is $4 per month.
            </div>
          </div>

          <!-- FAQ Item 2 -->
          <div
            class="bg-white shadow-sm border border-gray-200 faq-item"
            style="border-radius: 20px"
            data-faq-index="1"
          >
            <button
              type="button"
              @click="toggleFAQ(1)"
              onclick="var allFAQs=document.querySelectorAll('.faq-item');var clickedFAQ=this.closest('.faq-item');var clickedContent=clickedFAQ?clickedFAQ.querySelector('.faq-content'):null;var wasOpen=clickedContent?clickedContent.classList.contains('faq-content-expanded'):false;allFAQs.forEach(function(faq){var content=faq.querySelector('.faq-content');if(content){content.classList.remove('faq-content-expanded');content.classList.add('faq-content-collapsed');}});if(clickedContent&&!wasOpen){clickedContent.classList.remove('faq-content-collapsed');clickedContent.classList.add('faq-content-expanded');}return false;"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-[0.875rem] md:text-[1rem]"
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
            <div
              class="px-4 md:px-6 pb-4 text-[#51515E] text-[0.875rem] md:text-[1rem] faq-content faq-content-collapsed"
            >
              We accept all major credit cards, PayPal, and wire transfers.
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div
            class="bg-white shadow-sm border border-gray-200 faq-item"
            style="border-radius: 20px"
            data-faq-index="2"
          >
            <button
              type="button"
              @click="toggleFAQ(2)"
              onclick="var allFAQs=document.querySelectorAll('.faq-item');var clickedFAQ=this.closest('.faq-item');var clickedContent=clickedFAQ?clickedFAQ.querySelector('.faq-content'):null;var wasOpen=clickedContent?clickedContent.classList.contains('faq-content-expanded'):false;allFAQs.forEach(function(faq){var content=faq.querySelector('.faq-content');if(content){content.classList.remove('faq-content-expanded');content.classList.add('faq-content-collapsed');}});if(clickedContent&&!wasOpen){clickedContent.classList.remove('faq-content-collapsed');clickedContent.classList.add('faq-content-expanded');}return false;"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-[0.875rem] md:text-[1rem]"
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
            <div
              class="px-4 md:px-6 pb-4 text-[#51515E] text-[0.875rem] md:text-[1rem] faq-content faq-content-collapsed"
            >
              Storage is billed based on the average amount of data stored
              throughout the month, measured in GB.
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-4">
          <!-- FAQ Item 4 -->
          <div
            class="bg-white shadow-sm border border-gray-200 faq-item"
            style="border-radius: 20px"
            data-faq-index="3"
          >
            <button
              type="button"
              @click="toggleFAQ(3)"
              onclick="var allFAQs=document.querySelectorAll('.faq-item');var clickedFAQ=this.closest('.faq-item');var clickedContent=clickedFAQ?clickedFAQ.querySelector('.faq-content'):null;var wasOpen=clickedContent?clickedContent.classList.contains('faq-content-expanded'):false;allFAQs.forEach(function(faq){var content=faq.querySelector('.faq-content');if(content){content.classList.remove('faq-content-expanded');content.classList.add('faq-content-collapsed');}});if(clickedContent&&!wasOpen){clickedContent.classList.remove('faq-content-collapsed');clickedContent.classList.add('faq-content-expanded');}return false;"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-[0.875rem] md:text-[1rem]"
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
            <div
              class="px-4 md:px-6 pb-4 text-[#51515E] text-[0.875rem] md:text-[1rem] faq-content faq-content-collapsed"
            >
              Yes, there is a minimum payment of $4 per month regardless of
              usage.
            </div>
          </div>

          <!-- FAQ Item 5 -->
          <div
            class="bg-white shadow-sm border border-gray-200 faq-item"
            style="border-radius: 20px"
            data-faq-index="4"
          >
            <button
              type="button"
              @click="toggleFAQ(4)"
              onclick="var allFAQs=document.querySelectorAll('.faq-item');var clickedFAQ=this.closest('.faq-item');var clickedContent=clickedFAQ?clickedFAQ.querySelector('.faq-content'):null;var wasOpen=clickedContent?clickedContent.classList.contains('faq-content-expanded'):false;allFAQs.forEach(function(faq){var content=faq.querySelector('.faq-content');if(content){content.classList.remove('faq-content-expanded');content.classList.add('faq-content-collapsed');}});if(clickedContent&&!wasOpen){clickedContent.classList.remove('faq-content-collapsed');clickedContent.classList.add('faq-content-expanded');}return false;"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-[0.875rem] md:text-[1rem]"
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
            <div
              class="px-4 md:px-6 pb-4 text-[#51515E] text-[0.875rem] md:text-[1rem] faq-content faq-content-collapsed"
            >
              Traffic is calculated based on the total amount of data
              transferred from our CDN to end users, measured in GB.
            </div>
          </div>

          <!-- FAQ Item 6 -->
          <div
            class="bg-white shadow-sm border border-gray-200 faq-item"
            style="border-radius: 20px"
            data-faq-index="5"
          >
            <button
              type="button"
              @click="toggleFAQ(5)"
              onclick="var allFAQs=document.querySelectorAll('.faq-item');var clickedFAQ=this.closest('.faq-item');var clickedContent=clickedFAQ?clickedFAQ.querySelector('.faq-content'):null;var wasOpen=clickedContent?clickedContent.classList.contains('faq-content-expanded'):false;allFAQs.forEach(function(faq){var content=faq.querySelector('.faq-content');if(content){content.classList.remove('faq-content-expanded');content.classList.add('faq-content-collapsed');}});if(clickedContent&&!wasOpen){clickedContent.classList.remove('faq-content-collapsed');clickedContent.classList.add('faq-content-expanded');}return false;"
              class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-gray-900 text-[0.875rem] md:text-[1rem]"
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
            <div
              class="px-4 md:px-6 pb-4 text-[#51515E] text-[0.875rem] md:text-[1rem] faq-content faq-content-collapsed"
            >
              TLS certificates are provided free of charge for all zones.
            </div>
          </div>
        </div>
      </div>

      <!-- Have More Questions Section (Repeated) -->
    
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
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

// Watch openFAQs and sync with DOM
watch(
  openFAQs,
  (newVal) => {
    if (typeof window !== "undefined" && !props.openFAQs) {
      const allFAQs = document.querySelectorAll(".faq-item");
      allFAQs.forEach((faq, index) => {
        const content = faq.querySelector(".faq-content") as HTMLElement;
        if (content) {
          if (newVal[index]) {
            content.classList.remove("faq-content-collapsed");
            content.classList.add("faq-content-expanded");
          } else {
            content.classList.remove("faq-content-expanded");
            content.classList.add("faq-content-collapsed");
          }
        }
      });
    }
  },
  { deep: true }
);

// Sync Vue state with DOM on mount
onMounted(() => {
  if (typeof window !== "undefined") {
    // Initialize all FAQs as collapsed
    const allFAQs = document.querySelectorAll(".faq-item");
    allFAQs.forEach((faq) => {
      const content = faq.querySelector(".faq-content") as HTMLElement;
      if (content) {
        content.classList.add("faq-content-collapsed");
        content.classList.remove("faq-content-expanded");
      }
    });
    
    // Also add event listeners as fallback (accordion behavior)
    allFAQs.forEach((faq, index) => {
      const button = faq.querySelector("button");
      if (button) {
        button.addEventListener("click", function (e) {
          const allFAQs = document.querySelectorAll(".faq-item");
          const clickedContent = faq.querySelector(".faq-content") as HTMLElement;
          const wasOpen = clickedContent?.classList.contains("faq-content-expanded");
          
          // Close all FAQs first
          allFAQs.forEach((f) => {
            const content = f.querySelector(".faq-content") as HTMLElement;
            if (content) {
              content.classList.remove("faq-content-expanded");
              content.classList.add("faq-content-collapsed");
            }
          });
          
          // Open clicked FAQ if it wasn't already open
          if (clickedContent && !wasOpen) {
            clickedContent.classList.remove("faq-content-collapsed");
            clickedContent.classList.add("faq-content-expanded");
          }
        });
      }
    });
  }
});

const toggleFAQ = (index: number) => {
  if (props.openFAQs) {
    // If using props, emit event to parent
    emit("toggle-faq", index);
  } else {
    // Accordion behavior - only one open at a time
    const wasOpen = internalOpenFAQs.value[index];
    
    // Close all FAQs first
    internalOpenFAQs.value = [false, false, false, false, false, false];
    
    // If the clicked FAQ was closed, open it now
    if (!wasOpen) {
      internalOpenFAQs.value[index] = true;
    }
    
    // Sync with vanilla JS fallback
    if (typeof window !== "undefined") {
      const allFAQs = document.querySelectorAll(".faq-item");
      
      // Close all FAQs
      allFAQs.forEach((faq) => {
        const content = faq.querySelector(".faq-content") as HTMLElement;
        if (content) {
          content.classList.remove("faq-content-expanded");
          content.classList.add("faq-content-collapsed");
        }
      });
      
      // Open the clicked FAQ if it wasn't already open
      if (!wasOpen) {
        const clickedFAQ = allFAQs[index];
        if (clickedFAQ) {
          const content = clickedFAQ.querySelector(".faq-content") as HTMLElement;
          if (content) {
            content.classList.remove("faq-content-collapsed");
            content.classList.add("faq-content-expanded");
          }
        }
      }
    }
  }
};
</script>

<style scoped>
/* Smooth FAQ Expand/Collapse Transition */
.faq-content {
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease,
    padding-top 0.3s ease, padding-bottom 0.3s ease;
}

.faq-content-collapsed {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.faq-content-expanded {
  max-height: 500px;
  opacity: 1;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
