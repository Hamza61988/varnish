<template>
  <div
    class=" "
  
  >
   <section class="space-y-[80px] md:space-y-[100px] flex flex-col site-padding site-margins">
    <div class="space-y-[20px] md:space-y-[12px]">
    <SectionsPricingTableSection :headings="headings" :table-data="tableData" />
    <SectionsEnterpriseSection />
    </div>

      <SectionsFeaturesSection :features="features" />
   


    <SectionsConfigurationOptionsSection />
    <SectionsCostCalculatorSection
      v-model:bandwidth="bandwidth"
      :total-cost="totalCost"
    />
    <SectionsFAQSection :open-faqs="openFAQs" @toggle-faq="toggleFAQ" />
     </section>
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

const features = [
  {
    title: "Secure and Flexible Sharing Tools",
    description: "Our pricing includes unlimited HTTP and HTTPS requests to keep costs low and affordable from the very beginning.",
    icon: `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33984 9.75C5.33984 12.0706 6.25403 14.2962 7.8813 15.9372C9.50857 17.5781 11.7156 18.5 14.0169 18.5C16.3182 18.5 18.5253 17.5781 20.1526 15.9372C21.7798 14.2962 22.694 12.0706 22.694 9.75C22.694 7.42936 21.7798 5.20376 20.1526 3.56282C18.5253 1.92187 16.3182 1 14.0169 1C11.7156 1 9.50857 1.92187 7.8813 3.56282C6.25403 5.20376 5.33984 7.42936 5.33984 9.75Z" stroke="#1A1925" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0156 18.5C15.9434 18.0144 16.908 17.7708 16.908 9.75C16.908 4.40278 15.9439 1.48611 14.0156 1C12.0874 1.48611 11.1233 4.40278 11.1233 9.75C11.1233 17.7708 12.0879 18.0144 14.0156 18.5ZM14.0156 18.5V22.875M5.33854 9.75H22.6927M1 25.7917H11.1233M11.1233 25.7917C11.1233 26.5652 11.428 27.3071 11.9704 27.8541C12.5128 28.401 13.2485 28.7083 14.0156 28.7083C14.7827 28.7083 15.5184 28.401 16.0608 27.8541C16.6033 27.3071 16.908 26.5652 16.908 25.7917M11.1233 25.7917C11.1233 25.0181 11.428 24.2763 11.9704 23.7293C12.5128 23.1823 13.2485 22.875 14.0156 22.875M16.908 25.7917H27.0313M16.908 25.7917C16.908 25.0181 16.6033 24.2763 16.0608 23.7293C15.5184 23.1823 14.7827 22.875 14.0156 22.875" stroke="#1A1925" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
  },
  {
    title: "Low minimum usage",
    description: "Our minimum charge is $4 per month based on the combined total account traffic volume and other services used.",
    icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2751 13.9172C18.5335 13.3266 17.4207 12.8549 15.9365 12.5021L14.7979 12.2307V7.31927L14.9521 7.38281C15.9185 7.87708 16.4378 8.8125 16.5089 9.85417H20.3848C20.3141 7.77083 19.552 6.23021 18.0983 5.14167C17.1324 4.41823 16.0309 3.95312 14.7979 3.71875V1H11.1882V3.63542C9.5189 3.84375 8.19515 4.38646 7.2231 5.26875C5.9504 6.42396 5.31422 7.8743 5.31456 9.61979C5.31456 11.533 5.96484 12.9392 7.26538 13.8385C7.99352 14.3484 9.30593 14.8219 11.1882 15.2604V20.5812C10.5018 20.3901 9.96393 20.0755 9.58491 19.6208C9.21929 19.1792 8.97434 18.7083 8.84955 17.6667H5C5 19.75 5.72762 21.2448 7.18339 22.4042C8.23434 23.2406 9.57202 23.749 11.1882 23.9693V26H14.7979V24.0036C16.5167 23.7958 17.9044 23.2417 18.9553 22.3349C20.3184 21.1578 21 19.6788 21 17.8979C21 16.1611 20.425 14.8342 19.2751 13.9172ZM9.98559 10.8875C9.35921 10.5434 9.04602 10.0226 9.04602 9.325C9.04602 8.56667 9.36368 7.9724 9.999 7.54948C10.3342 7.32604 10.7333 7.16354 11.1882 7.05625V11.3396C10.6286 11.175 10.2249 11.024 9.98559 10.8875ZM15.3873 20.4745C15.1942 20.5393 14.9973 20.5925 14.7979 20.6339V16.1042C15.4198 16.2903 15.9094 16.4924 16.2666 16.7104C16.8297 17.063 17.1118 17.5646 17.1118 18.2078C17.1113 19.3099 16.5363 20.0687 15.3873 20.4745Z" fill="#1A1925"/>
</svg>
`
  },
  {
    title: "24/7 support",
    description: "Our professional technical support team is available 24 hours a day, 7 days a week for all customers at no additional cost.",
    icon: `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4987 2.58325C8.37645 2.58325 2.58203 8.37767 2.58203 15.4999V20.8513C2.58203 22.174 3.74066 23.2499 5.16536 23.2499H6.45703C6.7996 23.2499 7.12814 23.1138 7.37038 22.8716C7.61261 22.6294 7.7487 22.3008 7.7487 21.9583V15.3152C7.7487 14.9726 7.61261 14.6441 7.37038 14.4019C7.12814 14.1596 6.7996 14.0235 6.45703 14.0235H5.2842C6.00236 9.02479 10.3036 5.16659 15.4987 5.16659C20.6938 5.16659 24.995 9.02479 25.7132 14.0235H24.5404C24.1978 14.0235 23.8693 14.1596 23.627 14.4019C23.3848 14.6441 23.2487 14.9726 23.2487 15.3152V23.2499C23.2487 24.6746 22.0901 25.8333 20.6654 25.8333H18.082V24.5416H12.9154V28.4166H20.6654C23.5148 28.4166 25.832 26.0993 25.832 23.2499C27.2567 23.2499 28.4154 22.174 28.4154 20.8513V15.4999C28.4154 8.37767 22.6209 2.58325 15.4987 2.58325Z" fill="#1A1925"/>
</svg>
`
  }
];
</script>
