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
          class="mb-3 sm:mb-4"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 600;
            font-style: SemiBold;
            font-size: 48px;
            line-height: 56px;
            letter-spacing: -0.04em;
            vertical-align: middle;
            text-transform: capitalize;
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
            font-style: Regular;
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
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        <!-- Left Section: Feature Cards -->
        <div class="flex flex-col gap-2 sm:gap-4 justify-between">
          <!-- Zone management Card -->
          <div
            class="bg-white rounded-xl p-6 sm:p-8 shadow-sm"
            style="
              border-radius: 16px;
              border: 1px solid #e0e7ff;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
              height: 124px;
            "
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 relative">
                <div
                  style="
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    box-shadow: 0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.12)
                        inset,
                      0px 1px 1px 0px rgba(255, 255, 255, 0.08) inset,
                      0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
                      0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset;
                    position: relative;
                    top: 2px;
                    left: 2px;
                  "
                >
                  <img
                    src="/images/about/IconCareer.svg"
                    alt="Zone management icon"
                    style="
                      width: 20px;
                      height: 20px;
                      opacity: 1;
                      display: block;
                    "
                  />
                </div>
              </div>
              <div class="flex-1">
                <h3
                  class=""
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    font-style: SemiBold;
                    font-size: 18px;
                    line-height: 24px;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Zone management
                </h3>
                <p
                  class=""
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #73737f;
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
              height: 124px;
            "
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 relative">
                <div
                  style="
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    box-shadow: 0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.12)
                        inset,
                      0px 1px 1px 0px rgba(255, 255, 255, 0.08) inset,
                      0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
                      0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset;
                    position: relative;
                    top: 2px;
                    left: 2px;
                  "
                >
                  <img
                    src="/images/about/IconCareer.svg"
                    alt="Instant purge icon"
                    style="
                      width: 20px;
                      height: 20px;
                      opacity: 1;
                      display: block;
                    "
                  />
                </div>
              </div>
              <div class="flex-1">
                <h3
                  class=""
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    font-style: SemiBold;
                    font-size: 18px;
                    line-height: 24px;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Instant purge
                </h3>
                <p
                  class=""
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #73737f;
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
              height: 124px;
            "
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 relative">
                <div
                  style="
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    box-shadow: 0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.12)
                        inset,
                      0px 1px 1px 0px rgba(255, 255, 255, 0.08) inset,
                      0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
                      0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset;
                    position: relative;
                    top: 2px;
                    left: 2px;
                  "
                >
                  <img
                    src="/images/about/IconCareer.svg"
                    alt="Detailed reports icon"
                    style="
                      width: 20px;
                      height: 20px;
                      opacity: 1;
                      display: block;
                    "
                  />
                </div>
              </div>
              <div class="flex-1">
                <h3
                  class=""
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    font-style: SemiBold;
                    font-size: 18px;
                    line-height: 24px;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Detailed reports
                </h3>
                <p
                  class=""
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #73737f;
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
            class="flex items-center justify-center"
            style="
              width: 175px;
              height: 40px;
              border-radius: 6px;
              padding-top: 10px;
              padding-right: 6px;
              padding-bottom: 10px;
              padding-left: 6px;
              background: linear-gradient(0deg, #1a1925, #1a1925),
                linear-gradient(
                  180deg,
                  rgba(255, 255, 255, 0.12) 0%,
                  rgba(255, 255, 255, 0) 100%
                );
              box-shadow: 0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12) inset,
                0px 0.75px 0.75px 0px rgba(255, 255, 255, 0.08) inset,
                0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
                0px 0.25px 0.25px 0px rgba(26, 25, 37, 0.24),
                0px 0.75px 0.75px 0px rgba(26, 25, 37, 0.12),
                0px 1px 1.5px -0.5px rgba(26, 25, 37, 0.12),
                0px 2px 4px -1px rgba(26, 25, 37, 0.12),
                0px 4px 8px -4px rgba(26, 25, 37, 0.12),
                0px 8px 12px -4px rgba(26, 25, 37, 0.06),
                0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset;
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              font-style: Medium;
              font-size: 17px;
              line-height: 20px;
              letter-spacing: -0.02em;
              text-align: center;
              text-transform: capitalize;
              color: #ffffff;
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
