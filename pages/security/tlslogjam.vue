<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/common/AccessAllFeatures.vue';

</script>

<template>
  <div class="min-h-screen  text-[#1f2937] ">
    <div class="max-w-3xl mx-auto">
      
     
      <h1 class="text-[2rem] md:text-5xl font-semibold mt-2 mb-4">TLS Logjam Test</h1>
      <h2 class="text-[#73737F] md:text-[1rem] mt-4 text-[14px] max-w-2xl mb-4">
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
          <p class="text-[13px] md:text-[1rem]">
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
          <p class="text-[13px] md:text-[1rem] mb-6">
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

p, ol, ul, pre, code {
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
