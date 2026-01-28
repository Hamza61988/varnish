<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/common/AccessAllFeatures.vue";
</script>

<template>
  <div class="min-h-screen">
    <div class="">
      <CommonTitle
        upername="Tools"
        title="Ping IPv6 Test"
        subtitle="IPv6 or hostname ping"
        mobileAlignment="start"
        pcAlignment="start"
        :fontWeight="500"
      />

      <div class="mb-4">
        <div class="flex flex-col md:flex-row gap-4 items-end">
          <CommonUrlInput placeholder="e.g. https://www.example.com" />

          <CommonButton
            variant="tool"
            tool="Test"
            custom-class="w-full md:w-auto"
          />
        </div>
      </div>

      <h2 class="text-[2rem] md:text-5xl mb-4 font-semibold text-[#111827]">
        Ping IPv6 Test FAQ
      </h2>

      <div class="flex flex-col md:flex-row gap-10 mb-12">
        <div class="w-full md:w-1/2 flex flex-col gap-8">
          <div class="text-[#73737F] leading-relaxed">
            <h3
              class="text-[1.5rem] md:text-[2rem] font-semibold text-[#1f2937] mb-3"
            >
              Using the IPv6 Ping Test
            </h3>
            <p class="text-[13px] md:text-[1rem] mb-4">
              The IPv6 Ping test is very similar to our
              <span class="underline">Ping Test tool</span>
              but in this case it allows you to ping an IPv6 host or IP
              simultaneously from different locations. Ping is important when it
              comes to website
              <span class="underline">latency</span>. The tool sends out ICMP
              packets to an address to see how fast the response is. A faster
              ping means a more responsive connection.
            </p>
            <p class="text-[13px] md:text-[1rem]">
              Example of an IPv6 address: ipv6.google.com
            </p>
          </div>

          <div>
            <h3
              class="text-[1.5rem] md:text-[2rem] font-semibold text-[#111827] mb-4"
            >
              How to do an IPv6 Ping on the CLI?
            </h3>
            <div class="text-[#73737F] rounded-md text-[15px]">
              Just use the command
              <code class="font-medium">ping6 tools.keycdn.com</code>. It might
              be required to specify the interface with the argument
              <code class="font-medium">-I eth0</code> (replace eth0 with the
              appropriate interface).
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 text-[#73737F] leading-relaxed">
          <div>
            <h3
              class="text-[1.5rem] md:text-[2rem] font-semibold text-[#1f2937] mb-3"
            >
              What is IPv6?
            </h3>
            <p class="text-[13px] md:text-[1rem]">
              <span class="underline">IPv6</span>
              is the latest internet protocol designed to replace IPv4 due to
              the network shortage of addresses. IPv6 addresses are 128 bits (16
              bytes) long, as opposed to 32 bits, and use AAAA resource records
              in DNS to map host names to IPs.
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
