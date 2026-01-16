<template>
  <section class="bg-[#f7f7f8] pt-[100px] md:pt-[80px]  ">
    <div class="container  mx-auto px-[3.5938rem] lg:px-0">
      <div class="max-w-4xl mx-auto">
        
        <div class="flex flex-col gap-4 w-full lg:w-[75%] lg:mx-auto">
          <div
            v-for="(item, index) in configItems"
            :key="index"
            class="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-[20px] overflow-hidden"
          >
            <button
              type="button"
              @click="toggleCard(index)"
              class="w-full p-6 flex items-center justify-between text-left cursor-pointer group"
            >
              <h3  class="text-base font-medium text-[#1a1925]">
                {{ item.title }}
              </h3>
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                :class="{ 'rotate-90 text-gray-900': activeIndex === index }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              class="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              :class="activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <div class="overflow-hidden">
                <div class="px-6 pb-6 pt-0">
                  <p style="font-family: inter;" class="text-sm text-gray-500 ">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 text-center">
          <h2 class="font-['Bricolage_Grotesque'] font-medium text-xs tracking-[0.1em] text-[#1a1925] mb-8 uppercase">
            Access All Features
          </h2>

          <div class="flex flex-wrap justify-center gap-3">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm transition-transform hover:cursor-pointer hover:-translate-y-0.5"
            >
              <div class="relative flex items-center justify-center">
                <div class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span class="font-['Bricolage_Grotesque'] font-medium text-[13px] text-[#1a1925]">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref<number | null>(null);

const toggleCard = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

// Data for Accordion Items
const configItems = [
  { 
    title: "Zone", 
    description: "The first 3 Zones are included for free. Each additional Zone is $1 per month." 
  },
  { 
    title: "Storage", 
    description: "Secure and scalable object storage. First 10GB included free of charge." 
  },
  { 
    title: "Log Forwarding", 
    description: "Real-time log forwarding to your preferred analytics provider." 
  },
  { 
    title: "Image Forwarding", 
    description: "Optimized image delivery and transformation at the edge." 
  },
];

// Data for Feature Tags
const features = [
  "Instant Purge",
  "HTTP/2",
  "TLS Certificate",
  "Origin Shield",
  "Secure Token",
  "DDoS Protection"
];
</script>