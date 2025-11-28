<template>
  <div class="min-h-screen bg-white text-[#1f2937] p-6 md:p-12">
    <div class="max-w-3xl  mx-auto">
      
        
      <button
        class="tools-btn shadow-md gap-2 mb-4 rounded-[2rem] flex items-center"
      >
        <span class="tools-icon"></span>
        Tools
      </button>

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
</style>