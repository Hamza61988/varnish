<script setup lang="ts">
import AccessAllFeaturesSection from"~/components/common/AccessAllFeatures.vue";
</script>

<template>
  <div class="min-h-screen text-[#1f2937]">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-[2rem] md:text-5xl font-semibold mt-2 mb-4">
        Certificate Chain composer
      </h1>
      <h2 class="text-[#73737F] md:text-[1rem] mt-4 text-[14px] max-w-2xl mb-4">
        Generate intermediate certificate
      </h2>

      <div class="mt-4 mb-[20px]">
        <p class="text-[15px]">Certificate (PEM format)</p>

        <div class="mt-2">
          <textarea
            placeholder="-----BEGIN CERTIFICATE-----
Certificate
----END CERTIFICATE-----"
            class="border text-[#73737F] focus:outline-none focus:ring-blue-500 focus:ring-2 rounded-lg p-4 h-[16rem] w-full text-[14px] resize-none"
          ></textarea>
        </div>

        <button
          class="bg-blue-500 mt-4 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          Compose
        </button>
      </div>

      <h2 class="text-[2rem] font-semibold text-[#111827] mb-6">
        Certificate Chain Composer FAQ
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#73737F] leading-relaxed mb-4"
      >
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            Get Your Certificate Chain
          </h3>
          <p class="text-[13px] md:text-[1rem]">
            If you have missing chain certificates or don't know what they are,
            you can use the certificate chain composer tool above to fetch them.
            Simply paste in the contents of your .crt file and it will return
            your complete certificate including the intermediate certificates.
            You can then install them on your web server or CDN provider. It
            will also return the decoded certificate.
          </p>
        </div>
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937]">
            What is a Certificate Chain?
          </h3>
          <p class="text-[13px] md:text-[1rem] mb-6">
            The list of SSL certificates, from the root certificate to the
            end-user certificate, represents a SSL certificate chain, or
            intermediate certificate. These must be installed to a web server
            along with a primary certificate. If they aren't installed web
            browsers will display an "Invalid certificate" or "certificate not
            trusted" error. You can use our
            <a class="underline">Certificate Checker</a> tool to validate your
            chain.
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
