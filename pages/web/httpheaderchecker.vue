<template>
  <div class="min-h-screen text-[#1f2937] ">
    <div class="max-w-3xl  mx-auto">
      


      <h1 class="text-[3rem] font-medium text-[#111827] mb-4">
        HTTP Header Checker
      </h1>
      <h2 class="text-[#73737F] uppercase tracking-wide mb-4">
        VERIFY BROTLI COMPRESSION SUPPORT
      </h2>

      <div class="mb-12">
        <div class="flex flex-col gap-4">
          
          <div class="w-full">
            <label class="block font-medium text-gray-900 mb-2">
              URL
            </label>
            <input
              type="text"
              placeholder="e.g. https://www.example.com"
              class="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
            />
          </div>

          <div class="flex flex-col md:flex-row gap-4">
            <div class="w-full md:w-1/2">
              <label class="block font-medium text-gray-900 mb-2">
                Referer (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. https://www.example.com"
                class="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
              />
            </div>
            <div class="w-full md:w-1/2">
              <label class="block font-medium text-gray-900 mb-2">
                X-Pull (optional)
              </label>
              <input
                type="text"
                placeholder="Frankfurt"
                class="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
              />
            </div>
          </div>

          <div class="flex flex-wrap gap-6 mt-2 mb-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="w-4 h-4 border-gray-300 rounded focus:ring-blue-500">
              <span class="text-gray-900 font-medium">Brotli</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="w-4 h-4 border-gray-300 rounded focus:ring-blue-500">
              <span class="text-gray-900 font-medium">Gzip</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="w-4 h-4 border-gray-300 rounded focus:ring-blue-500">
              <span class="text-gray-900 font-medium">Time</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="w-4 h-4 border-gray-300 rounded focus:ring-blue-500">
              <span class="text-gray-900 font-medium">Download</span>
            </label>
          </div>

          <div >
            <button
              class="bg-[#007bff] hover:bg-[#0088FF] text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm  md:w-[100px]"
            >
              Test
            </button>
          </div>

        </div>
      </div>

      <h2 class="text-[2rem] mb-10 font-semibold text-[#111827]">
        HTTP Header Checker FAQ
      </h2>

      <div class="flex flex-col md:flex-row gap-10 mb-12">
        
        <div class="w-full md:w-1/2 flex flex-col gap-8">
          
          <div class="text-[#73737F] leading-relaxed">
            <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
              What is the HTTP Header Checker tool?
            </h3>
            <p class="text-[15px] mb-4">
              The HTTP Header Checker tool is an online curl test. It allows the HTTP response headers of any URL to be analyzed. Optionally send custom Referer and X-Pull request headers as well as content encoding options, like Brotli and Gzip. The results returned will give the complete curl output.
            </p>
            <p class="text-[15px]">
              The HTTP Header Checker tool can be used to verify server configurations, like checking whether or not hotlink protection and file compression has been set up correctly.
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

        </div>

      </div>
    </div>
  </div>
 <ClientOnly>
   <Teleport to="#full-width-section">
  <svg
    class="image-processing-bg"
    width="691"
    height="202"
    viewBox="0 0 691 202"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M662.785 573.706C685.376 425.8 661.407 281.837 590.396 218.417C507.73 144.588 361.315 179.909 150.391 445.226C271.485 -512.328 -184.359 515.654 -66.8792 60.2144"
      stroke="#EEEEF0"
      stroke-width="40"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</Teleport>
</ClientOnly>

</template>

<style scoped>
input[type="checkbox"] {
  accent-color: #2563eb;
  /* Basic styling reset for better cross-browser consistency if needed, 
     though standard checkboxes usually render fine. */
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

p, ol, ul, pre, code {
  font-family: inter;
}

</style>