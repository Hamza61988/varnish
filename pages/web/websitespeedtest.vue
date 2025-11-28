<template>
  <div class="min-h-screen bg-white text-[#1f2937] p-6 md:p-12 ">
  <div class="max-w-3xl mx-auto ">
    
    <h1 class="text-[3rem] font-medium text-[#111827] mb-4">
      Website Speed Test
    </h1>
    <h2 class="text-[#73737F]  uppercase tracking-wide mb-4">
      Full page speed test
    </h2>
  
    <div class="mb-12">
      <div class="flex flex-col md:flex-row gap-4 items-end">
        
        <div class="flex-grow w-full">
          <label class="block font-medium text-gray-900 mb-2">
            URL
          </label>
          <input
            type="text"
            placeholder="e.g. https://www.example.com"
            class="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
          />
        </div>
  
        <div class="w-full md:w-48">
          <label class="block font-medium text-gray-900 mb-2">
            Location
          </label>
          <div class="relative">
            <select class="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none text-gray-700">
              <option>Frankfurt</option>
              <option>London</option>
              <option>New York</option>
              <option>Singapore</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
  
        <button
          class="bg-[#007bff] hover:bg-[#0088FF] text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm w-full md:w-auto"
        >
          Test
        </button>
      </div>
    </div>
  
    <h2 class="text-[2rem] mb-10 font-semibold text-[#111827]">
      Website Speed Test FAQ
    </h2>
  
    <div class="flex flex-col md:flex-row gap-10 mb-12">
      
      <div class="w-full md:w-1/2 flex flex-col gap-8">
        
        <div class="text-[#73737F] leading-relaxed">
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            What is the Website Speed Test tool?
          </h3>
          <p class="text-[15px] mb-4">
            The Website Speed Test tool is a full page speed test that can be performed from 10 different locations around the world. It allows the performance of any HTML page to be tested and measured. The results returned will give a breakdown of the requests, content size, and loading time. In addition there is a complete waterfall that details the timings and HTTP headers of each asset.
          </p>
          <p class="text-[15px]">
            The Website Speed Test tool can be used to evaluate the performance of your website to see where improvements can be made. Consider adding KeyCDN to your stack to significantly reduce the latency of your website.
          </p>
        </div>
  
      </div>
  
      <div class="w-full md:w-1/2 text-[#73737F] leading-relaxed flex flex-col gap-8">
        
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            What HTTP status codes are there?
          </h3>
          <div class="space-y-2 text-[15px]">
             <div class="flex items-center gap-3">
                <span class="bg-[#d1e7dd] text-[#0f5132] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center">2xx</span>
                <span>Successful</span>
             </div>
             <div class="flex items-center gap-3">
                <span class="bg-[#e2d9f3] text-[#4c1d95] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center">3xx</span>
                <span>Redirection</span>
             </div>
             <div class="flex items-center gap-3">
                <span class="bg-[#ffedd5] text-[#9a3412] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center">4xx</span>
                <span>Client error</span>
             </div>
             <div class="flex items-center gap-3">
                <span class="bg-[#fee2e2] text-[#991b1b] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center">5xx</span>
                <span>Server error</span>
             </div>
             <div class="flex items-center gap-3">
                <span class="bg-[#fecaca] text-[#7f1d1d] px-2 py-0.5 rounded text-sm font-mono w-[3.5rem] text-center">error</span>
                <span>Connection error</span>
             </div>
          </div>
        </div>
  
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            What content types are there?
          </h3>
          <div class="space-y-2 text-[15px]">
            <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                <span>HTML page</span>
            </div>
            <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span>JavaScript file</span>
            </div>
            <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                <span>CSS file</span>
            </div>
            <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>Image file</span>
            </div>
            <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Video file</span>
            </div>
            <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                <span>Font file</span>
            </div>
            <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                <span>Other file</span>
            </div>
          </div>
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
          <span class=" text-xs sm:text-sm md:text-base">•</span>
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
          <span class=" text-xs sm:text-sm md:text-base">•</span>
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