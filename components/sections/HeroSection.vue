<template>
  <div class="min-h-screen hero-section">
    <!-- Split Layout: Landing Page (Left) + Dashboard Preview (Right) -->
    <div class="flex flex-col lg:flex-row hero-container">
      <!-- Left Section: Landing Page -->
      <div
        class="flex-1 justify-center items-center hero-left-section order-1 lg:order-1"
      >
        <div class="max-w-2xl mx-auto">
          <!-- Top Badge -->
          <div class="mb-4 sm:mb-5 md:mb-6">
            <div
            style="    padding-top: 4px;
    padding-right: 12px;
    padding-bottom: 4px;
    padding-left: 8px;
    box-shadow: 0 3px 3px -1.5px #07011308, 0 2px 2px -1px #07011308, 0 1px 1px -.5px #07011308, 0 .5px .5px #07011308;
"
              class="no-pointer inline-flex items-center space-x-2  sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700  transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 sm:h-4 sm:w-4"
                style="color: #a3a3ae; fill: #a3a3ae"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#A3A3AE"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>Empower Innovation!</span>
            </div>
          </div>

          <!-- Headline Section -->
          <div class="mb-6 sm:mb-7 md:mb-8">
          <h1
  style="font-family: 'Funnel Display', sans-serif;
  font-weight: 500; line-height: 1.2
;"
  class="text-[3.5rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 sm:mb-4"
>
  <span>Content Delivery,</span>
  <span class="block hero-headline-line-2">
    Simplified.
    <img
      src="/images/Company_logo.svg"
      alt="BEST CDN AWARD"
      class="w-full h-auto lg:h-full object-cover"
    />
  </span>
</h1>

          </div>

          <!-- Description -->
          <p class="hero-description mb-6 sm:mb-7 md:mb-8">
            Varnish is a high performance content delivery network that has been
            built for the future. It only takes a few minutes to start
            delivering content to your users at a blazing fast speed.
          </p>

          <!-- Input Form -->
          <div class="mb-5 sm:mb-6">
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <!-- Email Input -->
              <div class="flex-1 relative">
                <div
                  class="absolute left-3 sm:left-4 top-[18px] -translate-y-1/2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Your email address.."
                  class="hero-input w-full pl-10 sm:pl-12 pr-3 sm:pr-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  style="
                    box-shadow: 0px 0.5px 0.5px 0px #07011308,
                      0px 1px 1px -0.5px #07011308, 0px 2px 2px -1px #07011308,
                      0px 3px 3px -1.5px #07011308, 0px 0px 0px 1px #1a192514;
                  "
                />
              </div>
              <!-- Website Input -->
              <div class="flex-1 relative">
                <div
                  class="absolute left-3 sm:left-4 top-[18px] -translate-y-1/2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="2" y="3" width="20" height="18" rx="2" />
                    <rect x="4" y="6" width="16" height="12" rx="1" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Website url"
                  class="hero-input w-full pl-10 sm:pl-12 pr-3 sm:pr-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  style="
                    box-shadow: 0px 0.5px 0.5px 0px #07011308,
                      0px 1px 1px -0.5px #07011308, 0px 2px 2px -1px #07011308,
                      0px 3px 3px -1.5px #07011308, 0px 0px 0px 1px #1a192514;
                  "
                />
              </div>
              <!-- Get Started Button -->
              <button class="fancy-button">Get Started</button>
            </div>
            <p class="flex no-credits-text mt-2 sm:mt-3">
              No Credit Card Required
            </p>
          </div>

       <!-- Statistics Section -->
      <div class="flex flex-wrap items-center md:justify-start justify-between gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12">
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-2"
    >
      <span class="stat-value text-lg sm:text-base md:text-lg">
        {{ stat.display.value }}{{ stat.isPercent ? '%' : '' }}
      </span>
      <svg
        class="hidden md:block w-5 h-5 mt-1 sm:mt-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2 L13.76 7.2 L19.51 4.49 L16.2 9.24 L21 12 L16.2 14.76 L19.51 19.51 L13.76 16.8 L12 22 L10.24 16.8 L4.49 19.51 L7.8 14.76 L3 12 L7.8 9.24 L4.49 4.49 L10.24 7.2 Z"
          fill="#1F62FF"
        />
      </svg>
      <span class="stat-label text-sm mt-1 sm:mt-0 sm:ml-2 text-center sm:text-left">
        {{ stat.label }}
      </span>
    </div>
      </div>
      </div>
      </div>
      <!-- Right Section: Dashboard Preview Panel -->
      <div
        class="w-full lg:w-[40%] mt-6 sm:mt-8 pl-[5%] lg:pl-0 lg:mt-0 hero-image-section order-2 lg:order-2"
      >
        <img
          src="/images/Varnish.svg"
          alt="BEST CDN AWARD"
          class="w-full h-auto lg:h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = [
  { label: 'Active Users', value: 2400, display: ref(0) },
  { label: 'Zones Deployed', value: 135949, display: ref(0) },
  { label: 'Hit Ratio', value: 98, display: ref(0), isPercent: true },
]

