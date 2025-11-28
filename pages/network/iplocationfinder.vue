<template>
  <div class="min-h-screen bg-white text-[#1f2937] p-6  md:p-12 ">
    <div class="max-w-3xl mb-4 mx-auto flex flex-col gap-6">
      
      <div class="flex flex-col mb-4 gap-6">
        
        <div class="flex items-start flex-col gap-4">
          <button
            class="tools-btn shadow-md gap-2 rounded-[2rem] flex items-center w-fit"
          >
            <span class="tools-icon"></span>
            Tools
          </button>

          <div class="flex flex-col gap-2">
            <h1 class="text-[3rem] font-medium text-[#111827]">
             IP Location Finder
            </h1>
           <p class="text-[15px] text-[#73737F] leading-relaxed">
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
    

        <div class="bg-[#D9D9D938] rounded-[1rem] p-[0.625rem]  w-full  text-gray-900">

  <div class="mb-[2rem]">
    <span class="block uppercase text-gray-500 text-[0.875rem] mb-[1rem]">Location</span>
    
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
      <p class="text-[1rem] font-normal">32.6844 (lat) / 73.0479 (long)</p>
      
      <h2 class="text-[1rem] font-bold">Time</h2>
      <p class="text-[1rem] font-normal">2025-11-17 11:28:52 (Asia/Karachi)</p>
    </div>
  </div>

  <div>
    <span class="block uppercase text-gray-500 text-[0.875rem] mb-[1rem]">Network</span>
    
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
   <NuxtImg src="/images/Network/map.svg" class="w-full" alt="map" ></NuxtImg>
</div>

