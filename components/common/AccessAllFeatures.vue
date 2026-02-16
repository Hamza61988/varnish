<template>
  <section class="relative overflow-hidden bg-white w-full sm:min-h-[450px] md:min-h-[567px] lg:min-h-[567px]"
    style="background-color: #f7f7f8;">
    <div class="absolute hidden bottom-0 right-0 pointer-events-none md:block" style="
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        z-index: 1;
        overflow: visible;
      ">
      <img 
        :src="'/images/toolsbgline.svg'" 
        alt="Background decorative line" 
        style="
          width: auto;
          height: auto;
          max-width: none;
          max-height: none;
          object-fit: contain;
          object-position: right bottom;
          display: block;
          position: absolute;
          bottom: 0;
          right: 0;
        "
        @error="handleImageError"
        @load="handleImageLoad"
        loading="eager"
      />
    </div>

    <div class="absolute hidden md:block pointer-events-none" style="
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 392px;
        height: 104px;
      ">
      <img src="/images/toolsbgboxs.svg" alt="Background decorative boxes" style="
          width: 100%;
          height: 100%;
          object-fit: contain;
        " />
    </div>


    <div class="m-auto relative z-10 w-full max-w-4xl lg:px-0 px-4 py-10 sm:py-10 md:py-20">
      <div class="cta-card-wrapper" style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        ">
        <div class="bg-[#FFFFFF] text-center relative cta-card" style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            position: relative;
            padding: 24px;
          ">
          <div class="relative w-full flex flex-col items-center" style="padding-top: 0;">
            <!-- Lets Get Started label with icon -->
            <div class="absolute flex items-center lets-get-started-button" style="
              z-index: 10;
              height: 24px;
              gap: 2px;
              border-radius: 999px;
              padding-top: 4px;
              padding-right: 8px;
              padding-bottom: 4px;
              padding-left: 8px;
              background: #FFFFFFE5;
              opacity: 1;
              top: 0;
              left: 138px;
              box-shadow: 
                0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            ">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0">
                <path d="M9.33333 1.33333L3.33333 9.33333H8L6.66667 14.6667L12.6667 6.66667H8L9.33333 1.33333Z"
                  fill="#1A1925" fill-opacity="0.6" />
              </svg>
              <span style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0%;
                text-align: center;
                color: #1A1925;
              ">
                Lets Get Started
              </span>
            </div>

            <h2 class="relative cta-heading text-center" id="access-heading" style="margin-top: 36px;">
              Access All Features
            </h2>
          </div>

          <p class="relative cta-subtitle">
            Get started with a free 14 day trial, no credit card required.
          </p>

          <div
            class="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 cta-metrics">
            <div v-for="(stat, index) in stats" :key="index" class="flex items-center gap-1">
              <div class="relative flex justify-end">
                <span class="cta-metric-text opacity-0 select-none">
                  {{ stat.isMoney ? "$" : "" }}{{ stat.value
                  }}{{ stat.isMoney && stat.value % 1 !== 0 ? "M" : "" }}
                </span>

                <span class="cta-metric-text absolute right-0 top-0 tabular-nums">
                  {{ stat.isMoney ? "$" : "" }}{{ stat.display.value
                  }}{{ stat.isMoney && stat.value % 1 !== 0 ? "M" : "" }}
                </span>
              </div>

              <span class="cta-metric-text">{{ stat.label }}</span>
              <span v-if="index < stats.length - 1"
                class="hidden sm:inline text-[#1a1925] text-xs sm:text-sm md:text-base">•</span>
            </div>
          </div>

          <div class="relative">
            <Button name="Get Started ~ Free" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "~/components/common/Button.vue";
import { ref, onMounted } from "vue";

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  console.error('Image failed to load:', img.src);
  // Force reload
  const originalSrc = img.src;
  img.src = '';
  setTimeout(() => {
    img.src = originalSrc;
  }, 100);
};

const handleImageLoad = (event: Event) => {
  const img = event.target as HTMLImageElement;
  console.log('Image loaded successfully:', img.src);
};

const stats = [
  { label: "Employees", value: 120, display: ref(0) },
  { label: "Raised", value: 31.5, isMoney: true, display: ref(0) },
  { label: "Years old", value: 7, display: ref(0) },
];

const hasAnimated = ref(false);

const DESKTOP_WIDTH = 1024;

const animateNumber = (stat: any, duration = 2000) => {
  const start = 0;
  const end = stat.value;
  const startTime = performance.now();

  const step = (currentTime: number) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    stat.display.value = stat.isMoney
      ? parseFloat((end * progress).toFixed(1))
      : Math.floor(end * progress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

onMounted(() => {
  if (window.innerWidth < DESKTOP_WIDTH) {
    stats.forEach((stat) => {
      stat.display.value = stat.value;
    });
    return;
  }

  const section = document.querySelector(".cta-card");
  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          stats.forEach((stat) => animateNumber(stat));
          hasAnimated.value = true;
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 },
  );

  observer.observe(section);

});
</script>

<style scoped>
/* CTA Card Wrapper with Gradient Border */
.cta-card-wrapper {
  background: linear-gradient(180deg, #E1442A 25%, #FDB415 50%, #069857 75%, #396FB6 100%);
  border-radius: 36px;
  padding: 1px;
  opacity: 1;
  transform: rotate(0deg);
}

.cta-card {
  height: 356px;
  border-radius: 36px;
  gap: 30px;
  background: #FFFFFF;
  border: none;
}

@media (min-width: 640px) {
  .cta-card {
    width: auto;
    height: 356px;
    padding: 5%;
    gap: 20px;
  }
}

@media (min-width: 768px) {
  .cta-card {
    height: 356px;
  }
}

@media (min-width: 1024px) {
  .cta-card {
    height: 356px;
  }
}

/* Mobile First Styles */
.cta-heading {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.04em;
  text-align: center;
  text-transform: capitalize;
  color: #1A1925;
  opacity: 1;
}

@media (min-width: 640px) {
  .cta-heading {
    font-size: 48px;
    line-height: 56px;
  }
}

@media (min-width: 768px) {
  .cta-heading {
    font-size: 48px;
    line-height: 56px;
  }
}

@media (min-width: 1024px) {
  .cta-heading {
    font-size: 48px;
    line-height: 56px;
  }
}

@media (min-width: 1280px) {
  .cta-heading {
    font-size: 48px;
    line-height: 56px;
  }
}

.cta-subtitle {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.011em;
  text-align: center;
  color: #878699;
  padding-left: 40px;
  padding-right: 40px;
}

@media (min-width: 640px) {
  .cta-subtitle {
    font-size: 16px;
    line-height: 24px;
    padding-left: 0;
    padding-right: 0;
  }
}

@media (min-width: 768px) {
  .cta-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
}

@media (min-width: 1024px) {
  .cta-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
}

@media (min-width: 1280px) {
  .cta-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
}

.cta-metric-text {
  font-family: "Funnel Display", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #1A1925;
  opacity: 1;
}

@media (min-width: 640px) {
  .cta-metric-text {
    font-size: 12px;
    line-height: 18px;
  }
}

@media (min-width: 768px) {
  .cta-metric-text {
    font-size: 16px;
    line-height: 22px;
  }
}

@media (min-width: 1024px) {
  .cta-metric-text {
    font-size: 18px;
    line-height: 24px;
  }
}

@media (min-width: 1280px) {
  .cta-metric-text {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
