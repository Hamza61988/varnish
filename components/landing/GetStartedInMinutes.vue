<template>
  <section class=" ">
    <div class="site-padding">
      <!-- Header Section -->

      <commonTitle
        upername="How it works"
        title="Get Started In Minutes"
        subtitle="It only takes a few steps to unlock our entire network."
      />

      <!-- Three Steps -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 relative"
      >
        <!-- Connecting Lines (Desktop Only) -->
        <!-- Line between 1 and 2 -->
        <div
          class="hidden md:block absolute top-[21px] left-[16.66%] w-[33.33%] h-[2px]"
          style="z-index: 0"
        >
          <div
            class="mx-12 h-full transition-colors duration-300"
            :class="[
              hovered === 0 || hovered === 1 ? 'bg-[#1F62FF]' : 'bg-[#e5e5e5]',
            ]"
          ></div>
        </div>
        <!-- Line between 2 and 3 -->
        <div
          class="hidden md:block absolute top-[21px] left-[50%] w-[33.33%] h-[2px]"
          style="z-index: 0"
        >
          <div
            class="mx-12 h-full transition-colors duration-300"
            :class="[
              hovered === 1 || hovered === 2 ? 'bg-[#1F62FF]' : 'bg-[#e5e5e5]',
            ]"
          ></div>
        </div>

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
                font-family: &quot;Funnel Display&quot;, sans-serif;
                font-weight: 600;
                color: white;
              "
            >
              {{ index + 1 }}
            </span>
          </div>

          <!-- Title -->
          <h3
            class="mb-3"
            style="
              font-weight: 700;
              font-size: 24px;
              line-height: 32px;
              color: #1a1925;
            "
          >
            {{ step.title }}
          </h3>

          <!-- Description -->
          <p
            class="mb-[23px] text-[13px] max-w-[304px] w-full"
            style="
              font-family: &quot;Inter&quot;, sans-serif;
              font-weight: 400;
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
import SectionsTitle from "~/components/common/Title.vue";
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
