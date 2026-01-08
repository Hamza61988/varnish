<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <div class="relative z-10 mt-[4.25rem] mb-[146.22px] px-6 mx-auto max-w-[855px]">
      <div class="grid grid-cols-1 md:grid-cols-[155.01px_1fr] gap-[30px]">
        
        <aside class="space-y-[9.23px] font-medium text-[11.72px]">
          <NuxtLink
            to="/"
            style="border: 1.28px solid #00000040"
            class="block w-full text-left text-[#757575] rounded-md px-3 py-2 transition-colors hover:bg-black/5"
          >
            Getting started
          </NuxtLink>

          <div class="bg-[#EFEFEF59]/35 px-[6.24px] py-[12.93px] flex flex-col gap-[5px] rounded-[9.23px]">
            <div v-for="category in navigation" :key="category.name" class="flex flex-col gap-[2px]">
              
              <component
                :is="category.subpages.length ? 'button' : 'NuxtLink'"
                :to="!category.subpages.length ? category.path : undefined"
                @click="category.subpages.length ? toggleCategory(category.name) : null"
                class="group flex items-center justify-between w-full text-left px-3 py-2 rounded-md transition-all duration-300"
                :class="[
                  isParentActive(category.name) || (!category.subpages.length && route.path === category.path)
                    ? 'bg-white text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040]' 
                    : 'text-[#757575] hover:bg-white/50'
                ]"
              >
                <span>{{ category.label }}</span>
                
                <svg
                  v-if="category.subpages.length"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5 transition-all duration-300"
                  :class="[
                    activeCategory === category.name ? 'rotate-90 opacity-100 text-black' : 'opacity-0',
                    isParentActive(category.name) ? 'opacity-100' : ''
                  ]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </component>

              <transition
                v-if="category.subpages.length"
                name="expand"
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
              >
                <div v-if="activeCategory === category.name" class="overflow-hidden">
                  <div class="flex flex-col gap-[2px] ml-1 mt-1 pb-1">
                    <NuxtLink
                      v-for="subpage in category.subpages"
                      :key="subpage.path"
                      :to="subpage.path"
                      class="px-3 py-2 rounded-md transition-all duration-200"
                      active-class="bg-white/80 text-[#000] font-semibold shadow-sm"
                      :class="route.path === subpage.path 
                        ? '' 
                        : 'text-[#757575] hover:text-[#1F62FF] hover:bg-white/40'"
                    >
                      {{ subpage.name }}
                    </NuxtLink>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </aside>

        <main class="space-y-4">
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
              <span style="color: #1a1925; font-weight: 500; font-size: 12.06px">Support</span>
            </div>
          </div>

          <slot />
        </main>
      </div>
    </div>

    <div id="full-width-section" class="fixed inset-0 -z-10 pointer-events-none">
       <slot name="background" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// Checks if the route starts with the category name (for folders)
const isParentActive = (catName) => route.path.includes(`/${catName}/`)

const navigation = [
  {
    name: 'zones',
    label: 'Zones',
    subpages: [
      { name: 'Image Processing', path: '/zones/imageprocessing' },
      { name: 'Pull Zone', path: '/zones/pullzone' },
      { name: 'Pull Zone Settings', path: '/zones/pullzonesetting' },
      { name: 'Purge Cache', path: '/zones/purgecdncache' },
      { name: 'Push Zone', path: '/zones/pushzone' },
      { name: 'Upload Push Zone', path: '/zones/uploadpushzone' },
      { name: 'Zone Alias', path: '/zones/zonealias' },
      { name: 'Zone Setting', path: '/zones/zonesetting' },
    ]
  },
  {
    name: 'integeration',
    label: 'Integrations',
    subpages: [
      { name: 'Custom CDN', path: '/integeration/customcdn' },
      { name: 'Drupal', path: '/integeration/drupalcdn' },
      { name: 'Joomla', path: '/integeration/joomlacdn' },
      { name: 'Laravel', path: '/integeration/laravelcdn' },
      { name: 'Magento', path: '/integeration/magentocdn' },
      { name: 'PrestaShop', path: '/integeration/prestashopcdn' },
      { name: 'Typo3', path: '/integeration/typo3cdn' },
      { name: 'WordPress', path: '/integeration/wordpresscdn' },
    ]
  },
  {
    name: 'AccountManagment',
    label: 'Account Management',
    path: '/support-categories/AccountManagment',
    subpages: [] // Empty as requested
  },
  {
    name: 'trouble-shooting',
    label: 'Troubleshooting',
    subpages: [
      { name: 'CDN Error', path: '/trouble-shooting/cdnerror' },
      { name: 'Troubleshooting Guide', path: '/trouble-shooting/cdntroubleshootingguide' },
      { name: 'CDN Work', path: '/trouble-shooting/cdnwork' },
      { name: 'KeyCDN Log', path: '/trouble-shooting/keycdnlog' },
      { name: 'Log Forwarding', path: '/trouble-shooting/keycdnlogforwarding' },
      { name: 'Technical Questions', path: '/trouble-shooting/technicalquestions' },
    ]
  },
  {
    name: 'tutorials',
    label: 'Tutorials',
    path: '/tutorials',
    subpages: [] // Empty as requested
  },
  {
    name: 'glossary',
    label: 'Glossary',
    path: '/support-categories/glossary',
    subpages: [] // Empty as requested
  }
]

const activeCategory = ref(null)

// Auto-expand the correct folder on page load or refresh
const updateActiveCategoryFromRoute = () => {
  const match = navigation.find(cat => route.path.includes(`/${cat.name}/`))
  if (match) activeCategory.value = match.name
}

updateActiveCategoryFromRoute()

const toggleCategory = (catName) => {
  activeCategory.value = activeCategory.value === catName ? null : catName
}

watch(() => route.path, () => {
  updateActiveCategoryFromRoute()
})

/* Transition JS Hooks for smooth height animation */
const enter = (el) => {
  el.style.height = '0';
  el.style.opacity = '0';
  el.offsetHeight; // force reflow
  el.style.transition = 'height 0.35s ease, opacity 0.3s ease';
  el.style.height = el.scrollHeight + 'px';
  el.style.opacity = '1';
}
const afterEnter = (el) => { el.style.height = 'auto'; }
const leave = (el) => {
  el.style.transition = 'height 0.35s ease, opacity 0.2s ease';
  el.style.height = el.scrollHeight + 'px';
  el.offsetHeight;
  el.style.height = '0';
  el.style.opacity = '0';
}
</script>

<style scoped>
.expand-enter-active, .expand-leave-active {
  will-change: height, opacity;
}
</style>