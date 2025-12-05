<template>
  <section
    ref="ctaSection"
    class="relative overflow-hidden bg-white h-[450px] sm:h-[550px] md:h-[620px] lg:h-[676px] w-full"
  >
    <!-- Background Images -->
    <div
      class="absolute inset-0 pointer-events-none overflow-hidden"
      style="z-index: 0"
    >
      <!-- Top Middle Background Image -->
      <img
        src="/images/2ndlast_section.svg"
        alt=""
        class="absolute opacity-30 top-8 sm:top-12 md:top-14 lg:top-16 left-1/2 -translate-x-1/2 w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] h-auto"
      />
      <!-- Bottom Right Background Image -->
      <img
        src="/images/2ndlast_section2.svg"
        alt=""
        class="absolute opacity-30 bottom-0 right-0 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[600px] h-auto"
      />
    </div>

    <div class="m-auto relative z-10 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%] py-8 sm:py-10 md:py-12 lg:py-[8%]">
      <div
        class="bg-[#1A1925] text-center relative h-[240px] sm:h-[280px] md:h-[320px] lg:h-[356px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[35px]"
      >
        <!-- CTA Badge -->
        <div class="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6 pt-3 sm:pt-4 md:pt-5 lg:pt-[5%]">
          <div
            class="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 lg:px-4 py-0.5 sm:py-0.75 md:py-1 bg-[#FFFFFFE5] rounded-full text-xs sm:text-xs md:text-sm font-medium text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 color-[#A3A3AE] fill-[#A3A3AE]"
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
            <span class="text-[#1A1925] ml-1">CTA</span>
          </div>
        </div>

        <!-- Main Heading -->
        <h2
          class="relative text-white mb-2 sm:mb-3 md:mb-4 cta-heading"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 600;
            letter-spacing: -0.04em;
            text-align: center;
            text-transform: capitalize;
            color: #ffffff;
          "
        >
          Get Started With Varnish
        </h2>

        <!-- Subtitle -->
        <p
          class="relative mb-4 sm:mb-5 md:mb-6 lg:mb-8 cta-subtitle"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            letter-spacing: -0.011em;
            text-align: center;
            color: #51515e;
          "
        >
          Explore a new realm of efficiency with our cutting-edge CDN.
        </p>

        <!-- Company Metrics -->
        <div
          class="relative flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-3 sm:mb-4 md:mb-5 cta-metrics"
        >
          <span
            class="cta-metric-text"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
            >{{ employeesCounter }} Employees</span
          >
          <span class="text-gray-600 text-xs sm:text-sm md:text-base">•</span>
          <span
            class="cta-metric-text"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
            >${{ raisedCounter }}M Raised</span
          >
          <span class="text-gray-600 text-xs sm:text-sm md:text-base">•</span>
          <span
            class="cta-metric-text"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
            >{{ yearsCounter }} Years old</span
          >
        </div>

        <!-- CTA Button -->
        <div class="relative pb-4 sm:pb-5 md:pb-6 lg:pb-[15%]">
          <button
            class="bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-[125px] sm:w-[135px] md:w-[145px] lg:w-[153px] h-[30px] sm:h-[32px] md:h-[34px] lg:h-[36px] opacity-100"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
          >
            <span class="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] leading-tight">Get Started ~ Free</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Target values
const employeesTarget = 120;
const raisedTarget = 31.5;
const yearsTarget = 7;

// Counters
const employeesCounter = ref(0);
const raisedCounter = ref(0);
const yearsCounter = ref(0);

// Ref for section
const ctaSection = ref<HTMLElement | null>(null);

// Function to animate counter
const animateCounter = (counter: any, target: number, duration: number, decimal = false) => {
  const start = performance.now();
  const step = (timestamp: number) => {
    const progress = Math.min((timestamp - start) / duration, 1);
    counter.value = decimal ? +(target * progress).toFixed(1) : Math.floor(target * progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      counter.value = target;
    }
  };
  requestAnimationFrame(step);
};

onMounted(() => {
  console.log('fired')
  if (ctaSection.value) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate counters when section enters viewport
            animateCounter(employeesCounter, employeesTarget, 2000);
            animateCounter(raisedCounter, raisedTarget, 2000, true);
            animateCounter(yearsCounter, yearsTarget, 2000);
            obs.disconnect(); // Stop observing after triggering
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );
    observer.observe(ctaSection.value);
  }
});
</script>

<style scoped>
.cta-heading {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: -0.04em;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
}

@media (min-width: 640px) {
  .cta-heading {
    font-size: 32px;
    line-height: 40px;
  }
}

@media (min-width: 768px) {
  .cta-heading {
    font-size: 40px;
    line-height: 48px;
  }
}

@media (min-width: 1024px) {
  .cta-heading {
    font-size: 48px;
    line-height: 56px;
  }
}

.cta-subtitle {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.011em;
  text-align: center;
  color: #51515e;
}

@media (min-width: 640px) {
  .cta-subtitle {
    font-size: 13px;
    line-height: 20px;
  }
}

@media (min-width: 768px) {
  .cta-subtitle {
    font-size: 14px;
    line-height: 22px;
  }
}

@media (min-width: 1024px) {
  .cta-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
}

.cta-metric-text {
  font-family: "Funnel Display", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #ffffff;
}

@media (min-width: 640px) {
  .cta-metric-text {
    font-size: 16px;
    line-height: 22px;
  }
}

@media (min-width: 768px) {
  .cta-metric-text {
    font-size: 18px;
    line-height: 24px;
  }
}

@media (min-width: 1024px) {
  .cta-metric-text {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
