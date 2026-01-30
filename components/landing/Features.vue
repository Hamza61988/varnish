<template>
  <section class="mt-12 relative w-screen left-1/2 -translate-x-1/2">
    <img src="/images/landing/red-line.svg" alt="Red Line" class="absolute -top-[200px] left-0 object-contain z-10">
    <div class="px-[57.5px] lg:px-[25px] xl:px-0 max-w-max mx-auto">
      <div
        class="flex flex-col items-center gap-3 md:flex-row md:flex-nowrap md:justify-between"
      >
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card lg:max-w-[320px] p-6 min-h-[257px] relative overflow-hidden rounded-[20px]"
        >
          <div class="relative z-10">
            <div class="mb-4" v-html="feature.icon"></div>
            <h3 class="feature-heading">{{ feature.title }}</h3>
            <p class="feature-description" v-html="feature.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Features Section Component
defineProps<{
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}>();
</script>

<style scoped>
.feature-card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 5px 5px 0 rgba(31, 38, 135, 0.2);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%);
  pointer-events: none;
  z-index: 0;
  border-radius: 20px;
}

.feature-icon-container {
  width: 48px;
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.icon-blob {
  position: absolute;
  width: 32px;
  height: 28px;
  background: #ebf1ff;
  border-radius: 50% 40% 60% 50%;
  top: 2px;
  left: 4px;
  opacity: 0.6;
  filter: blur(6px);
  transform: rotate(-15deg);
  z-index: 0;
}

.feature-icon {
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 1;
}

.feature-heading {
  font-family: "Funnel Display", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #1a1925;
  margin-bottom: 8px;
}

.feature-description {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: #51515e;
}
</style>
