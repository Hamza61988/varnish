<template>
  <div class="">
    <div class="">
      <!-- North America / Europe -->
      <div class="mb-6">
        <div class="flex justify-between items-center mb-2">
          <label class="region-label"
            >North America / Europe</label
          >
          <span class="value-display">{{
            formatGB(bandwidth.naEurope)
          }}</span>
        </div>
        <input
          v-model.number="bandwidth.naEurope"
          type="range"
          min="0"
          max="2000"
          step="10"
          class="w-full accent-indigo-600 cursor-pointer rounded-lg h-2 bg-gray-100"
          :style="{
            background: `linear-gradient(to right, #1F62FF ${
              bandwidth.naEurope / 20
            }%, #e5e7eb ${bandwidth.naEurope / 20}%)`,
          }"
        />
      </div>

      <!-- Asia / Oceania -->
      <div class="mb-6">
        <div class="flex justify-between items-center mb-2">
          <label class="region-label"
            >Asia / Oceania</label
          >
          <span class="value-display">{{
            formatGB(bandwidth.asiaOceania)
          }}</span>
        </div>
        <input
          v-model.number="bandwidth.asiaOceania"
          type="range"
          min="0"
          max="2000"
          step="10"
          class="w-full accent-indigo-600 cursor-pointer rounded-lg h-2 bg-gray-100"
          :style="{
            background: `linear-gradient(to right, #1F62FF ${
              bandwidth.asiaOceania / 20
            }%, #e5e7eb ${bandwidth.asiaOceania / 20}%)`,
          }"
        />
      </div>

      <!-- Africa / Latin America -->
      <div class="mb-6">
        <div class="flex justify-between items-center mb-2">
          <label class="region-label"
            >Africa / Latin America</label
          >
          <span class="value-display">{{
            formatGB(bandwidth.africaLatin)
          }}</span>
        </div>
        <input
          v-model.number="bandwidth.africaLatin"
          type="range"
          min="0"
          max="2000"
          step="10"
          class="w-full accent-indigo-600 cursor-pointer rounded-lg h-2 bg-gray-100"
          :style="{
            background: `linear-gradient(to right, #1F62FF ${
              bandwidth.africaLatin / 20
            }%, #e5e7eb ${bandwidth.africaLatin / 20}%)`,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const bandwidth = ref({
  naEurope: 0,
  asiaOceania: 0,
  africaLatin: 0,
});

const formatGB = (val: number) => `${val} GB`;
</script>

<style scoped>
.region-label {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #1A1925;
  vertical-align: middle;
}

.value-display {
  border: 1px solid #EEEEF0;
  width: 50px;
  height: 28px;
  border-radius: 10px;
  padding: 4px 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #6B7280;
  box-sizing: border-box;
}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  background: #1F62FF;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(31, 98, 255, 0.3);
  transition: transform 0.1s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: #1F62FF;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(31, 98, 255, 0.3);
  transition: transform 0.1s ease;
}

input[type="range"]::-moz-range-thumb:hover {
  transform: scale(1.1);
}
</style>
