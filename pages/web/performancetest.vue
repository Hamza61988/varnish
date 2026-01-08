<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/sections/AccessAllFeaturesSection.vue";
</script>

<template>
  <div class="min-h-screen text-[#1f2937]">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-[3rem] font-medium text-[#111827] mb-4">
        Performance Test
      </h1>
      <h2 class="text-[#73737F] uppercase tracking-wide mb-4">URL SPEED</h2>

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

          <button
            class="bg-[#007bff] hover:bg-[#0088FF] text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm w-full md:w-auto"
          >
            Test
          </button>
        </div>
      </div>

      <h2 class="text-[2rem] mb-10 font-semibold text-[#111827]">
        Performance Test FAQ
      </h2>

      <div class="flex flex-col md:flex-row gap-10 mb-12">
        <div class="w-full md:w-1/2 flex flex-col gap-8">
          <div class="text-[#73737F] leading-relaxed">
            <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
              What is the Performance Test tool?
            </h3>
            <p class="text-[15px] mb-4">
              The Performance Test tool is a single asset performance test that
              can be performed from 10 different locations around the world. It
              allows the performance of any URL to be tested and measured. The
              results returned will give a breakdown of the loading times and
              HTTP response headers.
            </p>
            <p class="text-[15px]">
              The Performance Test tool can be used to evaluate the performance
              of a single asset to see where improvements can be made. Consider
              adding KeyCDN to your stack to significantly reduce the latency of
              your website.
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
              What timings are there?
            </h3>
            <div class="space-y-2 text-[15px]">
              <p class="leading-normal">
                <strong class="font-bold text-[#73737F]">DNS</strong> - Returns
                domain name system (DNS) lookup time.
              </p>
              <p class="leading-normal">
                <strong class="font-bold text-[#73737F]">Connect</strong> - Time
                it takes to connect to the server.
              </p>
              <p class="leading-normal">
                <strong class="font-bold text-[#73737F]">TLS</strong> - Overhead
                of TLS connection on the individual asset.
              </p>
              <p class="leading-normal">
                <strong class="font-bold text-[#73737F]">TTFB</strong> - Time it
                takes from when a client makes an HTTP request to it receiving
                its first byte of data from the server.
              </p>
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
