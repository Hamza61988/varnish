<script setup lang="ts">
import AccessAllFeaturesSection from"~/components/common/AccessAllFeatures.vue";
</script>

<template>
  <div class="min-h-screen text-[#1f2937]">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-[2rem] md:text-5xl font-semibold mt-2 mb-4">Brotli Test</h1>
      <h2 class="text-[#73737F] md:text-[1rem] mt-4 text-[14px] max-w-2xl mb-4">
        VERIFY BROTLI COMPRESSION SUPPORT
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
            <p class="text-[13px] md:text-[1rem] mb-4">
              <a href="#" class="underline">Brotli</a> is a new open source
              compression algorithm developed by Google as an alternative to
              Gzip, Zopfli, and Deflate. Google's
              <a href="#" class="underline">case study</a> on Brotli has shown
              compression ratios of up to 26% smaller than current methods, with
              less CPU usage.
            </p>
          </div>

          <div class="text-[#73737F] leading-relaxed">
            <h3 class="text-[1.5625rem] text-[#1f2937] mb-3">Brotli Support</h3>
            <p class="text-[13px] md:text-[1rem] mb-4">
              Both the server and the client (browser) must be Brotli compatible
              to take advantage of smaller file sizes and be running over an
              HTTPS connection. Brotli compression is currently supported by the
              following browsers:
            </p>
            <ul
              class="list-disc pl-5 space-y-1 text-[15px] marker:text-[#73737F]"
            >
              <li>Google Chrome: Chrome 49+</li>
              <li>
                Mozilla Firefox: <a href="#" class="underline">Firefox 44+</a>
              </li>
              <li>Opera: Opera 36+</li>
            </ul>
          </div>
        </div>

        <div
          class="w-full md:w-1/2 text-[#73737F] leading-relaxed flex flex-col gap-8"
        >
          <div>
            <h3 class="text-[1.5625rem] text-[#1f2937] mb-3">
              Brotli Test Tool
            </h3>
            <p class="text-[13px] md:text-[1rem]">
              With our tool you can quickly
              <span class="font-bold text-[#73737F]"
                >check if your web server is sending the Brotli compressed
                payload</span
              >
              to your clients. Negotiation is done via the Accept-Encoding: br
              request header. Servers can add "br" to Content-Encoding: br to
              encode a response with Brotli.
            </p>
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
