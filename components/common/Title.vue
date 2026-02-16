<template>
  <div
    :class="[
      'flex flex-col',
      containerAlignmentClass,
      mbClass,
      customClass,
    ]"
    style="gap: 0;"
  >
    <Upername :name="upername" v-if="upername" style="margin-bottom: 20px;" />

    <h2
      class="title-heading"
      :class="textAlignmentClass"
    >
      {{ title }}
    </h2>
    <div v-if="showTableOfContents" class="btn2">
      <span>Table of contents</span>
    </div>

    <div
      :class="[
        'flex flex-col md:flex-row md:items-center justify-between gap-4 w-full',
        subtitleContainerAlignmentClass,
      ]"
    >
      <p
        v-if="subtitle"
        class="title-subtitle max-w-2xl"
        :class="[textAlignmentClass, subtitleMarginClass]"
      >
        {{ subtitle }}
      </p>
      <slot name="suffix" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Upername from "./Upername.vue";
import { computed } from "vue";

type Alignment = "center" | "start" | "end";

interface Props {
  upername?: string;
  title: string;
  subtitle?: string;
  showTableOfContents?: boolean;
  alignment?: Alignment;
  mobileAlignment?: Alignment;
  pcAlignment?: Alignment;
  mbClass?: string;
  customClass?: string;
  fontWeight?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  showTableOfContents: false,
  alignment: undefined,
  mobileAlignment: undefined,
  pcAlignment: undefined,
  mbClass: "mb-[30px]",
  customClass: "",
  fontWeight: 600,
});

const mobile = computed(
  () => props.mobileAlignment || props.alignment || "center",
);
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

<style scoped>
.title-heading {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-weight: 500 !important;
  font-style: normal !important;
  font-size: 48px !important;
  line-height: 56px !important;
  letter-spacing: -0.02em !important;
  text-align: center !important;
  vertical-align: middle !important;
  color: #1A1925 !important;
  margin-bottom: 16px !important;
}

.title-subtitle {
  font-family: "Inter", sans-serif !important;
  font-weight: 400 !important;
  font-style: normal !important;
  font-size: 16px !important;
  line-height: 24px !important;
  letter-spacing: -0.011em !important;
  text-align: center !important;
  color: #51515E !important;
}

.btn2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #73737f;
  border-radius: 14px;
  padding: 20px 20px;
  box-shadow:
    0px 0.5px 0.5px 0px #07011308,
    0px 1px 1px -0.5px #07011308,
    0px 2px 2px -1px #07011308,
    0px 3px 3px -1.5px #07011308,
    0px 0px 0px 1px #1a192514;
}
</style>
