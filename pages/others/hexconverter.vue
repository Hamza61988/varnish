<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/sections/AccessAllFeaturesSection.vue";
</script>

<template>
  <div class="min-h-screen text-[#1f2937]">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-[3rem] font-medium text-[#111827]">Hex Converter</h1>
      <h2 class="text-[#73737F] font-medium uppercase tracking-wide mb-4">
        Convert hexadecimal and decimal
      </h2>
      <div
        class="w-full max-w-3xl mb-[3.4375rem] flex items-center gap-5 rounded-xl"
      >
        <div class="flex-1">
          <label class="block mb-1 text-sm font-medium">VALUE</label>
          <input
            type="text"
            placeholder="e.g. 2280"
            class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium">Input</label>
          <div class="flex gap-2">
            <select
              class="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>hex</option>
              <option>dec</option>
              <option>bin</option>
            </select>
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow"
            >
              Convert
            </button>
          </div>
        </div>
      </div>
      <h2 class="text-[2rem] font-semibold text-[#111827] mb-6">
        Hex Converter FAQ
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#73737F] leading-relaxed mb-12"
      >
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            What is the Hex System?
          </h3>
          <p class="text-[15px]">
            The hex system, or <a class="underline">hexadecimal</a>, is a number
            system of base 16. Because the decimal system only has 10 digits,
            the extra 6 digits are represented by the first 6 letters in the
            alphabet. For example, a hex value of B would be represented as 11
            in decimal form, or binary value of 1011. Hexadecimal is an easy way
            to express binary numbers in modern computers in which a byte is
            usually defined as containing eight binary digits.
          </p>
        </div>
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            Hex Converter Results
          </h3>
          <p class="text-[15px]">
            The online hex converter tool allows you to instantly convert a
            <a></a>hex to decimal <a></a>value as well as a <a></a>decimal to
            hex <a></a>value. It also outputs the conversion to binary.
          </p>
        </div>
      </div>
      <div>
        <h3 class="text-[1.5625rem] font-semibold text-[#111827] mb-4">
          What is the Decimal System?
        </h3>
        <p class="text-[15px] w-[400px] text-[#73737F] leading-relaxed mb-6">
          The decimal system, is one of the oldest and most commonly used
          numbers systems today. It is also known as <a></a>base 10 numbering
          <a></a>since it is based on 10 single digits: 0,1,2,3,4,5,6,7,8,9. For
          example, a decimal value of 11 would be represented as a hex value of
          B, or binary value of 1011.
        </p>
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
