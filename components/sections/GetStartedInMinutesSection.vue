<template>
  <section
    class="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24"
    style="background: #f7f7f8"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="flex flex-col items-center mb-8 sm:mb-10 md:mb-12">
        <!-- Section Label -->
        <div class="flex items-center justify-center mb-4 sm:mb-6">
          <div
            class="flex items-center"
            style="
              height: 24px;
              gap: 2px;
              border-radius: 999px;
              padding-top: 4px;
              padding-right: 8px;
              padding-bottom: 4px;
              padding-left: 8px;
              background: #ffffffe5;
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <!-- Star/Diamond Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A3A3AE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="min-width: 16px; min-height: 16px"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              />
            </svg>
            <span
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0%;
                text-align: center;
                color: #1a1925;
              "
            >
              How it works
            </span>
          </div>
        </div>

        <!-- Title -->
        <h2
          class="text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            letter-spacing: -0.02em;
            text-align: center;
            color: #1a1925;
          "
        >
          Get Started In Minutes
        </h2>

        <!-- Subtitle -->
        <p
          class="text-center mb-8 sm:mb-10 md:mb-12 text-sm md:text-base max-w-2xl mx-auto"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            text-align: center;
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
          class="hidden md:block absolute top-[22px] left-[calc(33.333%+22px)] right-[calc(33.333%+22px)] h-px"
          style="background: #e5e5e5; z-index: 0; opacity: 1"
        ></div>

        <!-- Step 1: Create -->
        <div class="relative z-10 flex flex-col items-center text-center">
          <!-- Numbered Circle -->
          <div
            class="rounded-full flex items-center justify-center mb-4 sm:mb-6"
            style="
              width: 44px;
              height: 44px;
              border-radius: 999px;
              background: linear-gradient(180deg, #5280ff -15%, #2251d3 100%),
                linear-gradient(
                  180deg,
                  rgba(236, 236, 236, 0.08) 0%,
                  rgba(85, 85, 85, 0.08) 100%
                );
              box-shadow: 0px 0.93px 1.4px -0.47px rgba(26, 25, 37, 0.12),
                0px 1.87px 3.73px -0.93px rgba(26, 25, 37, 0.12),
                0px 3.73px 7.47px -3.73px rgba(26, 25, 37, 0.12),
                0px 7.47px 11.2px -3.73px rgba(26, 25, 37, 0.06),
                0px 0.23px 0.23px 0px rgba(255, 255, 255, 0.12) inset,
                0px 0.7px 0.7px 0px rgba(255, 255, 255, 0.08) inset,
                0px 0.93px 2.8px 0px rgba(255, 255, 255, 0.08) inset,
                0px -7.47px 18.67px 0px rgba(26, 25, 37, 0.08) inset;
            "
          >
            <span
              class="text-white font-bold text-lg"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 600;
              "
            >
              1
            </span>
          </div>

          <!-- Title -->
          <h3
            class="mb-2 sm:mb-3"
            style="
              width: 256px;
              height: 32px;
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 700;
              font-size: 24px;
              line-height: 32px;
              letter-spacing: -0.02em;
              text-align: center;
              color: #1a1925;
            "
          >
            Create
          </h3>

          <!-- Description -->
          <p
            class="mb-4 sm:mb-6"
            style="
              width: 304px;
              height: 40px;
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 13px;
              line-height: 20px;
              letter-spacing: -0.006em;
              text-align: center;
              color: #73737f;
            "
          >
            Simply add a domain that you would like to supercharge.
          </p>

          <!-- Button -->
          <button
            class="px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-white font-medium transition-colors"
            style="
              background: #1a1925;
              font-family: 'Inter', sans-serif;
              font-weight: 500;
              font-size: 14px;
            "
          >
            Get Started
          </button>
        </div>

        <!-- Step 2: Configure -->
        <div class="relative z-10 flex flex-col items-center text-center">
          <!-- Numbered Circle -->
          <div
            class="rounded-full flex items-center justify-center mb-4 sm:mb-6"
            style="
              width: 44px;
              height: 44px;
              border-radius: 999px;
              background: linear-gradient(0deg, #d7d7de, #d7d7de),
                linear-gradient(
                  180deg,
                  rgba(255, 255, 255, 0.4) 20%,
                  rgba(244, 244, 244, 0) 100%
                );
              box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.06),
                0px 1px 1px 0px rgba(26, 25, 37, 0.06),
                0px 1px 2px -1px rgba(26, 25, 37, 0.04);
            "
          >
            <span
              class="font-bold text-lg"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 600;
                color: #51515e;
              "
            >
              2
            </span>
          </div>

          <!-- Title -->
          <h3
            class="mb-2 sm:mb-3"
            style="
              width: 256px;
              height: 32px;
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 700;
              font-size: 24px;
              line-height: 32px;
              letter-spacing: -0.02em;
              text-align: center;
              color: #1a1925;
            "
          >
            Configure
          </h3>

          <!-- Description -->
          <p
            class="mb-4 sm:mb-6"
            style="
              width: 304px;
              height: 40px;
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 13px;
              line-height: 20px;
              letter-spacing: -0.006em;
              text-align: center;
              color: #73737f;
            "
          >
            Optionally make advanced customizations or even use a custom
            subdomain.
          </p>

          <!-- Button -->
          <button
            class="px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-colors border-2"
            style="
              background: #ffffff;
              border-color: #e5e5e5;
              color: #1a1925;
              font-family: 'Inter', sans-serif;
              font-weight: 500;
              font-size: 14px;
            "
          >
            Learn More
          </button>
        </div>

        <!-- Step 3: Integrate -->
        <div class="relative z-10 flex flex-col items-center text-center">
          <!-- Numbered Circle -->
          <div
            class="rounded-full flex items-center justify-center mb-4 sm:mb-6"
            style="
              width: 44px;
              height: 44px;
              border-radius: 999px;
              background: linear-gradient(0deg, #d7d7de, #d7d7de),
                linear-gradient(
                  180deg,
                  rgba(255, 255, 255, 0.4) 20%,
                  rgba(244, 244, 244, 0) 100%
                );
              box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.06),
                0px 1px 1px 0px rgba(26, 25, 37, 0.06),
                0px 1px 2px -1px rgba(26, 25, 37, 0.04);
            "
          >
            <span
              class="font-bold text-lg"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 600;
                color: #51515e;
              "
            >
              3
            </span>
          </div>

          <!-- Title -->
          <h3
            class="mb-2 sm:mb-3"
            style="
              width: 256px;
              height: 32px;
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 700;
              font-size: 24px;
              line-height: 32px;
              letter-spacing: -0.02em;
              text-align: center;
              color: #1a1925;
            "
          >
            Integrate
          </h3>

          <!-- Description -->
          <p
            class="mb-4 sm:mb-6"
            style="
              width: 304px;
              height: 40px;
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 13px;
              line-height: 20px;
              letter-spacing: -0.006em;
              text-align: center;
              color: #73737f;
            "
          >
            Effortlessly add to any CMS, framework, or custom application.
          </p>

          <!-- Button -->
          <button
            class="px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-colors border-2"
            style="
              background: #ffffff;
              border-color: #e5e5e5;
              color: #1a1925;
              font-family: 'Inter', sans-serif;
              font-weight: 500;
              font-size: 14px;
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Get Started In Minutes Section Component
</script>
