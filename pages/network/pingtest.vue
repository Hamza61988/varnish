<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="min-h-screen bg-white text-[#1f2937] p-6 md:p-12 ">
    <div class="max-w-3xl mx-auto">
      <button
        class="tools-btn shadow-md gap-2 mb-4 rounded-[2rem] flex items-center ..."
      >
        <span class="tools-icon"></span>
        Tools
      </button>
      <h1 class="text-[3rem] font-medium text-[#111827] mb-4">Ping Test</h1>
      <h2 class="text-[#73737F] font-medium uppercase tracking-wide mb-4">
        IP OR HOSTNAME PING
      </h2>
      <div class="mb-12">
        <div class="mb-6">
          <label class="block font-medium text-gray-900 mb-2">
            IP Address Or Hostname
          </label>
          <div class="flex justify-between items-center gap-4">
            <input
              type="text"
              placeholder="e.g. https://www.example.com"
              class="flex-1 border border-gray-200 rounded-md px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
            />
            <button
              class="bg-[#0088FF] text-white rounded-md px-6 py-3 hover:bg-[#0088FF] transition-colors shadow-md"
            >
              Test
            </button>
          </div>
        </div>
      </div>
      <h2 class="text-[2rem] font-semibold text-[#111827] mb-6">
        Ping Test FAQ
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#73737F] leading-relaxed mb-12"
      >
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            How Can I Improve My Ping Times?
          </h3>
          <p class="text-[15px]">
            Ping times, also referred to as website latency, can be reduced
            using a few different techniques as described below.
          </p>
          <ul class="list-disc pl-4 gap-4 flex flex-col">
            <li>Reducing number of HTTP requests</li>
            <li>Add Expires or Cache-Control Header</li>
            <li>Gzip Components</li>
            <li>
              Utilize a CDN to
              <a class="underline">reduce website latency</a> by caching website
              assets on global edge servers (POPs)
            </li>
            <li>
              Take advantage of HTTP/2 by minimizing the amount of round trips
              from the sender to the receiver and with parallelized transfers
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            What is Ping?
          </h3>
          <p class="text-[15px]">
            Ping is a utility used to send out
            <a class="underline">ICMP</a> packets to an address to see how fast
            the response is (and if one even exists). Ping is important when it
            comes to website <a class="underline">latency</a> as it corresponds
            with the delay time (in milliseconds) for how long it takes the data
            to travel across the internet, to its destination address, and then
            back to you. A faster ping means a more responsive connection.
          </p>
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
