<template>
  <section class="bg-gray-50">
    <div class="container mx-auto px-4" style="background-color: #f7f7f8">
      <div class="max-w-6xl mx-auto">
        <div class="space-y-3 md:space-y-4 w-full lg:w-[70%] lg:mx-auto">
          <!-- Zone Card -->
          <div
            class="bg-white rounded-lg shadow-sm p-5 md:p-6 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
            style="border-radius: 20px"
          >
            <div class="flex-1 min-w-0 pr-4">
              <h3 class="text-sm md:text-base font-medium text-gray-900 mb-1">
                Zone
              </h3>
              <p class="text-xs md:text-sm text-gray-500">
                The first 3 Zones are included for free. Each additional Zone is
                $1 per month.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <!-- Storage Card -->
          <div
            class="bg-white rounded-lg shadow-sm p-5 md:p-6 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
            style="border-radius: 20px"
          >
            <div class="flex-1">
              <h3 class="text-sm md:text-base font-medium text-gray-900">
                Storage
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <!-- Log Forwarding Card -->
          <div
            class="bg-white rounded-lg shadow-sm p-5 md:p-6 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
            style="border-radius: 20px"
          >
            <div class="flex-1">
              <h3 class="text-sm md:text-base font-medium text-gray-900">
                Log Forwarding
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <!-- Image Forwarding Card -->
          <div
            class="bg-white rounded-lg shadow-sm p-5 md:p-6 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
            style="border-radius: 20px"
          >
            <div class="flex-1">
              <h3 class="text-sm md:text-base font-medium text-gray-900">
                Image Forwarding
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <!-- Access All Features Section -->
        <div class="mt-12 md:mt-16 text-center">
          <h2
            class="font-['Bricolage_Grotesque'] font-medium text-xs leading-4 tracking-[0.1em] text-center text-[#1a1925] mb-6 md:mb-8"
          >
            ACCESS ALL FEATURES
          </h2>

          <!-- Features Tags -->
          <div class="flex flex-wrap justify-center lg:justify-between gap-3 lg:gap-0">
            <!-- Instant Purge -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >Instant Purge</span
              >
            </div>

            <!-- HTTP/2 -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >HTTP/2</span
              >
            </div>

            <!-- TLS Certificate -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >TLS Certificate</span
              >
            </div>

            <!-- Origin Shield -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >Origin Shield</span
              >
            </div>

            <!-- Secure Token -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >Secure Token</span
              >
            </div>

            <!-- DDoS Protection -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >DDoS Protection</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Configuration Options Section Component
</script>