const animateValue = (stat: typeof stats[0], duration = 1500) => {
  const start = 0
  const end = stat.value
  const startTime = performance.now()

  const step = (currentTime: number) => {
    const progress = Math.min((currentTime - startTime) / duration, 1)
    stat.display.value = Math.floor(progress * end)
    if (progress < 1) requestAnimationFrame(step)
    else if (stat.isPercent) stat.display.value = end
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  if (window.innerWidth >= 768) {
    stats.forEach(stat => animateValue(stat))
  } else {
    stats.forEach(stat => (stat.display.value = stat.value))
  }
})
</script>


<style scoped>
.fancy-button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 37px;
  padding: 8px 14px;

  background-color: #1f62ff;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;

  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.084px;
  color: white;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;

  cursor: pointer;
  user-select: none;

  /* Fixed shadow: darkest -> softest */
  box-shadow: 0px 1px 1.5px -0.5px rgba(0, 0, 0, 0.14),
    0px 2px 4px -1px rgba(0, 0, 0, 0.12), 0px 4px 8px -4px rgba(0, 0, 0, 0.1),
    0px 8px 12px -4px rgba(0, 0, 0, 0.08),
    inset 0px 1px 3px rgba(255, 255, 255, 0.12),
    inset 0px 0.5px 1px rgba(255, 255, 255, 0.08);

  transition: all 0.3s ease;
}
.fancy-button:hover {
  background-color: #1b56e0;
}

.hero-section {
  background-color: #f7f7f8;
  background-image: radial-gradient(
    circle,
    rgba(163, 163, 174, 0.3) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
  background-position: 0 0;
  position: relative;
}

.hero-container {
  padding: 2% 0;
}

@media (min-width: 1024px) {
  .hero-container {
    padding: 3% 0;
  }
}

.hero-left-section {
  padding: 2% 4%;
  margin: 2% 0;
}

@media (min-width: 640px) {
  .hero-left-section {
    padding: 2.5% 5%;
  }
}

@media (min-width: 1024px) {
  .hero-left-section {
    padding: 3% 2.5%;
    margin: 3% 0;
  }
}

.hero-input {
  height: 36px;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: #1a1925;
}

@media (min-width: 640px) {
  .hero-input {
    font-size: 13px;
  }
}

.hero-input::placeholder {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: #73737f;
}

@media (min-width: 640px) {
  .hero-input::placeholder {
    font-size: 13px;
  }
}

.hero-button {
  height: 36px;
  font-size: 13px;
}

.star-icon {
  filter: drop-shadow(0 0 2px rgba(31, 98, 255, 0.5));
}

.no-credits-text {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  letter-spacing: -0.006em;
  text-align: center;
  vertical-align: middle;
  color: #51515e;
}

.stat-label {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.006em;
  text-align: center;
  vertical-align: middle;
  color: #51515e;
}

@media (min-width: 640px) {
  .stat-label {
    font-size: 13px;
    line-height: 19px;
  }
}

@media (min-width: 768px) {
  .stat-label {
    font-size: 14px;
    line-height: 20px;
  }
}

.star-icon {
  width: 16px;
  height: 16px;
}

@media (min-width: 640px) {
  .star-icon {
    width: 18px;
    height: 18px;
  }
}

@media (min-width: 768px) {
  .star-icon {
    width: 20px;
    height: 20px;
  }
}

.hero-description {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.011em;
  color: #51515e;
}

@media (min-width: 640px) {
  .hero-description {
    font-size: 15px;
    line-height: 23px;
  }
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 16px;
    line-height: 24px;
  }
}

.hero-headline-line-2 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

@media (min-width: 640px) {
  .hero-headline-line-2 {
    gap: 10px;
  }
}

@media (min-width: 768px) {
  .hero-headline-line-2 {
    gap: 12px;
  }
}

.hero-logo-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.logo-icon-svg {
  width: 24px;
  height: 24px;
}

@media (min-width: 640px) {
  .logo-icon-svg {
    width: 32px;
    height: 32px;
  }
}

@media (min-width: 768px) {
  .logo-icon-svg {
    width: 40px;
    height: 40px;
  }
}

@media (min-width: 1024px) {
  .logo-icon-svg {
    width: 48px;
    height: 48px;
  }
}

.stat-value {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.011em;
  text-align: center;
  vertical-align: middle;
  color: #1a1925;
}

@media (min-width: 640px) {
  .stat-value {
    font-size: 15px;
    line-height: 23px;
  }
}

@media (min-width: 768px) {
  .stat-value {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
