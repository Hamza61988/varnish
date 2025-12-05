<template>
  <div
    class="w-full"
    style="background-color: #f7f7f8; max-width: 900px; margin: auto"
  >
    <SectionsPricingTableSection :headings="headings" :table-data="tableData" />
    <SectionsEnterpriseSection />
    <section
      class="mx-auto py-8 sm:py-10 md:py-12 lg:py-16 bg-[#F7F7F8] px-4 md:px-[24px] lg:px-0"
    >
      <div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          <div
            class="flex relative overflow-hidden min-h-[210px] md:h-[210px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
              height: 287px;
            "
          >
            <div
              class="absolute hidden sm:block"
              style="
                width: 148px;
                height: 148px;
                top: 8px;
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
                border: none;
              "
            ></div>
            <div class="flex flex-col m-auto relative z-10 p-4 sm:p-5 md:p-6">
              <div
                class="mb-4 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <img
                  src="/images/about/Group.svg"
                  alt="Integrity Icon"
                  class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925"
                />
              </div>
              <h3
                class="mb-2 sm:mb-3 font-['Bricolage_Grotesque'] font-semibold text-lg leading-6 tracking-[-0.02em] text-[#1a1925]"
              >
                Secure and Flexible Sharing Tools
              </h3>
              <p
                class="font-['Inter'] font-normal text-sm leading-5 tracking-[-0.006em] text-[#73737f]"
              >
                Our pricing includes unlimited HTTP and HTTPS requests to keep
                costs low and affordable from the very beginning.
              </p>
            </div>
          </div>

          <div
            class="flex relative overflow-hidden min-h-[210px] md:h-[210px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
              height: 287px;
            "
          >
            <div
              class="absolute hidden sm:block"
              style="
                width: 148px;
                height: 148px;
                top: 8px;
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
                border: none;
              "
            ></div>
            <div class="flex flex-col m-auto relative z-10 p-4 sm:p-5 md:p-6">
              <div class="mb-4">
                <div class="relative">
                  <div
                    class="absolute -top-2 -left-2 w-8 h-8"
                    style="
                      background-image: url('/images/about/bgcardicon.svg');
                      background-repeat: no-repeat;
                      background-size: contain;
                      z-index: 0;
                    "
                  ></div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="relative z-10"
                  >
                    <path
                      d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6312 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6312 13.6815 18 14.5717 18 15.5C18 16.4283 17.6312 17.3185 16.9749 17.9749C16.3185 18.6312 15.4283 19 14.5 19H6"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3
                class="mb-2 sm:mb-3 font-['Bricolage_Grotesque'] font-semibold text-lg leading-6 tracking-[-0.02em] text-[#1a1925]"
              >
                Low minimum usage
              </h3>
              <p
                class="font-['Inter'] font-normal text-sm leading-5 tracking-[-0.006em] text-[#73737f]"
              >
                Our minimum charge is $4 per month based on the combined total
                account traffic volume and other services used.
              </p>
            </div>
          </div>

          <div
            class="flex relative overflow-hidden min-h-[210px] md:h-[210px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
              height: 287px;
            "
          >
            <div
              class="absolute hidden sm:block"
              style="
                width: 148px;
                height: 148px;
                top: 8px;
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
                border: none;
              "
            ></div>
            <div class="flex flex-col m-auto relative z-10 p-4 sm:p-5 md:p-6">
              <div class="mb-4">
                <div class="relative">
                  <div
                    class="absolute -top-2 -left-2 w-8 h-8"
                    style="
                      background-image: url('/images/about/bgcardicon.svg');
                      background-repeat: no-repeat;
                      background-size: contain;
                      z-index: 0;
                    "
                  ></div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="relative z-10"
                  >
                    <path
                      d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19V15C15 14.4696 15.2107 13.9609 15.5858 13.5858C15.9609 13.2107 16.4696 13 17 13H19C19.5304 13 20.0391 13.2107 20.4142 13.5858C20.7893 13.9609 21 14.4696 21 15V19Z"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H7C7.53043 21 8.03914 20.7893 8.41421 20.4142C8.78929 20.0391 9 19.5304 9 19V15C9 14.4696 8.78929 13.9609 8.41421 13.5858C8.03914 13.2107 7.53043 13 7 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19Z"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3
                class="mb-2 sm:mb-3 font-['Bricolage_Grotesque'] font-semibold text-lg leading-6 tracking-[-0.02em] text-[#1a1925]"
              >
                24/7 support
              </h3>
              <p
                class="font-['Inter'] font-normal text-sm leading-5 tracking-[-0.006em] text-[#73737f]"
              >
                Our professional technical support team is available 24 hours a
                day, 7 days a week for all customers at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SectionsConfigurationOptionsSection />
    <SectionsCostCalculatorSection
      v-model:bandwidth="bandwidth"
      :total-cost="totalCost"
    />
    <SectionsFAQSection :open-faqs="openFAQs" @toggle-faq="toggleFAQ" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Pricing table data
const headings = [
  { title: "First 10 TB" },
  { title: "Next 40 TB" },
  { title: "Next 50 TB" },
  { title: "Over 100 TB" },
];

const tableData = [
  {
    region: "North America Europe",
    prices: [
      { value: "$0.04" },
      { value: "$0.03" },
      { value: "$0.02" },
      { value: "$0.01" },
    ],
  },
  {
    region: "Asia Oceania",
    prices: [
      { value: "$0.08" },
      { value: "$0.06" },
      { value: "$0.04" },
      { value: "$0.02" },
    ],
  },
  {
    region: "Africa Latin America",
    prices: [
      { value: "$0.10" },
      { value: "$0.08" },
      { value: "$0.06" },
      { value: "$0.04" },
    ],
  },
];

// Calculator state
const bandwidth = ref({
  naEurope: 500, // GB
  asiaOceania: 0, // GB
  africaLatin: 0, // GB
});

// Pricing tiers (in GB)
const calculateRegionCost = (gb: number, region: string): number => {
  let total = 0;
  let remaining = gb;

  // Pricing based on region
  const prices =
    region === "naEurope"
      ? [0.04, 0.03, 0.02, 0.01]
      : region === "asiaOceania"
      ? [0.08, 0.06, 0.04, 0.02]
      : [0.1, 0.08, 0.06, 0.04];

  // First 10 TB (10,000 GB)
  if (remaining > 0) {
    const firstTier = Math.min(remaining, 10000);
    total += firstTier * prices[0];
    remaining -= firstTier;
  }

  // Next 40 TB (40,000 GB)
  if (remaining > 0) {
    const secondTier = Math.min(remaining, 40000);
    total += secondTier * prices[1];
    remaining -= secondTier;
  }

  // Next 50 TB (50,000 GB)
  if (remaining > 0) {
    const thirdTier = Math.min(remaining, 50000);
    total += thirdTier * prices[2];
    remaining -= thirdTier;
  }

  // Over 100 TB
  if (remaining > 0) {
    total += remaining * prices[3];
  }

  return total;
};

// Computed total cost
const totalCost = computed(() => {
  const naCost = calculateRegionCost(bandwidth.value.naEurope, "naEurope");
  const asiaCost = calculateRegionCost(
    bandwidth.value.asiaOceania,
    "asiaOceania"
  );
  const africaCost = calculateRegionCost(
    bandwidth.value.africaLatin,
    "africaLatin"
  );
  return naCost + asiaCost + africaCost;
});

// FAQ state
const openFAQs = ref([false, false, false, false, false, false]); // All collapsed by default

const toggleFAQ = (index: number) => {
  openFAQs.value[index] = !openFAQs.value[index];
};
</script>
