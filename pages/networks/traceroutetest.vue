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