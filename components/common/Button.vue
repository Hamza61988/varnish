<template>
  <button class="v-button" :class="[`variant-${variant}`, customClass]">
    {{ tool || name }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  customClass?: string;
  name?: string;
  tool?: string;
  variant?: "primary" | "secondary" | "outline" | "tool";
}

withDefaults(defineProps<Props>(), {
  variant: "primary",
});
</script>

<style scoped>
.v-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.084px;
  color: white;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
}

/* Primary (Blue) Variant */
.variant-primary {
  font-family: "Inter", sans-serif;
  background:
    linear-gradient(
      180deg,
      rgba(236, 236, 236, 0.08) 0%,
      rgba(85, 85, 85, 0.08) 100%
    ),
    #1f62ff; /* base brand color */

  /* Complex shadows for Primary */
  box-shadow:
    0px 0.25px 0.25px rgba(255, 255, 255, 0.12) inset,
    0px 0.75px 0.75px rgba(255, 255, 255, 0.08) inset,
    0px 1px 3px rgba(255, 255, 255, 0.08) inset,
    0px -8px 20px rgba(26, 25, 37, 0.08) inset,
    0px 0.25px 0.25px rgba(26, 25, 37, 0.24),
    0px 0.75px 0.75px rgba(26, 25, 37, 0.12),
    0px 1px 1.5px -0.5px rgba(26, 25, 37, 0.12),
    0px 2px 4px -1px rgba(26, 25, 37, 0.12),
    0px 4px 8px -4px rgba(26, 25, 37, 0.12),
    0px 8px 12px -4px rgba(26, 25, 37, 0.06);
}

.variant-primary:hover {
  background-color: var(--bluish);
}

/* Secondary (Black) Variant */
.variant-secondary {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.02em;
  background: #4285F4;

  /* Complex shadows for Secondary */
  box-shadow:
    0px 0.25px 0.25px 0px #FFFFFF1F inset,
    0px 0.75px 0.75px 0px #FFFFFF14 inset,
    0px 1px 3px 0px #FFFFFF14 inset,
    0px 0.25px 0.25px 0px #1A19253D,
    0px 0.75px 0.75px 0px #1A19251F,
    0px 1px 1.5px -0.5px #1A19251F,
    0px 2px 4px -1px #1A19251F,
    0px 4px 8px -4px #1A19251F,
    0px 8px 12px -4px #1A19250F,
    0px -8px 20px 0px #1A192514 inset;

}

.variant-secondary:hover {
  background-color: var(--bluish);
}

/* Outline (White) Variant */
.variant-outline {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  background: #ffffff;
  color: #1a1925;
  border: 1px solid #e7e7ea;
  /* Reset shadows */
  box-shadow: none;
}

.variant-outline:hover {
  background-color: #f7f7f8;
}

/* Tool (Blue) Variant */
.variant-tool {
  font-family: "Inter", sans-serif;
  background-color: #007bff;
  color: white;
  font-weight: 600;
  padding: 20px 30px;
  border-radius: 6px;
  font-size: 14px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.variant-tool:hover {
  background-color: #0088ff;
}

/* Fixed compact mobile version */
@media (max-width: 480px) {
  .v-button {
    height: 36px;
    padding: 16px 8px;
    font-size: 13px;
    letter-spacing: -0.006em;
    border-radius: 8px;
  }
}
</style>
