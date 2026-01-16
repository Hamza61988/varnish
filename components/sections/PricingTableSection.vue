<template>
  <section class="mx-auto  md:pt-[6.25rem]  px-[57.5px] lg:px-0  bg-[#F7F7F8]">
    <div>
      <!-- Pricing Header -->
      <div class="mb-[24px] md:mb-[48px] ">
        <div class=" flex justify-start items-start">
<SectionsUpername name="Pricing" />
        </div>
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8"
        >
          <div class="text-left  w-full">
            <h2 style="  font-weight: 600; "
              class=" text-gray-900 text-[2rem] md:text-[3rem] mb-[8px] md:mb-[16px]"
            >
              Pricing
            </h2>
            <div
              class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-0"
            >
              <p
              style="font-family: 'inter' , sans-serif;"
                class="text-[14px] md:text-[16px] text-[#51515E] max-w-2xl"
              >
                Get access to our entire content delivery network without
                commitment.
              </p>
              <div
                class="flex items-center  justify-center space-x-3 sm:space-x-4"
              >
                <span class="
                text-[14px]  text-[#51515e] "
                  >Monthly</span
                >
                <button
                  class="relative inline-flex h-5 w-10 sm:h-6 sm:w-11 items-center rounded-full bg-blue-500 transition-colors"
                >
                  <span
                    class="inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition translate-x-1"
                  ></span>
                </button>
                <span class="
                text-[14px] text-[#51515e]">Yearly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Two Separate Tables: Region Table and Pricing Table -->
      <!-- Mobile/Tablet: Cards for each tier -->
      <div class="lg:hidden space-y-4 mb-[24px-] ">
        <div
          v-for="(heading, headingIndex) in headings"
          :key="headingIndex"
          class="bg-[#EEEEF0] rounded-lg p-0.5 sm:p-1"
          style="border-radius: 16px"
        >
          <div class="flex w-full md:px-0 md:py-0 px-[0.9375rem] py-[1.25rem] gap-[22px] md:gap-0 min-w-0">
            <!-- Region Column -->
            <div class="w-2/5 sm:w-1/3 flex-shrink-0">
              <div class=" rounded-lg overflow-hidden">
                <table class="w-full">
                  <thead>
                    <tr style="background-color: #EEEEF0">
                      <th
                        class="px-2 sm:px-3 py-2 sm:py-3 text-left text-xs font-semibold bg-transparent align-middle"
                        style="color: #717171"
                      >
                        REGION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(row, index) in tableData"
                      :key="index"
                      class="bg-[#EEEEF0]"
                    >
                      <td
                        class="px-2 sm:px-3 py-2 sm:py-3 text-sm font-bold text-gray-900 bg-transparent text-left align-middle"
                      >
                        {{ row.region }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- Pricing Column -->
            <div class="flex-1  rounded-lg min-w-0">
              <div
                class="bg-white w-[127px] md:w-full rounded-lg overflow-hidden"
                style="padding: 4px"
              >
                <!-- Tier Header -->
                <div
                  class="bg-[#212129] rounded-lg px-3 sm:px-4 py-2 sm:py-3 mb-2 sm:mb-3"
                >
                  <div
                    class="text-center text-xs  font-semibold text-white"
                  >
                    {{ heading.title.toUpperCase() }}
                  </div>
                  <div
                    class="text-xs font-normal text-gray-300 mt-0.5 sm:mt-1 text-center"
                  >
                    Per Month
                  </div>
                </div>
                <!-- Prices -->
                <div class="space-y-2 sm:space-y-3">
                  <div
                    v-for="(row, rIndex) in tableData"
                    :key="rIndex"
                    
                    class="py-2  border-b border-[#eeeef0] last:border-b-0"
                  >
                    <div class="text-center">
                      <span
                      style="line-height: 24px;"
                        class="font-medium text-gray-900 text-base"
                        >{{ row.prices[headingIndex]?.value || "" }}</span
                      ><span
                        class="text-gray-500 font-normal text-xs sm:text-sm"
                        >/GB</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop: Original Table Layout -->
      <div
        class="hidden lg:flex flex-row overflow-x-auto -mx-4 sm:-mx-4 md:-mx-6 lg:mx-0 px-4 sm:px-4 md:px-6 lg:px-0 rounded-2xl"
        style="background-color: #eeeef0"
      >
        <div class="flex w-full min-w-0" style="padding: 4px">
          <div class="w-full sm:w-2/5 md:w-1/3 lg:w-1/4 flex-shrink-0">
            <div class="bg-[#eeeef0] p-0.5 sm:p-1">
              <div class="bg-[#eeeef0]  overflow-hidden">
                <table class="w-full">
                  <thead>
                    <tr style="background-color: #eeeef0">
                      <th
                        class="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold bg-transparent align-middle"
                        style="color: #717171"
                      >
                        REGION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(row, index) in tableData"
                      :key="index"
                      class="bg-[#eeeef0]"
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
          <div
            class="flex-1  bg-gray-100 rounded-2xl  min-w-0 overflow-x-auto"
          >
            <div
              class="bg-white rounded-2xl  overflow-hidden pricing-table-wrapper"
              style="padding: 0px"
            >
              <table class="w-full overflow-hidden  pricing-table">
                <thead>
                  <tr style="background-color: #212129">
                    <th
                      v-for="(heading, index) in headings"
                      :key="index"
                      class="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-center text-xs sm:text-sm font-semibold text-white align-middle whitespace-nowrap"
                    >
                      <div>{{ heading.title.toUpperCase() }}</div>
                      <div
                        class="text-xs font-normal text-gray-300 mt-0.5 sm:mt-1"
                      >
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
  border-bottom: 1px solid #eeeef0;
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
    padding: 3.5% 2.5% !important;
    overflow: hidden;
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
