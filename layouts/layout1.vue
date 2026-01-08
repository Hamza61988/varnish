<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <div class="fixed inset-0 -z-10 pointer-events-none">
      <slot name="background" />
    </div>

    <div
      class="relative z-10 mt-[4.25rem] mb-[146.22px] px-6 mx-auto max-w-[855px]"
    >
      <div class="grid grid-cols-1 md:grid-cols-[155px_1fr] gap-[30px]">
        <aside class="space-y-[9.23px] font-medium text-[11.72px]">
          <div
            class="bg-[#EFEFEF59]/35 px-[6.24px] py-[12.93px] flex flex-col gap-[5px] rounded-[9.23px]"
          >
            <div
              v-for="category in navigation"
              :key="category.name"
              class="flex flex-col gap-[2px]"
            >
              <button
                @click="toggleCategory(category.name)"
                class="flex items-center justify-between w-full text-left px-3 py-2 rounded-md transition-all duration-300 ease-in-out"
                :class="
                  isParentActive(category.name)
                    ? 'bg-white text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040]'
                    : 'text-[#757575] hover:bg-white/50'
                "
              >
                <span>{{ category.label }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3 transition-transform duration-300"
                  :class="
                    activeCategory === category.name
                      ? 'rotate-90 text-black'
                      : 'text-[#757575]'
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <transition
                name="expand"
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
              >
                <div
                  v-if="activeCategory === category.name"
                  class="overflow-hidden"
                >
                  <div class="flex flex-col gap-[2px] ml-1 mt-1 pb-1">
                    <NuxtLink
                      v-for="subpage in category.subpages"
                      :key="subpage.path"
                      :to="subpage.path"
                      class="px-3 py-2 rounded-md transition-all duration-300"
                      :class="
                        route.path === subpage.path
                          ? 'bg-white text-[#000] font-semibold shadow-sm'
                          : 'text-[#757575] hover:text-[#1F62FF] hover:bg-white/40'
                      "
                    >
                      {{ subpage.name }}
                    </NuxtLink>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </aside>

        <main class="relative">
                   <div class="mb-4">
            <div
              style="
                padding: 4px 12px 4px 8px;
                box-shadow: 0 3px 3px -1.5px #07011308, 0 2px 2px -1px #07011308,
                  0 1px 1px -0.5px #07011308, 0 0.5px 0.5px #07011308;
              "
              class="inline-flex items-center space-x-2 rounded-full text-xs sm:text-sm font-medium border border-gray-100"
            >
             <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.53413 0.751381C5.53413 0.00932038 4.57171 -0.282067 4.16009 0.335357L0.127223 6.38466C-0.205054 6.88308 0.15224 7.55069 0.751261 7.55069H3.53413V10.35C3.53413 11.092 4.49655 11.3834 4.90817 10.766L8.94104 4.71671C9.27332 4.2183 8.91603 3.55069 8.317 3.55069H5.53413V0.751381Z" fill="#A3A3AE"/>
</svg>

              <span style="color: #1a1925; font-weight: 500; font-size: 12.06px">Tools</span>
            </div>
          </div>

          <slot />
        
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isParentActive = (catName) => route.path.startsWith(`/${catName}`);
const activeCategory = ref(route.path.split("/")[1] || "web");

const toggleCategory = (catName) => {
  activeCategory.value = activeCategory.value === catName ? null : catName;
};

watch(
  () => route.path,
  (newPath) => {
    const currentDir = newPath.split("/")[1];
    if (currentDir) activeCategory.value = currentDir;
  }
);

// Transition Helper Functions for smooth height
const enter = (el) => {
  el.style.height = "0";
  el.style.opacity = "0";
  // Trigger reflow
  el.offsetHeight;
  el.style.transition = "height 0.35s ease, opacity 0.3s ease";
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
};

const afterEnter = (el) => {
  el.style.height = "auto";
};

const leave = (el) => {
  el.style.transition = "height 0.35s ease, opacity 0.2s ease";
  el.style.height = el.scrollHeight + "px";
  // Trigger reflow
  el.offsetHeight;
  el.style.height = "0";
  el.style.opacity = "0";
};

const navigation = [
  {
    name: "web",
    label: "Web",
    subpages: [
      { name: "Brotli Test", path: "/web/brotlitest" },
      { name: "HTTP/2 Test", path: "/web/http2test" },
      { name: "Header Checker", path: "/web/httpheaderchecker" },
      { name: "Performance", path: "/web/performancetest" },
      { name: "Speed Test", path: "/web/websitespeedtest" },
    ],
  },
  {
    name: "networks",
    label: "Network",
    subpages: [
      { name: "BGP Looking Glass", path: "/networks/bgplookingglass" },
      { name: "DNS Checker", path: "/networks/dnschecker" },
      { name: "IP Finder", path: "/networks/iplocationfinder" },
      { name: "IPv6 Test", path: "/networks/ipv6test" },
      { name: "Ping Test", path: "/networks/pingtest" },
      { name: "Traceroute", path: "/networks/traceroutetest" },
    ],
  },
  {
    name: "security",
    label: "Security",
    subpages: [
      { name: "Chain Composer", path: "/security/certificatechaincomposer" },
      { name: "Cert Checker", path: "/security/certificatechecker" },
      { name: "SHA256", path: "/security/sha256" },
      { name: "SSL Freak Test", path: "/security/sslfreaktest" },
      { name: "TLS Logjam", path: "/security/tlslogjam" },
    ],
  },
  {
    name: "others",
    label: "Other",
    subpages: [
      { name: "Epoch Converter", path: "/others/epochconverter" },
      { name: "Hex Converter", path: "/others/hexconverter" },
    ],
  },
];
</script>

<style scoped>
/* Ensure smooth font rendering during animation */
.expand-enter-active,
.expand-leave-active {
  will-change: height, opacity;
}

/* Optional: Smoothly fade the background content when routing */
main {
  transition: opacity 0.3s ease;
}
</style>
