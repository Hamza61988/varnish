<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="min-h-screen  text-[#1f2937]  ">
    <div class="max-w-3xl mx-auto">
      

      <h1 class="text-[3rem] font-medium text-[#111827] mb-4">
        Traceroute Test
      </h1>
      <h2 class="text-[#73737F] font-medium uppercase tracking-wide mb-4">
       Trace any IP or hostname
      </h2>

      <div class="mb-12">
        <div class="mb-6">
          <label class="block font-medium text-gray-900 mb-2">
            IP Address Or Hostname
          </label>
          <div class="flex gap-4 justify-between">
            <input
              type="text"
              placeholder="e.g. https://www.example.com"
              class="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
            />

            <button
              class="bg-[#007bff] hover:bg-[#0088FF] text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm whitespace-nowrap"
            >
              Test
            </button>
          </div>
        </div>
      </div>

      <h2 class="text-[2rem] mb-4 font-semibold text-[#111827]">
        Traceroute Test FAQ
      </h2>

    <div class="mb-12 max-w-[402.5px]">
  <div class="text-[#73737F] leading-relaxed">
    <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
      Using the Traceroute Tool
    </h3>
    <p class="text-[15px] mb-4">
      This tool is typically used to diagnose hiccups or interruptions in the
      transfer of data and pinpoint where along the chain it occurred. This IPv4
      or IPv6 traceroute is unique in that it allows you to simultaneously test
      different locations at once. This lets you quickly
      <span class="font-bold "
        >determine if there is any packet loss or unexpected latency</span
      >
      to the given IP or hostname. A CDN can help dramatically.
    </p>
  </div>
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