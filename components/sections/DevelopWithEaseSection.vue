<template>
  <section
    class="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24"
    style="background: #f7f7f8; overflow-x: hidden;"
  >
    <div class="max-w-6xl mx-auto">
      <div class="mb-8 sm:mb-10 md:mb-12">
        <div class="flex items-center justify-start mb-4 sm:mb-6">
          <div
            class="flex items-center"
            style="
              height: 24px;
              gap: 2px;
              border-radius: 999px;
              padding: 4px 8px;
              background: #ffffffe5;
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A3A3AE"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="min-width: 16px; min-height: 16px"
            >
              <path
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
            <span
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                color: #1a1925;
              "
            >
              Develop
            </span>
          </div>
        </div>

        <h2
          class="mb-3 sm:mb-4"
          style="
            font-family: 'Funnel Display', sans-serif;
            font-weight: 500;
            font-style: SemiBold;
            font-size: 48px;
            line-height: 56px;
            letter-spacing: -0.04em;
            text-transform: capitalize;
            color: #1a1925;
          "
        >
          Develop With Ease
        </h2>

        <p
          class="text-sm md:text-base mb-8 sm:mb-10"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-style: Regular;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            color: #51515e;
          "
        >
          Complete account control with our RESTful API.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        <div class="flex flex-col gap-4 justify-between order-2 lg:order-1 min-w-0">
          
          <div
            @click="activeTab = 'zones'"
            class="rounded-xl p-4 sm:p-8 shadow-sm h-auto lg:h-[124px] cursor-pointer transition-all duration-200 flex items-center"
            :style="{
              borderRadius: '16px',
              background: activeTab === 'zones' ? '#ffffff' : '#f3f4f6',
              border: activeTab === 'zones' ? '1px solid #e0e7ff' : '1px solid transparent',
              boxShadow: activeTab === 'zones' ? '0px 1px 3px 0px rgba(0, 0, 0, 0.1)' : 'none'
            }"
          >
            <div class="flex items-start gap-4 pointer-events-none w-full">
              <div class="flex-shrink-0 relative mt-1">
                <div
                  style="
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    box-shadow: 0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.12) inset,
                      0px 1px 1px 0px rgba(255, 255, 255, 0.08) inset,
                      0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
                      0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset;
                  "
                >
                  <img
                    src="/images/about/IconCareer.svg"
                    alt="Zone management icon"
                    style="width: 20px; height: 20px; display: block"
                  />
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="truncate"
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 24px;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Zone management
                </h3>
                <p
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #73737f;
                  "
                >
                  Add, edit, and delete Zones. Configure each Zone for optimal
                  performance.
                </p>
              </div>
            </div>
          </div>

          <div
            @click="activeTab = 'purge'"
            class="rounded-xl p-4 sm:p-8 shadow-sm h-auto lg:h-[124px] cursor-pointer transition-all duration-200 flex items-center"
            :style="{
              borderRadius: '16px',
              background: activeTab === 'purge' ? '#ffffff' : '#f3f4f6',
              border: activeTab === 'purge' ? '1px solid #e0e7ff' : '1px solid transparent',
              boxShadow: activeTab === 'purge' ? '0px 1px 3px 0px rgba(0, 0, 0, 0.1)' : 'none'
            }"
          >
            <div class="flex items-start gap-4 pointer-events-none w-full">
              <div class="flex-shrink-0 relative mt-1">
                <div
                  style="
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    box-shadow: 0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.12) inset,
                      0px 1px 1px 0px rgba(255, 255, 255, 0.08) inset,
                      0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
                      0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset;
                  "
                >
                  <img
                    src="/images/about/IconCareer.svg"
                    alt="Instant purge icon"
                    style="width: 20px; height: 20px; display: block"
                  />
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="truncate"
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 24px;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Instant purge
                </h3>
                <p
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #73737f;
                  "
                >
                  Never serve stale content again. Purge all data centers in the
                  blink of an eye.
                </p>
              </div>
            </div>
          </div>

          <div
            @click="activeTab = 'reports'"
            class="rounded-xl p-4 sm:p-8 shadow-sm h-auto lg:h-[124px] cursor-pointer transition-all duration-200 flex items-center"
            :style="{
              borderRadius: '16px',
              background: activeTab === 'reports' ? '#ffffff' : '#f3f4f6',
              border: activeTab === 'reports' ? '1px solid #e0e7ff' : '1px solid transparent',
              boxShadow: activeTab === 'reports' ? '0px 1px 3px 0px rgba(0, 0, 0, 0.1)' : 'none'
            }"
          >
            <div class="flex items-start gap-4 pointer-events-none w-full">
              <div class="flex-shrink-0 relative mt-1">
                <div
                  style="
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    box-shadow: 0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.12) inset,
                      0px 1px 1px 0px rgba(255, 255, 255, 0.08) inset,
                      0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
                      0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset;
                  "
                >
                  <img
                    src="/images/about/IconCareer.svg"
                    alt="Detailed reports icon"
                    style="width: 20px; height: 20px; display: block"
                  />
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="truncate"
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 24px;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Detailed reports
                </h3>
                <p
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #73737f;
                  "
                >
                  Statistics are reported in near real time. Access account and
                  traffic details.
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-center sm:justify-start">
            <button
              class="flex items-center bg-[#1a1925] hover:bg-[#51515e] justify-center"
              style="
                width: 175px;
                height: 40px;
                border-radius: 6px;
                box-shadow: 0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12) inset,
                  0px 0.75px 0.75px 0px rgba(255, 255, 255, 0.08) inset,
                  0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
                  0px 0.25px 0.25px 0px rgba(26, 25, 37, 0.24),
                  0px 0.75px 0.75px 0px rgba(26, 25, 37, 0.12),
                  0px 1px 1.5px -0.5px rgba(26, 25, 37, 0.12),
                  0px 2px 4px -1px rgba(26, 25, 37, 0.12),
                  0px 4px 8px -4px rgba(26, 25, 37, 0.12),
                  0px 8px 12px -4px rgba(26, 25, 37, 0.06),
                  0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset;
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-style: Medium;
                font-size: 17px;
                line-height: 20px;
                letter-spacing: -0.02em;
                text-align: center;
                text-transform: capitalize;
                color: #ffffff;
              "
            >
              API Documentaiton
            </button>
          </div>
        </div>

        <div class="flex flex-col h-full order-1 lg:order-2 min-w-0">
          <div
            class="bg-[#2E3234] rounded-xl relative flex flex-col h-full w-full"
            style="
                border-radius: 16px;
                background-color: #2E3234;
                min-height: 320px;
                font-family: 'Monaco', 'Courier New', monospace;
                overflow: hidden;
            "
          >
            <button 
                @click="copyCode"
                class="absolute top-4 right-4 p-2 rounded hover:bg-white/10 transition-colors group z-10"
                title="Copy to clipboard"
            >
                <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            </button>

            <div class="w-full h-full p-4 sm:p-6 overflow-x-auto no-scrollbar">
               <pre class="text-xs sm:text-sm leading-relaxed whitespace-pre font-mono"><code class="language-bash" v-html="currentSnippetHtml"></code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// State for active tab
