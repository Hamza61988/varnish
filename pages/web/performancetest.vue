<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="min-h-screen  text-[#1f2937] p-6 md:p-12">
    <div class="max-w-3xl mx-auto">
      
      <button
        class="tools-btn shadow-md gap-2 mb-4 rounded-[2rem] flex items-center"
      >
        <span class="tools-icon"></span>
        Tools
      </button>

      <h1 class="text-[3rem] font-medium text-[#111827] mb-4">
        Performance Test
      </h1>
      <h2 class="text-[#73737F] uppercase tracking-wide mb-4">
        URL SPEED
      </h2>

      <div class="mb-12">
        <div class="flex flex-col md:flex-row gap-4 items-end">
          
          <div class="flex-grow w-full">
            <label class="block font-medium text-gray-900 mb-2">
              URL
            </label>
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
              The Performance Test tool is a single asset performance test that can be performed from 10 different locations around the world. It allows the performance of any URL to be tested and measured. The results returned will give a breakdown of the loading times and HTTP response headers.
            </p>
            <p class="text-[15px]">
              The Performance Test tool can be used to evaluate the performance of a single asset to see where improvements can be made. Consider adding KeyCDN to your stack to significantly reduce the latency of your website.
            </p>
          </div>
        </div>

        <div class="w-full md:w-1/2 text-[#73737F] leading-relaxed flex flex-col gap-8">
          
          <div>
            <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
              What HTTP status codes are there?
            </h3>
            <div class="space-y-2 text-[15px]">
               <div class="flex items-center gap-3">
                  <span class="bg-[#d1e7dd] text-[#0f5132] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center">2xx</span>
                  <span>Successful</span>
               </div>
               <div class="flex items-center gap-3">
                  <span class="bg-[#e2d9f3] text-[#4c1d95] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center">3xx</span>
                  <span>Redirection</span>
               </div>
               <div class="flex items-center gap-3">
                  <span class="bg-[#ffedd5] text-[#9a3412] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center">4xx</span>
                  <span>Client error</span>
               </div>
               <div class="flex items-center gap-3">
                  <span class="bg-[#fee2e2] text-[#991b1b] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center">5xx</span>
                  <span>Server error</span>
               </div>
               <div class="flex items-center gap-3">
                  <span class="bg-[#fecaca] text-[#7f1d1d] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center">error</span>
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
                <strong class="font-bold text-[#73737F]">DNS</strong> - Returns domain name system (DNS) lookup time.
              </p>
              <p class="leading-normal">
                <strong class="font-bold text-[#73737F]">Connect</strong> - Time it takes to connect to the server.
              </p>
              <p class="leading-normal">
                <strong class="font-bold text-[#73737F]">TLS</strong> - Overhead of TLS connection on the individual asset.
              </p>
              <p class="leading-normal">
                <strong class="font-bold text-[#73737F]">TTFB</strong> - Time it takes from when a client makes an HTTP request to it receiving its first byte of data from the server.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>

<AccessAllFeaturesSection class="mt-10"/>
</template>

<style scoped>
input[type="checkbox"] {
  accent-color: #2563eb;
}
.tools-btn {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2px 9px;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
}
.tools-icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23888" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd"/></svg>');
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