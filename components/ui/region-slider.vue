<template>
  <div class="">
    <div class="">
      <!-- North America / Europe -->
      <div class="mb-4 sm:mb-5 md:mb-6">
        <div
          class="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start justify-start gap-[10px] lg:gap-0 mb-2 text-left"
        >
          <label class="region-label">North America / Europe</label>
          <span
            class="value-display"
            v-html="formatGB(localBandwidth.naEurope)"
          ></span>
        </div>
        <input
          v-model.number="localBandwidth.naEurope"
          type="range"
          min="0"
          max="2000"
          step="1"
          class="w-full cursor-pointer rounded-lg h-2 bg-gray-100 slider-input"
          style="accent-color: #1F62FF;"
          :style="{
            background: `linear-gradient(to right, #1F62FF ${
              (localBandwidth.naEurope / 2000) * 100
            }%, #e5e7eb ${(localBandwidth.naEurope / 2000) * 100}%)`,
          }"
        />
      </div>

      <!-- Asia / Oceania -->
      <div class="mb-4 sm:mb-5 md:mb-6">
        <div
          class="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start justify-start gap-[10px] lg:gap-0 mb-2 text-left"
        >
          <label class="region-label">Asia / Oceania</label>
          <span
            class="value-display"
            v-html="formatGB(localBandwidth.asiaOceania)"
          ></span>
        </div>
        <input
          v-model.number="localBandwidth.asiaOceania"
          type="range"
          min="0"
          max="2000"
          step="1"
          class="w-full cursor-pointer rounded-lg h-2 bg-gray-100 slider-input"
          style="accent-color: #1F62FF;"
          :style="{
            background: `linear-gradient(to right, #1F62FF ${
              (localBandwidth.asiaOceania / 2000) * 100
            }%, #e5e7eb ${(localBandwidth.asiaOceania / 2000) * 100}%)`,
          }"
        />
      </div>

      <!-- Africa / Latin America -->
      <div class="mb-4 sm:mb-5 md:mb-6">
        <div
          class="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start justify-start gap-[10px] lg:gap-0 mb-2 text-left"
        >
          <label class="region-label">Africa / Latin America</label>
          <span
            class="value-display"
            v-html="formatGB(localBandwidth.africaLatin)"
          ></span>
        </div>
        <input
          v-model.number="localBandwidth.africaLatin"
          type="range"
          min="0"
          max="2000"
          step="1"
          class="w-full cursor-pointer rounded-lg h-2 bg-gray-100 slider-input"
          style="accent-color: #1F62FF;"
          :style="{
            background: `linear-gradient(to right, #1F62FF ${
              (localBandwidth.africaLatin / 2000) * 100
            }%, #e5e7eb ${(localBandwidth.africaLatin / 2000) * 100}%)`,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  modelValue: {
    naEurope: number;
    asiaOceania: number;
    africaLatin: number;
  };
}

const props = defineProps<Props>();
const emit = defineEmits<{
  "update:modelValue": [value: typeof props.modelValue];
}>();

const localBandwidth = ref({ ...props.modelValue });

watch(
  () => props.modelValue,
  (newVal) => {
    localBandwidth.value = { ...newVal };
  },
  { deep: true }
);

watch(
  localBandwidth,
  (newVal) => {
    emit("update:modelValue", { ...newVal });
  },
  { deep: true }
);

const formatGB = (val: number) => `${val} <span class="font-bold">GB</span>`;
</script>

<style scoped>
.region-label {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #1a1925;
  vertical-align: middle;
}


.value-display {
  border: 1px solid #eeeef0;
  min-width: 45px;
  width: auto;
  height: 24px;
  border-radius: 8px;
  padding: 2px 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #6b7280;
  box-sizing: border-box;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .value-display {
    min-width: 50px;
    height: 28px;
    border-radius: 10px;
    padding: 4px 10px;
    font-size: 12px;
  }
}

.slider-input {
  accent-color: #1F62FF;
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
