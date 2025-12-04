<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="min-h-screen bg-white text-[#1f2937] md:p-12">
    <div class="max-w-3xl mx-auto">
      <button
        class="tools-btn shadow-md gap-2 mb-4 rounded-[2rem] flex items-center ..."
      >
        <span class="tools-icon"></span>
        Tools
      </button>
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
