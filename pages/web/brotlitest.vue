<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="min-h-screen  text-[#1f2937] p-6  md:p-12">
    <div class="max-w-3xl mx-auto">
      
      <button
        class="tools-btn shadow-md gap-2 mb-4 rounded-[2rem] flex items-center"
      >
        <span class="tools-icon"></span>
        Tools
      </button>

      <h1 class="text-[3rem] font-medium text-[#111827] mb-4">
        Brotli Test
      </h1>
      <h2 class="text-[#73737F] uppercase tracking-wide mb-4">
        VERIFY BROTLI COMPRESSION SUPPORT
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
        Brotli Test FAQ
      </h2>

      <div class="flex flex-col md:flex-row gap-10 mb-12">
        
        <div class="w-full md:w-1/2 flex flex-col gap-8">
          
          <div class="text-[#73737F] leading-relaxed">
            <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
              What is Brotli compression?
            </h3>
            <p class="text-[15px] mb-4">
              <a href="#" class="underline">Brotli</a> is a new open source compression algorithm developed by Google as an alternative to Gzip, Zopfli, and Deflate. Google's <a href="#" class="underline">case study</a> on Brotli has shown compression ratios of up to 26% smaller than current methods, with less CPU usage.
            </p>
          </div>

          <div class="text-[#73737F] leading-relaxed">
            <h3 class="text-[1.5625rem]  text-[#1f2937] mb-3">
              Brotli Support
            </h3>
            <p class="text-[15px] mb-4">
              Both the server and the client (browser) must be Brotli compatible to take advantage of smaller file sizes and be running over an HTTPS connection. Brotli compression is currently supported by the following browsers:
            </p>
            <ul class="list-disc pl-5 space-y-1 text-[15px] marker:text-[#73737F]">
              <li>Google Chrome: Chrome 49+</li>
              <li>Mozilla Firefox: <a href="#" class="underline">Firefox 44+</a></li>
              <li>Opera: Opera 36+</li>
            </ul>
          </div>

        </div>

        <div class="w-full md:w-1/2 text-[#73737F] leading-relaxed flex flex-col gap-8">
          
          <div>
            <h3 class="text-[1.5625rem]  text-[#1f2937] mb-3">
              Brotli Test Tool
            </h3>
            <p class="text-[15px]">
              With our tool you can quickly <span class="font-bold text-[#73737F]">check if your web server is sending the Brotli compressed payload</span> to your clients. Negotiation is done via the Accept-Encoding: br request header. Servers can add "br" to Content-Encoding: br to encode a response with Brotli.
            </p>
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