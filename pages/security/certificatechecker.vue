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
      <h1 class="text-[3rem] font-medium text-[#111827]">Certificate Chain</h1>
      <h2 class="text-[#73737F] font-medium uppercase tracking-wide mb-4">
        Certificate decoder
      </h2>

      <div class="mt-4 mb-[20px]">
        <p class="text-[15px]">Certificate (PEM format)</p>

       <div class="mt-2">
        <textarea
  placeholder="-----BEGIN CERTIFICATE-----
Certificate
----END CERTIFICATE-----
----BEGIN CERTIFICATE-----
Intermediate certificate
-----END CERTIFICATE-----"
   class="border text-[#73737F] focus:outline-none focus:ring-blue-500 focus:ring-2 rounded-lg p-4 h-[16rem] w-full text-[14px] resize-none"
  ></textarea>
        </div>

        <button
          class="bg-blue-500 mt-4 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          Check
        </button>
      </div>

      <h2 class="text-[2rem] font-semibold text-[#111827] mb-6">
        Certificate Checker FAQ
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#73737F] leading-relaxed mb-4"
      >
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            What are Intermediate Certificates?
          </h3>
          <p class="text-[15px]">
            The list of SSL certificates, from the root certificate to the
            end-user certificate, represents an SSL certificate chain, or
            intermediate certificate. These must be installed to a web server
            with a primary certificate so that your browser can link it to a
            trusted authority. They are used in <a class="underline">Custom SSL</a>  zone configurations.
          </p>

          <p class="mt-2">
            You can use the tool above to decode your SSL certificate to check
            if you are missing an intermediate certificate.
          </p>
        </div>
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937]">
            Missing Intermediate SSL certificate?
          </h3>
          <p class="text-[15px] mb-6">
            If you don't install an intermediate SSL certificate web browsers
            will display an "Invalid certificate" or "certificate not trusted"
            error. You can use our <a class="underline">Certificate Chain Composer</a> tool to get your
            intermediate certificates.
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
