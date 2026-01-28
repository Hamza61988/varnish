<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/common/AccessAllFeatures.vue";
</script>

<template>
  <div class="min-h-screen">
    <div class="">
      <CommonTitle
        upername="Tools"
        title="Ping Test"
        subtitle="IP OR HOSTNAME PING"
        mobileAlignment="start"
        pcAlignment="start"
        :fontWeight="500"
      />

      <div class="mb-4">
        <div class="flex flex-col md:flex-row justify-between items-end gap-4">
          <CommonUrlInput placeholder="e.g. https://www.example.com" />
          <CommonButton
            variant="tool"
            tool="Test"
            custom-class="w-full md:w-auto"
          />
        </div>
      </div>
      <h2 class="text-[2rem] md:text-5xl font-semibold text-[#111827] mb-6">
        Ping Test FAQ
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#73737F] leading-relaxed mb-12"
      >
        <div>
          <h3
            class="text-[1.5rem] md:text-[2rem] font-semibold text-[#1f2937] mb-3"
          >
            How Can I Improve My Ping Times?
          </h3>
          <p class="text-[13px] md:text-[1rem]">
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
          <h3
            class="text-[1.5rem] md:text-[2rem] font-semibold text-[#1f2937] mb-3"
          >
            What is Ping?
          </h3>
          <p class="text-[13px] md:text-[1rem]">
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