type TabType = 'zones' | 'purge' | 'reports';
const activeTab = ref<TabType>('zones'); 
const copied = ref(false);

const snippets = {
    zones: {
        // Matches exact screenshot content
        raw: `curl https://api.varnish.com/zones/purgeurl/1000.json \\
  -u sk_prod_zbSVNe8gVUMT4KjYcJWuyC86: \\
  -X DELETE \\
  -H "Content-Type: application/json" \\
  --data '{"urls":["examplepull-hexid.kxcdn.com/css/style.css","examplepull-hexid.kxcdn.com/js/app.js","examplepull-hexid.kxcdn.com/img/logo.svg"]}'`,
        html: `<span style="color:#fff">curl</span> <span style="color:#3b82f6">https://api.varnish.com/zones/purgeurl/1000.json</span> <span style="color:#6b7280">\\</span>
  <br/><br/><span style="color:#fff">&nbsp;&nbsp;-u sk_prod_zbSVNe8gVUMT4KjYcJWuyC86:</span> <span style="color:#6b7280">\\</span>
  <br/><br/><span style="color:#fff">&nbsp;&nbsp;-X DELETE</span> <span style="color:#6b7280">\\</span>
  <br/><br/><span style="color:#fff">&nbsp;&nbsp;-H "Content-Type: application/json"</span> <span style="color:#6b7280">\\</span>
  <br/><br/><span style="color:#fff">&nbsp;&nbsp;--data '{"urls":["examplepull-hexid.kxcdn.com/css/style.css",...]}'</span>`
    },
    purge: {
        raw: `curl https://api.varnish.com/zones/purge.json \\
  -u sk_prod_zbSVNe8gVUMT4KjYcJWuyC86: \\
  -X DELETE`,
        html: `<span style="color:#fff">curl</span> <span style="color:#3b82f6">https://api.varnish.com/zones/purge.json</span> <span style="color:#6b7280">\\</span>
  <br/><br/><span style="color:#fff">&nbsp;&nbsp;-u sk_prod_zbSVNe8gVUMT4KjYcJWuyC86:</span> <span style="color:#6b7280">\\</span>
  <br/><br/><span style="color:#fff">&nbsp;&nbsp;-X DELETE</span>`
    },
    reports: {
        raw: `curl https://api.varnish.com/reports/traffic.json \\
  -u sk_prod_zbSVNe8gVUMT4KjYcJWuyC86: \\
  -d "start=1630454400" \\
  -d "end=1633046400" \\
  -d "interval=day"`,
        html: `<span style="color:#fff">curl</span> <span style="color:#3b82f6">https://api.varnish.com/reports/traffic.json</span> <span style="color:#6b7280">\\</span>
  <br/><br/><span style="color:#fff">&nbsp;&nbsp;-u sk_prod_zbSVNe8gVUMT4KjYcJWuyC86:</span> <span style="color:#6b7280">\\</span>
  <br/><br/><span style="color:#fff">&nbsp;&nbsp;-d "start=1630454400"</span> <span style="color:#6b7280">\\</span>
  <br/><br/><span style="color:#fff">&nbsp;&nbsp;-d "end=1633046400"</span> <span style="color:#6b7280">\\</span>
  <br/><br/><span style="color:#fff">&nbsp;&nbsp;-d "interval=day"</span>`
    }
};

const currentSnippetHtml = computed(() => snippets[activeTab.value].html);

const copyCode = async () => {
    try {
        await navigator.clipboard.writeText(snippets[activeTab.value].raw);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};
</script>

<style scoped>
/* Utility class to hide scrollbar but keep functionality */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>