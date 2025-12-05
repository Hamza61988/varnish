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
        Ping IPv6 Test
      </h1>
      <h2 class="text-[#73737F] font-medium uppercase tracking-wide mb-4">
       IPv6 or hostname ping
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
              class="w-full border border-gray-200 rounded-md px-4 py-3  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
            />

            <button
              class="bg-[#007bff] hover:bg-[#0088FF] text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm"
            >
              Test
            </button>
          </div>
        </div>
      </div>

       <h2 class="text-[2rem] mb-4 font-semibold text-[#111827]">
            Ping IPv6 Test FAQ
          </h2>

      <div class="flex flex-col md:flex-row gap-10 mb-12">
        
        
        <div class="w-full md:w-1/2 flex flex-col gap-8">
         

          <div class="text-[#73737F] leading-relaxed">
            <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
              Using the IPv6 Ping Test
            </h3>
            <p class="text-[15px] mb-4">
              The IPv6 Ping test is very similar to our
              <span class="underline ">Ping Test tool</span>
              but in this case it allows you to ping an IPv6 host or IP simultaneously from
              different locations. Ping is important when it comes to website
              <span class="underline ">latency</span>.
              The tool sends out ICMP packets to an address to see how fast the response is. A faster ping means a more responsive connection.
            </p>
            <p class="text-[15px]">
              Example of an IPv6 address: ipv6.google.com
            </p>
          </div>

          <div>
            <h3 class="text-[1.5625rem] font-semibold text-[#111827] mb-4">
              How to do an IPv6 Ping on the CLI?
            </h3>
            <div class=" text-[#73737F] rounded-md text-[15px] ">
              Just use the command <code class="font-medium">ping6 tools.keycdn.com</code>. It might be required to
              specify the interface with the argument <code class="font-medium">-I eth0</code> (replace eth0 with the
              appropriate interface).
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2  text-[#73737F] leading-relaxed">
          <div>
            <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
              What is IPv6?
            </h3>
            <p class="text-[15px]">
              <span class="underline ">IPv6</span>
              is the latest internet protocol designed to replace IPv4 due to
              the network shortage of addresses. IPv6 addresses are 128 bits (16
              bytes) long, as opposed to 32 bits, and use AAAA resource records in
              DNS to map host names to IPs.
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