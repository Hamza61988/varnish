<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="min-h-screen text-[#1f2937] ">
    <div class="max-w-3xl mx-auto">

      <h1 class="text-[3rem] font-medium text-[#111827] mb-4">
        HTTP/2 Test
      </h1>
      <h2 class="text-[#73737F] uppercase tracking-wide mb-4">
        VERIFY HTTP/2 SUPPORT
      </h2>

      <div class="mb-12 ">
        <div class="flex  flex-col md:flex-row gap-4 items-end">
          
          <div class="flex-grow  w-full">
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
        HTTP/2 Test FAQ
      </h2>

      <div class="mb-12 text-[#73737F] max-w-[25.125rem] leading-relaxed">
        
        <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
          What is HTTP/2?
        </h3>
        
        <p class="text-[15px] mb-4">
          HTTP/2 is the first major HTTP protocol update since 1997 when HTTP/1.1 was first published by the IETF. The new HTTP protocol is needed to keep up with the exponential growth of the web. The successor of HTTP/1.1 brings significant improvement in efficiency, speed and security and is supported by most modern web browsers. A list of <a href="#" class="underline">browsers that support HTTP/2</a> can be found on caniuse.com.
        </p>

        <ul class="list-disc pl-8   space-y-2 text-[15px] mb-6 marker:text-[#73737F]">
          <li>
            <a href="#" class="underline">HTTP/2</a> is binary, instead of textual.
          </li>
          <li>
            It is fully multiplexed, sending multiple requests in parallel over a single TCP connection.
          </li>
          <li>
            It uses header compression HPACK to reduce overhead.
          </li>
          <li>
            It allows servers to "push" responses proactively into client caches instead of waiting for a new request for each resource
          </li>
          <li>
            It uses the new <a href="#" class="underline">ALPN</a> extension which allows for faster-encrypted connections since the application protocol is determined during the initial connection.
          </li>
          <li>
            It reduces additional round trip times (RTT), making your website load faster without any optimization.
          </li>
          <li>
            <a href="#" class="underline">Domain sharding</a> and asset concatenation is no longer needed with HTTP/2.
          </li>
        </ul>

        <p class="text-[15px] mb-4">
          HTTP/2 introduces other improvements, more details: <a href="#" class="underline">HTTP/2 RFC7540</a>
        </p>

        <p class="text-[15px]">
          This test can check HTTP and HTTPS but most browsers
        </p>

      </div>

    </div>
  </div>

 <Teleport to="#full-width-section">
 <AccessAllFeaturesSection class=""/>

</Teleport>
</template>

<style scoped>
input[type="checkbox"] {
  accent-color: #2563eb;
}

p, ol, ul, pre, code {
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