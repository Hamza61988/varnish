<template>
  <section
    class="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24"
    style="background: #f7f7f8"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="mb-8 sm:mb-10 md:mb-12">
        <!-- Section Label -->
        <div class="flex items-center justify-start mb-4 sm:mb-6">
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
            <!-- Lightning Bolt Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A3A3AE"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="min-width: 16px; min-height: 16px"
            >
              <path
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
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
              Transform
            </span>
          </div>
        </div>

        <!-- Title -->
        <h2
          class="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            letter-spacing: -0.02em;
            color: #1a1925;
          "
        >
          Speed Up Images
        </h2>

        <!-- Subtitle -->
        <p
          class="text-sm md:text-base mb-8 sm:mb-10"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            color: #51515e;
          "
        >
          Transform and optimize images in real time.
        </p>
      </div>

      <!-- Main Content: Two Column Layout -->
      <div class="flex flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        <!-- Left Section: Image Card -->
        <div class="flex flex-col">
          <div
            class="w-full rounded-lg mb-4 sm:mb-6 overflow-hidden bg-white flex items-center justify-center"
          >
            <img
              src="/images/home_image.svg"
              alt="Plant Image"
              class="w-full h-auto"
              style="display: block; max-width: 100%"
            />
          </div>
          <div
            class="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm"
            style="
              border-radius: 16px;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
            "
          >
            <!-- Plant Image -->

            <!-- URL Field -->
            <div
              class="flex flex-row items-center gap-2 sm:gap-3"
              style="display: flex; flex-direction: row; align-items: center"
            >
              <input
                type="text"
                readonly
                value="https://ip.keycdn.com/example.jpg?format=webp"
                class="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-mono"
                style="
                  font-family: 'Monaco', 'Courier New', monospace;
                  color: #51515e;
                  outline: none;
                  flex: 1;
                  min-width: 0;
                "
              />
              <button
                class="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white font-medium whitespace-nowrap flex-shrink-0"
                style="
                  background: #1a1925;
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  font-size: 14px;
                  border-radius: 8px;
                  flex-shrink: 0;
                "
              >
                API Documentaiton
              </button>
            </div>
          </div>
        </div>

        <!-- Right Section: Feature Blocks -->
        <div class="flex flex-col justify-center gap-6 sm:gap-8 md:gap-10">
          <!-- Transform Block -->
          <div>
            <h3
              class="mb-2 sm:mb-3 text-xl sm:text-2xl md:text-3xl"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 600;
                color: #1a1925;
              "
            >
              Transform
            </h3>
            <p
              class="text-sm sm:text-base"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                line-height: 24px;
                color: #51515e;
              "
            >
              Serve properly scaled images by dynamically updating the width and
              height.
            </p>
          </div>

          <!-- Optimize Block -->
          <div>
            <h3
              class="mb-2 sm:mb-3 text-xl sm:text-2xl md:text-3xl"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 600;
                color: #1a1925;
              "
            >
              Optimize
            </h3>
            <p
              class="text-sm sm:text-base"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                line-height: 24px;
                color: #51515e;
              "
            >
              Improve image performance by reducing the overall size and using
              the next-gen formats.
            </p>
          </div>

          <!-- Deliver Block -->
          <div>
            <h3
              class="mb-2 sm:mb-3 text-xl sm:text-2xl md:text-3xl"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 600;
                color: #1a1925;
              "
            >
              Deliver
            </h3>
            <p
              class="text-sm sm:text-base"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                line-height: 24px;
                color: #51515e;
              "
            >
              Increase image speed by being distributed globally through our
              premium edge locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Speed Up Images Section Component
</script>
