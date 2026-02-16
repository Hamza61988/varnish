<template>
  <section class="" v-if="feature">
    <div class="feature-card">
      <div class="relative z-10 feature-content">
        <div class="feature-icon-wrapper">
          <img :src="iconPath" alt="" class="feature-icon" />
        </div>
        <h3 class="feature-heading">{{ feature.title }}</h3>
        <p class="feature-description" v-html="feature.description"></p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Features Section Component
const props = defineProps<{
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}>();

const feature = computed(() => props.features && props.features.length > 0 ? props.features[0] : null);

const iconPath = computed(() => {
  if (!feature.value) return '/icons/toolcard1icon.svg';
  
  // Map titles to icon paths
  const iconMap: Record<string, string> = {
    'Website Speed Test': '/icons/toolcard1icon.svg',
    'Performance Test': '/icons/toolcard2icon.svg',
    'HTTP Header Checker': '/icons/toolcard3icon.svg',
    'HTTP/2 Test': '/icons/toolcard4icon.svg',
    'Brotli Test': '/icons/toolcard5icon.svg',
    'IP Location Finder': '/icons/toolcard6icon.svg',
    'DNS Checker': '/icons/toolcard7icon.svg',
    'Ping Test': '/icons/toolcard8icon.svg',
    'Ping IPv6 Test': '/icons/toolcard9icon.svg',
    'Traceroute Test': '/icons/toolcard10icon.svg',
    'BGP Looking Glass': '/icons/toolcard11icon.svg',
    'Certificate Checker': '/icons/toolcard12icon.svg',
    'Certificate Chain Composer': '/icons/toolcard13icon.svg',
    'SHA256 Generator': '/icons/toolcard14icon.svg',
    'SSL FREAK Test': '/icons/toolcard15icon.svg',
    'TLS Logjam Test': '/icons/toolcard16icon.svg',
    'Epoch Converter': '/icons/toolcard17icon.svg',
    'Knowledge base': '/icons/toolcard18icon.svg',
  };
  
  return iconMap[feature.value.title] || '/icons/toolcard1icon.svg';
});
</script>

<style scoped>
.feature-card {
  background: var(--Background-Light, #FFFFFF);
  border: 1px solid var(--Border-Secondary, #EEEEF0);
  border-radius: 20px;
  height: 210px;
  width: 100%;
  position: relative;
}


.feature-card::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 190px;
  width: 148px;
  height: 148px;
  background-image: url('/icons/BG.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 0;
  opacity: 1;
}

.feature-content {
  width: 190px;
  padding-top: 23px;
  padding-left: 24px;
  padding-bottom: 43px;
}

.feature-icon-wrapper {
  position: relative;
  margin-bottom: 20px;
  display: inline-block;
}

.feature-icon-bg {
  position: absolute;
  top: -25.67px;
  left: -25.67px;
  width: 46.67px;
  height: 46.67px;
  z-index: 0;
  opacity: 1;
  border-radius: 4.67px;
  background-color: var(--Background-Secondary, #EEEEF0);
}

.feature-icon-wrapper > div {
  position: relative;
  z-index: 1;
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
  width: 34px;
  height: 32px;
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
