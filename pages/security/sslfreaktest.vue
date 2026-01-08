<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/sections/AccessAllFeaturesSection.vue";
</script>

<template>
  <div class="min-h-screen text-[#1f2937]">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-[3rem] font-medium text-[#111827] mb-4">
        SSL FREAK Test
      </h1>
      <p class="text-[#73737F] font-medium uppercase tracking-wide mb-4">
        CVE-2015-0204
      </p>
      <div class="mb-12">
        <div class="mb-6">
          <label class="block font-medium text-gray-900 mb-2"> Hostname </label>
          <div class="flex justify-between items-center gap-4">
            <input
              type="text"
              placeholder="e.g. https://www.example.com"
              class="flex-1 border border-gray-200 rounded-md px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
            />
            <button
              class="bg-[#0088FF] text-white rounded-md px-6 py-3 hover:bg-[#0088FF] transition-colors shadow-md"
            >
              Test
            </button>
          </div>
        </div>
      </div>
      <h2 class="text-[2rem] font-semibold text-[#111827] mb-6">
        SSL FREAK Test FAQ
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#73737F] leading-relaxed mb-12"
      >
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            What is the FREAK SSL attack?
          </h3>
          <p class="text-[15px]">
            Tuesday 2015/03/03 - Researchers of miTLS team (joint project
            between Inria and Microsoft Research) disclosed a new SSL/TLS
            vulnerability — the FREAK SSL attack
            <a class="underline">(CVE-2015-0204)</a>. The vulnerability allows
            attackers to intercept HTTPS connections between vulnerable clients
            and servers and force them to use 'export-grade' cryptography, which
            can then be decrypted or altered.
            <br />
            <br />
            Read more about the <a class="underline">FREAK SSL attack</a>.
          </p>
        </div>
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            How to eliminate the vulnerability?
          </h3>
          <p class="text-[15px]">
            Upgrade the OpenSSL version to at least 1.02.
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
