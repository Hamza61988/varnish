<template>
  <section class="container mx-auto px-3 sm:px-4 md:px-6 lg:px-4 py-8 sm:py-10 md:py-12 lg:py-16 bg-[#F7F7F8]">
    <div class="max-w-6xl mx-auto">
      <!-- Pricing Header -->
      <div class="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <div class="mb-3 sm:mb-4 text-center flex justify-start items-start ">
          <button
            class="inline-flex justify-start items-start space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[white] rounded-full text-xs sm:text-sm font-medium text-gray-700 border border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 sm:h-4 sm:w-4 fill-[#A3A3AE]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>Pricing</span>
          </button>
        </div>
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8"
        >
          <div class="text-center md:text-left">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
              Pricing Plans
            </h2>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
              Get access to our entire content delivery network without
              commitment.
            </p>
          </div>
          <!-- Toggle -->
          <div class="flex items-center justify-center md:justify-start space-x-3 sm:space-x-4">
            <span class="text-sm sm:text-base text-gray-900 font-medium">Monthly</span>
            <button
              class="relative inline-flex h-5 w-10 sm:h-6 sm:w-11 items-center rounded-full bg-gray-200 transition-colors"
            >
              <span
                class="inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition translate-x-1"
              ></span>
            </button>
            <span class="text-sm sm:text-base text-gray-400">Yearly</span>
          </div>
        </div>
      </div>

      <!-- Two Separate Tables: Region Table and Pricing Table -->
      <div
        class="flex flex-col lg:flex-row overflow-x-auto -mx-3 sm:-mx-4 md:-mx-6 lg:mx-0 px-3 sm:px-4 md:px-6 lg:px-0 pricing-table-container"
        style="background-color: #f3f4f6;"
      >
        <div class="flex w-full min-w-0" style="padding: 2% 3%;">
          <div class="w-full sm:w-2/5 md:w-1/3 lg:w-1/4 flex-shrink-0">
            <div class="bg-[#F3F4F6] rounded-lg p-0.5 sm:p-1">
              <div class="bg-white rounded-lg overflow-hidden">
                <table class="w-full">
                  <thead>
                    <tr style="background-color: #f3f4f6">
                      <th
                        class="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold bg-transparent align-middle"
                        style="color: #73737f"
                      >
                        REGION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(row, index) in tableData"
                      :key="index"
                      class="bg-[#F3F4F6]"
                    >
                      <td
                        class="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-medium text-gray-900 bg-transparent text-left align-middle"
                      >
                        {{ row.region }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-gray-100 rounded-lg p-0.5 sm:p-1 min-w-0 overflow-x-auto">
            <div class="bg-white rounded-lg overflow-hidden pricing-table-wrapper" style="padding: 2% 3%;">
              <table class="w-full pricing-table">
                <thead>
                  <tr style="background-color: #212129">
                    <th
                      v-for="(heading, index) in headings"
                      :key="index"
                      class="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-center text-xs sm:text-sm font-semibold text-white align-middle whitespace-nowrap"
                    >
                      <div>{{ heading.title.toUpperCase() }}</div>
                      <div class="text-xs font-normal text-gray-300 mt-0.5 sm:mt-1">
                        Per Month
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, rIndex) in tableData"
                    :key="rIndex"
                    class="bg-white"
                  >
                    <td
                      v-for="(price, cIndex) in row.prices"
                      :key="cIndex"
                      class="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-center text-xs sm:text-sm bg-white align-middle whitespace-nowrap pricing-cell"
                    >
                      <span class="font-bold text-gray-900">{{
                        price.value
                      }}</span
                      ><span class="text-gray-500 font-normal">/GB</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Heading {
  title: string;
}

interface Price {
  value: string;
}

interface TableRow {
  region: string;
  prices: Price[];
}

interface Props {
  headings: Heading[];
  tableData: TableRow[];
}

defineProps<Props>();
</script>

<style scoped>
.pricing-table-container {
  border-radius: 16px;
}

@media (min-width: 640px) {
  .pricing-table-container {
    border-radius: 20px;
  }
}

@media (min-width: 768px) {
  .pricing-table-container {
    border-radius: 24px;
  }
}

table th:first-child {
  border-top-left-radius: 12px;
}
table th:last-child {
  border-top-right-radius: 12px;
}

/* Pricing table borders between cells */
.pricing-table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
}

.pricing-table-wrapper::-webkit-scrollbar {
  height: 8px;
}

.pricing-table-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.pricing-table-wrapper::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.pricing-table-wrapper::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.pricing-table {
  min-width: 100%;
}

/* Only horizontal lines between data rows, no borders in header */
.pricing-table thead th {
  border: none;
}

.pricing-table tbody tr:not(:last-child) td {
  border-bottom: 1px solid #EEEEF0;
}

/* Mobile (up to 640px) */
@media (max-width: 640px) {
  .pricing-table-wrapper {
    padding: 1.5% 2% !important;
  }
  
  .pricing-table th,
  .pricing-table td {
    padding: 6px 8px !important;
    font-size: 11px !important;
  }
  
  .pricing-table th div:first-child {
    font-size: 10px !important;
  }
  
  .pricing-table th div:last-child {
    font-size: 9px !important;
    margin-top: 2px !important;
  }
}

/* Tablet (641px to 768px) */
@media (min-width: 641px) and (max-width: 768px) {
  .pricing-table-wrapper {
    padding: 1.5% 2.5% !important;
  }
  
  .pricing-table th,
  .pricing-table td {
    padding: 8px 10px !important;
  }
}

/* Tablet Large (769px to 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .pricing-table {
    min-width: 650px;
  }
  
  .pricing-table-wrapper {
    padding: 1.5% 2.5% !important;
  }
  
  .pricing-table th,
  .pricing-table td {
    padding: 10px 12px !important;
  }
}

/* Desktop (1025px and above) */
@media (min-width: 1025px) {
  .pricing-table {
    min-width: 100%;
  }
}
</style>


