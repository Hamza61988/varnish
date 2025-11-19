<template>
  <div class="" style="background-color: #f7f7f8">
    <SectionsHeroSection />
    <SectionsFeaturesSection />
    <SectionsGetStartedInMinutesSection />
    <SectionsSpeedUpImagesSection />
    <SectionsDevelopWithEaseSection />
    <SectionsTestimonialsSection />
    <SectionsCTASection />

    <!-- <SectionsPricingTableSection :headings="headings" :table-data="tableData" />
    <SectionsEnterpriseSection />
    <SectionsConfigurationOptionsSection />
    <SectionsAccessAllFeaturesSection />
    <SectionsCostCalculatorSection
      v-model:bandwidth="bandwidth"
      :total-cost="totalCost"
    />
    <SectionsFAQSection :open-faqs="openFAQs" @toggle-faq="toggleFAQ" />
    <SectionsCTASection />
    <SectionsPricingTableSection :headings="headings" :table-data="tableData" />
      <SectionsEnterpriseSection />
      <SectionsFeaturesSection />
      <SectionsConfigurationOptionsSection />
      <SectionsAccessAllFeaturesSection />
      <SectionsCostCalculatorSection
        v-model:bandwidth="bandwidth"
        :total-cost="totalCost"
      />
      <SectionsFAQSection :open-faqs="openFAQs" @toggle-faq="toggleFAQ" /> -->
  </div>
</template>

<script setup lang="ts">
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
