<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Page Background - BGline.svg -->
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      style="
        background-image: url(&quot;/images/about/BGline.svg&quot;);
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: auto;
        opacity: 1;
        z-index: 0;
      "
    ></div>

    <!-- Main Content -->
    <main
      class="flex flex-col gap-[88px] md:gap-[58px] site-padding site-margins relative z-10"
    >
      <section>
        <!-- Section Label -->
        <commonTitle
          upername="Support"
          title="Support"
          subtitle="Find answers, guides, and tutorials to supercharge your content delivery."
          mobileAlignment="start"
          pcAlignment="center"
        />

        <!-- Support Categories - Three Columns -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-[28px] md:gap-[25px] w-full"
        >
          <!-- Zones Column -->
          <div
            class="bg-white rounded-lg p-5 sm:p-6 w-full"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <div
              class="flex p-2 rounded bg-[#F9F9F9] md:bg-transparent items-center gap-2 md:shadow-none shadow-[0px_0.5px_0.5px_0px_#1A19250A,0px_1px_1px_0px_#1A19250A,0px_1px_2px_-1px_#1A19250A]"
            >
              <h3
                style="
                  font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                "
              >
                Zones
              </h3>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style="color: #73737f"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul class="flex flex-col" style="min-height: 300px; gap: 10px">
              <li
                class="p-2 text-[13px] md:text-[15px]"
                v-for="link in zonesLinks"
                :key="link.name"
                style="
                  font-family: &quot;Inter&quot;, sans-serif;
                  font-weight: 400;

                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                "
              >
                <NuxtLink
                  :to="link.route"
                  class="transition-colors hover-link"
                  style="color: #73737f"
                  >{{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Integrations Column -->
          <div
            class="bg-white rounded-lg p-5 sm:p-6 w-full"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <div
              class="flex p-2 rounded bg-[#F9F9F9] md:bg-transparent items-center gap-2 md:shadow-none shadow-[0px_0.5px_0.5px_0px_#1A19250A,0px_1px_1px_0px_#1A19250A,0px_1px_2px_-1px_#1A19250A]"
            >
              <h3
                style="
                  font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                "
              >
                Integrations
              </h3>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style="color: #73737f"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul class="flex flex-col" style="min-height: 300px; gap: 10px">
              <li
                class="p-2 text-[13px] md:text-[15px]"
                v-for="link in integrationsLinks"
                :key="link.name"
                style="
                  font-family: &quot;Inter&quot;, sans-serif;
                  font-weight: 400;

                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                "
              >
                <NuxtLink
                  :to="link.route"
                  class="transition-colors hover-link"
                  style="color: #73737f"
                  >{{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Troubleshooting Column -->
          <div
            class="bg-white rounded-lg p-5 sm:p-6 w-full"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <div
              class="flex p-2 rounded bg-[#F9F9F9] md:bg-transparent items-center gap-2 md:shadow-none shadow-[0px_0.5px_0.5px_0px_#1A19250A,0px_1px_1px_0px_#1A19250A,0px_1px_2px_-1px_#1A19250A]"
            >
              <h3
                style="
                  font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                "
              >
                Troubleshooting
              </h3>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style="color: #73737f"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul class="flex flex-col" style="min-height: 300px; gap: 10px">
              <li
                class="p-2 text-[13px] md:text-[15px]"
                v-for="link in troubleshootingLinks"
                :key="link.name"
                style="
                  font-family: &quot;Inter&quot;, sans-serif;
                  font-weight: 400;

                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                "
              >
                <NuxtLink
                  :to="link.route"
                  class="transition-colors hover-link"
                  style="color: #73737f"
                  >{{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full" style=""></div>
      </section>
      <!-- Information Cards -->

      <LandingFeatures :features="features" />

      <div
        class="w-full"
        style="
          height: 1px;

          margin-top: 12px;
          margin-bottom: 12px;
        "
      ></div>
    </main>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: "Getting started",
    description: `Where to begin? Follow these few <span class="text-[#0088FF] hover:cursor-pointer">simple steps</span>.`,
    icon: `<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.375 0C1.95875 0 0 1.95875 0 4.375V15.4583C0 17.8746 1.95875 19.8333 4.375 19.8333H11.9583C12.4416 19.8333 12.8333 19.4416 12.8333 18.9583C12.8333 18.4751 12.4416 18.0833 11.9583 18.0833H4.375C2.92525 18.0833 1.75 16.9081 1.75 15.4583V4.375C1.75 2.92525 2.92525 1.75 4.375 1.75H18.9583C20.4081 1.75 21.5833 2.92525 21.5833 4.375V9.625C21.5833 10.1082 21.9751 10.5 22.4583 10.5C22.9416 10.5 23.3333 10.1082 23.3333 9.625V4.375C23.3333 1.95875 21.3746 0 18.9583 0H4.375Z" fill="#1A1925"/>
<path d="M5.25 6.41667C4.60567 6.41667 4.08333 5.89433 4.08333 5.25C4.08333 4.60567 4.60567 4.08333 5.25 4.08333C5.89433 4.08333 6.41667 4.60567 6.41667 5.25C6.41667 5.89433 5.89433 6.41667 5.25 6.41667Z" fill="#1A1925"/>
<path d="M13.3813 11.048C13.6105 10.8188 13.9476 10.7351 14.2573 10.8304L22.424 13.3432C22.7658 13.4484 23.0092 13.7509 23.0387 14.1073C23.0682 14.4637 22.8779 14.8022 22.558 14.9621L19.0496 16.7163L17.2955 20.2247C17.1355 20.5445 16.7971 20.7349 16.4407 20.7054C16.0843 20.6759 15.7817 20.4325 15.6765 20.0907L13.1637 11.924C13.0684 11.6142 13.1521 11.2772 13.3813 11.048Z" fill="#1A1925"/>
<path d="M9.33333 6.41667C8.689 6.41667 8.16667 5.89433 8.16667 5.25C8.16667 4.60567 8.689 4.08333 9.33333 4.08333C9.97766 4.08333 10.5 4.60567 10.5 5.25C10.5 5.89433 9.97766 6.41667 9.33333 6.41667Z" fill="#1A1925"/>
<path d="M13.4167 6.41667C12.7723 6.41667 12.25 5.89433 12.25 5.25C12.25 4.60567 12.7723 4.08333 13.4167 4.08333C14.061 4.08333 14.5833 4.60567 14.5833 5.25C14.5833 5.89433 14.061 6.41667 13.4167 6.41667Z" fill="#1A1925"/>
</svg>
`,
  },
  {
    title: "Knowledge base",
    description: `Want guidance? Explore all available <span class="text-[#0088FF] hover:cursor-pointer">support categories</span>.`,
    icon: `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.3385 9.75C5.3385 12.0706 6.25269 14.2962 7.87996 15.9372C9.50723 17.5781 11.7143 18.5 14.0156 18.5C16.3169 18.5 18.5239 17.5781 20.1512 15.9372C21.7785 14.2962 22.6927 12.0706 22.6927 9.75C22.6927 7.42936 21.7785 5.20376 20.1512 3.56282C18.5239 1.92187 16.3169 1 14.0156 1C11.7143 1 9.50723 1.92187 7.87996 3.56282C6.25269 5.20376 5.3385 7.42936 5.3385 9.75Z" stroke="#1A1925" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0156 18.5C15.9434 18.0144 16.908 17.7708 16.908 9.75C16.908 4.40278 15.9439 1.48611 14.0156 1C12.0874 1.48611 11.1233 4.40278 11.1233 9.75C11.1233 17.7708 12.0879 18.0144 14.0156 18.5ZM14.0156 18.5V22.875M5.33854 9.75H22.6927M1 25.7917H11.1233M11.1233 25.7917C11.1233 26.5652 11.428 27.3071 11.9704 27.8541C12.5128 28.401 13.2485 28.7083 14.0156 28.7083C14.7827 28.7083 15.5184 28.401 16.0608 27.8541C16.6033 27.3071 16.908 26.5652 16.908 25.7917M11.1233 25.7917C11.1233 25.0181 11.428 24.2763 11.9704 23.7293C12.5128 23.1823 13.2485 22.875 14.0156 22.875M16.908 25.7917H27.0313M16.908 25.7917C16.908 25.0181 16.6033 24.2763 16.0608 23.7293C15.5184 23.1823 14.7827 22.875 14.0156 22.875" stroke="#1A1925" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`,
  },
  {
    title: "Support request",
    description: `Need assistance? Please open a customer <span class="text-[#0088FF] hover:cursor-pointer">support request</span>.`,
    icon: `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 2.58325C8.37779 2.58325 2.58337 8.37767 2.58337 15.4999V20.8513C2.58337 22.174 3.742 23.2499 5.16671 23.2499H6.45837C6.80095 23.2499 7.12949 23.1138 7.37172 22.8716C7.61395 22.6294 7.75004 22.3008 7.75004 21.9583V15.3152C7.75004 14.9726 7.61395 14.6441 7.37172 14.4019C7.12949 14.1596 6.80095 14.0235 6.45837 14.0235H5.28554C6.00371 9.02479 10.305 5.16659 15.5 5.16659C20.6951 5.16659 24.9964 9.02479 25.7145 14.0235H24.5417C24.1991 14.0235 23.8706 14.1596 23.6284 14.4019C23.3861 14.6441 23.25 14.9726 23.25 15.3152V23.2499C23.25 24.6746 22.0914 25.8333 20.6667 25.8333H18.0834V24.5416H12.9167V28.4166H20.6667C23.5161 28.4166 25.8334 26.0993 25.8334 23.2499C27.2581 23.2499 28.4167 22.174 28.4167 20.8513V15.4999C28.4167 8.37767 22.6223 2.58325 15.5 2.58325Z" fill="#1A1925"/>
</svg>

`,
  },
];
const zonesLinks = [
  { name: "Zone Settings", route: "/zones/zonesetting" },
  { name: "Pull Zone Settings", route: "/zones/pullzonesetting" },
  { name: "Create a Pull Zone", route: "/zones/pullzone" },
  { name: "Create a Push Zone", route: "/zones/pushzone" },
  { name: "Upload Data to a Push Zone", route: "/zones/uploadpushzone" },
  { name: "Create a Zone Alias", route: "/zones/zonealias" },
  { name: "Purge CDN Cache", route: "/zones/purgecdncache" },
  { name: "Image Processing", route: "/zones/imageprocessing" },
];

const integrationsLinks = [
  { name: "WordPress CDN Integration", route: "/integeration/wordpresscdn" },
  { name: "Joomla CDN Integration", route: "/integeration/joomlacdn" },
  { name: "Drupal CDN Integration", route: "/integeration/drupalcdn" },
  { name: "Magento CDN Integration", route: "/integeration/magentocdn" },
  { name: "Typo3 CDN Integration", route: "/integeration/typo3cdn" },
  { name: "PrestaShop CDN Integration", route: "/integeration/prestashopcdn" },
  { name: "Laravel CDN Integration", route: "/integeration/larvelcdn" },
  { name: "Custom CDN Integration", route: "/integeration/customcdn" },
];

const troubleshootingLinks = [
  { name: "Check If CDN Is Working", route: "/trouble-shooting/cdnwork" },
  { name: "CDN Error Codes", route: "/trouble-shooting/cdnerror" },
  {
    name: "CDN Troubleshooting Guide",
    route: "/trouble-shooting/cdntroubleshootingguide",
  },
  {
    name: "Technical Questions",
    route: "/trouble-shooting/technicalquestions",
  },
  { name: "KeyCDN Log Format", route: "/trouble-shooting/keycdnlog" },
  {
    name: "KeyCDN Log Forwarding",
    route: "/trouble-shooting/keycdnlogforwarding",
  },
];
</script>

<style scoped>
.hover-link:hover {
  color: #0088ff !important;
}
</style>
