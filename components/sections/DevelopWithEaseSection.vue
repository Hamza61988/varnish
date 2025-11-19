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
              Develop
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
          Develop With Ease
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
          Complete account control with our RESTful API.
        </p>
      </div>

      <!-- Main Content: Two Column Layout -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-stretch"
      >
        <!-- Left Section: Feature Cards -->
        <div class="flex flex-col gap-6 sm:gap-8 justify-between">
          <!-- Zone management Card -->
          <div
            class="bg-white rounded-xl p-6 sm:p-8 shadow-sm"
            style="
              border-radius: 16px;
              border: 1px solid #e0e7ff;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
              min-height: 140px;
            "
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <img
                  src="/images/about/IconCareer.svg"
                  alt="Zone management icon"
                  class="w-8 h-8 sm:w-10 sm:h-10"
                  style="
                    filter: brightness(0) saturate(100%) invert(37%) sepia(96%)
                      saturate(2000%) hue-rotate(220deg) brightness(1)
                      contrast(1);
                  "
                />
              </div>
              <div class="flex-1">
                <h3
                  class="mb-2 text-xl sm:text-2xl"
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    color: #1a1925;
                  "
                >
                  Zone management
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
                  Add, edit, and delete Zones. Configure each Zone for optimal
                  performance. Updates only take a few minutes to be deployed
                  across the globe.
                </p>
              </div>
            </div>
          </div>

          <!-- Instant purge Card -->
          <div
            class="rounded-xl p-6 sm:p-8 shadow-sm"
            style="
              border-radius: 16px;
              background: #f3f4f6;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
              min-height: 140px;
            "
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <img
                  src="/images/about/IconCareer.svg"
                  alt="Instant purge icon"
                  class="w-8 h-8 sm:w-10 sm:h-10"
                  style="opacity: 0.4; filter: grayscale(100%)"
                />
              </div>
              <div class="flex-1">
                <h3
                  class="mb-2 text-xl sm:text-2xl"
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    color: #1a1925;
                  "
                >
                  Instant purge
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
                  Never serve stale content again. Purge all data centers in the
                  blink of an eye. Purge the entire cache or individual content.
                </p>
              </div>
            </div>
          </div>

          <!-- Detailed reports Card -->
          <div
            class="rounded-xl p-6 sm:p-8 shadow-sm"
            style="
              border-radius: 16px;
              background: #f3f4f6;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
              min-height: 140px;
            "
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <img
                  src="/images/about/IconCareer.svg"
                  alt="Detailed reports icon"
                  class="w-8 h-8 sm:w-10 sm:h-10"
                  style="opacity: 0.4; filter: grayscale(100%)"
                />
              </div>
              <div class="flex-1">
                <h3
                  class="mb-2 text-xl sm:text-2xl"
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    color: #1a1925;
                  "
                >
                  Detailed reports
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
                  Statistics are reported in near real time. Access account and
                  traffic details. Improve your user experience with accurate
                  and meaningful data.
                </p>
              </div>
            </div>
          </div>

          <!-- API Documentation Button -->
          <button
            class="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-medium transition-colors mt-4"
            style="
              background: #1a1925;
              font-family: 'Inter', sans-serif;
              font-weight: 500;
              font-size: 14px;
              border-radius: 12px;
            "
          >
            API Documentaiton
          </button>
        </div>

        <!-- Right Section: Code Block -->
        <div class="flex flex-col h-full">
          <div
            class="bg-[#2E3234] rounded-xl relative"
            style="border-radius: 16px"
          >
            <!-- Code Image -->
            <img
              src="/images/home_code.svg"
              alt="Code Example"
              class="w-full h-auto"
              style="max-width: 100%; padding: 0% 5%"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Develop With Ease Section Component
</script>
