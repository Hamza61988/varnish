<template>
  <section
    class="container mx-auto px-[57.5px] md:px-12 lg:px-24 pt-[6.25rem] md:pt-[7.625rem]"
    style="background: #f7f7f8"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="flex flex-col items-center mb-8 sm:mb-10 md:mb-12">
        <!-- Section Label -->
        <div class="flex items-center justify-center mb-0 sm:mb-6">
          <div
            class="flex bg-[#fff] items-center"
            style="
              height: 24px;
              gap: 2px;
              border-radius: 999px;
              padding: 4px 8px;
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <!-- Star/Diamond Icon -->
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00288 1.2006C7.00288 0.458539 6.04046 0.167152 5.62884 0.784575L1.59597 6.83388C1.2637 7.3323 1.62099 7.99991 2.22001 7.99991H5.00288V10.7992C5.00288 11.5413 5.9653 11.8327 6.37692 11.2152L10.4098 5.16593C10.7421 4.66752 10.3848 3.99991 9.78575 3.99991H7.00288V1.2006Z"
                fill="#A3A3AE"
              />
            </svg>

            <span
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                color: #1a1925;
              "
            >
              How it works
            </span>
          </div>
        </div>

        <!-- Title -->
        <h2
          class="text-center md:text-[2rem] text-[2rem] mb-0 "
          style="
            font-weight: 600;
            
            line-height: 56px;
            letter-spacing: -0.04em;
            color: #1a1925;
          "
        >
          Get Started In Minutes
        </h2>

        <!-- Subtitle -->
        <p
          class="text-center text-[14px] md:text-[1rem] text-sm md:text-base max-w-2xl mx-auto"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            
            line-height: 24px;
            color: #51515e;
          "
        >
          It only takes a few steps to unlock our entire network.
        </p>
      </div>

      <!-- Three Steps -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 relative"
      >
        <!-- Connecting Lines (Desktop Only) -->
        <div
          class="hidden md:block absolute top-[22px] left-[calc(23.333%+22px)] right-[calc(23.333%+22px)] h-px"
          style="background: #e5e5e5; z-index: 0; opacity: 1"
        ></div>

        <!-- Steps Array -->
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative z-10 flex flex-col items-center text-center group"
        >
          <!-- Numbered Circle -->
          <div
            class="rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300"
            :style="circleStyle(index)"
          >
            <svg
              v-if="hovered === index"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 absolute"
              viewBox="0 0 24 24"
              fill="#1F62FF"
            >
              <path
                d="M12 2 L13.76 7.2 L19.51 4.49 L16.2 9.24 L21 12 L16.2 14.76 L19.51 19.51 L13.76 16.8 L12 22 L10.24 16.8 L4.49 19.51 L7.8 14.76 L3 12 L7.8 9.24 L4.49 4.49 L10.24 7.2 Z"
              />
            </svg>
            <span
              class="font-bold text-lg z-10"
              style="
                font-family: 'Funnel Display', sans-serif;
                font-weight: 600;
                color: white;
              "
            >
              {{ index + 1 }}
            </span>
          </div>

          <!-- Title -->
          <h3
            class="mb-2 sm:mb-3"
            style="
              width: 256px;
              height: 32px;
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              font-size: 24px;
              line-height: 32px;
              color: #1a1925;
            "
          >
            {{ step.title }}
          </h3>

          <!-- Description -->
          <p
            class="mb-[24px]"
            style="
              width: 304px;
              height: 40px;
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 13px;
              line-height: 20px;
              color: #73737f;
            "
          >
            {{ step.desc }}
          </p>

          <!-- Button -->
          <button
            @mouseenter="hovered = index"
            @mouseleave="hovered = null"
            :class="step.btnClass"
            style="
              padding-top: 8px;
              padding-right: 14px;
              padding-bottom: 8px;
              padding-left: 14px;
            "
            class="rounded-lg font-medium transition-colors duration-300"
          >
            {{ step.btnText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hovered = ref<number | null>(null);

const steps = [
  {
    title: "Create",
    desc: "Simply add a domain that you would like to supercharge.",
    btnText: "Get Started",
    btnClass:
      " bg-white  border-2 border-[#e5e5e5] hover:text-white  hover:bg-[#1a1925]",
  },
  {
    title: "Configure",
    desc: "Optionally make advanced customizations or even use a custom subdomain.",
    btnText: "Learn More",
    btnClass:
      " bg-white  border-2 border-[#e5e5e5] hover:text-white  hover:bg-[#1a1925]",
  },
  {
    title: "Integrate",
    desc: "Effortlessly add to any CMS, framework, or custom application.",
    btnText: "Learn More",
    btnClass:
      " bg-white  border-2 border-[#e5e5e5] hover:text-white  hover:bg-[#1a1925]",
  },
];

// Function to generate circle styles dynamically
const circleStyle = (index: number) => {
  const base = {
    width: "44px",
    height: "44px",
    borderRadius: "999px",
    background:
      hovered.value === index
        ? "linear-gradient(180deg, #5280ff -15%, #2251d3 100%)"
        : "linear-gradient(0deg, #d7d7de, #d7d7de)",
    boxShadow:
      hovered.value === index
        ? "0px 0.93px 1.4px -0.47px rgba(26,25,37,0.12), 0px 1.87px 3.73px -0.93px rgba(26,25,37,0.12), 0px 3.73px 7.47px -3.73px rgba(26,25,37,0.12), 0px 7.47px 11.2px -3.73px rgba(26,25,37,0.06), 0px 0.23px 0.23px 0px rgba(255,255,255,0.12) inset, 0px 0.7px 0.7px 0px rgba(255,255,255,0.08) inset, 0px 0.93px 2.8px 0px rgba(255,255,255,0.08) inset, 0px -7.47px 18.67px 0px rgba(26,25,37,0.08) inset"
        : "0px 0.5px 0.5px 0px rgba(26,25,37,0.06), 0px 1px 1px 0px rgba(26,25,37,0.06), 0px 1px 2px -1px rgba(26,25,37,0.04)",
  };
  return base;
};
</script>
