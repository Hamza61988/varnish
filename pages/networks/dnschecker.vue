<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/sections/AccessAllFeaturesSection.vue";
</script>

<template>
  <div class="min-h-screen text-[#1f2937]">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-[3rem] font-medium text-[#111827] mb-4">DNS Checker</h1>
      <h2 class="text-[#73737F] font-medium uppercase tracking-wide mb-4">
        IP OR HOSTNAME LOOKUP
      </h2>
      <div class="mb-12">
        <div class="mb-6">
          <label class="block font-medium text-gray-900 mb-2">
            IP Address Or Hostname
          </label>
          <input
            type="text"
            placeholder="e.g. https://www.example.com"
            class="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label class="block font-medium text-gray-900 mb-2">
              DNS <span class="text-[#73737F] font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 8.8.8.8"
              class="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 bg-white"
            />
          </div>
          <div>
            <label class="block font-medium text-gray-900 mb-2">
              ECS <span class="text-[#73737F] font-normal">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 123.456.789.10"
              class="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 bg-white"
            />
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-6 mb-8 text-[#73737F]">
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              class="w-4 h-4 rounded border-gray-300 text-[#0088FF] focus:ring-blue-500"
            />
            <span>Recursive</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              class="w-4 h-4 rounded border-gray-300 text-[#0088FF] focus:ring-blue-500"
            />
            <span>Details</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              class="w-4 h-4 rounded border-gray-300 text-[#0088FF] focus:ring-blue-500"
            />
            <span>CAA</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              class="w-4 h-4 rounded border-gray-300 text-[#0088FF] focus:ring-blue-500"
            />
            <span>Trace</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              class="w-4 h-4 rounded border-gray-300 text-[#0088FF] focus:ring-blue-500"
            />
            <span
              >AXFR (<span class="underline decoration-1 underline-offset-2"
                >zone transfer</span
              >)</span
            >
          </label>
        </div>
        <button
          class="bg-[#007bff] hover:bg-[#0088FF] text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm"
        >
          Check
        </button>
      </div>
      <h2 class="text-[2rem] font-semibold text-[#111827] mb-6">
        DNS Checker FAQ
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#73737F] leading-relaxed mb-12"
      >
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            EDNS Client Subnet Check
          </h3>
          <p class="text-[15px]">
            An open IETF standard
            <a href="#" class="underline text-[#73737F]">edns-client-subnet</a>
            was developed in order to better direct content to users and lower
            latency in cooperation between recursive DNS services and CDN
            providers...
          </p>
        </div>
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            What is a DNS?
          </h3>
          <p class="text-[15px]">
            DNS, which stands for
            <a href="#" class="underline text-[#73737F]">domain name system</a>,
            is an Internet service that translates domains names into IP
            addresses...
          </p>
        </div>
      </div>
      <div>
        <h3 class="text-[1.5625rem] font-semibold text-[#111827] mb-4">
          Common DNS Records
        </h3>
        <ul
          class="list-disc list-inside space-y-2 text-[#73737F] ml-1 text-[15px]"
        >
          <li>
            <span class="text-[#73737F]">A:</span> Indicates the IP address of
            the domain.
          </li>
          <li>
            <span class="text-[#73737F]">AAAA:</span> IPV6 address record.
          </li>
          <li>
            <span class="text-[#73737F]">CNAME:</span> Canonical name, used for
            making a domain alias.
          </li>
          <li>
            <span class="text-[#73737F]">NS:</span> Name server, indicates which
            name server is authoritative for the domain.
          </li>
          <li>
            <span class="text-[#73737F]">MX:</span> Mail exchange, a list of
            mail exchange servers used for the domain.
          </li>
          <li>
            <span class="text-[#73737F]">TXT:</span> Administrator record use
            for domain facts and verifications.
          </li>
          <li>
            <span class="text-[#73737F]">SRV:</span> Service, defines the TCP
            service the domain operates on.
          </li>
          <li>
            <span class="text-[#73737F]">PTR:</span> Pointer record, maps an
            IPv4 address to CNAME.
          </li>
          <li>
            <span class="text-[#73737F]">SOA:</span> State of authority, stores
            information about when domain was updated.
          </li>
        </ul>
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
