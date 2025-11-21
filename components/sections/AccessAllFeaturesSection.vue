<template>
  <section
    class="relative overflow-hidden bg-white w-full sm:min-h-[450px] md:min-h-[560px] lg:min-h-[560px]"
    style="background-color: #f7f7f8; padding: 0"
  >
    <div
      class="absolute inset-0 pointer-events-none overflow-hidden"
      style="z-index: 0"
    >
      <!-- Bottom Right Background Image -->
      <img
        src="/images/2ndlast_section2.svg"
        alt=""
        class="absolute opacity-30 bottom-0 right-0 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[600px] h-auto"
      />
    </div>

    <div
      class="m-auto relative z-10 w-full sm:w-[75%] md:w-[65%] lg:w-[68%] py-0 sm:py-10 md:py-12"
    >
      <div
        class="bg-[#1A1925] text-center relative rounded-none sm:rounded-[28px] md:rounded-[32px] lg:rounded-[35px] cta-card"
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        "
      >
        <!-- CTA Badge -->
        <div class="relative">
          <div
            class="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 lg:px-4 py-0.5 sm:py-0.75 md:py-1 bg-[#FFFFFFE5] rounded-full sm:text-xs md:text-sm font-medium text-gray-300"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              font-size: 12px;
              line-height: 16px;
              letter-spacing: 0%;
              text-align: center;
            "
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
            <span class="text-[#1A1925] ml-1">Lets Get Started</span>
          </div>
        </div>

        <!-- Main Heading -->
        <h2
          class="relative text-white cta-heading"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 600;
            letter-spacing: -0.04em;
            text-align: center;
            text-transform: capitalize;
            color: #ffffff;
          "
        >
          Access All Features
        </h2>

        <!-- Subtitle -->
        <p
          class="relative cta-subtitle"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            letter-spacing: -0.011em;
            text-align: center;
          "
        >
          Get started with a free 14 day trial, no credit card required.
        </p>

        <!-- Company Metrics -->
        <div
          class="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 cta-metrics"
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
            >120 Employes</span
          >
          <span
            class="hidden sm:inline text-gray-600 text-xs sm:text-sm md:text-base"
            >•</span
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
            >$31.5M Raised</span
          >
          <span
            class="hidden sm:inline text-gray-600 text-xs sm:text-sm md:text-base"
            >•</span
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
            >7 Years old</span
          >
        </div>

        <!-- CTA Button -->
        <div class="relative">
          <button
            class="hover:opacity-90 transition-opacity sm:w-[135px] md:w-[145px] lg:w-[153px] sm:h-[32px] md:h-[34px] lg:h-[36px] opacity-100"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 500;
              font-size: 13px;
              line-height: 20px;
              letter-spacing: -0.006em;
              text-align: center;
              color: #ffffff;
              width: 255px;
              height: 36px;
              border-radius: 8px;
              padding-top: 8px;
              padding-right: 2px;
              padding-bottom: 8px;
              padding-left: 2px;
              background: #1f62ff;
              background-image: linear-gradient(
                180deg,
                rgba(236, 236, 236, 0.08) 0%,
                rgba(85, 85, 85, 0.08) 100%
              );
              box-shadow: 0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12) inset,
                0px 0.75px 0.75px 0px rgba(255, 255, 255, 0.08) inset,
                0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
                0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset,
                0px 0.25px 0.25px 0px rgba(26, 25, 37, 0.24),
                0px 0.75px 0.75px 0px rgba(26, 25, 37, 0.12),
                0px 1px 1.5px -0.5px rgba(26, 25, 37, 0.12),
                0px 2px 4px -1px rgba(26, 25, 37, 0.12),
                0px 4px 8px -4px rgba(26, 25, 37, 0.12),
                0px 8px 12px -4px rgba(26, 25, 37, 0.06);
            "
          >
            <span class="leading-tight">Get Started ~ Free</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Access All Features CTA Section
</script>

<style scoped>
/* Mobile Card Dimensions */
.cta-card {
  height: 478px;
  /* padding-top: 50px;
  padding-right: 29px;
  padding-bottom: 50px;
  padding-left: 29px; */
  gap: 30px;
}

@media (min-width: 640px) {
  .cta-card {
    width: auto;
    height: auto;
    padding: 5%;
    gap: 20px;
    min-height: 280px;
  }
}

@media (min-width: 768px) {
  .cta-card {
    min-height: 320px;
  }
}

@media (min-width: 1024px) {
  .cta-card {
    min-height: 356px;
  }
}

/* Mobile First Styles */
.cta-heading {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: -0.04em;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
}

@media (min-width: 640px) {
  .cta-heading {
    font-size: 24px;
    line-height: 30px;
  }
}

@media (min-width: 768px) {
  .cta-heading {
    font-size: 32px;
    line-height: 40px;
  }
}

@media (min-width: 1024px) {
  .cta-heading {
    font-size: 40px;
    line-height: 48px;
  }
}

@media (min-width: 1280px) {
  .cta-heading {
    font-size: 48px;
    line-height: 56px;
  }
}

.cta-subtitle {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.011em;
  text-align: center;
  color: #d4d4d4;
}

@media (min-width: 640px) {
  .cta-subtitle {
    font-size: 11px;
    line-height: 16px;
  }
}

@media (min-width: 768px) {
  .cta-subtitle {
    font-size: 13px;
    line-height: 20px;
  }
}

@media (min-width: 1024px) {
  .cta-subtitle {
    font-size: 14px;
    line-height: 22px;
  }
}

@media (min-width: 1280px) {
  .cta-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
}

.cta-metric-text {
  font-family: "Funnel Display", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #ffffff;
}

@media (min-width: 640px) {
  .cta-metric-text {
    font-size: 12px;
    line-height: 18px;
  }
}

@media (min-width: 768px) {
  .cta-metric-text {
    font-size: 16px;
    line-height: 22px;
  }
}

@media (min-width: 1024px) {
  .cta-metric-text {
    font-size: 18px;
    line-height: 24px;
  }
}

@media (min-width: 1280px) {
  .cta-metric-text {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
