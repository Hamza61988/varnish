<template>
  <div class="flex-grow w-full">
    <label class="block font-medium text-gray-900 mb-2"> {{ label }} </label>
    <input
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      type="text"
      :placeholder="placeholder"
      class="w-full border border-gray-200 rounded-md px-[20px] py-[9px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-white"
    />
  </div>

  <div v-if="options && options.length" class="w-full md:w-48">
    <label class="block font-medium text-gray-900 mb-2">
      {{ selectLabel }}
    </label>
    <div class="relative">
      <select
        @change="
          $emit('update:location', ($event.target as HTMLSelectElement).value)
        "
        class="w-full border border-gray-200 rounded-md px-[20px] py-[9px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none text-gray-700"
      >
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    options?: string[];
    location?: string;
    label?: string;
    selectLabel?: string;
  }>(),
  {
    label: "URL",
    selectLabel: "Location",
  },
);

defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "update:location", value: string): void;
}>();
</script>
