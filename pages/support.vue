<template>
  <div
    class="min-h-screen relative overflow-hidden"
    style="background: #ffffff"
  >
    <!-- Page Background - BGline.svg -->
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      style="
        background-image: url('/images/about/BGline.svg');
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: auto;
        opacity: 1;
        z-index: 0;
      "
    ></div>

    <!-- Main Content -->
    <main
      class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10"
    >
      <!-- Support Section -->
      <section
        class="w-full md:w-3/4 lg:w-2/3 xl:w-3/4 mx-auto px-4 sm:px-6 md:px-0"
      >
        <!-- Section Label -->
        <div class="flex items-center justify-center mb-4 sm:mb-6">
          <div
            class="flex items-center"
            style="
              height: 24px;
              gap: 2px;
              border-radius: 999px;
              padding-top: 4px;
              padding-right: 8px;
              padding-bottom: 4px;
              padding-left: 8px;
              background: #ffffffe5;
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <!-- Lightning Bolt Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A3A3AE"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="min-width: 16px; min-height: 16px;"
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
                letter-spacing: 0%;
                text-align: center;
                color: #1a1925;
              "
            >
              Support
            </span>
          </div>
        </div>

        <!-- Title -->
        <h1
          class="text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            letter-spacing: -0.02em;
            text-align: center;
            vertical-align: middle;
            color: #1a1925;
          "
        >
          Support
        </h1>

        <!-- Subtitle -->
        <p
          class="text-center mb-8 sm:mb-10 md:mb-12"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            text-align: center;
            color: #51515e;
          "
        >
          Find answers, guides, and tutorials to supercharge your content
          delivery.
        </p>

        <!-- Support Categories - Three Columns -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20"
          style="gap: 10px"
        >
          <!-- Zones Column -->
          <div
            class="bg-white rounded-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
              padding-top: 23px;
              padding-right: 24px;
              padding-bottom: 24px;
              padding-left: 24px;
            "
          >
            <div class="flex items-center gap-2 mb-4">
              <h3
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
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
            <ul
              class="space-y-2"
              style="
                height: 300px;
                display: flex;
                flex-direction: column;
                gap: 10px;
              "
            >
              <li
                v-for="link in zonesLinks"
                :key="link"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                "
              >
                <a
                  href="#"
                  class="transition-colors hover-link"
                  style="color: #73737f"
                  >{{ link }}</a
                >
              </li>
            </ul>
          </div>

          <!-- Integrations Column -->
          <div
            class="bg-white rounded-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
              padding-top: 23px;
              padding-right: 24px;
              padding-bottom: 24px;
              padding-left: 24px;
            "
          >
            <div class="flex items-center gap-2 mb-4">
              <h3
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
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
            <ul
              class="space-y-2"
              style="
                height: 300px;
                display: flex;
                flex-direction: column;
                gap: 10px;
              "
            >
              <li
                v-for="link in integrationsLinks"
                :key="link"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                "
              >
                <a
                  href="#"
                  class="transition-colors hover-link"
                  style="color: #73737f"
                  >{{ link }}</a
                >
              </li>
            </ul>
          </div>

          <!-- Troubleshooting Column -->
          <div
            class="bg-white rounded-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
              padding-top: 23px;
              padding-right: 24px;
              padding-bottom: 24px;
              padding-left: 24px;
            "
          >
            <div class="flex items-center gap-2 mb-4">
              <h3
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
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
            <ul
              class="space-y-2"
              style="
                height: 300px;
                display: flex;
                flex-direction: column;
                gap: 10px;
              "
            >
              <li
                v-for="link in troubleshootingLinks"
                :key="link"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                "
              >
                <a
                  href="#"
                  class="transition-colors hover-link"
                  style="color: #73737f"
                  >{{ link }}</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="w-full"
          style="
            height: 1px;
            background: #eeeef0;
            margin-top: 12px;
            margin-bottom: 12px;
          "
        ></div>
        <!-- Information Cards -->
        <div
          class="flex flex-col md:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          style="justify-content: space-between"
        >
          <!-- Getting Started Card -->
          <div
            class="relative overflow-hidden w-full md:w-[200.67px] md:flex-1"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute pointer-events-none"
              style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
                opacity: 1;
                border: 0.8px solid;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url('/images/about/bgcard.svg');
                background-repeat: no-repeat;
                background-size: contain;
                z-index: 0;
                border: none;
              "
            ></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <div
                class="mb-4 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Getting Started Icon -->
                <img
                  src="/images/about/Icon.svg"
                  alt="Getting Started Icon"
                  class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925"
                />
              </div>
              <h3
                class="mb-2"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                "
              >
                Getting started
              </h3>
              <p
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                "
              >
                Where to begin? Follow these few
                <NuxtLink to="#" class="hover:underline" style="color: #0088ff">
                  simple steps.
                </NuxtLink>
              </p>
            </div>
          </div>

          <!-- Knowledge Base Card -->
          <div
            class="relative overflow-hidden w-full md:w-[200.67px] md:flex-1"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute pointer-events-none"
              style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
                opacity: 1;
                border: 0.8px solid;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url('/images/about/bgcard.svg');
                background-repeat: no-repeat;
                background-size: contain;
                z-index: 0;

                border: none;
              "
            ></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <div
                class="mb-4 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Knowledge Base Icon -->
                <img
                  src="/images/about/Group.svg"
                  alt="Knowledge Base Icon"
                  class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925"
                />
              </div>
              <h3
                class="mb-2"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                "
              >
                Knowledge base
              </h3>
              <p
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                "
              >
                Want guidance? Explore all available
                <NuxtLink to="#" class="hover:underline" style="color: #0088ff">
                  support categories.
                </NuxtLink>
              </p>
            </div>
          </div>

          <!-- Support Request Card -->
          <div
            class="relative overflow-hidden w-full md:w-[200.67px] md:flex-1"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute pointer-events-none"
              style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
                opacity: 1;
                border: 0.8px solid;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url('/images/about/bgcard.svg');
                background-repeat: no-repeat;
                background-size: contain;
                z-index: 0;
                border: none;
              "
            ></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <div
                class="mb-4 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Support Request Icon -->
                <img
                  src="/images/about/Icon3rd.svg"
                  alt="Support Request Icon"
                  class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925"
                />
              </div>
              <h3
                class="mb-2"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                "
              >
                Support request
              </h3>
              <p
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                "
              >
                Need assistance? Please open a customer
                <NuxtLink to="#" class="hover:underline" style="color: #0088ff">
                  support request.
                </NuxtLink>
              </p>
            </div>
          </div>
        </div>
        <div
          class="w-full"
          style="
            height: 1px;
            background: #eeeef0;
            margin-top: 12px;
            margin-bottom: 12px;
          "
        ></div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const zonesLinks = [
  "Zone Settings",
  "Pull Zone Settings",
  "Create a Pull Zone",
  "Create a Push Zone",
  "Upload Data to a Push Zone",
  "Create a Zone Alias",
  "Purge CDN Cache",
  "Image Processing",
];

const integrationsLinks = [
  "WordPress CDN Integration",
  "Joomla CDN Integration",
  "Drupal CDN Integration",
  "Magento CDN Integration",
  "Typo3 CDN Integration",
  "PrestaShop CDN Integration",
  "Laravel CDN Integration",
  "Custom CDN Integration",
];

const troubleshootingLinks = [
  "Check If CDN Is Working",
  "CDN Error Codes",
  "CDN Troubleshooting Guide",
  "Technical Questions",
  "KeyCDN Log Format",
  "KeyCDN Log Forwarding",
];
</script>

<style scoped>
.hover-link:hover {
  color: #0088ff !important;
}
</style>
