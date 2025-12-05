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
      <h1 class="text-[3rem] font-medium text-[#111827]">SHA256 Generator</h1>
      <h2 class="text-[#73737F] font-medium uppercase tracking-wide mb-4">
        Generate a SHA256 hash
      </h2>

      <div class="mt-4 mb-[20px]">
        <p class="text-[15px] ">INPUT VALUE</p>

    <div class="mt-2">
  <textarea
    placeholder="FkHL7waU65ExKA92dxD3neap"
    class="border text-[#73737F] focus:outline-none focus:ring-blue-500 focus:ring-2 rounded-lg p-4 h-[16rem] w-full text-[14px] resize-none"
  ></textarea>
</div>

        <button
          class="bg-blue-500 mt-4 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          Generate
        </button>
      </div>

      <h2 class="text-[2rem] font-semibold text-[#111827] mb-6">
        SHA256 Generator FAQ
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-[3.125rem] text-[#73737F] leading-relaxed mb-4"
      >
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            SHA256 Results
          </h3>
          <p class="text-[15px]">
            The SHA256 online generator allows you to instantly generate a
           <a class="underline">SHA256</a> (32-byte) hash of any string or input value, which is then
            returned as a hexadecimal number of 64 digits.
          </p>
        </div>
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937]">
            MTypical Uses for SHA256
          </h3>
          <p class="text-[15px] mb-6">
            The hashing is a one-way method making it almost impossible to
            decrypt. This in turn means that SHA256 is ideal for challenge hash
            authentication, finger-printing, password validation, digital
            signatures, uniquely identifying files, and as checksums to detect
            accidental data corruption.
          </p>
        </div>
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937]">
            What is SHA256?
          </h3>
          <p class="text-[15px] mb-6">
            SHA, which stands for secure hash algorithm, is a <a class="underline">cryptographic
            hashing algorithm</a>  used to determine the integrity of a particular
            piece of data. SHA256 has become a successor to that of SHA1 because
            it is currently much more resistant to collision attacks, as it is
            able to generate a longer hash which is harder to break.
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