<div class="max-w-[60rem] mx-auto   text-gray-600">

  <div class="mb-[4rem]">
    <h1 class="text-[2rem] font-bold text-gray-900 mb-[2.5rem]">IP Location Finder FAQ</h1>


    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[3rem] gap-y-[2.5rem]">
      
      <div>
        <div class="mb-[2rem]">
          <h2 class="text-[1.25rem] font-bold text-gray-900 mb-[0.75rem]">What is IP Geolocation?</h2>
          <p class="text-[1rem] leading-[1.6]">
            IP geolocation is the mapping of an IP address to the geographic location of the internet from the connected device. By geographically mapping the IP address, it provides you with location information such as the country, state, city, zip code, latitude/longitude, ISP, area code, and other information.
          </p>
        </div>

        <div>
          <h2 class="text-[1.25rem] font-bold text-gray-900 mb-[0.75rem]">How does the IP lookup work?</h2>
          <p class="text-[1rem] leading-[1.6] mb-[1rem]">
            <a href="#" class="underline decoration-dotted text-gray-800 hover:text-blue-600">ARIN's WHOIS</a> service gives contact and registration information for the IP address lookup and is freely available to access. When a company acquires a block of IP addresses, a request is submitted and then those IPs are assigned to the requested ISP.
          </p>
          <p class="text-[1rem] leading-[1.6]">
            The IP geolocation data gets updated automatically based on the databases of the regional Internet registry (RIR). <span class="font-bold text-gray-800">Manual updates are not possible.</span>
          </p>
        </div>
      </div>

      <div>
        <div class="mb-[2rem]">
          <h2 class="text-[1.25rem] font-bold text-gray-900 mb-[0.75rem]">How accurate is IP Geolocation?</h2>
          <p class="text-[1rem] leading-[1.6]">
            There are many different IP location databases in which you can pull from. Most vendors claim a 98% or higher accuracy. IP mapping to specific cities can sometimes vary slightly based upon the location of the nearest ISP provider's network hub.
          </p>
        </div>

        <div>
          <h2 class="text-[1.25rem] font-bold text-gray-900 mb-[0.75rem]">Does it support IPv6 location lookups?</h2>
          <p class="text-[1rem] leading-[1.6]">
            Yes, IPv6 geoaction is supported as well. Just enter a valid address above to perform the IPv6 lookup.
          </p>
        </div>
      </div>

    </div>
  </div>



  <div>
    <h1 class="text-[2rem] font-bold text-gray-900 mb-[1.5rem]">IP Location Finder API</h1>
    
    <p class="text-[1rem] leading-[1.6] mb-[1.5rem]">
      Get the IP geolocation data through the simple REST API. All the responses are JSON encoded. We are rate limiting requests (3r/s) to avoid overload of the system.
    </p>

    <p class="text-[1rem] leading-[1.6] mb-[1.5rem]">
      Please note that the use of this service requires a link back in your project: [IP Location Finder by KeyCDN](https://tools.keycdn.com/geo)
    </p>

    <p class="text-[1rem] leading-[1.6] mb-[2rem]">
      It is required to set the request header User-Agent in the format keycdn-tools:https://.*, which must include the website you are using the API for. Missing attributions or invalid values will be blocked.
    </p>

    <div class="bg-gray-100 rounded-[0.25rem] p-[0.75rem] flex items-center font-mono text-[0.875rem] mb-[3rem] overflow-x-auto">
      <span class="bg-[#d1e7dd] text-[#0f5132] px-[0.4rem] py-[0.1rem] rounded-[0.2rem] font-bold mr-[1rem] text-[0.75rem]">GET</span>
      <span class="text-gray-600">https://tools.keycdn.com/geo.json?host=</span>
      <span class="bg-[#fff3cd] px-[0.2rem]"> {IP or hostname} </span>
    </div>

    <h2 class="text-[1.5625rem] font-bold text-gray-900 mb-[1.5rem]">Request Parameters</h2>
    
    <div class="w-full text-left">
      <div class="grid grid-cols-3 border-b border-gray-200 pb-[0.5rem] mb-[1rem]">
        <span class="text-[0.75rem] font-bold text-gray-400 uppercase">Parameter</span>
        <span class="text-[0.75rem] font-bold text-gray-400 uppercase">Value</span>
        <span class="text-[0.75rem] font-bold text-gray-400 uppercase">Default</span>
      </div>

      <div class="grid grid-cols-3">
        <div>
          <p class="text-[1rem] font-bold text-gray-900">host</p>
          <p class="text-[0.875rem] text-gray-500">required</p>
        </div>
        <div class="text-[1rem] pt-[0.2rem]">
          {alphanumeric}
        </div>
        <div>
          </div>
      </div>
    </div>

  </div>

</div>

<div class="max-w-[60rem] mx-auto   text-gray-900">

  <div class="mb-[4rem]">
    <h2 class="text-[25px] font-bold mb-[1.5rem]">Response Parameters</h2>

    <div class="text-[1rem]  text-gray-400 uppercase mb-[0.5rem]">
      Parameter
    </div>

    <div class="border-t border-gray-200">
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">host</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">ip</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">rdns</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">asn</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">country_name</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">country_code</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">region_name</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">region_code</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">city</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">postal_code</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">continent_code</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">latitude</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">longitude</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">metro_code</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">timezone</div>
      <div class="border-b border-gray-200 py-[0.75rem] text-[1rem]">datetime</div>
    </div>
  </div>

  <div>
    <h2 class="text-[25px] font-bold mb-[1.5rem]">Example</h2>

    <div class="flex text-[0.875rem]">
      <button class="bg-[#f0f7ff] text-[#3b82f6] px-[1.5rem] py-[0.5rem] font-medium">
        Request
      </button>
      <button class="bg-[#f9fafb] text-gray-500 px-[1.5rem] py-[0.5rem] font-medium hover:bg-gray-100">
        Response
      </button>
    </div>

    <div class="bg-[#f9fafb] p-[1.5rem] overflow-x-auto">
      <code class="font-mono text-[0.875rem] text-gray-600 whitespace-nowrap block">
        $ curl -H "User-Agent: keycdn-tools:https://www.example.com" "https://tools.keycdn.com/geo.json?host=www.example.com"
      </code>
    </div>
  </div>

</div>
    </div>
  </div>


  <section
    class="relative overflow-hidden pt-4 mt-4 bg-white h-[450px] sm:h-[550px] md:h-[620px] lg:h-[676px] w-full"
    style="background-color: #f7f7f8"
  >
    <div
      class="absolute inset-0 pointer-events-none overflow-hidden"
      style="z-index: 0"
    >
      <img
        src="/images/2ndlast_section2.svg"
        alt=""
        class="absolute opacity-30 bottom-0 right-0 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[600px] h-auto"
      />
    </div>
    <div class="m-auto relative z-10 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%]">
      <div
        class="bg-[#1A1925] text-center relative h-[240px] sm:h-[280px] md:h-[320px] lg:h-[356px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[35px]"
      >
        <div
          class="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6 pt-3 sm:pt-4 md:pt-5 lg:pt-[5%]"
        >
          <div
            class="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 lg:px-4 py-0.5 sm:py-0.75 md:py-1 bg-[#FFFFFFE5] rounded-full text-xs sm:text-xs md:text-sm font-medium text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 color-[#A3A3AE] fill-[#A3A3AE]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span class="text-[#1A1925] ml-1">Lets Get Started</span>
          </div>
        </div>
        <h2
          class="relative text-white mb-2 sm:mb-3 md:mb-4 cta-heading"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 600;
            letter-spacing: -0.04em;
            text-align: center;
            text-transform: capitalize;
            color: #ffffff;
          "
        >
          Access All Features
        </h2>
        <p
          class="relative mb-4 sm:mb-5 md:mb-6 lg:mb-8 cta-subtitle"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            letter-spacing: -0.011em;
            text-align: center;
            color: #51515e;
          "
        >
          Get started with a free 14 day trial, no credit card required.
        </p>
        <div
          class="relative flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-3 sm:mb-4 md:mb-5 cta-metrics"
        >
          <span
            class="cta-metric-text"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
            >120 Employes</span
          >
          <span class="text-gray-600 text-xs sm:text-sm md:text-base">•</span>
          <span
            class="cta-metric-text"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
            >$31.5M Raised</span
          >
          <span class="text-gray-600 text-xs sm:text-sm md:text-base">•</span>
          <span
            class="cta-metric-text"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
            >7 Years old</span
          >
        </div>
        <div class="relative pb-4 sm:pb-5 md:pb-6 lg:pb-[15%]">
          <button
            class="bg-[#0088FF] text-white rounded-lg hover:bg-[#0088FF] transition-colors shadow-lg hover:shadow-xl w-[125px] sm:w-[135px] md:w-[145px] lg:w-[153px] h-[30px] sm:h-[32px] md:h-[34px] lg:h-[36px] opacity-100"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
          >
            <span
              class="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] leading-tight"
              >Get Started ~ Free</span
            >
          </button>
        </div>
      </div>
    </div>
  </section>
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