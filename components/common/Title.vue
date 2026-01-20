<template>
  <div :class="['flex gap-[3px] md:gap-[12px] flex-col', containerAlignmentClass, mbClass, customClass]">
    <Upername :name="upername" v-if="upername" />

    <h2
      class="md:text-[3rem] text-[2rem] mb-0"
      :class="textAlignmentClass"
      style="
        font-weight: 600;
        line-height: 56px;
        letter-spacing: -0.04em;
        color: #1a1925;
      "
    >
      {{ title }}
    </h2>

    <div :class="['flex flex-col md:flex-row md:items-center justify-between gap-4 w-full', subtitleContainerAlignmentClass]">
      <p
        v-if="subtitle"
        class="text-[14px] lg:text-[1rem] max-w-2xl"
        :class="[textAlignmentClass, subtitleMarginClass]"
        style="
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          line-height: 24px;
          color: #51515e;
        "
      >
        {{ subtitle }}
      </p>
      <slot name="suffix" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Upername from './Upername.vue';
import { computed } from 'vue';

type Alignment = "center" | "start" | "end";

interface Props {
  upername?: string;
  title: string;
  subtitle?: string;
  alignment?: Alignment;
  mobileAlignment?: Alignment;
  pcAlignment?: Alignment;
  mbClass?: string;
  customClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  alignment: undefined,
  mobileAlignment: undefined,
  pcAlignment: undefined,
  mbClass: "mb-[30px]",
  customClass: "",
});

const mobile = computed(() => props.mobileAlignment || props.alignment || "center");
const pc = computed(() => props.pcAlignment || props.alignment || "center");

const containerAlignmentClass = computed(() => {
  return {
    "items-center": mobile.value === "center",
    "items-start": mobile.value === "start",
    "items-end": mobile.value === "end",
    "md:items-center": pc.value === "center",
    "md:items-start": pc.value === "start",
    "md:items-end": pc.value === "end",
  };
});

const textAlignmentClass = computed(() => {
  return {
    "text-center": mobile.value === "center",
    "text-start": mobile.value === "start",
    "text-end": mobile.value === "end",
    "md:text-center": pc.value === "center",
    "md:text-start": pc.value === "start",
    "md:text-end": pc.value === "end",
  };
});

const subtitleContainerAlignmentClass = computed(() => {
  return {
    "items-center": mobile.value === "center",
    "items-start": mobile.value !== "center",
    "md:items-center": pc.value === "center",
    "md:items-start": pc.value !== "center",
  };
});

const subtitleMarginClass = computed(() => {
  return {
    "mx-auto": mobile.value === "center",
    "mx-0": mobile.value !== "center",
    "md:mx-auto": pc.value === "center",
    "md:mx-0": pc.value !== "center",
  };
});
</script>