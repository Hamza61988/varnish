<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/sections/AccessAllFeaturesSection.vue";
</script>

<template>
  <div class="min-h-screen text-[#1f2937]">
    <div class="md:max-w-lg lg:max-w-3xl mb-4 mx-auto flex flex-col gap-6">
      <div class="flex flex-col mb-4 gap-6">
        <div class="flex items-start flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h1 class="text-[2rem] md:text-5xl font-semibold mt-2 mb-4">
              IP Location Finder
            </h1>
            <p class="text-[13px] md:text-[1rem] text-[#73737F] leading-relaxed">
              IP lookup or IP address lookup with detailed IP geolocation data
            </p>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium text-gray-900 mb-2">
          IP Address Or Hostname
        </label>
        <div class="flex gap-4 justify-between">
          <input
            type="text"
            placeholder="e.g. https://www.example.com"
            class="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
          />

          <button
            class="bg-[#007bff] hover:bg-[#0088FF] text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm whitespace-nowrap"
          >
            Test
          </button>
        </div>
      </div>

      <div
        class="bg-[#D9D9D938] rounded-[1rem] p-[0.625rem] w-full text-gray-900"
      >
        <div class="mb-[2rem]">
          <span class="block uppercase text-gray-500 text-[0.875rem] mb-[1rem]"
            >Location</span
          >

          <div class="grid grid-cols-[12rem_1fr] gap-y-[0.5rem]">
            <h2 class="text-[1rem] font-bold">City</h2>
            <p class="text-[1rem] font-normal">Lahore</p>

            <h2 class="text-[1rem] font-bold">Region</h2>
            <p class="text-[1rem] font-normal">Punjab (PB)</p>

            <h2 class="text-[1rem] font-bold">Postal code</h2>
            <p class="text-[1rem] font-normal">53000</p>

            <h2 class="text-[1rem] font-bold">Country</h2>
            <p class="text-[1rem] font-normal">Pakistan (PK)</p>

            <h2 class="text-[1rem] font-bold">Continent</h2>
            <p class="text-[1rem] font-normal">Asia (AS)</p>

            <h2 class="text-[1rem] font-bold">Coordinates</h2>
            <p class="text-[1rem] font-normal">
              32.6844 (lat) / 73.0479 (long)
            </p>

            <h2 class="text-[1rem] font-bold">Time</h2>
            <p class="text-[1rem] font-normal">
              2025-11-17 11:28:52 (Asia/Karachi)
            </p>
          </div>
        </div>

        <div>
          <span class="block uppercase text-gray-500 text-[0.875rem] mb-[1rem]"
            >Network</span
          >

          <div class="grid grid-cols-[12rem_1fr] gap-y-[0.5rem]">
            <h2 class="text-[1rem] font-bold">IP address</h2>
            <p class="text-[1rem] font-normal">39.37.188.120</p>

            <h2 class="text-[1rem] font-bold">Hostname</h2>
            <p class="text-[1rem] font-normal">39.37.188.120</p>

            <h2 class="text-[1rem] font-bold">Provider</h2>
            <p class="text-[1rem] font-normal">Pakistan Telecommunication</p>

            <h2 class="text-[1rem] font-bold">ASN</h2>
            <p class="text-[1rem] font-normal">12345</p>
          </div>
        </div>
      </div>

      <div>
        <NuxtImg
          src="/images/Network/map.svg"
          class="w-full"
          alt="map"
        ></NuxtImg>
      </div>

      <div class="max-w-[60rem] mx-auto text-gray-600">
        <div class="mb-[4rem]">
          <h1 class="text-[2rem] font-bold text-gray-900 mb-[2.5rem]">
            IP Location Finder FAQ
          </h1>

          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-x-[3rem] gap-y-[2.5rem]"
          >
            <div>
              <div class="mb-[2rem]">
                <h2 class="text-[1.25rem] font-bold text-gray-900 mb-[0.75rem]">
                  What is IP Geolocation?
                </h2>
                <p class="text-[13px] md:text-[1rem] leading-[1.6]">
                  IP geolocation is the mapping of an IP address to the
                  geographic location of the internet from the connected device.
                  By geographically mapping the IP address, it provides you with
                  location information such as the country, state, city, zip
                  code, latitude/longitude, ISP, area code, and other
                  information.
                </p>
              </div>

              <div>
                <h2 class="text-[1.25rem] font-bold text-gray-900 mb-[0.75rem]">
                  How does the IP lookup work?
                </h2>
                <p class="text-[13px] md:text-[1rem] leading-[1.6] mb-[1rem]">
                  <a
                    href="#"
                    class="underline decoration-dotted text-gray-800 hover:text-blue-600"
                    >ARIN's WHOIS</a
                  >
                  service gives contact and registration information for the IP
                  address lookup and is freely available to access. When a
                  company acquires a block of IP addresses, a request is
                  submitted and then those IPs are assigned to the requested
                  ISP.
                </p>
                <p class="text-[13px] md:text-[1rem] leading-[1.6]">
                  The IP geolocation data gets updated automatically based on
                  the databases of the regional Internet registry (RIR).
                  <span class="font-bold text-gray-800"
                    >Manual updates are not possible.</span
                  >
                </p>
              </div>
            </div>

            <div>
              <div class="mb-[2rem]">
                <h2 class="text-[1.25rem] font-bold text-gray-900 mb-[0.75rem]">
                  How accurate is IP Geolocation?
                </h2>
                <p class="text-[13px] md:text-[1rem] leading-[1.6]">
                  There are many different IP location databases in which you
                  can pull from. Most vendors claim a 98% or higher accuracy. IP
                  mapping to specific cities can sometimes vary slightly based
                  upon the location of the nearest ISP provider's network hub.
                </p>
              </div>

              <div>
                <h2 class="text-[1.25rem] font-bold text-gray-900 mb-[0.75rem]">
                  Does it support IPv6 location lookups?
                </h2>
                <p class="text-[13px] md:text-[1rem] leading-[1.6]">
                  Yes, IPv6 geoaction is supported as well. Just enter a valid
                  address above to perform the IPv6 lookup.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 class="text-[2rem] font-bold text-gray-900 mb-[1.5rem]">
            IP Location Finder API
          </h1>

          <p class="text-[13px] md:text-[1rem] leading-[1.6] mb-[1.5rem]">
            Get the IP geolocation data through the simple REST API. All the
            responses are JSON encoded. We are rate limiting requests (3r/s) to
            avoid overload of the system.
          </p>

          <p class="text-[13px] md:text-[1rem] leading-[1.6] mb-[1.5rem]">
            Please note that the use of this service requires a link back in
            your project: [IP Location Finder by
            KeyCDN](https://tools.keycdn.com/geo)
          </p>

          <p class="text-[13px] md:text-[1rem] leading-[1.6] mb-[2rem]">
            It is required to set the request header User-Agent in the format
            keycdn-tools:https://.*, which must include the website you are
            using the API for. Missing attributions or invalid values will be
            blocked.
          </p>

          <div
            class="bg-gray-100 rounded-[0.25rem] p-[0.75rem] flex items-center font-mono text-[0.875rem] mb-[3rem] overflow-x-auto"
          >
            <span
              class="bg-[#d1e7dd] text-[#0f5132] px-[0.4rem] py-[0.1rem] rounded-[0.2rem] font-bold mr-[1rem] text-[0.75rem]"
              >GET</span
            >
            <p class="text-gray-600"
              >https://tools.keycdn.com/geo.json?host=</p
            >
            <span class="bg-[#fff3cd] px-[0.2rem]"> {IP or hostname} </span>
          </div>

          <h2 class="text-[1.5625rem] font-bold text-gray-900 mb-[1.5rem]">
            Request Parameters
          </h2>

          <div class="w-full text-left">
            <div
              class="grid grid-cols-3 border-b border-gray-200 pb-[0.5rem] mb-[1rem]"
            >
              <span class="text-[0.75rem] font-bold text-gray-400 uppercase"
                >Parameter</span
              >
              <span class="text-[0.75rem] font-bold text-gray-400 uppercase"
                >Value</span
              >
              <span class="text-[0.75rem] font-bold text-gray-400 uppercase"
                >Default</span
              >
            </div>

            <div class="grid grid-cols-3">
              <div>
                <p class="text-[1rem] font-bold text-gray-900">host</p>
                <p class="text-[0.875rem] text-gray-500">required</p>
              </div>
              <div class="text-[1rem] pt-[0.2rem]">{alphanumeric}</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-[60rem] mx-auto text-gray-900">
        <div class="mb-[4rem]">
          <h2 class="text-[25px] font-bold mb-[1.5rem]">Response Parameters</h2>

          <div class="text-[1rem] text-gray-400 uppercase mb-[0.5rem]">
            Parameter
          </div>

          <div class="border-t border-gray-200">
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              host
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              ip
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              rdns
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              asn
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              country_name
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              country_code
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              region_name
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              region_code
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              city
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              postal_code
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              continent_code
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              latitude
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              longitude
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              metro_code
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              timezone
            </div>
            <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">
              datetime
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-[25px] font-bold mb-[1.5rem]">Example</h2>

          <div class="flex text-[0.875rem]">
            <button
              class="bg-[#f0f7ff] text-[#3b82f6] px-[1.5rem] py-[0.5rem] font-medium"
            >
              Request
            </button>
            <button
              class="bg-[#f9fafb] text-gray-500 px-[1.5rem] py-[0.5rem] font-medium hover:bg-gray-100"
            >
              Response
            </button>
          </div>

          <div class="bg-[#f9fafb] p-[1.5rem] overflow-x-auto">
            <code
              class="font-mono text-[0.875rem] text-gray-600 whitespace-nowrap block"
            >
              $ curl -H "User-Agent: keycdn-tools:https://www.example.com"
              "https://tools.keycdn.com/geo.json?host=www.example.com"
            </code>
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
  overflow-wrap: break-word;
  white-space: pre-wrap;

}

p{
    max-width: 90%;
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
