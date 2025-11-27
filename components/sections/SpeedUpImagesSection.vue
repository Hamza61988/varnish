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
          Speed Up Images
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
          Transform and optimize images in real time.
        </p>
      </div>

      <!-- Main Content: Two Column Layout -->
      <div class="flex flex-col lg:flex-row gap-4" style="width: 100%">
        <!-- Left Section: Image Card -->
        <div class="flex flex-col w-full lg:w-[60%]">
          <div
            class="mb-4 sm:mb-6 overflow-hidden flex items-center justify-center"
            style="
              height: 269px;
              border-radius: 20px;
              border: 1px solid #cfcfcf;
              background: #f9fbfb;
            "
          >
            <img
              src="/images/home_image.svg"
              alt="Plant Image"
              class="w-full h-auto"
              style="display: block; max-width: 100%; border-radius: 20px"
            />
          </div>
          <div
            class="mb-4 lg:mb-0 w-full"
            style="
              border-radius: 16px;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
            "
          >
            <!-- URL Field -->
            <div
              class="flex flex-row items-center gap-2 sm:gap-3 w-full"
              style="
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100%;
              "
            >
              <input
                type="text"
                readonly
                value="https://ip.keycdn.com/example.jpg?format=webp"
                class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-mono"
                style="
                  font-family: 'Monaco', 'Courier New', monospace;
                  color: #51515e;
                  outline: none;
                  width: 100%;
                  min-width: 0;
                  border: none;
                  border-radius: 20px;
                  text-align: center;
                "
              />
            </div>
          </div>

          <!-- Button for Mobile/Tablet - Hidden on Desktop -->
          <div class="flex flex-row items-center justify-center lg:hidden">
            <button
              class="flex items-center justify-center whitespace-nowrap flex-shrink-0"
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
                box-shadow: 0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12)
                    inset,
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

                width: 100%;
              "
            >
              API Documentaiton
            </button>
          </div>
        </div>

        <!-- Right Section: Feature Blocks - Hidden on Mobile/Tablet -->
        <div
          class="hidden lg:flex flex-col"
          style="justify-content: space-between; width: 40%"
        >
          <!-- Transform Block -->
          <div>
            <h3
              class="mb-2 sm:mb-3"
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
              Transform
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
              Serve properly scaled images by dynamically updating the width and
              height.
            </p>
          </div>

          <!-- Optimize Block -->
          <div>
            <h3
              class="mb-2 sm:mb-3"
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
              Optimize
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
              Improve image performance by reducing the overall size and using
              the next-gen formats.
            </p>
          </div>

          <!-- Deliver Block -->
          <div>
            <h3
              class="mb-2 sm:mb-3"
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
              Deliver
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
              Increase image speed by being distributed globally through our
              premium edge locations.
            </p>
          </div>
          <div
            class="flex flex-row items-center gap-2 sm:gap-3"
            style="display: flex; flex-direction: row; align-items: center"
          >
            <button
              class="flex items-center justify-center whitespace-nowrap flex-shrink-0"
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
                box-shadow: 0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12)
                    inset,
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Speed Up Images Section Component
</script>
