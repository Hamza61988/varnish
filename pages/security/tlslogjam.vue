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
      <h1 class="text-[3rem] font-medium text-[#111827]">TLS Logjam Test</h1>
      <h2 class="text-[#73737F] font-medium uppercase tracking-wide mb-4">
        CVE-2015-4000
      </h2>
      <div
        class="w-full max-w-3xl mb-[3.4375rem] flex items-center gap-5 rounded-xl"
      >
        <div class="flex-1">
          <label class="block mb-1 text-sm font-medium">Hostname</label>
          <input
            type="text"
            placeholder="e.g. www.example.com"
            class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium">Weak Ciphers</label>
          <div class="flex gap-2">
            <select
              class="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>hide</option>
              <option>hide 2</option>
              <option>hide 3</option>
            </select>
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow"
            >
              Test
            </button>
          </div>
        </div>
      </div>
      <h2 class="text-[2rem] font-semibold text-[#111827] mb-6">
        TLS Logjam Test FAQ
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#73737F] leading-relaxed mb-12"
      >
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            What is the Logjam TLS attack?
          </h3>
          <p class="text-[15px]">
            The Logjam attack (CVE-2015-4000) is against the TLS Protocol. That
            means it affects services that are using TLS. The attack gives a
            man-in-the-middle attacker the possibility to downgrade weak TLS
            connections to 512-bit exchange key cryptography. The attacker can
            read and manipulate the data, which is transferred between the peers
            using a TLS "secured" connection. The attack has similarities to the
            <span class="underline cursor-pointer">FREAK attack</span>, but it
            is important to note that this is a flaw in the TLS protocol and not
            a vulnerability due to the implementation itself. It attacks a
            Diffie-Hellman (DH) key exchange. A server, respectively the
            services using TLS, that allows (have configured) DHE_EXPORT ciphers
            can be attacked. This impacts also all modern web browsers.
            According to the researchers are 8.4% of the "Top 1 Million" domains
            affected. <br /><br />
            Read more about the
            <span class="underline cursor-pointer">Logjam TLS attack</span>.
          </p>
        </div>
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            How to eliminate Logjam vulnerability?
          </h3>
          <p class="text-[15px] mb-6">
            Remove the weak ciphers from the accepted cipher list. This need to
            be done for each service that uses TLS (e.g. Apache, nginx,
            lighttpd, postfix, dovecot, sendmail, Microsoft IIS, etc). Detailed
            configuration examples could be found here:
            <span class="underline cursor-pointer"
              >Guide to Deploying Diffie-Hellman for TLS</span
            >
          </p>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            How to test Logjam via command line?
          </h3>
          <div class="grid grid-cols-1 gap-6 text-[#73737F]">
            <div>
              <p class="font-semibold text-[#1f2937] mb-2">OpenSSL:</p>
              <div
                class="border rounded-lg p-4 bg-gray-50 text-[14px] break-all"
              >
                openssl s_client -connect www.example.com:443 -cipher 'EXP'
              </div>
            </div>
            <div>
              <p class="font-semibold text-[#1f2937] mb-2">nmap:</p>
              <div
                class="border rounded-lg p-4 bg-gray-50 text-[14px] break-all"
              >
                nmap --script ssl-enum-ciphers -p 443 www.example.com
              </div>
            </div>
          </div>
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
