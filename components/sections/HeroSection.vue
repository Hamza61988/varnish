<template>
  <div class="min-h-screen hero-section">
    <!-- Split Layout: Landing Page (Left) + Dashboard Preview (Right) -->
    <div class="flex flex-col lg:flex-row hero-container">
      <!-- Left Section: Landing Page -->
      <div class="flex-1 justify-center items-center hero-left-section">
        <div class="max-w-2xl mx-auto">
          <!-- Top Badge -->
          <div class="mb-4 sm:mb-5 md:mb-6">
            <button
              class="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 sm:h-4 sm:w-4"
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
            </button>
          </div>

          <!-- Headline Section -->
          <div class="mb-6 sm:mb-7 md:mb-8">
            <h1
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4"
            >
              <span>Content Delivery,</span>
              <span class="block hero-headline-line-2">
                Simplified.
                <span class="hero-logo-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="logo-icon-svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="4"
                      fill="#1A1925"
                    />
                    <path
                      d="M8 16L16 8M16 8H10M16 8V14"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </div>

          <!-- Description -->
          <p class="hero-description mb-6 sm:mb-7 md:mb-8">
            KeyCDN is a high performance content delivery network that has been
            built for the future. It only takes a few minutes to start
            delivering content to your users at a blazing fast speed.
          </p>

          <!-- Input Form -->
          <div class="mb-5 sm:mb-6">
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <!-- Email Input -->
              <div class="flex-1 relative">
                <div class="absolute left-3 sm:left-4 top-[18px] -translate-y-1/2">
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
                />
              </div>
              <!-- Website Input -->
              <div class="flex-1 relative">
                <div class="absolute left-3 sm:left-4 top-[18px] -translate-y-1/2">
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Website url"
                  class="hero-input w-full pl-10 sm:pl-12 pr-3 sm:pr-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                />
              </div>
              <!-- Get Started Button -->
              <button
                class="hero-button px-6 sm:px-8 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap w-full sm:w-auto"
              >
                Get Started
              </button>
            </div>
            <p class="flex no-credits-text mt-2 sm:mt-3">No Credits Required</p>
          </div>

          <!-- Statistics Section -->
          <div class="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12">
            <div class="flex items-center space-x-2">
              <span class="stat-value">2.400</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="star-icon"
                viewBox="0 0 24 24"
              >
                <defs>
                  <filter id="starGlow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                  fill="#1F62FF"
                  filter="url(#starGlow)"
                />
              </svg>
              <span class="stat-label">Active Users</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="stat-value">135,949</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="star-icon"
                viewBox="0 0 24 24"
              >
                <defs>
                  <filter id="starGlow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                  fill="#1F62FF"
                  filter="url(#starGlow)"
                />
              </svg>
              <span class="stat-label">Zones Deployed</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="stat-value">98%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="star-icon"
                viewBox="0 0 24 24"
              >
                <defs>
                  <filter id="starGlow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                  fill="#1F62FF"
                  filter="url(#starGlow)"
                />
              </svg>
              <span class="stat-label">Hit Ratio</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Section: Dashboard Preview Panel -->
      <div class="w-full lg:w-[40%] mt-6 sm:mt-8 lg:mt-0 hero-image-section">
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
// Hero Section Component
</script>

<style scoped>
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
