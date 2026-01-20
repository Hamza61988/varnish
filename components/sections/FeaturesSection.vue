<template>
  <section class="  ">
    <div class="">
      <div
        class="flex flex-col items-center gap-3 md:flex-row md:flex-nowrap md:justify-between "
      >
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card group bg-white relative overflow-hidden"
        >
          <!-- Card Background - bgcard.svg -->
          <div
            class="absolute hidden group-hover:block"
            style="
              width: 148px;
              height: 148px;
              top: 8px;
              right: 26px;
              opacity: 1;
              border: 0.8px solid;
              border-image-source: radial-gradient(
                81.86% 81.86% at 100% 100%,
                rgba(26, 25, 37, 0.12) 0%,
                rgba(26, 25, 37, 0) 77.02%
              );
              border-image-slice: 1;
              background-image: url('/images/about/bgcard.svg');
              background-repeat: no-repeat;
              background-size: contain;
              border: none;
            "
          ></div>
          <div class="relative lg:max-w-[253px] max-w-[217px] z-10 pl-[24px]">
            <div
              class="mb-4 relative"
              style="padding-top: 4.67px; padding-left: 2.33px"
            >
              <!-- Icon Background - bgcardicon.svg -->
              <div
                class="absolute -top-2 -left-2 w-8 h-8"
                style="
                  background-image: url('/images/about/bgcardicon.svg');
                  background-repeat: no-repeat;
                  background-size: contain;
                  z-index: -10;
                  border: none;
                "
              ></div>
              <!-- Feature Icon -->
              <div v-html="feature.icon"></div>
            </div>
            <div class="max-w-[220px]">
            <h3 class="feature-heading">{{ feature.title }}</h3>
            <p class="feature-description ">
              {{ feature.description }}

            </p>
            </div>
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
  }[]
}>()
</script>

<style scoped>
.feature-card {
  border: 0.8px solid rgba(26, 25, 37, 0.12);
  border-radius: 20px;
  height: 246px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
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
