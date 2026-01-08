<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/sections/AccessAllFeaturesSection.vue";
</script>

<template>
  <div class="min-h-screen text-[#1f2937]">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-[3rem] font-medium text-[#111827] mb-4">
        Website Speed Test
      </h1>
      <h2 class="text-[#73737F] uppercase tracking-wide mb-4">
        Full page speed test
      </h2>

      <div class="mb-12">
        <div class="flex flex-col md:flex-row gap-4 items-end">
          <div class="flex-grow w-full">
            <label class="block font-medium text-gray-900 mb-2"> URL </label>
            <input
              type="text"
              placeholder="e.g. https://www.example.com"
              class="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
            />
          </div>

          <div class="w-full md:w-48">
            <label class="block font-medium text-gray-900 mb-2">
              Location
            </label>
            <div class="relative">
              <select
                class="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none text-gray-700"
              >
                <option>Frankfurt</option>
                <option>London</option>
                <option>New York</option>
                <option>Singapore</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <button
            class="bg-[#007bff] hover:bg-[#0088FF] text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm w-full md:w-auto"
          >
            Test
          </button>
        </div>
      </div>

      <h2 class="text-[2rem] mb-10 font-semibold text-[#111827]">
        Website Speed Test FAQ
      </h2>

      <div class="flex flex-col md:flex-row gap-10 mb-12">
        <div class="w-full md:w-1/2 flex flex-col gap-8">
          <div class="text-[#73737F] leading-relaxed">
            <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
              What is the Website Speed Test tool?
            </h3>
            <p class="text-[15px] mb-4">
              The Website Speed Test tool is a full page speed test that can be
              performed from 10 different locations around the world. It allows
              the performance of any HTML page to be tested and measured. The
              results returned will give a breakdown of the requests, content
              size, and loading time. In addition there is a complete waterfall
              that details the timings and HTTP headers of each asset.
            </p>
            <p class="text-[15px]">
              The Website Speed Test tool can be used to evaluate the
              performance of your website to see where improvements can be made.
              Consider adding KeyCDN to your stack to significantly reduce the
              latency of your website.
            </p>
          </div>
        </div>

        <div
          class="w-full md:w-1/2 text-[#73737F] leading-relaxed flex flex-col gap-8"
        >
          <div>
            <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
              What HTTP status codes are there?
            </h3>
            <div class="space-y-2 text-[15px]">
              <div class="flex items-center gap-3">
                <span
                  class="bg-[#d1e7dd] text-[#0f5132] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center"
                  >2xx</span
                >
                <span>Successful</span>
              </div>
              <div class="flex items-center gap-3">
                <span
                  class="bg-[#e2d9f3] text-[#4c1d95] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center"
                  >3xx</span
                >
                <span>Redirection</span>
              </div>
              <div class="flex items-center gap-3">
                <span
                  class="bg-[#ffedd5] text-[#9a3412] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center"
                  >4xx</span
                >
                <span>Client error</span>
              </div>
              <div class="flex items-center gap-3">
                <span
                  class="bg-[#fee2e2] text-[#991b1b] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center"
                  >5xx</span
                >
                <span>Server error</span>
              </div>
              <div class="flex items-center gap-3">
                <span
                  class="bg-[#fecaca] text-[#7f1d1d] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center"
                  >error</span
                >
                <span>Connection error</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
              What content types are there?
            </h3>
            <div class="space-y-2 text-[15px]">
              <div class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
                <span>HTML page</span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span>JavaScript file</span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
                <span>CSS file</span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>Image file</span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Video file</span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  ></path>
                </svg>
                <span>Font file</span>
              </div>
              <div class="flex items-center gap-3">
                <svg
                  class="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
                <span>Other file</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ClientOnly>
    <Teleport to="#full-width-section">
      <AccessAllFeaturesSection class="" />
    </Teleport>
  </ClientOnly>
</template>
<style scoped>
input[type="checkbox"] {
  accent-color: #2563eb;
}

p,
ol,
ul,
pre,
code {
  font-family: inter;
}

.btn {
  position: relative;
  padding-left: 39px;
  font-size: 16px;
  font-weight: 500;
  background: #ffffff;
  border-radius: 10px;
  padding: 1px 20px;
  cursor: pointer;
}
.btn::before {
  content: "";
  position: absolute;
  padding-left: 12px;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
