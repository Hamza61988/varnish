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
              BGP Looking Glass
            </h1>
            <h2 class="text-[#73737F] font-medium uppercase tracking-wide">
              Directory
            </h2>
          </div>
        </div>

        <p class="text-[15px] text-[#73737F] leading-relaxed">
          A comprehensive list of BGP looking glass servers located in various
          geographic regions.
        </p>
      </div>

      <div class="flex mb-4 flex-col gap-10">
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            What Is BGP Looking Glass?
          </h3>
          <p class="text-[15px] text-[#73737F] leading-relaxed">
            
            BGP, also known as Border Gateway Protocol, is the routing protocol
            of the Internet. A BGP looking glass tool is software installed on a
            looking glass server which can be accessed remotely to provide
            routing information. The looking glass servers access routers, which
            belong to the looking glass service provider, and return information
            regarding BGP routing tables. This information is used for verifying
            routes are properly configured and propagated.
          </p>
        </div>

        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            How Do I Use BGP Looking Glass?
          </h3>
          <p class="text-[15px] text-[#73737F] leading-relaxed">
            Many looking glass tools also come with the option to perform a
            traceroute command, ping command, etc. Ensure that you have selected
            the BGP option and enter the IP address you wish to test against in
            the query or argument field. The BGP looking glass tool will then
            return an output which displays the amount of available paths and
            best paths from the router's network to your defined network.
            Additionally, it will also display the path the router would take to
            get to your AS (autonomous system).
          </p>
        </div>

        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            BGP Looking Glass Directory
          </h3>
          <p class="text-[15px] text-[#73737F] leading-relaxed">
            The list below is a compilation of BGP looking glass services
            located in various geographic regions that can be used to test BGP
            routing.
          </p>
        </div>
      </div>

      <div>
        <div
          class="  text-[#73737F] uppercase tracking-wider mb-2"
        >
          Directory
        </div>
        <div class="border-t border-gray-100">
          <ul class="text-[#73737F] text-[15px]">
            <li class="py-4 border-b border-gray-100">Arelion (AS1299)</li>
            <li class="py-4 border-b border-gray-100">NTT (AS2914)</li>
            <li class="py-4 border-b border-gray-100">
              Hurricane Electric (AS6939)
            </li>
            <li class="py-4 border-b border-gray-100">Lumen (AS209)</li>
            <li class="py-4 border-b border-gray-100">Cogent (AS174)</li>
            <li class="py-4 border-b border-gray-100">SWITCH (AS559)</li>
            <li class="py-4 border-b border-gray-100">Init7 AG (AS13030)</li>
            <li class="py-4 border-b border-gray-100">Sunrise (AS6730)</li>
            <li class="py-4 border-b border-gray-100">CERN (AS513)</li>
            <li class="py-4 border-b border-gray-100">DFN/WIN (AS680)</li>
            <li class="py-4 border-b border-gray-100">Telus (AS852)</li>
            <li class="py-4 border-b border-gray-100">
              BT Global Services (AS5400)
            </li>
            <li class="py-4 border-b border-gray-100">TDC (AS3292)</li>
            <li class="py-4 border-b border-gray-100">Internode (AS4739)</li>
            <li class="py-4 border-b border-gray-100">
              Sakura Internet (AS9370)
            </li>
            <li class="py-4 border-b border-gray-100">
              Neotelecoms/Eunetworks (AS8218)
            </li>
            <li class="py-4 border-b border-gray-100">Powertel (AS9837)</li>
            <li class="py-4 border-b border-gray-100">
              Business Internet Trends (AS12859)
            </li>
            <li class="py-4 border-b border-gray-100">
              RHnet - Iceland University Research Network (AS15474)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

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