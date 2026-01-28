<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/common/AccessAllFeatures.vue";
</script>

<template>
  <div class="min-h-screen">
    <div class="">
      <CommonTitle
        upername="Tools"
        title="SHA256 Generator"
        subtitle="Generate a SHA256 hash"
        mobileAlignment="start"
        pcAlignment="start"
        :fontWeight="500"
      />

      <div class="mt-4 mb-[20px]">
        <p class="text-[13px] md:text-[15px]">INPUT VALUE</p>

        <div class="mt-2">
          <textarea
            placeholder="FkHL7waU65ExKA92dxD3neap"
            class="border text-[#73737F] focus:outline-none focus:ring-blue-500 focus:ring-2 rounded-lg p-4 h-[16rem] w-full text-[14px] resize-none"
          ></textarea>
        </div>

        <CommonButton variant="tool" tool="Generate" custom-class="mt-4" />
      </div>

      <h2
        class="text-[1.5rem] md:text-[2rem] font-semibold text-[#111827] mb-6"
      >
        SHA256 Generator FAQ
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-[3.125rem] text-[#73737F] leading-relaxed mb-4"
      >
        <div>
          <h3
            class="text-[1.5rem] md:text-[2rem] font-semibold text-[#1f2937] mb-3"
          >
            SHA256 Results
          </h3>
          <p class="text-[13px] md:text-[1rem]">
            The SHA256 online generator allows you to instantly generate a
            <a class="underline">SHA256</a> (32-byte) hash of any string or
            input value, which is then returned as a hexadecimal number of 64
            digits.
          </p>
        </div>
        <div>
          <h3 class="text-[1.5rem] md:text-[2rem] font-semibold text-[#1f2937]">
            MTypical Uses for SHA256
          </h3>
          <p class="text-[13px] md:text-[1rem] mb-6">
            The hashing is a one-way method making it almost impossible to
            decrypt. This in turn means that SHA256 is ideal for challenge hash
            authentication, finger-printing, password validation, digital
            signatures, uniquely identifying files, and as checksums to detect
            accidental data corruption.
          </p>
        </div>
        <div>
          <h3 class="text-[1.5rem] md:text-[2rem] font-semibold text-[#1f2937]">
            What is SHA256?
          </h3>
          <p class="text-[13px] md:text-[1rem] mb-6">
            SHA, which stands for secure hash algorithm, is a
            <a class="underline">cryptographic hashing algorithm</a> used to
            determine the integrity of a particular piece of data. SHA256 has
            become a successor to that of SHA1 because it is currently much more
            resistant to collision attacks, as it is able to generate a longer
            hash which is harder to break.
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
